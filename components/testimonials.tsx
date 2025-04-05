import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Organic Foods Co.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "EcoTrade has transformed our packaging strategy. Our customers love the sustainable options, and we've seen a significant reduction in our carbon footprint.",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Green Retail Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The quality of EcoTrade's packaging solutions is exceptional. We've been able to maintain product integrity while meeting our sustainability goals.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "Pure Beauty Products",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Working with EcoTrade has been seamless. Their team provided expert guidance on selecting the right eco-friendly packaging for our cosmetic products.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">Businesses that have joined the sustainable packaging revolution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

