"use client";
import React, { useState } from "react";
import { createContext, useContext } from "react";

export type UnitContextType = {
  unit: "Celsius" | "Fahrenheit" | "Kelvin";
  toggleUnit: (unit: "Celsius" | "Fahrenheit" | "Kelvin") => void;
};
const UnitContext = createContext<UnitContextType>({
  unit: "Celsius",
  toggleUnit: () => {},
});

const UnitContextProvider = UnitContext.Provider;

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [unit, setUnit] = useState<UnitContextType["unit"]>("Celsius");
  const toggleUnit = (unit: UnitContextType["unit"]) => {
    setUnit(unit);
  };

  return (
    <UnitContextProvider value={{ unit, toggleUnit }}>
      {children}
    </UnitContextProvider>
  );
}

export const useUnit = () => useContext(UnitContext);
