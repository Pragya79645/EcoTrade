"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BulkOrderModal from "@/components/bulk-order-modal"
import { getMockCartItems } from "@/lib/mock-data"

export default function CartPage() {
  const [cartItems, setCartItems] = useState(getMockCartItems())
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 25
  const total = subtotal + shipping

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-gray-400" />
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
              <Link href="/marketplace">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Shopping Cart ({cartItems.length} items)</h2>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      Clear All
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg?height=200&width=200"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
                              <p className="mt-1 text-sm text-gray-600">{item.material}</p>
                              <p className="mt-1 text-sm text-gray-600">Size: {item.size}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-base font-medium text-gray-900">${item.price.toFixed(2)}</p>
                              <p className="mt-1 text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center border rounded-md">
                              <button
                                className="p-2 text-gray-600 hover:text-gray-900"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4">{item.quantity}</span>
                              <button
                                className="p-2 text-gray-600 hover:text-gray-900"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <button className="text-red-600 hover:text-red-800" onClick={() => removeItem(item.id)}>
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6">
                  <div className="flex justify-between items-center">
                    <Button variant="outline" asChild>
                      <Link href="/marketplace">Continue Shopping</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                      onClick={() => setIsBulkModalOpen(true)}
                    >
                      Join Bulk Order Group
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-sm text-green-600">
                      Add ${(500 - subtotal).toFixed(2)} more for free shipping
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="bg-green-50 p-3 rounded-md mt-4">
                    <div className="flex items-start gap-2">
                      <div className="bg-green-100 rounded-full p-1">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">Bulk discount applied</p>
                        <p className="text-xs text-green-700">10% off for orders over 1000 units</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/checkout">
                      Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    By proceeding, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>

      <BulkOrderModal open={isBulkModalOpen} onOpenChange={setIsBulkModalOpen} />
    </div>
  )
}

