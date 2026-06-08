import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Time to Visit Mafia Island: Seasonal Guide by Activity",
  description: "Complete guide to the best seasons for visiting Mafia Island: diving conditions, whale shark season (Oct–Mar), weather patterns, peak vs low season, and monthly breakdown.",
}

export default function BestTimePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/lagoon3.jpg" alt="Best time to visit Mafia Island" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">Travel Tips</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            Best Time to Visit Mafia Island
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            A complete seasonal guide to planning your trip
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          The <strong>best time to visit Mafia Island</strong> depends on what you want to do. Whether you come for diving, whale shark swimming, or simply relaxing on pristine beaches, each season offers something unique.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">June–October: Dry Season (Best Overall)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This is the <strong>peak tourist season</strong> on Mafia Island. Weather is dry and sunny, the ocean is calm, and underwater visibility is at its best. Perfect for diving, snorkeling, and beach activities.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-6">
          <li>Temperature: 25–30°C (77–86°F)</li>
          <li>Sea conditions: Calm, excellent visibility</li>
          <li>Best for: Diving, snorkeling, beach relaxation</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">October–March: Whale Shark Season</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          This period overlaps with the dry season and continues into the short rains. The highlight is the arrival of <strong>whale sharks</strong> in the waters around Mafia Island. November through January offers the highest sighting probability.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-6">
          <li>Whale shark sightings: Nearly guaranteed</li>
          <li>Weather: Mostly good with light showers</li>
          <li>Best for: Whale shark swimming, diving</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">November–December: Short Rains</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The short rainy season brings occasional afternoon showers. The landscape becomes lush and green, and prices drop as it is the shoulder season.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">March–May: Long Rains (Low Season)</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This is the <strong>low season</strong> on Mafia Island. Heavy rains can disrupt ferry schedules and some accommodation closes. However, this is the cheapest time to visit if weather is not a concern.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Monthly Breakdown</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-8">
          <li><strong>January–March:</strong> Great for whale sharks, good weather</li>
          <li><strong>April–May:</strong> Rainy season, ferry may be disrupted</li>
          <li><strong>June–October:</strong> Best weather, peak season</li>
          <li><strong>November–December:</strong> Short rains, whale sharks return</li>
        </ul>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-primary font-medium hover:underline">&larr; Back to Blog</Link>
          <Link href="/tours" className="text-sm bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Book Your Trip
          </Link>
        </div>
      </article>
    </div>
  )
}
