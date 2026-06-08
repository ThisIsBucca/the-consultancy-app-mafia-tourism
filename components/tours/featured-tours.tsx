"use client"

import { useTours } from "../../lib/queries"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedTours() {
  const { data: tours, isLoading } = useTours()
  const featured = tours?.slice(0, 6)

  if (isLoading) {
    return (
      <section className="py-16 sm:py-20 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-4 w-24 bg-gray-200 rounded mx-auto mb-3 animate-pulse" />
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-3 animate-pulse" />
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!featured?.length) return null

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
            Popular Tours
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat leading-tight">
            Featured
            <span className="text-primary"> Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Handpicked tours that showcase the best of Mafia Island
          </p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
          {featured.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="flex-shrink-0 w-[70vw] snap-start group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-md border border-border">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-white font-montserrat line-clamp-2 leading-tight">
                    {tour.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    {tour.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground font-montserrat line-clamp-1">
                  {tour.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            href="/tours"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            View All Tours
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
