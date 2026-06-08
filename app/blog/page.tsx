import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mafia Island Blog – Travel Guides, Tips & Inspiration",
  description: "Discover Mafia Island through our travel guides: whale shark seasons, best time to visit, things to do, budget tips, and destination comparisons.",
}

const posts = [
  {
    slug: "mafia-island-vs-zanzibar",
    image: "/beach1.jpg",
    category: "Travel Guide",
    title: "Mafia Island vs Zanzibar: Which Tanzanian Island Should You Visit?",
    excerpt: "A detailed comparison of Mafia Island and Zanzibar covering beaches, diving, costs, crowds, and which island suits your travel style.",
    date: "January 20, 2026",
  },
  {
    slug: "best-time-to-visit-mafia-island",
    image: "/lagoon3.jpg",
    category: "Travel Tips",
    title: "Best Time to Visit Mafia Island: Seasonal Guide by Activity",
    excerpt: "Complete guide to the best seasons for visiting Mafia Island, including diving conditions, whale shark season, weather patterns, and when to avoid.",
    date: "February 1, 2026",
  },
  {
    slug: "whale-shark-season",
    image: "/whaleshark-blue-1.jpg",
    category: "Wildlife",
    title: "Whale Shark Season in Mafia Island: Complete Guide (Oct–Mar)",
    excerpt: "Everything you need to know about swimming with whale sharks on Mafia Island: best months, tour prices, responsible tourism guidelines, and how to get there.",
    date: "January 10, 2026",
  },
  {
    slug: "things-to-do-in-mafia-island",
    image: "/sunsetcruise1.jpg",
    category: "Travel Tips",
    title: "15 Best Things to Do in Mafia Island, Tanzania (2026 Guide)",
    excerpt: "From swimming with whale sharks to exploring ancient ruins, discover the top 15 experiences on Mafia Island for an unforgettable trip.",
    date: "February 20, 2026",
  },
  {
    slug: "budget-travel-guide-mafia-island",
    image: "/village1.jpg",
    category: "Travel Guide",
    title: "Budget Travel Guide to Mafia Island: Costs, Cheap Stays & Money-Saving Tips",
    excerpt: "Complete budget guide for Mafia Island: daily costs from $30–50, best cheap accommodation under $15, affordable food, budget tours, and money-saving tips.",
    date: "March 1, 2026",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image src="/lagoon1.jpg" alt="Mafia Island" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-playfair mb-4 leading-tight tracking-tight">
            Mafia Island Blog
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Travel guides, tips, and inspiration for your Mafia Island adventure
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-base font-bold text-gray-900 font-montserrat mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
