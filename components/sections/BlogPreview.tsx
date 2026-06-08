import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    slug: "mafia-island-vs-zanzibar",
    image: "/beach2.jpg",
    category: "Travel Guide",
    title: "Mafia Island vs Zanzibar",
    excerpt: "A detailed comparison of Mafia Island and Zanzibar covering beaches, diving, costs, crowds, and which island suits your travel style.",
  },
  {
    slug: "whale-shark-season",
    image: "/whaleshark-blue-3.jpg",
    category: "Wildlife",
    title: "Whale Shark Season Guide",
    excerpt: "Everything you need to know about swimming with whale sharks on Mafia Island: best months, tour prices, and responsible tourism guidelines.",
  },
  {
    slug: "things-to-do-in-mafia-island",
    image: "/lagoon2.jpg",
    category: "Travel Tips",
    title: "15 Best Things to Do in Mafia Island",
    excerpt: "From swimming with whale sharks to exploring ancient ruins, discover the top experiences on Mafia Island for an unforgettable trip.",
  },
]

export default function BlogPreview() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat block">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">
            Mafia Island Travel Guides
          </h2>
          <p className="text-gray-500">
            Tips, guides, and inspiration for planning your perfect Mafia Island adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-gray-900 font-montserrat mt-2 mb-1.5 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
