"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CloudSun, Droplets, Wind } from "lucide-react"

type WeatherCardProps = {
  city: string
  temperature: number
  description: string
  humidity: number
  wind: number
  date: Date
}

export default function WeatherCard({
  city,
  temperature,
  description,
  humidity,
  wind,
  date
}: WeatherCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-6 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">{city}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-4xl font-semibold">
          <CloudSun className="w-10 h-10 text-yellow-500" />
          {temperature}°C
        </div>
        <p className="text-lg capitalize">{description}</p>
        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-blue-500" />
            <span>{humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-gray-500" />
            <span>{wind} km/h</span>
          </div>
          
        </div>
      </CardContent>
    </Card>
  )
}
