"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { accommodations, type Accommodation } from "../../data/accommodation-data"
import PageCover from "@/components/ui/PageCover"

const typeStyles: Record<string, string> = {
  budget: "bg-emerald-50 text-emerald-700",
  "mid-range": "bg-blue-50 text-blue-700",
  luxury: "bg-amber-50 text-amber-700",
  camping: "bg-violet-50 text-violet-700",
}

const typeLabels: Record<string, string> = {
  all: "All",
  budget: "Budget",
  "mid-range": "Mid-Range",
  luxury: "Luxury",
  camping: "Camping",
}

function AccommodationCard({ item }: { item: Accommodation }) {
  return (
    <div className="group bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1">
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
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-1">{item.location}</p>
        <h3 className="text-base font-bold text-foreground font-montserrat mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-50 text-gray-500 text-xs border border-gray-100">
              {tag}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default function AccommodationPage() {
  const [filter, setFilter] = useState<string>("all")

  const filtered = filter === "all" ? accommodations : accommodations.filter((a) => a.type === filter)

  return (
    <>
      <PageCover
        src="/lagoon2.jpg"
        alt="Mafia Island lagoon"
        label="Accommodation"
        title="Where to Stay on Mafia Island"
        subtitle="From budget-friendly bungalows to luxury eco-lodges, find the perfect place for your island escape"
      />

      {/* Content */}
      <section className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["all", "budget", "mid-range", "luxury"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === type
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {typeLabels[type] || type}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item) => (
                <AccommodationCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No accommodation found</h3>
              <p className="text-gray-500 mb-6">No options available in this category.</p>
              <button
                onClick={() => setFilter("all")}
                className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Camping Section */}
      <section className="bg-white py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
                Camping
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-montserrat">
                Beach Camping Experience
              </h2>
              <p className="text-base text-muted-foreground">
                Fall asleep to the sound of waves and wake up to breathtaking sunrise views over the Indian Ocean
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">With Provided Tent</p>
                <p className="text-3xl font-bold text-primary font-montserrat mb-1">$20</p>
                <p className="text-sm text-muted-foreground">per person</p>
                <p className="text-xs text-muted-foreground mt-2">Complete camping setup with tent provided</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">With Your Own Tent</p>
                <p className="text-3xl font-bold text-primary font-montserrat mb-1">$15</p>
                <p className="text-sm text-muted-foreground">per person</p>
                <p className="text-xs text-muted-foreground mt-2">Bring your own tent and save</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 mb-8">
              <h3 className="text-lg font-bold text-foreground font-montserrat mb-4">Highlights & Activities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&bull;</span>
                  Set up camp on pristine beach areas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&bull;</span>
                  Enjoy swimming, snorkeling, or beach walks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&bull;</span>
                  Sunset and sunrise views over the ocean
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&bull;</span>
                  Bonfire and optional storytelling or music by the beach
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&bull;</span>
                  Relaxation and stargazing at night
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </section>

      
    </>
  )
}
