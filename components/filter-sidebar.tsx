"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    materials: true,
    price: true,
    sustainability: true,
    location: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <button
            className="flex w-full items-center justify-between font-medium text-gray-900 mb-2"
            onClick={() => toggleSection("categories")}
          >
            Categories
            {expandedSections.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expandedSections.categories && (
            <div className="space-y-2 mt-2">
              <FilterCheckbox id="category-boxes" label="Boxes & Containers" />
              <FilterCheckbox id="category-bags" label="Bags & Pouches" />
              <FilterCheckbox id="category-wraps" label="Wraps & Films" />
              <FilterCheckbox id="category-labels" label="Labels & Tags" />
              <FilterCheckbox id="category-shipping" label="Shipping Supplies" />
              <FilterCheckbox id="category-food" label="Food Packaging" />
              <Button variant="link" className="text-xs text-green-600 p-0 h-auto">
                Show more
              </Button>
            </div>
          )}
        </div>

        <Separator />

        {/* Materials */}
        <div>
          <button
            className="flex w-full items-center justify-between font-medium text-gray-900 mb-2"
            onClick={() => toggleSection("materials")}
          >
            Materials
            {expandedSections.materials ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expandedSections.materials && (
            <div className="space-y-2 mt-2">
              <FilterCheckbox id="material-paper" label="Recycled Paper" />
              <FilterCheckbox id="material-cardboard" label="Cardboard" />
              <FilterCheckbox id="material-bioplastic" label="Bioplastic" />
              <FilterCheckbox id="material-bamboo" label="Bamboo" />
              <FilterCheckbox id="material-hemp" label="Hemp" />
              <FilterCheckbox id="material-cornstarch" label="Cornstarch" />
              <Button variant="link" className="text-xs text-green-600 p-0 h-auto">
                Show more
              </Button>
            </div>
          )}
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <button
            className="flex w-full items-center justify-between font-medium text-gray-900 mb-2"
            onClick={() => toggleSection("price")}
          >
            Price Range
            {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expandedSections.price && (
            <div className="mt-4">
              <Slider
                defaultValue={[0, 500]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-6"
              />
              <div className="flex items-center justify-between">
                <div className="border rounded-md px-2 py-1 w-20">${priceRange[0]}</div>
                <div className="text-gray-500">to</div>
                <div className="border rounded-md px-2 py-1 w-20">${priceRange[1]}</div>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* Sustainability Score */}
        <div>
          <button
            className="flex w-full items-center justify-between font-medium text-gray-900 mb-2"
            onClick={() => toggleSection("sustainability")}
          >
            Sustainability Score
            {expandedSections.sustainability ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expandedSections.sustainability && (
            <div className="space-y-2 mt-2">
              <FilterCheckbox id="eco-excellent" label="Excellent (9-10)" />
              <FilterCheckbox id="eco-good" label="Good (7-8)" />
              <FilterCheckbox id="eco-average" label="Average (5-6)" />
              <FilterCheckbox id="eco-fair" label="Fair (3-4)" />
            </div>
          )}
        </div>

        <Separator />

        {/* Location */}
        <div>
          <button
            className="flex w-full items-center justify-between font-medium text-gray-900 mb-2"
            onClick={() => toggleSection("location")}
          >
            Supplier Location
            {expandedSections.location ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>

          {expandedSections.location && (
            <div className="space-y-2 mt-2">
              <FilterCheckbox id="location-north-america" label="North America" />
              <FilterCheckbox id="location-europe" label="Europe" />
              <FilterCheckbox id="location-asia" label="Asia" />
              <FilterCheckbox id="location-australia" label="Australia" />
              <FilterCheckbox id="location-south-america" label="South America" />
            </div>
          )}
        </div>

        <Separator />

        <div className="flex gap-2 pt-2">
          <Button variant="outline" className="flex-1">
            Reset
          </Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Apply</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function FilterCheckbox({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <Label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
        {label}
      </Label>
    </div>
  )
}

