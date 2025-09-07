"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const cities = [
  "Lagos",
  "Abuja",
  "Ibadan",
  "Kano",
  "Port Harcourt",
  "Enugu",
  "Jos",
  "Abeokuta",
  "Benin City",
  "Calabar",
]

export default function SearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void
}) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)

  const handleSelect = (value: string) => {
    setQuery(value)
    setOpen(false)
    onSearch(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query.trim())
    setOpen(false)
  }

  return (
    <div className="w-full max-w-lg mx-auto my-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-start gap-2"
      >
        <Command className="rounded-lg border shadow-md w-full">
          <CommandInput
            placeholder="Search for a place..."
            value={query}
            onValueChange={(val) => {
              setQuery(val)
              setOpen(true)
            }}
          />
          {open && query !== "" && (
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {cities
                  .filter((city) =>
                    city.toLowerCase().includes(query.toLowerCase())
                  )
                  .map((city) => (
                    <CommandItem
                      key={city}
                      value={city}
                      onSelect={() => handleSelect(city)}
                    >
                      {city}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>

        <Button type="submit" className="flex items-center shadow-2xl gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
      </form>
    </div>
  )
}
