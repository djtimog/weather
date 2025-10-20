import clsx from "clsx";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  CloudFog,
  LucideIcon,
} from "lucide-react";

type WeatherIconProps = {
  code: number;
  className?: string;
};

export function GetWeatherIcon({ code, className }: WeatherIconProps) {
  const baseClass = "w-6 h-6";

  const iconMap: Record<string, { icon: LucideIcon; color: string }> = {
    clear: { icon: Sun, color: "text-yellow-400" },
    partlyCloudy: { icon: Cloud, color: "text-gray-400" },
    cloudy: { icon: CloudFog, color: "text-gray-500" },
    fog: { icon: CloudFog, color: "text-slate-400" },
    rain: { icon: CloudRain, color: "text-blue-500" },
    thunder: { icon: CloudLightning, color: "text-purple-500" },
    drizzle: { icon: CloudRain, color: "text-cyan-400" },
    default: { icon: Cloud, color: "text-neutral-400" },
  };

  const category = [0].includes(code)
    ? "clear"
    : [1, 2].includes(code)
    ? "partlyCloudy"
    : [3, 45, 48].includes(code)
    ? "cloudy"
    : [51, 53, 55].includes(code)
    ? "drizzle"
    : [61, 63, 65, 80, 81, 82].includes(code)
    ? "rain"
    : [95, 96, 99].includes(code)
    ? "thunder"
    : "default";

  const { icon: Icon, color } = iconMap[category];

  return <Icon className={clsx(baseClass, color, className)} />;
}
