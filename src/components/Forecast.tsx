"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sun, CloudRain, Cloud, CloudLightning, CloudFog } from "lucide-react";

const forecastData = [
  { day: "Tue", tempMax: 20, tempMin: 14, icon: <CloudRain className="w-6 h-6" /> },
  { day: "Wed", tempMax: 21, tempMin: 15, icon: <CloudRain className="w-6 h-6" /> },
  { day: "Thu", tempMax: 24, tempMin: 14, icon: <Sun className="w-6 h-6 text-yellow-400" /> },
  { day: "Fri", tempMax: 25, tempMin: 13, icon: <Cloud className="w-6 h-6" /> },
  { day: "Sat", tempMax: 21, tempMin: 15, icon: <CloudLightning className="w-6 h-6 text-yellow-400" /> },
  { day: "Sun", tempMax: 25, tempMin: 16, icon: <CloudRain className="w-6 h-6" /> },
  { day: "Mon", tempMax: 24, tempMin: 15, icon: <CloudFog className="w-6 h-6" /> },
];

export default function ForecastCard() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-3">Daily Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {forecastData.map((day, i) => (
          <Card
            key={i}
            className="border-0 rounded-2xl text-center p-3"
          >
            <CardContent className="flex flex-col items-center gap-2 p-0">
              <span className="font-medium">{day.day}</span>
              {day.icon}
              <span className="text-sm">{day.tempMax}°</span>
              <span className="text-sm text-gray-400">{day.tempMin}°</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
