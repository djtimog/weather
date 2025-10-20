# 🌦️ SkyWatch — Real-Time Weather Forecast App

SkyWatch is a modern weather dashboard built with **Next.js**, **TypeScript**, and **TailwindCSS (ShadCN UI)**.  
It fetches live data from the **Open-Meteo API** to display real-time current weather, daily forecasts, and hourly conditions — all styled beautifully with responsive design and clean animations.

---

## 🚀 Features

✅ **Automatic Location Detection**  
Uses the browser's Geolocation API to fetch your current position and instantly show your local weather.  

✅ **Dynamic Search**  
Search for any city worldwide — results update automatically with temperature, humidity, precipitation, and forecasts.  

✅ **Daily & Hourly Forecasts**  
- 7-day daily forecast using Open-Meteo’s `/daily` API  
- 7-day hourly breakdown using the `/hourly` API  

✅ **Beautiful UI**  
- Built with **TailwindCSS** and **ShadCN UI** components  
- Weather-themed icons (Lucide icons) with unique color sets  
- Background image and smooth gradient overlays  

✅ **Fallback Landing Page**  
If location access is denied, users can still search for any city manually.

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js 14** | React framework for SSR and routing |
| **TypeScript** | Static typing and cleaner code |
| **TailwindCSS + ShadCN UI** | Modern UI styling |
| **Lucide Icons** | Weather icons (sun, cloud, rain, fog, etc.) |
| **Open-Meteo API** | Real-time weather data |
| **Open-Meteo Geocoding API** | City → Latitude & Longitude lookup |

---
🌍 Environment & APIs

This app uses Open-Meteo (no API key required).

API Endpoints:

Forecast:
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto

Hourly Forecast:
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&hourly=temperature_2m,weathercode&timezone=auto

Geocoding:
https://geocoding-api.open-meteo.com/v1/search?name={city}

🧩 Project Structure
src/
├── app/
│   ├── page.tsx          # Main entry point (Home)
│   ├── layout.tsx        # Root layout
├── components/
│   ├── Header.tsx
│   ├── SearchBar.tsx
│   ├── WeatherContainer.tsx
│   ├── Forecast.tsx
│   ├── HourlyForecast.tsx
│   ├── LandingPage.tsx
│   ├── GetWeatherIcon.tsx
│   └── skeletons/
│       ├── ForecastSkeleton.tsx
│       └── WeatherCardSkeleton.tsx
├── lib/
│   └── api.ts            # fetchLocationName + weather helpers
└── public/
    └── cloudy-weather.webp

🖼️ UI Preview
Forecast	Hourly	Landing Page
🌤️	🌧️	☁️
🧾 License

MIT License © 2025 Ogunleye christian
Free to use, modify, and share.

🧑‍💻 Author

Timog Ogunleye
🌍 Weather Hackathon Project — 2025
📧 [ogunleyetimilehin15@gmail.com
]
🐙 github.com/djtimog