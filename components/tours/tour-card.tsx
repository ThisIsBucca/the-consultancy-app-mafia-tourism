import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface TourCardProps {
  tour: {
    id: string
    title: string
    description: string
    price?: string | number
    duration?: string
    location?: string
    category: string
    image_url?: string
    image?: string
    slug: string
  }
}

const categoryStyles: Record<string, string> = {
  Premium: "bg-primary/10 text-primary",
  Seasonal: "bg-sky-50 text-sky-700",
  Historical: "bg-stone-50 text-stone-700",
  Cultural: "bg-rose-50 text-rose-700",
  Nature: "bg-emerald-50 text-emerald-700",
  Leisure: "bg-violet-50 text-violet-700",
  Sandbank: "bg-cyan-50 text-cyan-700",
}

export const TourCard = ({ tour }: TourCardProps) => {
  const catStyle = categoryStyles[tour.category] || "bg-gray-100 text-gray-700"

  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${catStyle}`}>
            {tour.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-2 line-clamp-1">
          {tour.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {tour.description}
        </p>

        {tour.duration && (
          <p className="text-xs text-gray-400 mb-4">
            {tour.duration}
            {tour.location && <> &middot; {tour.location}</>}
          </p>
        )}

        <div className="flex items-center justify-end pt-4 border-t border-gray-100">
          {tour.slug ? (
            <Link
              href={`/tours/${tour.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              View Details
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span className="text-sm text-gray-400">Unavailable</span>
          )}
        </div>
      </div>
    </div>
  )
}
