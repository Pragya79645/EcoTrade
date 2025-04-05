"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Package, Truck, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FeaturedProducts from "@/components/featured-products"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Join the <span className="text-green-600">Green Revolution</span> in Packaging
              </h1>
              <p className="text-lg text-gray-700">
                EcoTrade connects businesses and consumers with sustainable packaging solutions that reduce
                environmental impact without compromising quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/marketplace">
                    Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/register">Join as Supplier</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Eco-friendly packaging"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose EcoTrade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-green-600" />}
              title="Eco-Certified"
              description="All products meet rigorous sustainability standards and certifications."
            />
            <FeatureCard
              icon={<Package className="h-10 w-10 text-green-600" />}
              title="Quality Assured"
              description="Premium packaging solutions that don't compromise on performance."
            />
            <FeatureCard
              icon={<Truck className="h-10 w-10 text-green-600" />}
              title="Carbon-Neutral Shipping"
              description="We offset 100% of emissions from transportation and delivery."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-green-600" />}
              title="Community Driven"
              description="Join thousands of businesses committed to sustainable practices."
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Testimonials */}
      <Testimonials />

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Sustainability Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            At EcoTrade, we're committed to revolutionizing the packaging industry by promoting materials and practices
            that minimize environmental impact. We believe that sustainable packaging is not just an option—it's a
            necessity for our planet's future.
          </p>
          <div className="flex justify-center">
            <Button asChild variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="/about">Learn More About Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

