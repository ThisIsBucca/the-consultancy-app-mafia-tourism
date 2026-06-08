"use client"

import { accommodations, type Accommodation } from "../../data/accommodation-data"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import WhatsAppModal from "@/components/ui/WhatsAppModal"

const featured = accommodations.slice(0, 4)

const typeStyles: Record<string, string> = {
  budget: "bg-emerald-50 text-emerald-700",
  "mid-range": "bg-blue-50 text-blue-700",
  luxury: "bg-amber-50 text-amber-700",
}

export default function FeaturedAccommodation() {
  const [modalItem, setModalItem] = useState<Accommodation | null>(null)

  return (
    <>
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
              Where to Stay
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat leading-tight">
              Find Your Perfect
              <span className="text-primary"> Stay</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              From budget bungalows to luxury eco-lodges, discover accommodation on Mafia Island
            </p>
          </div>

          {/* Mobile horizontal scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {featured.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[75vw] snap-start group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-md border border-border">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${typeStyles[item.type] || "bg-gray-100 text-gray-700"}`}>
                      {item.type}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium">
                      {item.price}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs text-white/60 mb-0.5">{item.location}</p>
                    <h3 className="text-sm font-bold text-white font-montserrat leading-tight mb-2">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => setModalItem(item)}
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:bg-primary-dark active:opacity-90 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${typeStyles[item.type] || "bg-gray-100 text-gray-700"}`}>
                      {item.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-0.5">{item.location}</p>
                  <h3 className="text-sm font-bold text-foreground font-montserrat line-clamp-1 mb-3">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => setModalItem(item)}
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold bg-primary text-primary-foreground w-full py-2.5 rounded-xl hover:bg-primary-dark active:opacity-90 transition-all"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/accommodation"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              View All Accommodation
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppModal
        open={!!modalItem}
        onClose={() => setModalItem(null)}
        bgImage={modalItem?.image}
      />
    </>
  )
}
