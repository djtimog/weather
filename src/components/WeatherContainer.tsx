"use client";

import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { fetchWeather } from "@/lib/api";
import { WeatherResponse } from "@/lib/type";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  lat: number;
  lon: number;
  city: string;
  country: string;
};

export default function WeatherContainer({ lat, lon, city, country }: Props) {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather(lat, lon)
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [lat, lon]);

  if (loading)
    return (
      <div className="w-full max-w-5xl mx-auto space-y-10">
        <Card className="shadow-xl rounded-2xl p-10">
          <CardHeader className="flex flex-col items-start space-y-2">
            <CardTitle>
              <Skeleton className="h-6 w-40 rounded" />
            </CardTitle>
            <Skeleton className="h-4 w-24 rounded" />
          </CardHeader>

          <CardContent className="flex items-center justify-between mt-2">
            <div className="flex flex-col space-y-2">
              <Skeleton className="h-12 w-32 rounded" />

              <Skeleton className="h-4 w-20 rounded" />
            </div>

            <Skeleton className="h-20 w-20 rounded-full" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="shadow-md rounded-xl">
              <CardContent className="flex flex-col items-center py-4 space-y-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-4 w-16 rounded" />
                <Skeleton className="h-5 w-10 rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );

  if (!data) return <p>Could not load weather</p>;

  const current = data.current_weather;
  const hourly = data.hourly;

  return (
    <WeatherCard
      city={city}
      country={country}
      date={new Date(current.time).toLocaleString()}
      temperature={current.temperature}
      feelsLike={hourly.apparent_temperature[0]}
      humidity={hourly.relativehumidity_2m[0]}
      wind={current.windspeed}
      precipitation={hourly.precipitation[0]}
      weathercode={current.weathercode}
    />
  );
}
