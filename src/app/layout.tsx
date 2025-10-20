import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "./provider/AppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SkyWatch | Real-Time Weather Forecast",
  description:
    "Get accurate weather updates, 7-day forecasts, and hourly insights powered by Open-Meteo API. Built with Next.js, TailwindCSS, and ShadCN UI.",
  keywords: [
    "weather app",
    "Next.js",
    "forecast",
    "Open Meteo",
    "SkyWatch",
    "hourly weather",
    "daily forecast",
  ],
  authors: [{ name: "Timog Ogunleye" }],
  openGraph: {
    title: "SkyWatch — Real-Time Weather Dashboard",
    description:
      "A beautifully designed weather dashboard that shows live conditions, daily and hourly forecasts.",
    url: "https://skywatch.vercel.app",
    siteName: "SkyWatch",
    images: [
      {
        url: "/cloudy-weather.webp",
        width: 1200,
        height: 630,
        alt: "SkyWatch Weather Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>{children}</AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
