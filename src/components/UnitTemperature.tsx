'use client";';
import { useUnit } from "@/app/provider/AppProvider";
import { clsx } from "clsx";
import React from "react";

function UnitTemperature({
  temperature,
  className,
  textClassName,
  degreeClassName,
}: {
  temperature: number;
  className?: string;
  textClassName?: string;
  degreeClassName?: string;
}) {
  const { unit } = useUnit();
  const convertToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;
  const convertToKelvin = (celsius: number) => celsius + 273.15;
  return (
    <p className={clsx("flex items-baseline", className)}>
      <span className={clsx("", textClassName)}>
        {unit === "Celsius"
          ? temperature
          : unit === "Fahrenheit"
          ? convertToFahrenheit(temperature)
          : convertToKelvin(temperature)}
      </span>
      <span className={clsx("self-start", degreeClassName)}>
        °{unit === "Celsius" ? "C" : unit === "Fahrenheit" ? "F" : "K"}
      </span>
    </p>
  );
}

export default UnitTemperature;
