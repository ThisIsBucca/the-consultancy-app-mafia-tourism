"use client"

import { useTour } from "../../../lib/queries"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface TourPageClientProps {
  slug: string
}

export default function TourPageClient({ slug }: TourPageClientProps) {
  const { data: tour, isLoading, error } = useTour(slug)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [tour])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[50vh] bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Tour Not Found</h1>
          <p className="text-gray-500 mb-6">The tour you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            &larr; Back to Tours
          </Link>
        </div>
      </div>
    )
  }

  const included = [
    "Professional guide",
    "All equipment",
    "Transportation",
    "Lunch & refreshments",
    "Safety briefing",
    "Insurance coverage",
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[65vh] overflow-hidden pt-16 sm:pt-[72px]">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/tours"
              className="inline-block text-white/60 hover:text-white transition-colors mb-4 text-sm"
            >
              &larr; Back to all tours
            </Link>
            <span className="block text-xs font-medium text-white/70 uppercase tracking-wider mb-2">
              {tour.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-playfair leading-tight max-w-3xl">
              {tour.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-sm text-gray-500">
            {tour.duration && <span>{tour.duration}</span>}
            <span>Max 12 people</span>
            {tour.location && <span>{tour.location}</span>}
            <span className="text-gray-400">4.9 / 5.0</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overview */}
              <div
                id="overview"
                data-reveal
                className="bg-white rounded-lg p-5 md:p-8 border border-gray-200"
              >
                <h2 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              {(tour.highlights?.length ?? 0) > 0 && (
                <div
                  id="highlights"
                  data-reveal
                  className="bg-white rounded-lg p-5 md:p-8 border border-gray-200"
                >
                  <h2 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-4">
                    Highlights
                  </h2>
                  <ul className="space-y-3">
                    {(tour.highlights ?? []).map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                        <span className="text-primary mt-0.5">&bull;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Included */}
              <div
                id="included"
                data-reveal
                className="bg-white rounded-lg p-5 md:p-8 border border-gray-200"
              >
                <h2 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-4">
                  What&apos;s Included
                </h2>
                <ul className="space-y-2">
                  {included.map((item) => (
                    <li key={item} className="text-sm md:text-base text-gray-600">
                      &check; {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
