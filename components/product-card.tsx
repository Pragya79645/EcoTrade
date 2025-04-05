import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        {product.sustainabilityScore >= 8 && (
          <Badge className="absolute top-2 right-2 bg-green-600">Eco-Certified</Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-green-600 line-clamp-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/product/${product.id}`}>Details</Link>
        </Button>
        <Button className="flex-1 bg-green-600 hover:bg-green-700">
          <ShoppingCart className="h-4 w-4 mr-2" /> Add
        </Button>
      </CardFooter>
    </Card>
  )
}

