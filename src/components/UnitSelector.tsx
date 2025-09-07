"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Settings } from "lucide-react"
import { useState } from "react"

export default function UnitSelector() {
  const [unit, setUnit] = useState("")

  return (
    <Select onValueChange={(val) => setUnit(val)} defaultValue={unit}>
     <SelectTrigger className="max-w-[160px] flex items-center gap-2">
    <Settings className="h-4 w-4" />
    <SelectValue placeholder="Units" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="metric">Celsius (°C)</SelectItem>
        <SelectItem value="imperial">Fahrenheit (°F)</SelectItem>
        <SelectItem value="kelvin">Kelvin (K)</SelectItem>
      </SelectContent>
    </Select>
  )
}
