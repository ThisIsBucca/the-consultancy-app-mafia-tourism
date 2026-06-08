import type { Metadata } from "next"
import { Calendar, Users, Plane, Ship, Waves, Eye, Compass } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageCover from "@/components/ui/PageCover"

export const metadata: Metadata = {
  title: "Tour Packages | Mafia Island Authentic",
  description:
    "Explore our curated Mafia Island tour packages — from Dar es Salaam and Zanzibar. Includes whale shark excursions, snorkeling, accommodation, and flights.",
  openGraph: {
    title: "Tour Packages | Mafia Island Authentic",
    description:
      "Explore our curated Mafia Island tour packages — from Dar es Salaam and Zanzibar.",
  },
}

const highlights = [
  { icon: Eye, label: "Whale Shark Encounters" },
  { icon: Waves, label: "Coral Reef Snorkeling" },
  { icon: Compass, label: "Island Exploration" },
  { icon: Ship, label: "Cultural Immersion" },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageCover
        src="/coralreef1.jpg"
        alt="Vibrant coral reef"
        label="Packages"
        title="Our Packages"
        subtitle="Choose your perfect Mafia Island adventure"
      />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="grid md:grid-cols-2 gap-8">
            {/* Package 1: From Dar es Salaam */}
            <Card className="flex flex-col overflow-hidden border-border/60 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-montserrat">Mafia Island Adventure</CardTitle>
                <CardDescription className="text-base flex items-center gap-1.5">
                  <Plane className="h-4 w-4 text-primary" />
                  from Dar es Salaam
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-3 py-1.5 rounded-lg font-medium">
                    <Calendar className="h-4 w-4" />
                    3 Days / 2 Nights
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-3 py-1.5 rounded-lg font-medium">
                    <Users className="h-4 w-4" />
                    1 – 25 guests
                  </span>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  Enjoy whale shark encounters, vibrant coral reefs, island exploration, and cultural immersion.
                  Includes two whale shark excursions, full-day snorkeling, accommodation, and flights from Dar es
                  Salaam.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {highlights.map((h) => (
                    <span key={h.label} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-gray-50 px-2.5 py-2 rounded-lg">
                      <h.icon className="h-3.5 w-3.5 text-primary shrink-0" />
                      {h.label}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <Link href="/packages/dar-es-salaam">
                    <Button size="lg" className="w-full rounded-xl">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Package 2: From Zanzibar */}
            <Card className="flex flex-col overflow-hidden border-border/60 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-montserrat">Mafia Island Adventure</CardTitle>
                <CardDescription className="text-base flex items-center gap-1.5">
                  <Plane className="h-4 w-4 text-primary" />
                  from Zanzibar
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-3 py-1.5 rounded-lg font-medium">
                    <Calendar className="h-4 w-4" />
                    3 Days / 2 Nights
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-3 py-1.5 rounded-lg font-medium">
                    <Users className="h-4 w-4" />
                    1 – 25 guests
                  </span>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  Enjoy whale shark encounters, vibrant coral reefs, island exploration, and cultural immersion.
                  Includes two whale shark excursions, full-day snorkeling, accommodation, and flights from Zanzibar.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {highlights.map((h) => (
                    <span key={h.label} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-gray-50 px-2.5 py-2 rounded-lg">
                      <h.icon className="h-3.5 w-3.5 text-primary shrink-0" />
                      {h.label}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <Link href="/packages/zanzibar">
                    <Button size="lg" className="w-full rounded-xl">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
