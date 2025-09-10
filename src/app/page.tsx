"use client";

import { useState } from "react";

import Forecast from "@/components/Forecast";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import HourlyForecastCard from "@/components/HourlyForecast";

export default function Home() {
  const [city, setCity] = useState("");

  const handleSearch = (query: string) => {
    setCity(query);
  };

  const fakeWeather = {
    city: "Berlin",
    country: "Germany",
    date: "Tuesday, Aug 5, 2025",
    temperature: 20,
    feelsLike: 18,
    humidity: 46,
    wind: 14,
    precipitation: 0,
    description: "clear sky",
  };

  return (
    <>
      <header className="shadow-2xl sticky top-0 bg-inherit z-50">
        <Header />
      </header>
      <main className="min-h-screen p-10 mx-auto">
        <section>
          <h1 className="text-3xl font-bold mb-6 text-center">
            How&apos;s the sky🌦️ looking today?
          </h1>
          <SearchBar onSearch={setCity} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            <div className="space-y-10 col-span-2">
              {city && (
                <WeatherCard
                  city={fakeWeather.city}
                  country={fakeWeather.country}
                  date={fakeWeather.date}
                  temperature={fakeWeather.temperature}
                  feelsLike={fakeWeather.feelsLike}
                  humidity={fakeWeather.humidity}
                  wind={fakeWeather.wind}
                  precipitation={fakeWeather.precipitation}
                  description={fakeWeather.description}
                />
              )}
              <Forecast />
            </div>
            <div>
              <HourlyForecastCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
