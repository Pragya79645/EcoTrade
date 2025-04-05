"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CreditCard, Building, Truck, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CO2OffsetToggle from "@/components/co2-offset-toggle"
import { getMockCartItems } from "@/lib/mock-data"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const cartItems = getMockCartItems()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 25
  const discount = 0
  const total = subtotal + shipping - discount

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" /> Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP/Postal Code</Label>
                    <Input id="zip" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger id="country" className="mt-1">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sameAsBilling" />
                    <Label htmlFor="sameAsBilling">Billing address is the same as shipping address</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Method */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border rounded-lg p-4 cursor-pointer bg-green-50 border-green-200">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-green-600 mr-3 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Eco-Friendly Shipping</p>
                        <p className="text-sm text-gray-600">Carbon-neutral delivery (5-7 business days)</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
                  </div>

                  <div className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border border-gray-300 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Express Shipping</p>
                        <p className="text-sm text-gray-600">2-3 business days</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">$35.00</p>
                  </div>

                  <div className="flex items-center justify-between border rounded-lg p-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="h-5 w-5 rounded-full border border-gray-300 mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">Priority Shipping</p>
                        <p className="text-sm text-gray-600">Next business day</p>
                      </div>
                    </div>
                    <p className="font-medium text-gray-900">$50.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    <TabsTrigger value="card" className="flex items-center">
                      <CreditCard className="h-4 w-4 mr-2" /> Credit Card
                    </TabsTrigger>
                    <TabsTrigger value="razorpay" className="flex items-center">
                      <Building className="h-4 w-4 mr-2" /> Razorpay
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="card" className="mt-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" className="mt-1" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" className="mt-1" placeholder="•••• •••• •••• ••••" />
                      </div>
                      <div>
                        <Label htmlFor="expiration">Expiration Date</Label>
                        <Input id="expiration" className="mt-1" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" className="mt-1" placeholder="•••" />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="razorpay" className="mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600">
                        You will be redirected to Razorpay to complete your payment securely.
                      </p>
                      <div className="mt-4 flex justify-center">
                        <Image
                          src="/placeholder.svg?height=60&width=200&text=Razorpay"
                          alt="Razorpay"
                          width={200}
                          height={60}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg?height=100&width=100"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.name}</p>
                          <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <CO2OffsetToggle />

                  <Separator />

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Complete Order</Button>
                  <p className="text-xs text-center text-gray-500">
                    By placing your order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </CardFooter>
              </Card>

              <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Secure Checkout</p>
                  <p className="text-xs text-blue-700 mt-1">
                    All transactions are secure and encrypted. Your personal information is never shared with third
                    parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

