"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, BarChart2, Package, TrendingUp, Truck } from "lucide-react"
import Image from "next/image"
import AILogisticsOptimizer from "@/components/ai-logistics-optimizer"
import { getMockProducts } from "@/lib/mock-data"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("products")
  const products = getMockProducts()

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your sustainable packaging products and analytics</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="mr-2 h-4 w-4" /> Add New Product
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Products"
            value="24"
            description="+2 this month"
            icon={<Package className="h-8 w-8 text-green-600" />}
          />
          <DashboardCard
            title="Total Sales"
            value="$12,450"
            description="+15% from last month"
            icon={<BarChart2 className="h-8 w-8 text-blue-600" />}
          />
          <DashboardCard
            title="Carbon Saved"
            value="1.2 tons"
            description="Equivalent to 60 trees"
            icon={<TrendingUp className="h-8 w-8 text-emerald-600" />}
          />
          <DashboardCard
            title="Pending Orders"
            value="8"
            description="3 require action"
            icon={<Truck className="h-8 w-8 text-amber-600" />}
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="custom">Custom Requests</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Your Products</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Sort
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.slice(0, 5).map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 relative rounded overflow-hidden">
                              <Image
                                src={product.image || "/placeholder.svg?height=100&width=100"}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">${product.price.toFixed(2)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{product.stock}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Custom Packaging Requests</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Custom Eco Boxes</CardTitle>
                        <CardDescription>Request #{1000 + i} • 3 days ago</CardDescription>
                      </div>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                        Pending Quote
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Client</p>
                        <p className="text-sm text-gray-900">Organic Foods Co.</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Requirements</p>
                        <p className="text-sm text-gray-900">
                          Biodegradable boxes for organic produce, custom printed, 3 sizes
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Quantity</p>
                        <p className="text-sm text-gray-900">5,000 units</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">Send Quote</Button>
                        <Button variant="outline" size="sm">
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Carbon Footprint Reports</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Monthly
                </Button>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="h-80 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Carbon footprint visualization chart goes here</p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900">Total Carbon Saved</h3>
                  <p className="text-3xl font-bold text-green-600 mt-2">4.8 tons</p>
                  <p className="text-sm text-gray-600 mt-1">+12% from last month</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900">Water Saved</h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">12,450 L</p>
                  <p className="text-sm text-gray-600 mt-1">Through sustainable practices</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900">Waste Reduction</h3>
                  <p className="text-3xl font-bold text-amber-600 mt-2">68%</p>
                  <p className="text-sm text-gray-600 mt-1">Compared to traditional packaging</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Optimize Your Logistics</CardTitle>
                <CardDescription>
                  Use our AI-powered logistics optimizer to reduce your carbon footprint
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AILogisticsOptimizer />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function DashboardCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
            <p className="text-xs text-gray-600 mt-1">{description}</p>
          </div>
          <div>{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

