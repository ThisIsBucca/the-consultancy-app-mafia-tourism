"use client"

import { useTours } from "../../lib/queries"
import { TourCard } from "../../components/tours/tour-card"
import { useState } from "react"

export default function ToursPage() {
  const { data: tours, isLoading, error } = useTours()
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Marine", "Cultural", "Adventure", "Relaxation"]

  const filteredTours = tours?.filter((tour) => selectedCategory === "all" || tour.category === selectedCategory)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Error Loading Tours</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tours & Activities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the wonders of Mafia Island with our carefully curated selection of tours and activities
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category === "all" ? "All Tours" : category}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours?.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {filteredTours?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tours found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
