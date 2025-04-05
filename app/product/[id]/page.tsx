"use client"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Truck, Info, Star, Leaf } from "lucide-react"
import Image from "next/image"
import SustainabilityScore from "@/components/sustainability-score"
import SupplierRecommendation from "@/components/supplier-recommendation"
import { getMockProduct } from "@/lib/mock-data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getMockProduct(params.id)

  if (!product) {
    return <div className="text-center py-20">Product not found</div>
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={product.image || "/placeholder.svg?height=800&width=800"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-24 rounded-md overflow-hidden border border-gray-200 cursor-pointer hover:border-green-500"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Image${i}`}
                    alt={`Product view ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{product.category}</Badge>
                <Badge variant="outline" className="border-gray-200">
                  {product.material}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                {product.bulkDiscount && (
                  <p className="text-sm text-green-600 mt-1">Bulk discount available for orders over 1000 units</p>
                )}
              </div>
              <SustainabilityScore score={product.sustainabilityScore} />
            </div>

            <div className="border-t border-b border-gray-200 py-4">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Truck className="h-4 w-4 mr-2" />
                <span>Free shipping on orders over $500</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Info className="h-4 w-4 mr-2" />
                <span>In stock: {product.stock} units</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
                    Size
                  </label>
                  <select
                    id="size"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 py-2 px-3"
                  >
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  Request Custom Quote
                </Button>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <p className="text-gray-700">{product.description}</p>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Material:</strong> {product.material}
                  </li>
                  <li>
                    <strong>Dimensions:</strong> Various sizes available
                  </li>
                  <li>
                    <strong>Weight:</strong> Lightweight, reduces shipping costs
                  </li>
                  <li>
                    <strong>Customization:</strong> Available for orders over 500 units
                  </li>
                  <li>
                    <strong>Minimum Order:</strong> 100 units
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="sustainability" className="mt-4">
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-2">
                    <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Biodegradable</p>
                      <p className="text-sm">Breaks down naturally within 180 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Renewable Resources</p>
                      <p className="text-sm">Made from sustainably harvested materials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Leaf className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Carbon Footprint</p>
                      <p className="text-sm">60% lower carbon footprint compared to traditional packaging</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Supplier Info */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Supplier</h2>
          <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Logo"
                alt="Supplier logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900">{product.supplier.name}</h3>
              <p className="text-gray-600 mt-1">{product.supplier.location}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < product.supplier.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.supplier.reviewCount} reviews)</span>
              </div>
              <p className="mt-4 text-gray-700">{product.supplier.description}</p>
              <Button variant="outline" className="mt-4">
                View All Products
              </Button>
            </div>
          </div>
        </div>

        {/* Similar Suppliers */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Suppliers You Might Like</h2>
          <SupplierRecommendation />
        </div>
      </div>
    </div>
  )
}

