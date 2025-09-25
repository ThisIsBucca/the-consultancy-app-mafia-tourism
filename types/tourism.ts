export interface Activity {
  id: string
  title: string
  price?: string
  additionalFees?: string
  duration?: string
  startTime?: string
  season?: string
  location?: string
  size?: string
  period?: string
  bestTime?: string
  description: string
  highlights?: string[]
  note?: string
  category: string
  image: string
  emoji: string
  slug: string
}

export interface CulturalActivity {
  highlights: string[]
  category: string
  emoji: string
  id: string
  title: string
  name: string
  price: string
  description: string
  image: string
  slug: string
}

export interface Sandbank {
  id: string
  title: string
  highlights: string[]
  category: string
  emoji: string
  name: string
  price: string
  slug: string
  features: string
  image: string
}

export interface Package {
  type: string
  price: string
  options: string[]
}

export interface NavigationTab {
  id: string
  label: string
  icon: any
}

export interface SiteInfo {
  title: string
  subtitle: string
  marineParkFee: string
  location: string
}
