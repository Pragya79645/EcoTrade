import type { Product, CartItem } from "@/lib/types"

const mockProducts: Product[] = [
  {
    id: "eco-box-1",
    name: "Biodegradable Shipping Boxes",
    description: "Eco-friendly shipping boxes made from 100% recycled materials. Fully biodegradable and compostable.",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400&text=Eco+Box",
    category: "Boxes",
    material: "Recycled Cardboard",
    rating: 4.8,
    reviewCount: 124,
    stock: 500,
    sustainabilityScore: 9.2,
    bulkDiscount: true,
    sizes: ["Small", "Medium", "Large", "X-Large"],
    supplier: {
      name: "GreenPack Solutions",
      location: "Portland, OR",
      rating: 4.9,
      reviewCount: 128,
      description:
        "Leading provider of sustainable packaging solutions since 2015. All products are made from recycled or renewable materials.",
    },
  },
  {
    id: "eco-mailer-1",
    name: "Compostable Mailer Bags",
    description: "Plant-based mailer bags that break down completely in home compost within 180 days.",
    price: 18.5,
    image: "/placeholder.svg?height=400&width=400&text=Eco+Mailer",
    category: "Bags & Pouches",
    material: "Cornstarch",
    rating: 4.7,
    reviewCount: 89,
    stock: 750,
    sustainabilityScore: 9.5,
    bulkDiscount: true,
    sizes: ['6x9"', '9x12"', '12x15"'],
    supplier: {
      name: "EcoWrap Industries",
      location: "Austin, TX",
      rating: 4.7,
      reviewCount: 94,
      description:
        "Specializing in compostable and biodegradable packaging alternatives for e-commerce and retail businesses.",
    },
  },
  {
    id: "food-container-1",
    name: "Sugarcane Food Containers",
    description: "Takeout containers made from sugarcane fiber (bagasse). Microwave and freezer safe.",
    price: 32.99,
    image: "/placeholder.svg?height=400&width=400&text=Food+Container",
    category: "Food Packaging",
    material: "Sugarcane Bagasse",
    rating: 4.6,
    reviewCount: 76,
    stock: 350,
    sustainabilityScore: 8.9,
    bulkDiscount: true,
    sizes: ["8oz", "16oz", "24oz", "32oz"],
    supplier: {
      name: "Sustainable Box Co.",
      location: "Seattle, WA",
      rating: 4.8,
      reviewCount: 156,
      description:
        "Focused on providing eco-friendly alternatives to traditional plastic food packaging for restaurants and food service.",
    },
  },
  {
    id: "paper-wrap-1",
    name: "Recycled Kraft Paper Wrap",
    description:
      "Versatile packaging paper made from 100% recycled materials. Perfect for wrapping products or void fill.",
    price: 15.75,
    image: "/placeholder.svg?height=400&width=400&text=Paper+Wrap",
    category: "Wraps & Films",
    material: "Recycled Paper",
    rating: 4.5,
    reviewCount: 62,
    stock: 1000,
    sustainabilityScore: 8.7,
    bulkDiscount: false,
    sizes: ['12" Roll', '18" Roll', '24" Roll'],
    supplier: {
      name: "GreenPack Solutions",
      location: "Portland, OR",
      rating: 4.9,
      reviewCount: 128,
      description:
        "Leading provider of sustainable packaging solutions since 2015. All products are made from recycled or renewable materials.",
    },
  },
  {
    id: "bamboo-labels-1",
    name: "Bamboo Paper Labels",
    description: "Eco-friendly adhesive labels made from sustainable bamboo paper. Perfect for product labeling.",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400&text=Bamboo+Labels",
    category: "Labels & Tags",
    material: "Bamboo Paper",
    rating: 4.4,
    reviewCount: 58,
    stock: 1200,
    sustainabilityScore: 8.5,
    bulkDiscount: false,
    sizes: ["Small", "Medium", "Large"],
    supplier: {
      name: "EcoWrap Industries",
      location: "Austin, TX",
      rating: 4.7,
      reviewCount: 94,
      description:
        "Specializing in compostable and biodegradable packaging alternatives for e-commerce and retail businesses.",
    },
  },
  {
    id: "hemp-twine-1",
    name: "Organic Hemp Twine",
    description: "Natural hemp twine for packaging and gift wrapping. Biodegradable and plastic-free.",
    price: 8.5,
    image: "/placeholder.svg?height=400&width=400&text=Hemp+Twine",
    category: "Accessories",
    material: "Hemp",
    rating: 4.9,
    reviewCount: 42,
    stock: 800,
    sustainabilityScore: 9.7,
    bulkDiscount: false,
    sizes: ["Thin", "Medium", "Thick"],
    supplier: {
      name: "Sustainable Box Co.",
      location: "Seattle, WA",
      rating: 4.8,
      reviewCount: 156,
      description:
        "Focused on providing eco-friendly alternatives to traditional plastic packaging for various industries.",
    },
  },
  {
    id: "glass-jar-1",
    name: "Reusable Glass Jars",
    description: "Premium glass jars with bamboo lids. Perfect for food products, cosmetics, or retail goods.",
    price: 36.99,
    image: "/placeholder.svg?height=400&width=400&text=Glass+Jars",
    category: "Containers",
    material: "Glass & Bamboo",
    rating: 4.7,
    reviewCount: 83,
    stock: 250,
    sustainabilityScore: 8.8,
    bulkDiscount: true,
    sizes: ["4oz", "8oz", "16oz"],
    supplier: {
      name: "GreenPack Solutions",
      location: "Portland, OR",
      rating: 4.9,
      reviewCount: 128,
      description:
        "Leading provider of sustainable packaging solutions since 2015. All products are made from recycled or renewable materials.",
    },
  },
  {
    id: "mushroom-foam-1",
    name: "Mushroom Packaging Foam",
    description:
      "Revolutionary packaging foam grown from mushroom mycelium. 100% compostable alternative to styrofoam.",
    price: 42.5,
    image: "/placeholder.svg?height=400&width=400&text=Mushroom+Foam",
    category: "Protective Packaging",
    material: "Mushroom Mycelium",
    rating: 4.8,
    reviewCount: 37,
    stock: 180,
    sustainabilityScore: 9.8,
    bulkDiscount: true,
    sizes: ["Standard", "Custom"],
    supplier: {
      name: "EcoWrap Industries",
      location: "Austin, TX",
      rating: 4.7,
      reviewCount: 94,
      description:
        "Specializing in compostable and biodegradable packaging alternatives for e-commerce and retail businesses.",
    },
  },
]

const mockCartItems: CartItem[] = [
  {
    id: "eco-box-1",
    name: "Biodegradable Shipping Boxes",
    price: 24.99,
    quantity: 2,
    image: "/placeholder.svg?height=200&width=200&text=Eco+Box",
    material: "Recycled Cardboard",
    size: "Medium",
  },
  {
    id: "eco-mailer-1",
    name: "Compostable Mailer Bags",
    price: 18.5,
    quantity: 3,
    image: "/placeholder.svg?height=200&width=200&text=Eco+Mailer",
    material: "Cornstarch",
    size: '9x12"',
  },
  {
    id: "hemp-twine-1",
    name: "Organic Hemp Twine",
    price: 8.5,
    quantity: 1,
    image: "/placeholder.svg?height=200&width=200&text=Hemp+Twine",
    material: "Hemp",
    size: "Medium",
  },
]

export function getMockProducts(): Product[] {
  return mockProducts
}

export function getMockProduct(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id)
}

export function getMockCartItems(): CartItem[] {
  return mockCartItems
}

