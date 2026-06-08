"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageCover from "@/components/ui/PageCover"
import PageSEO from "@/components/ui/PageSEO"

export default function SwimmingWithWhalesharkPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Swimming with Whale Sharks" description="Swim alongside gentle giant whale sharks on Mafia Island — the best place in Tanzania for ethical whale shark encounters. Season: October to March." />
      <PageCover
        src="/whaleshark-blue-1.jpg"
        alt="Whale shark swimming in the ocean"
        label="Swimming with Whale Sharks"
        title="Whale Shark Swimming & Snorkeling"
        subtitle="Swim alongside the gentle giants of the ocean in the pristine waters of Mafia Island"
      />

      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs">Duration</CardDescription>
                <CardTitle className="text-xl md:text-2xl">2–5 hrs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Flexible timing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs">Departure</CardDescription>
                <CardTitle className="text-xl md:text-2xl">7:00 AM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Pick-up at 6:30 AM
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription className="text-xs">
                  Group Size
                </CardDescription>
                <CardTitle className="text-xl md:text-2xl">1–12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Small groups
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Itinerary</CardTitle>
              <CardDescription>Your day with the gentle giants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold">
                    1
                  </div>
                  <div className="h-full w-px bg-border mt-2" />
                </div>
                <div className="flex-1 pb-4 md:pb-6">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    06:30 AM – Hotel Pick-Up
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Pick-up from your lodge by our experienced guide and
                    captain. Light briefing on safety and tour outline.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold">
                    2
                  </div>
                  <div className="h-full w-px bg-border mt-2" />
                </div>
                <div className="flex-1 pb-4 md:pb-6">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    07:00 AM – Departure to Whale Shark Area
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transfer by boat to the whale shark feeding grounds in the
                    bay. Enjoy scenic views of Mafia Island and surrounding
                    waters.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold">
                    3
                  </div>
                  <div className="h-full w-px bg-border mt-2" />
                </div>
                <div className="flex-1 pb-4 md:pb-6">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    07:30 – 11:30 AM – Swim & Snorkel with Whale Sharks
                  </h3>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Safety briefing before entering the water</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Swim and snorkel alongside gentle whale sharks
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>Observe marine life and take photos</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Whale sharks are wild animals – sightings are
                        approximately 80% guaranteed
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Missed a sighting? Rebook the tour at a 20% discounted
                        rate
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs md:text-sm font-semibold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    11:30 AM – Return to Lodge
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Transfer back to your hotel. Refreshments and bottled water
                    provided.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Hotel pick-up and drop-off</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Snorkeling gear</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Refreshments and bottled water</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Community & guide fees</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Experienced captain and guide</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">
                  What to Bring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Swimming suit</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Sun cream</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Waterproof camera</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Optional personal snorkeling gear</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
