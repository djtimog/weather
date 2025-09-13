"use client";

import { useEffect, useState } from "react";

export default function LocationFetcher() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="p-4 text-white">
      {location ? (
        <p>
          🌍 Your location: {location.lat.toFixed(2)}, {location.lon.toFixed(2)}
        </p>
      ) : error ? (
        <p>⚠️ {error}</p>
      ) : (
        <p>📍 Fetching location...</p>
      )}
    </div>
  );
}
