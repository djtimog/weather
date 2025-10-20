import {
  WeatherResponse,
  ForecastResponse,
  ForecastHourlyResponse,
} from "./type";

export async function fetchWeather(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=apparent_temperature,relativehumidity_2m,precipitation&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");

  return res.json();
}

export async function fetchForecast(
  lat: number,
  lon: number
): Promise<ForecastResponse> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=16&past_days=7`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");

  return res.json();
}

export async function fetchHourlyForecast(
  lat: number,
  lon: number
): Promise<ForecastHourlyResponse> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");

  return res.json();
}

export async function fetchLocationName(
  lat: number,
  lon: number
): Promise<{ city: string; country: string }> {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`
  );

  if (!res.ok) throw new Error("Failed to fetch location name");
  const data = await res.json();

  return {
    city:
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.state ||
      "Unknown",
    country: data.address.country || "Unknown",
  };
}
