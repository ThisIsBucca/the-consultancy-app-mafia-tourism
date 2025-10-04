
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Packages</h1>
            <p className="text-xl text-muted-foreground">Choose your perfect Mafia Island adventure</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Package 1: From Dar es Salaam */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Mafia Island Adventure</CardTitle>
                <CardDescription className="text-base">from Dar es Salaam</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-4">$700 per person</div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📆 Duration: 3 Days / 2 Nights</p>
                    <p>👥 Group Size: 1 – 25 people</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Enjoy whale shark encounters, vibrant coral reefs, island exploration, and cultural immersion.
                  Includes two whale shark excursions, full-day snorkeling, accommodation, and flights from Dar es
                  Salaam.
                </p>

                <div className="mt-auto">
                  <Link href="/packages/dar-es-salaam">
                    <Button size="lg" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Package 2: From Zanzibar */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Mafia Island Adventure</CardTitle>
                <CardDescription className="text-base">from Zanzibar</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-4">$800 per person</div>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📆 Duration: 3 Days / 2 Nights</p>
                    <p>👥 Group Size: 1 – 25 people</p>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-6">
                  Enjoy whale shark encounters, vibrant coral reefs, island exploration, and cultural immersion.
                  Includes two whale shark excursions, full-day snorkeling, accommodation, and flights from Zanzibar.
                </p>

                <div className="mt-auto">
                  <Link href="/packages/zanzibar">
                    <Button size="lg" className="w-full">
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
