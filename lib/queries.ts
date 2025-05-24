import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Database } from "./supabase"

type Tour = Database["public"]["Tables"]["tours"]["Row"]
type Booking = Database["public"]["Tables"]["bookings"]["Insert"]
type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"]

// Fallback data for demo mode
const fallbackTours: Tour[] = [
  {
    id: "1",
    title: "Whale Shark Safari",
    description:
      "Experience swimming with gentle giants in their natural habitat. Early morning departure ensures best sighting chances.",
    price: 60,
    duration: "3-4 hours",
    category: "Marine",
    image_url:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "whale-shark-safari",
    highlights: ["Traditional boat tour", "Breakfast & briefing", "Local ex-fisherman guides"],
    location: "Mafia Island Marine Park",
    season: "October - March",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Marine Park Diving",
    description: "Explore protected coral reefs with diverse marine life in pristine conditions.",
    price: 110,
    duration: "Full day",
    category: "Marine",
    image_url:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "marine-park-diving",
    highlights: ["Healthy coral reefs", "Diverse marine species", "Professional guides"],
    location: "Mafia Island Marine Park",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Cultural Village Tour",
    description: "Explore mangrove forests, baobab trees, and traditional village life on Chole Island.",
    price: 25,
    duration: "4 hours",
    category: "Cultural",
    image_url:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "cultural-village-tour",
    highlights: ["Village tours", "Mangrove forests", "Cultural interaction"],
    location: "Chole Island",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    title: "Humpback Whale Watching",
    description: "Witness 14-meter giants during their migration, famous for complex songs.",
    price: 70,
    duration: "Half day",
    category: "Marine",
    image_url:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "humpback-whale-watching",
    highlights: ["Migration season viewing", "Whale songs experience", "Up to 40 tonnes whales"],
    location: "Mafia Channel",
    season: "August - September",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    title: "Blue Lagoon Swimming",
    description: "Natural infinity pool connected to the sea, perfect for swimming and relaxation.",
    price: 35,
    duration: "3 hours",
    category: "Relaxation",
    image_url:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "blue-lagoon-swimming",
    highlights: ["Tidal variations", "Natural infinity pool", "Scenic journey"],
    location: "Blue Lagoon",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "6",
    title: "Sandbank Picnic Experience",
    description: "Enjoy a private picnic on pristine sandbanks that appear and disappear with the tides.",
    price: 60,
    duration: "Full day",
    category: "Adventure",
    image_url:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "sandbank-picnic",
    highlights: ["Private sandbank", "BBQ lunch", "Snorkeling included"],
    location: "Various sandbanks",
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
]

const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    location: "London, UK",
    content:
      "Swimming with whale sharks was absolutely incredible! The guides were knowledgeable and made sure we had a safe, unforgettable experience.",
    rating: 5,
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Marco Rodriguez",
    location: "Barcelona, Spain",
    content: "The coral reefs around Mafia Island are pristine. Best diving experience I have ever had!",
    rating: 5,
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Emma Thompson",
    location: "Sydney, Australia",
    content:
      "The cultural tour gave us amazing insights into local life. Highly recommend for anyone wanting authentic experiences.",
    rating: 4,
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "David Chen",
    location: "Toronto, Canada",
    content:
      "Mafia Island is a hidden gem! The whale watching tour was spectacular and the local guides were fantastic.",
    rating: 5,
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Lisa Mueller",
    location: "Berlin, Germany",
    content: "Perfect combination of adventure and relaxation. The Blue Lagoon is like paradise on earth!",
    rating: 5,
    created_at: "2024-01-01T00:00:00Z",
  },
]

// Tours
export const useTours = () => {
  return useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      // Always return fallback data in demo mode
      return fallbackTours
    },
  })
}

export const useTour = (slug: string) => {
  return useQuery({
    queryKey: ["tour", slug],
    queryFn: async () => {
      // Always return fallback data in demo mode
      const tour = fallbackTours.find((t) => t.slug === slug)
      if (!tour) throw new Error("Tour not found")
      return tour
    },
    enabled: !!slug,
  })
}

// Testimonials
export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      // Always return fallback data in demo mode
      return fallbackTestimonials
    },
  })
}

// Bookings
export const useCreateBooking = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (booking: Booking) => {
      // Always simulate successful booking in demo mode
      console.log("Booking submitted (demo mode):", booking)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return { id: "demo-booking-" + Date.now(), ...booking }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] })
    },
  })
}

export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      // Always return empty array in demo mode
      return []
    },
  })
}
