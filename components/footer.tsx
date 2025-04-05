import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/placeholder.svg?height=40&width=120&text=EcoTrade"
                alt="EcoTrade Logo"
                width={120}
                height={40}
              />
            </Link>
            <p className="text-gray-600">
              Revolutionizing the packaging industry with sustainable solutions for businesses and consumers.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-gray-600 hover:text-green-600">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-green-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-green-600">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/retail" className="text-gray-600 hover:text-green-600">
                  Retail Packaging
                </Link>
              </li>
              <li>
                <Link href="/solutions/food" className="text-gray-600 hover:text-green-600">
                  Food Packaging
                </Link>
              </li>
              <li>
                <Link href="/solutions/shipping" className="text-gray-600 hover:text-green-600">
                  Shipping Materials
                </Link>
              </li>
              <li>
                <Link href="/solutions/custom" className="text-gray-600 hover:text-green-600">
                  Custom Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/bulk" className="text-gray-600 hover:text-green-600">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest sustainable packaging solutions and industry news.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="max-w-[220px]" />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} EcoTrade. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-green-600">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-green-600">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-600 hover:text-green-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

