"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetWeatherIcon } from "./WeatherIcon";
import UnitTemperature from "./UnitTemperature";
import { fetchHourlyForecast } from "@/lib/api";

type HourlyItem = {
  time: string;
  temp: number;
  code: number;
};

type HourlyData = Record<string, HourlyItem[]>;

export default function HourlyForecastCard({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const [hourlyData, setHourlyData] = useState<HourlyData>({});
  const [selectedDay, setSelectedDay] = useState<string>("");

  useEffect(() => {
    async function fetchHourly() {
      const data = await fetchHourlyForecast(lat, lon);

      const { time, temperature_2m, weathercode } = data.hourly;

      // Group hours by day (e.g. Monday → [{time, temp, code}, ...])
      const grouped: HourlyData = {};
      time.forEach((t: string, i: number) => {
        const date = new Date(t);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const hour = date.toLocaleTimeString("en-US", {
          hour: "numeric",
          hour12: true,
        });

        if (!grouped[dayName]) grouped[dayName] = [];
        grouped[dayName].push({
          time: hour,
          temp: Math.round(temperature_2m[i]),
          code: weathercode[i],
        });
      });

      setHourlyData(grouped);
      const firstDay = Object.keys(grouped)[0];
      setSelectedDay(firstDay);
    }

    fetchHourly();
  }, [lat, lon]);

  if (Object.keys(hourlyData).length === 0) {
    return (
      <div className="bg-secondary p-5 rounded-2xl mx-auto border shadow-2xl">
        <h2 className="text-lg font-semibold mb-3">Hourly Forecast</h2>
        <p className="text-sm opacity-75">Loading hourly data...</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary p-5 rounded-2xl mx-auto border shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Hourly Forecast</h2>
        <Select
          onValueChange={(val) => setSelectedDay(val)}
          defaultValue={selectedDay}
        >
          <SelectTrigger className="border-0">
            <SelectValue placeholder="Select day" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(hourlyData).map((day) => (
              <SelectItem key={day} value={day}>
                {day}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2 h-full max-h-screen overflow-y-auto pr-1">
        {hourlyData[selectedDay]?.map((hour, i) => (
          <Card key={i} className="border-0 rounded-xl">
            <CardContent className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <GetWeatherIcon code={hour.code} className="w-5 h-5" />
                <span>{hour.time}</span>
              </div>

              <UnitTemperature
                temperature={hour.temp}
                textClassName="text-md"
                className="text-gray-400"
                degreeClassName="text-xs p-0.5"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
