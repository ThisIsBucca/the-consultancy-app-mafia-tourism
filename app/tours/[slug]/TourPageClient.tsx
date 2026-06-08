"use client"

import { useTour } from "../../../lib/queries"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import WhatsAppModal from "@/components/ui/WhatsAppModal"

interface TourPageClientProps {
  slug: string
}

export default function TourPageClient({ slug }: TourPageClientProps) {
  const { data: tour, isLoading, error } = useTour(slug)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [showModal, setShowModal] = useState(false)

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
                <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                  <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-2">
                    Ready to Book?
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    Chat with Chinanda to check availability and book your spot.
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-green-500 to-green-600 text-white text-sm font-semibold py-3.5 px-5 rounded-xl shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <WhatsAppModal open={showModal} onClose={() => setShowModal(false)} bgImage={tour.image} />
    </>
  )
}
