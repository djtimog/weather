"use client";

import Forecast from "@/components/Forecast";
import Header from "@/components/Header";
import HourlyForecastCard from "@/components/HourlyForecast";
import { useEffect, useState } from "react";
import LandingPage from "@/components/LandingPage";
import WeatherContainer from "@/components/WeatherContainer";
import { fetchLocationName } from "@/lib/api";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setDenied(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLat(latitude);
        setLon(longitude);

        try {
          const loc = await fetchLocationName(latitude, longitude);
          setCity(loc.city);
          setCountry(loc.country);
        } catch (err) {
          console.error(err);
          setCity("Unknown");
          setCountry("Unknown");
        }
      },
      () => setDenied(true)
    );
  }, []);

  if (denied || !lat || !lon || !city || !country) return <LandingPage />;

  const handleSearch = (query: string) => {
    setCity(query);
  };
  return (
    <>
      <Image
        src="/cloudy-weather.webp"
        width={1000}
        height={500}
        alt="Background image"
        className="fixed top-0 left-0 w-full h-full -z-50 object-cover brightness-75"
      />

      <header className="shadow-2xl sticky top-0 bg-inherit z-50">
        <Header />
      </header>

      <main className="min-h-screen mx-auto">
        <section>
          <div className="p-10 mb-10">
            <h1 className="text-4xl font-bold mb-15 text-center">
              How&apos;s the sky🌦️ looking today?
            </h1>
            <SearchBar onSearch={setCity} />
          </div>

          <div className="px-10 pb-10 bg-black rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 p-10">
              <div className="space-y-10 col-span-2">
                <WeatherContainer
                  lat={lat}
                  lon={lon}
                  city={city}
                  country={country}
                />
                <Forecast lat={lat} lon={lon} />
              </div>
              <div>
                <HourlyForecastCard lat={lat} lon={lon} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
