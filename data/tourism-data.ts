import { Waves, Mountain, Users, Star } from "lucide-react"
import type { Activity, CulturalActivity, Sandbank, Package, NavigationTab, SiteInfo } from "../types/tourism"

export const marineActivities: Activity[] = [
  {
    id: "whale-shark",
    title: "Whale Shark Tours",
    price: "$60",
    additionalFees: "$15",
    duration: "3-4 hours",
    startTime: "6:30 AM",
    description:
      "Experience swimming with gentle giants in their natural habitat. Early morning departure ensures best sighting chances.",
    highlights: ["Traditional boat tour", "Breakfast & briefing", "Local ex-fisherman guides"],
    note: "Wild animals - sightings not guaranteed",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "🦈",
  },
  {
    id: "diving",
    title: "Marine Park Diving",
    price: "$110",
    duration: "Full day",
    description: "Explore protected coral reefs with diverse marine life in pristine conditions.",
    highlights: ["Healthy coral reefs", "Diverse marine species", "Professional guides"],
    category: "Premium",
    image:
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "🤿",
  },
  {
    id: "whale-watching",
    title: "Humpback Whale Watching",
    price: "$70",
    season: "Aug - Sep",
    description: "Witness 14-meter giants during their migration, famous for complex songs.",
    highlights: ["Migration season viewing", "Whale songs experience", "Up to 40 tonnes whales"],
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "🐋",
  },
  {
    id: "turtle-hatching",
    title: "Turtle Hatching Experience",
    price: "$35",
    season: "Jun - Sep",
    location: "Juani Island",
    description: "Watch baby turtles make their instinctive journey to the ocean.",
    highlights: ["150 million year tradition", "Natural spectacle", "Conservation experience"],
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "🐢",
  },
]

export const islandActivities: Activity[] = [
  {
    id: "chole-island",
    title: "Chole Island Cultural Tour",
    price: "$25",
    size: "1km × 0.5km",
    description: "Explore mangrove forests, baobab trees, and traditional village life.",
    highlights: ["Village tours", "Mangrove forests", "Cultural interaction"],
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "🏝️",
  },
  {
    id: "kua-ruins",
    title: "Kua Ruins Archaeological Site",
    period: "12th Century",
    location: "South Juani",
    description: "Mysterious ancient city ruins with unexplained abandonment.",
    highlights: ["Archaeological site", "Historical mystery", "Ancient legends"],
    category: "Historical",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "🏛️",
  },
  {
    id: "blue-lagoon",
    title: "Blue Lagoon Swimming",
    price: "$35",
    bestTime: "Late afternoon",
    description: "Natural infinity pool connected to the sea, perfect for swimming.",
    highlights: ["Tidal variations", "Natural infinity pool", "Scenic journey"],
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    emoji: "💙",
  },
]

export const culturalActivities: CulturalActivity[] = [
  {
    name: "Kilindoni Market Tour",
    price: "$10",
    description: "Local market & street food",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Island Hippo Viewing",
    price: "$25",
    description: "Yes, real hippos on the island!",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Coconut Beer Tasting",
    price: "$10",
    description: "Traditional fermented palm sap",
    image:
      "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Custom Tailoring",
    price: "$20",
    description: "Local fabric & craftsmanship",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
]

export const sandbanks: Sandbank[] = [
  {
    name: "Mange Sandbank",
    price: "$60",
    features: "Premium location",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sefu (Afro) Sandbank",
    price: "$60",
    features: "BBQ & relaxation",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Marimbani Sandbank",
    price: "$25",
    features: "Budget-friendly",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bwejuu Island",
    price: "$60",
    features: "Most beautiful archipelago",
    image:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
]

export const packages: Package[] = [
  {
    type: "Half-Day",
    price: "$50",
    options: ["Chole Island + Sandbank lunch", "Snorkeling + Sandbank lunch", "Blue Lagoon + Lunch"],
  },
  {
    type: "Full-Day",
    price: "$70",
    options: ["Snorkeling + Sandbank + Lagoon", "Snorkeling + Sandbank + Chole Island"],
  },
]

export const navigationTabs: NavigationTab[] = [
  { id: "marine", label: "🌊 Marine Adventures", icon: Waves },
  { id: "islands", label: "🏝️ Island Exploration", icon: Mountain },
  { id: "cultural", label: "🎭 Cultural Experiences", icon: Users },
  { id: "packages", label: "📦 Tour Packages", icon: Star },
]

export const siteInfo: SiteInfo = {
  title: "Mafia Island",
  subtitle:
    "Discover Tanzania's hidden paradise with pristine coral reefs, whale sharks, and authentic cultural experiences in the Indian Ocean.",
  marineParkFee: "$23.50",
  location: "Tanzania, Indian Ocean",
}
