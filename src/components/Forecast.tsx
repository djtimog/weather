"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UnitTemperature from "@/components/UnitTemperature";
import { fetchForecast } from "@/lib/api";
import { GetWeatherIcon } from "./WeatherIcon";
import { Skeleton } from "./ui/skeleton";

type ForecastDay = {
  day: string;
  date: string;
  tempMax: number;
  tempMin: number;
  icon: React.ReactNode;
};
export default function ForecastCard({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const [forecastData, setForecastData] = useState<ForecastDay[] | null>(null);

  useEffect(() => {
    async function fetchDailyForecast() {
      const data = await fetchForecast(lat, lon);

      const mappedData = data.daily.time.map((date, index) => ({
        day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
        date: new Date(date).toLocaleDateString("en-US", {
          day: "2-digit",
          month: "short",
        }),
        tempMax: Math.round(data.daily.temperature_2m_max[index]),
        tempMin: Math.round(data.daily.temperature_2m_min[index]),
        icon: <GetWeatherIcon code={data.daily.weathercode[index]} />,
      }));

      setForecastData(mappedData);
    }

    fetchDailyForecast();
  }, [lat, lon]);

  if (!forecastData)
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-3">Daily Forecast</h2>
        <div className="px-12 py-4">
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                >
                  <div className="p-1">
                    <Card className="border-0 rounded-2xl text-center p-3">
                      <CardContent className="flex flex-col items-center gap-3 p-0">
                        <Skeleton className="h-4 w-10 rounded" />
                        <Skeleton className="h-6 w-6 rounded-full" />{" "}
                        <Skeleton className="h-4 w-8 rounded" />{" "}
                        <Skeleton className="h-4 w-8 rounded" />{" "}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    );

  const dateAndSuffix = (date: string) => {
    const lastNumber = date.slice(-1);
    let suffix = "th";
    if (lastNumber === "1" && date !== "11") suffix = "st";
    if (lastNumber === "2" && date !== "12") suffix = "nd";
    if (lastNumber === "3" && date !== "13") suffix = "rd";

    return `${date}${suffix}`;
  };
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-3">Daily Forecast</h2>
      <div className="px-12 py-2">
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {forecastData.map((day, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="p-1">
                  <Card className="border-0 rounded-2xl text-center p-3">
                    <CardContent className="flex flex-col items-center gap-2 p-0">
                      <span className="font-medium">{day.day}</span>

                      {day.icon}
                      <UnitTemperature
                        temperature={day.tempMax}
                        textClassName="text-sm"
                        degreeClassName="text-xs p-0.5"
                      />
                      <UnitTemperature
                        temperature={day.tempMin}
                        textClassName="text-sm"
                        className="text-gray-400"
                        degreeClassName="text-xs p-0.5"
                      />
                      <span className="text-sm text-gray-500">
                        {dateAndSuffix(day.date.split(" ")[1])}{" "}
                        {day.date.split(" ")[0]}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
