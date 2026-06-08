"use client"

import { useTours } from "../../lib/queries"
import { TourCard } from "../../components/tours/tour-card"
import { useState, useEffect } from "react"
import PageCover from "@/components/ui/PageCover"
import PageSEO from "@/components/ui/PageSEO"

const categories = ["all", "Premium", "Seasonal", "Historical", "Cultural", "Nature", "Leisure", "Sandbank"]

export default function ToursPage() {
  const { data: tours, isLoading, error } = useTours()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())

  const filteredTours = tours?.filter(
    (tour) => selectedCategory === "all" || tour.category === selectedCategory
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const cards = document.querySelectorAll("[data-tour-card]")
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [filteredTours])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Loading tours...</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Tours</h1>
          <p className="text-gray-500 mb-6">Something went wrong. Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageSEO title="Tours & Activities" description="Browse all Mafia Island tours and activities — whale shark swimming, snorkeling, village tours, sandbank excursions, and more. Book your adventure." />
      <PageCover
        src="/whaleshark-blue-3.jpg"
        alt="Whale shark in blue ocean"
        label="Tours & Activities"
        title="Explore Mafia Island"
        subtitle="Discover the wonders of Mafia Island with our carefully curated selection of tours and activities"
      />

      {/* Filters + Content */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {category === "all" ? "All Tours" : category}
              </button>
            ))}
          </div>

          {/* Tours Grid */}
          {filteredTours && filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <div
                  key={tour.id}
                  id={`tour-${tour.id}`}
                  data-tour-card
                  className={`transition-all duration-700 ease-out ${
                    visibleCards.has(`tour-${tour.id}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tours found</h3>
              <p className="text-gray-500 mb-6">
                No tours available in the &ldquo;{selectedCategory}&rdquo; category.
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                View All Tours
              </button>
            </div>
          )}
        </div>
      </section>

      
    </>
  )
}
