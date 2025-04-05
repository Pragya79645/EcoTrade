export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  material: string
  rating: number
  reviewCount: number
  stock: number
  sustainabilityScore: number
  bulkDiscount: boolean
  sizes: string[]
  supplier: {
    name: string
    location: string
    rating: number
    reviewCount: number
    description: string
  }
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  material: string
  size: string
}

