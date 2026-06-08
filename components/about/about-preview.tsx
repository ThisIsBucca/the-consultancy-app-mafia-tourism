"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Palmtree, Ship, Star, ArrowRight } from "lucide-react"

const carouselImages = [
  "/coralreef1.jpg",
  "/lagoon1.jpg",
  "/whalevibe2.jpg",
  "/beach2.jpg",
]

function CarouselColl() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
      <Image
        src={carouselImages[current]}
        alt={`Mafia Island ${current + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-opacity duration-500"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />

      <button
        onClick={() => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
        aria-label="Previous image"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-20"
        aria-label="Next image"
      >
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2 bg-white shadow-md"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
            About Mafia Island
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 font-montserrat leading-tight">
            Discover Tanzania&apos;s
            <br />
            <span className="text-primary">Best Kept Secrets</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
            Mafia Island is a pristine paradise in the Indian Ocean, home to
            the world&apos;s largest population of whale sharks and some of the
            most diverse marine life on Earth. Our locally-owned tour
            company is committed to sustainable tourism that protects this
            incredible ecosystem while providing authentic experiences.
          </p>
        </div>

        <div className="mb-10 max-w-2xl mx-auto">
          <CarouselColl />
        </div>

        <div className="text-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 max-w-lg mx-auto">
            {[
              { icon: Shield, label: "Eco-Conscious", desc: "Sustainable travel" },
              { icon: Palmtree, label: "Pristine Nature", desc: "Protected marine park" },
              { icon: Ship, label: "Local Guides", desc: "Expert island knowledge" },
              { icon: Star, label: "Top Rated", desc: "5-star experiences" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-card shadow-sm border border-border text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
