"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/placeholder.svg?height=60&width=180&text=EcoTrade"
              alt="EcoTrade Logo"
              width={180}
              height={60}
              className="mx-auto"
            />
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-gray-900">Welcome to EcoTrade</h1>
          <p className="mt-2 text-gray-600">Join the sustainable packaging revolution</p>
        </div>

        <Card>
          <CardHeader>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TabsContent value="login" className="mt-0 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="mt-1" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-green-600 hover:text-green-800">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" className="mt-1" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Sign In</Button>
            </TabsContent>

            <TabsContent value="register" className="mt-0 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="registerEmail">Email</Label>
                <Input id="registerEmail" type="email" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="registerPassword">Password</Label>
                <Input id="registerPassword" type="password" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" className="mt-1" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded text-green-600 focus:ring-green-500" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <Link href="/terms" className="text-green-600 hover:text-green-800">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-green-600 hover:text-green-800">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Create Account</Button>
            </TabsContent>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Separator />
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-4">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="w-10 h-10">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.217.682-.48 0-.238-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="w-10 h-10">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-sm text-gray-600">
          Need help?{" "}
          <Link href="/contact" className="text-green-600 hover:text-green-800">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  )
}

