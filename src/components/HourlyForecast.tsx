"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sun, Cloud, CloudRain, CloudFog, LucideIcon } from "lucide-react";
import { useState } from "react";

type HourlyItem = {
  time: string;
  temp: number;
  icon: LucideIcon;
};

type HourlyData = Record<string, HourlyItem[]>;

const hourlyData: HourlyData = {
  Tuesday: [
    { time: "3 PM", temp: 20, icon: Cloud },
    { time: "4 PM", temp: 20, icon: Cloud },
    { time: "5 PM", temp: 20, icon: Sun },
    { time: "6 PM", temp: 19, icon: Cloud },
    { time: "7 PM", temp: 18, icon: CloudRain },
    { time: "8 PM", temp: 18, icon: CloudFog },
    { time: "9 PM", temp: 17, icon: CloudRain },
    { time: "10 PM", temp: 17, icon: Cloud },
  ],
  Wednesday: [
    { time: "3 PM", temp: 22, icon: Sun },
    { time: "4 PM", temp: 21, icon: Sun },
    { time: "5 PM", temp: 20, icon: Cloud },
    { time: "6 PM", temp: 19, icon: CloudRain },
  ],
};

export default function HourlyForecastCard() {
  const [selectedDay, setSelectedDay] =
    useState<keyof typeof hourlyData>("Tuesday");

  return (
    <div className="bg-secondary p-5 rounded-2xl mx-auto border shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Hourly Forecast</h2>
        <Select
          onValueChange={(val) =>
            setSelectedDay(val as keyof typeof hourlyData)
          }
          defaultValue={selectedDay}
        >
          <SelectTrigger className=" border-0 ">
            <SelectValue placeholder="Select day" />
          </SelectTrigger>
          <SelectContent className="">
            {Object.keys(hourlyData).map((day) => (
              <SelectItem key={day} value={day}>
                {day}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        {hourlyData[selectedDay].map((hour: HourlyItem, i: number) => (
          <Card key={i} className="border-0 rounded-xl">
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <hour.icon
                  className={`w-5 h-5 ${
                    hour.icon === Sun && "text-yellow-400"
                  }`}
                />

                <span>{hour.time}</span>
              </div>
              <span>{hour.temp}°</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
