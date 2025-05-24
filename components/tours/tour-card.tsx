import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Star } from "lucide-react"

interface TourCardProps {
  tour: {
    id: string
    title: string
    description: string
    price: number
    duration: string
    location?: string
    category: string
    image_url: string
    slug: string
  }
}

export const TourCard = ({ tour }: TourCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Marine":
        return "bg-primary text-primary-foreground"
      case "Cultural":
        return "bg-secondary text-secondary-foreground"
      case "Adventure":
        return "bg-accent text-accent-foreground"
      case "Relaxation":
        return "bg-primary-light text-white"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={tour.image_url || "/placeholder.svg?height=300&width=400"}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(tour.category)}`}>
            {tour.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3 line-clamp-2">{tour.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 font-inter leading-relaxed">{tour.description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          {tour.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span className="truncate">{tour.location}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-accent fill-current" />
            <span>4.9</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary font-montserrat">
            ${tour.price}
            <span className="text-sm text-gray-500 font-normal font-inter"> per person</span>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="btn-primary px-6 py-2 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
