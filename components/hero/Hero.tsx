"use client"

import Link from "next/link"
import LoopCarousel from '@/components/carousel/LoopCarousel'
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-[600px]"
      style={{ height: '100svh' }}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <LoopCarousel />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10" />
      <div className="absolute inset-0 z-20 pointer-events-none animate-gradient" />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        {/* Badge */}
        {/* <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-6 sm:mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Discover Tanzania&apos;s Hidden Paradise
          </div>
        </div> */}

        {/* Main Heading */}
        <h1
          className="mb-4 sm:mb-6 animate-fade-up max-w-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="font-playfair font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight block drop-shadow-xl">
            Mafia Island
          </span>
          <span className="relative inline-block mt-3 sm:mt-4">
            <span className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark leading-[1.1] drop-shadow-xl">
              - Authentic -
            </span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className="max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide drop-shadow-md font-inter">
            Dive into coral beauty, swim with whale sharks, and feel the culture of Tanzania&apos;s most pristine island.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up w-full max-w-md sm:max-w-none"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/tours"
            className="group inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-primary shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-100"
          >
            <span>Explore Tours</span>
            <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 active:scale-100"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 animate-float">
        <div className="flex flex-col items-center gap-1.5 text-white/40">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium font-montserrat">Scroll</span>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
