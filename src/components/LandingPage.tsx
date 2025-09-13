"use client";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function LandingPage() {
  const [city, setCity] = useState("");

  const handleSearch = (query: string) => {
    setCity(query);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">🌦 Welcome to Weather App</h1>
      <p className="mb-6">
        Enable location access for local weather, or search manually.
      </p>
      <SearchBar onSearch={setCity} />{" "}
    </div>
  );
}
