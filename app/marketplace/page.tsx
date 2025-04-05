import { Suspense } from "react"
import ProductList from "@/components/product-list"
import FilterSidebar from "@/components/filter-sidebar"
import SearchBar from "@/components/search-bar"
import ProductListSkeleton from "@/components/product-list-skeleton"

export default function Marketplace() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Sustainable Packaging Marketplace</h1>

        <SearchBar />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>

          <div className="lg:col-span-3">
            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

