import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Whale Shark Season in Mafia Island: Complete Guide (Oct–Mar)",
  description: "Everything about swimming with whale sharks on Mafia Island: best months (October–March), tour prices from $30, responsible tourism guidelines, and how to get there.",
}

export default function WhaleSharkSeasonPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/whaleshark-blue-1.jpg" alt="Whale shark swimming in Mafia Island" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">Wildlife</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            Whale Shark Season in Mafia Island
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Complete guide to swimming with the ocean&apos;s gentle giants
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Mafia Island is one of the best places in East Africa to swim with whale sharks. The <strong>whale shark season on Mafia Island</strong> runs from <strong>October to March</strong> each year, when these gentle giants gather in the plankton-rich waters surrounding the island.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">When Is Whale Shark Season?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The main season for spotting whale sharks on Mafia Island is <strong>October through March</strong>. During these months, the chances of seeing them on a dedicated tour are nearly guaranteed. The best months are November, December, and January when visibility is at its peak.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Why Do Whale Sharks Come to Mafia?</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Whale sharks are drawn to the <strong>nutrient-rich waters</strong> around Mafia Island, particularly in the Mafia Island Marine Park. Ocean currents bring abundant plankton, creating a perfect feeding ground for these filter-feeding giants.
        </p>

        <div className="bg-primary/5 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-3">Tour Information</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><strong>Duration:</strong> Half-day (4–5 hours)</li>
            <li><strong>Price:</strong> From $30 per person</li>
            <li><strong>Includes:</strong> Guide, snorkeling gear, life jackets, water, fruit</li>
            <li><strong>What to bring:</strong> Reef-safe sunscreen, swimwear, towel, underwater camera, hat, sunglasses</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Responsible Whale Shark Tourism</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          All recognized tour operators on Mafia Island follow strict guidelines to protect the whale sharks. This includes maintaining a safe distance, no touching, limiting the number of swimmers, and avoiding flash photography.
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-primary font-medium hover:underline">&larr; Back to Blog</Link>
          <Link href="/swimming-with-whaleshark" className="text-sm bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Book Whale Shark Tour
          </Link>
        </div>
      </article>
    </div>
  )
}
