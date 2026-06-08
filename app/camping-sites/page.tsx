"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PageCover from "@/components/ui/PageCover"

export default function CampingSitesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageCover
        src="/beach1.jpg"
        alt="Pristine beach on Mafia Island"
        label="Camping"
        title="Beach Camping Experience"
        subtitle="Experience the Magic of Sleeping by the Ocean"
      />

      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">About Beach Camping</CardTitle>
              <CardDescription className="text-base">
                Enjoy a relaxing and adventurous camping experience right on the beautiful beaches of Mafia Island
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-sm md:text-base">
                Fall asleep to the sound of waves and wake up to breathtaking sunrise views over the Indian Ocean.
              </p>
            </CardContent>
          </Card>

          

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Highlights & Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-primary mt-1">•</span>
                  <span>Set up camp on pristine beach areas</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-primary mt-1">•</span>
                  <span>Enjoy swimming, snorkeling, or beach walks</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-primary mt-1">•</span>
                  <span>Sunset and sunrise views over the ocean</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-primary mt-1">•</span>
                  <span>Bonfire and optional storytelling or music by the beach (where permitted)</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base">
                  <span className="text-primary mt-1">•</span>
                  <span>Relaxation and stargazing at night</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Inclusions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Tent (if not using your own)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Basic setup assistance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Access to beach area</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">✓</span>
                    <span>Guidance from local staff</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Sleeping bag or mat (if preferred)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Personal toiletries</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Swimwear and beachwear</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Flashlight or headlamp</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>Snacks and drinks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6 md:mb-8 border-muted">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm md:text-base leading-relaxed">• Camping is in designated safe beach areas</p>
              <p className="text-sm md:text-base leading-relaxed">
                • Please respect the environment and local community rules
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                • Weather may affect the camping experience; flexible scheduling is recommended
              </p>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  )
}
