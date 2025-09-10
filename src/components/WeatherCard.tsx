"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Wind, CloudRain, ThermometerSun, Sun } from "lucide-react"

type WeatherCardProps = {
  city: string
  country: string
  date: string
  temperature: number
  feelsLike: number
  humidity: number
  wind: number
  precipitation: number
  description: string
}

export default function WeatherCard({
  city,
  country,
  date,
  temperature,
  feelsLike,
  humidity,
  wind,
  precipitation,
  description,
}: WeatherCardProps) {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">
      <Card className="shadow-xl rounded-2xl p-10">
        <CardHeader className="flex flex-col items-start">
          <CardTitle className="text-xl font-semibold">
            {city}, {country}
          </CardTitle>
          <p className="text-sm opacity-90">{date}</p>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-6xl font-bold">{temperature}°</p>
            <p className="capitalize text-lg opacity-90">{description}</p>
          </div>
          <Sun className="w-20 h-20 text-yellow-300" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <Card className="shadow-md rounded-xl">
          <CardContent className="flex flex-col items-center py-4">
            <ThermometerSun className="w-6 h-6 text-orange-500 mb-1" />
            <p className="text-sm">Feels Like</p>
            <p className="text-lg font-semibold">{feelsLike}°</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-xl">
          <CardContent className="flex flex-col items-center py-4">
            <Droplets className="w-6 h-6 text-blue-500 mb-1" />
            <p className="text-sm">Humidity</p>
            <p className="text-lg font-semibold">{humidity}%</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-xl">
          <CardContent className="flex flex-col items-center py-4">
            <Wind className="w-6 h-6 text-gray-500 mb-1" />
            <p className="text-sm">Wind</p>
            <p className="text-lg font-semibold">{wind} km/h</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-xl">
          <CardContent className="flex flex-col items-center py-4">
            <CloudRain className="w-6 h-6 text-indigo-500 mb-1" />
            <p className="text-sm">Precipitation</p>
            <p className="text-lg font-semibold">{precipitation} mm</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
