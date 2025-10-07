import {
  marineActivities,
  islandActivities,
  culturalActivities,
  sandbanks,
  packages,
  navigationTabs,
  siteInfo
} from "../data/tourism-data"

export {
  marineActivities,
  islandActivities,
  culturalActivities,
  sandbanks,
  packages,
  navigationTabs,
  siteInfo
}


import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Database } from "./supabase"

type Tour = Database["public"]["Tables"]["tours"]["Row"]
type Booking = Database["public"]["Tables"]["bookings"]["Insert"]
type Testimonial = Database["public"]["Tables"]["testimonials"]["Row"]


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
    queryFn: async () => marineActivities.concat(islandActivities).concat(sandbanks).concat(culturalActivities),
  })
}

export const useTour = (slug: string) => {
  return useQuery({
    queryKey: ["tour", slug],
    queryFn: async () => {
  const allTours = marineActivities.concat(islandActivities).concat(culturalActivities).concat(sandbanks);
  const tour = allTours.find((t) => t.id === slug || ("slug" in t && t.slug === slug));
  if (!tour) throw new Error("Tour not found");
  return tour;
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
