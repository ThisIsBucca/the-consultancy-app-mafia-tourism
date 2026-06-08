import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "15 Best Things to Do in Mafia Island, Tanzania (2026 Guide)",
  description: "Discover the top 15 things to do on Mafia Island: swim with whale sharks, dive the marine park, visit Chole Island ruins, relax on Utende Beach, and more.",
}

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/lagoon2.jpg" alt="Things to do in Mafia Island" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">Travel Tips</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            15 Best Things to Do in Mafia Island
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Your ultimate bucket list for Tanzania&apos;s hidden paradise
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Looking for the <strong>best things to do on Mafia Island</strong>? This hidden gem in the Indian Ocean offers everything from world-class diving to authentic cultural experiences. Here are 15 must-do activities.
        </p>

        <div className="space-y-8">
          {[
            { n: "1", title: "Swim with Whale Sharks (Oct–Mar)", desc: "The number one attraction on Mafia Island. Swim alongside the largest fish in the ocean in their natural habitat. Tours start from $30 per person." },
            { n: "2", title: "Explore the Marine Park", desc: "Snorkel or dive in the Mafia Island Marine Park, home to pristine coral reefs and over 400 species of fish. The park entry fee is just a few dollars per day." },
            { n: "3", title: "Visit Chole Island", desc: "A historic island with ancient ruins, mangroves, and a traditional Swahili village. Accessible by boat from Utende." },
            { n: "4", title: "Deep Sea Fishing", desc: "Mafia Island is known for big game fishing. Catch tuna, marlin, sailfish, and kingfish. Boats are available for half-day charters." },
            { n: "5", title: "Relax on Utende Beach", desc: "One of the most beautiful beaches on the island with white sand and crystal-clear turquoise water." },
            { n: "6", title: "Bird Watching on Juani Island", desc: "Home to the rare Mafia Island weaver bird and hundreds of other species." },
            { n: "7", title: "Explore Kilindoni Town", desc: "The island&apos;s main town with local markets, shops, and restaurants. Experience real daily life." },
            { n: "8", title: "Mangrove Kayaking", desc: "Paddle through peaceful mangrove channels and spot crabs, birds, and small fish." },
            { n: "9", title: "Snorkel Kinasi Pass", desc: "A world-class snorkeling spot with strong currents that bring abundant marine life." },
            { n: "10", title: "Sunset Dhow Cruise", desc: "Traditional dhow boats offer evening cruises around the island with drinks and snacks." },
            { n: "11", title: "Visit the Old Mosque", desc: "A historic mosque in Kilindoni built in the 12th century." },
            { n: "12", title: "Dive Manta Reef", desc: "One of the best dive sites in Tanzania, frequented by manta rays and reef sharks." },
            { n: "13", title: "Cultural Village Tours", desc: "Visit nearby villages to learn about traditional fishing, coconut farming, and Swahili culture." },
            { n: "14", title: "Photography", desc: "From sunrise over the Indian Ocean to vibrant marine life, Mafia is a photographer&apos;s paradise." },
            { n: "15", title: "Beach Camping", desc: "Some eco-lodges offer beach camping experiences under the stars." },
          ].map((item) => (
            <div key={item.n} className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                {item.n}
              </span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-1">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-primary font-medium hover:underline">&larr; Back to Blog</Link>
          <Link href="/tours" className="text-sm bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Book a Tour
          </Link>
        </div>
      </article>
    </div>
  )
}
