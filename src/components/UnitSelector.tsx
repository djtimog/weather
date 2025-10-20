"use client";

import { UnitContextType, useUnit } from "@/app/provider/AppProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings } from "lucide-react";

export default function UnitSelector() {
  const { unit, toggleUnit } = useUnit();

  return (
    <Select
      onValueChange={(val: UnitContextType["unit"]) => toggleUnit(val)}
      defaultValue={unit}
    >
      <SelectTrigger className="max-w-[160px] flex items-center gap-2">
        <Settings className="h-4 w-4" />
        <SelectValue placeholder="Units" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Celsius">Celsius (°C)</SelectItem>
        <SelectItem value="Fahrenheit">Fahrenheit (°F)</SelectItem>
        <SelectItem value="Kelvin">Kelvin (K)</SelectItem>
      </SelectContent>
    </Select>
  );
}
