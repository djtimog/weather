"use client";

import { useState } from "react";

import Forecast from "@/components/Forecast";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";

export default function Home() {
  const [city, setCity] = useState("");

  const handleSearch = (query: string) => {
    setCity(query);
  };
  const fakeWeather = {
    temperature: 28,
    description: "clear sky",
    humidity: 60,
    wind: 12,
    date: new Date(),
  }

  return (
    <>
      <header className="shadow-2xl sticky top-0 bg-inherit">
        <Header />
      </header>
      <main className="min-h-screen p-6 container mx-auto">
        <section>
          <h1 className="text-3xl font-bold mb-6 text-center">
            How&apos;s the sky🌦️ looking today?
          </h1>
          <SearchBar onSearch={setCity} />

          <div className="mt-6 space-y-6">
            {city && (
        <WeatherCard
          city={city}
          temperature={fakeWeather.temperature}
          description={fakeWeather.description}
          humidity={fakeWeather.humidity}
          wind={fakeWeather.wind}
        />
      )}
            <Forecast />
          </div>
        </section>
      </main>
    </>
  );
}
