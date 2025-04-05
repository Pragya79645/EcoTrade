"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

const recommendedSuppliers = [
  {
    id: 1,
    name: "GreenPack Solutions",
    image: "/placeholder.svg?height=100&width=100&text=GreenPack",
    location: "Portland, OR",
    rating: 4.9,
    reviewCount: 128,
    specialties: ["Biodegradable Packaging", "Custom Designs"],
    description: "Specializing in fully biodegradable packaging solutions for retail and e-commerce businesses.",
  },
  {
    id: 2,
    name: "EcoWrap Industries",
    image: "/placeholder.svg?height=100&width=100&text=EcoWrap",
    location: "Austin, TX",
    rating: 4.7,
    reviewCount: 94,
    specialties: ["Compostable Films", "Food Packaging"],
    description: "Leading manufacturer of plant-based compostable films and food packaging alternatives.",
  },
  {
    id: 3,
    name: "Sustainable Box Co.",
    image: "/placeholder.svg?height=100&width=100&text=SustainBox",
    location: "Seattle, WA",
    rating: 4.8,
    reviewCount: 156,
    specialties: ["Recycled Cardboard", "Shipping Solutions"],
    description: "Creating innovative shipping solutions from 100% post-consumer recycled materials.",
  },
]

export default function SupplierRecommendation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recommendedSuppliers.map((supplier) => (
        <Card key={supplier.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image src={supplier.image || "/placeholder.svg"} alt={supplier.name} fill className="object-cover" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">{supplier.name}</h3>
                <p className="text-sm text-gray-600">{supplier.location}</p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < Math.floor(supplier.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-1">
                    ({supplier.rating}) • {supplier.reviewCount} reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {supplier.specialties.map((specialty, index) => (
                  <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700">{supplier.description}</p>
            </div>

            <Button variant="outline" className="w-full">
              View Products
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

