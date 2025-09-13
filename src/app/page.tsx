"use client";

import Forecast from "@/components/Forecast";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import HourlyForecastCard from "@/components/HourlyForecast";
import { useEffect, useState } from "react";
import { fetchWeather, reverseGeocode } from "@/lib/api";
import WeatherCard from "@/components/WeatherCard";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [locationName, setLocationName] = useState<string>("");
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setDenied(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const [w, loc] = await Promise.all([
            fetchWeather(lat, lon),
            reverseGeocode(lat, lon),
          ]);
          setWeather(w);
          setLocationName(loc);
        } catch (err) {
          console.error(err);
        }
      },
      () => setDenied(true) // user denied location
    );
  }, []);

  if (denied) return <LandingPage />;

  if (!weather)
    return <p className="text-center text-white mt-10">Loading...</p>;

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
          {/* <SearchBar onSearch={setCity} /> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 p-10">
            <div className="space-y-10 col-span-2">
              {/* {city && (
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
              )} */}
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
