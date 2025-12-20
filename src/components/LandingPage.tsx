import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Snowfall from "react-snowfall";

type LandingPageProps = {
  onSearch: (city: string, lat?: number, lon?: number) => void;
};

export default function LandingPage({ onSearch }: LandingPageProps) {
  return (
    <div>
      <Snowfall color="white" speed={[0.5, 1]} opacity={[0.5, 1]} />

      <Image
        src={"/cloudy-weather.webp"}
        width={1000}
        height={500}
        alt="landping page image"
        className="w-full h-screen absolute -z-50 object-cover dark:brightness-75"
      />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">🌦 Welcome to Weather App</h1>
        <p className="mb-6">
          Enable location access for local weather, or search manually.
        </p>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}
