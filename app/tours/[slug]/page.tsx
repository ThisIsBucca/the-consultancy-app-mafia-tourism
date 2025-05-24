"use client"

import { useTour } from "../../../lib/queries"
import { BookingForm } from "../../../components/booking/booking-form"
import Image from "next/image"
import { Clock, MapPin, Users, Star } from "lucide-react"

interface TourPageProps {
  params: {
    slug: string
  }
}

export default function TourPage({ params }: TourPageProps) {
  const { data: tour, isLoading, error } = useTour(params.slug)

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-300 rounded-xl mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-8 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="h-96 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !tour) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <p className="text-gray-600">The tour you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={tour.image_url || "/placeholder.svg?height=400&width=1200"}
            alt={tour.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
              {tour.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">{tour.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tour Overview</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold">{tour.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold">Max 12</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">{tour.location || "Mafia Island"}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="font-semibold">4.9/5</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">{tour.description}</p>

              {tour.highlights && tour.highlights.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Highlights</h3>
                  <ul className="space-y-2">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional guide
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All equipment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Transportation
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Lunch & refreshments
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Safety briefing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Insurance coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingForm tourId={tour.id} tourTitle={tour.title} tourPrice={tour.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
