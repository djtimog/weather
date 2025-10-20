"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type SearchBarProps = {
  onSearch: (city: string, lat?: number, lon?: number) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          query
        )}&count=1`
      );

      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const { name, latitude, longitude } = data.results[0];
      onSearch(name, latitude, longitude);

      setLoading(false);
      setQuery("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 max-w-md mx-auto"
    >
      <Input
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-xl px-4 py-2"
      />
      <Button
        type="submit"
        disabled={loading}
        className="rounded-xl flex items-center gap-1"
      >
        <Search className="w-4 h-4" />
        {loading ? "Searching..." : "Search"}
      </Button>

      {error && (
        <p className="text-sm text-red-500 absolute mt-12 text-center w-full">
          {error}
        </p>
      )}
    </form>
  );
}
