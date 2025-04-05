"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Loader2, Truck, BarChart2, Leaf } from "lucide-react"

export default function AILogisticsOptimizer() {
  const [pickupAddress, setPickupAddress] = useState("")
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<null | {
    distance: string
    time: string
    emissions: string
    savings: string
    recommendations: string[]
  }>(null)

  const handleOptimize = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setResult({
        distance: "127.5 miles",
        time: "2 hours 15 minutes",
        emissions: "42.3 kg CO2",
        savings: "15.7 kg CO2 (27% reduction)",
        recommendations: [
          "Consolidate with 2 other shipments in your area for shared transport",
          "Use electric vehicle for last-mile delivery",
          "Optimize packaging to reduce weight by 12%",
        ],
      })
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div>
      <form onSubmit={handleOptimize} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pickup">Pickup Location</Label>
            <Input
              id="pickup"
              placeholder="Enter pickup address"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="delivery">Delivery Location</Label>
            <Input
              id="delivery"
              placeholder="Enter delivery address"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              required
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Optimizing Route...
            </>
          ) : (
            <>Optimize Logistics</>
          )}
        </Button>
      </form>

      {result && (
        <div className="mt-6">
          <Separator className="my-4" />

          <h3 className="font-semibold text-gray-900 mb-4">AI-Optimized Route Summary</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4 flex items-start gap-3">
                <Truck className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Distance</p>
                  <p className="text-gray-700">{result.distance}</p>
                  <p className="text-sm text-gray-600">Estimated time: {result.time}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-start gap-3">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Carbon Emissions</p>
                  <p className="text-gray-700">{result.emissions}</p>
                  <p className="text-sm text-green-600">Potential savings: {result.savings}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <BarChart2 className="h-5 w-5 text-amber-600" />
                <h4 className="font-medium text-gray-900">Optimization Recommendations</h4>
              </div>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-100 text-green-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-medium">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

