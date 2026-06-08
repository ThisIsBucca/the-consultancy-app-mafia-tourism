import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mafia Island vs Zanzibar: Which Tanzanian Island Should You Visit?",
  description: "Compare Mafia Island and Zanzibar across beaches, diving, costs, crowds, wildlife, and atmosphere to decide which Tanzanian paradise suits your trip.",
}

export default function MafiaVsZanzibarPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/beach2.jpg" alt="Mafia Island vs Zanzibar" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">Travel Guide</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            Mafia Island vs Zanzibar
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Which Tanzanian island should you visit? Here is how they compare.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Choosing between <strong>Mafia Island and Zanzibar</strong> for your island getaway? Both are beautiful destinations off Tanzania&apos;s coast, but they offer very different experiences.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Overview</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          <strong>Zanzibar</strong> is a bustling tourist hub with Stone Town, spice tours, vibrant nightlife, and luxury resorts. <strong>Mafia Island</strong> is a peaceful, off-the-beaten-path destination focused on marine conservation, world-class diving, and pure relaxation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Comparison Table</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-primary">Mafia Island</th>
                <th className="text-left py-3 pl-4 font-semibold text-gray-900">Zanzibar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Vibe", "Quiet, pristine, untouched", "Busy, touristy, vibrant"],
                ["Beaches", "Clean, uncrowded", "Great but crowded"],
                ["Diving", "World-class, few divers", "Good, many divers"],
                ["Whale Sharks", "Yes (Oct–Mar)", "No"],
                ["Accommodation", "Eco-lodges, boutique", "Resorts, hotels, hostels"],
                ["Nightlife", "Minimal", "Lively"],
                ["Accessibility", "Ferry or flight", "Flights & ferries"],
                ["Cost", "More affordable", "More expensive"],
              ].map(([cat, mafia, zanz]) => (
                <tr key={cat}>
                  <td className="py-3 pr-4 font-medium text-gray-900">{cat}</td>
                  <td className="py-3 px-4 text-gray-600">{mafia}</td>
                  <td className="py-3 pl-4 text-gray-600">{zanz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Which Should You Choose?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Choose <strong>Mafia Island</strong> if you want quiet beaches, world-class diving without crowds, whale shark encounters, and an authentic experience. Choose <strong>Zanzibar</strong> if you want nightlife, historical sites, luxury resorts, and diverse dining options.
        </p>

        <div className="bg-primary/5 rounded-2xl p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            <strong>Traveler tip:</strong> Many visitors do <strong>both</strong> — starting in Zanzibar for culture and then heading to Mafia Island for relaxation and marine adventures. Mafia Island is easily reached via the Nyamisati ferry or a 30-minute flight from Dar es Salaam.
          </p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-primary font-medium hover:underline">&larr; Back to Blog</Link>
          <Link href="/tours" className="text-sm bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Explore Mafia Tours
          </Link>
        </div>
      </article>
    </div>
  )
}
