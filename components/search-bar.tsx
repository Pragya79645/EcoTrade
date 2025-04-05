"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="flex">
        <Input
          type="search"
          placeholder="Search for sustainable packaging products..."
          className="rounded-r-none focus-visible:ring-green-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" className="rounded-l-none bg-green-600 hover:bg-green-700">
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div>
    </form>
  )
}

