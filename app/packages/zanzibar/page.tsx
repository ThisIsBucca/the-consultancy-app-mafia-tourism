"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ZanzibarPackagePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Packages
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              {" "}
              3 Days / 2 Nights – Mafia Island Adventure
            </h1>
            <p className="text-xl text-muted-foreground">from Zanzibar 🌴🌊</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-wrap gap-4 justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">
                    $800 per person
                  </CardTitle>
                  <CardDescription className="text-base">
                    📆 Duration: 3 Days / 2 Nights
                    <br />
                    👥 Group Size: 1 – 25 people
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    const defaultMessage =
                      "Hello Chinanda! I'm interested in package, 3 Days / 2 Nights – Mafia Island Adventure from Zanzibar . Please provide more details.";
                    const url = `https://wa.me/255785696021?text=${encodeURIComponent(
                      defaultMessage
                    )}`;
                    window.open(url, "_blank");
                  }}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
                >
                  Book Now
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed">
                Enjoy whale shark encounters, vibrant coral reefs, island
                exploration, and cultural immersion in Mafia Island. Includes
                two whale shark excursions, full-day snorkeling, accommodation,
                and flights from Zanzibar. (Half Board – Breakfast & Dinner)
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Itinerary</h2>

          <div className="space-y-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">Day 1</Badge>
                  Zanzibar → Mafia Island + Whale Shark Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  ✈ Early morning flight from Zanzibar → Mafia Island (35–45
                  mins)
                </p>
                <p>
                  🛬 Arrival at Mafia Airport, meet & greet, transfer to lodge
                </p>
                <p>🌴 Check-in (Half-board: breakfast & dinner included)</p>
                <p>
                  🚤 Morning Whale Shark Excursion – swim & snorkel with gentle
                  whale sharks
                </p>
                <p>🏖 Afternoon at leisure – pool or short village walk</p>
                <p>🍽 Dinner & overnight at lodge</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">Day 2</Badge>
                  Full-Day Marine Excursion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>🍳 Breakfast at lodge</p>
                <p>🚤 Full-day marine adventure:</p>
                <ul className="ml-6 space-y-1">
                  <li>
                    • Snorkeling at Coral Garden – colorful reef fish & vibrant
                    corals
                  </li>
                  <li>• Visit Chole Island – historic ruins & lush greenery</li>
                  <li>• Stop at Blue Lagoon – natural tidal pool</li>
                  <li>• Picnic lunch on Marimbani Sandbank</li>
                </ul>
                <p>🏖 Return to lodge late afternoon</p>
                <p>🍽 Dinner & overnight at lodge</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">Day 3</Badge>
                  Dongo Village Cultural Tour + Departure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>🍳 Early breakfast at lodge</p>
                <p>🏡 Dongo Village Tour (2–3 hours):</p>
                <ul className="ml-6 space-y-1">
                  <li>• Explore Ukili Art Gallery & local crafts</li>
                  <li>
                    • Participate in farming activities & learn about daily
                    village life
                  </li>
                  <li>
                    • Discover coconut uses & try making a traditional coconut
                    bag
                  </li>
                  <li>• Visit Virgin Coconut Oil Factory</li>
                  <li>
                    • Try traditional clothing (Kanga for women, Shuka & Kofia
                    for men)
                  </li>
                </ul>
                <p>🚖 Return to lodge for fresh-up</p>
                <p>✈ Transfer to Mafia Airport for flight back to Zanzibar</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" />
                  Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>✓ Return flights: Zanzibar → Mafia Island → Zanzibar</li>
                  <li>✓ 2 nights accommodation (Half-board)</li>
                  <li>✓ All transfers in Mafia Island</li>
                  <li>
                    ✓ Full-day snorkeling excursion (Chole Island, Blue Lagoon,
                    Coral Garden, Marimbani Sandbank)
                  </li>
                  <li>✓ 1 Whale Shark Experience (Day 1)</li>
                  <li>✓ Dongo Village Cultural Tour on Day 3</li>
                  <li>✓ Picnic lunch on Day 2</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Not Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    ✗ Marine Park fees (USD 23.60 per person/day – pay at gate)
                  </li>
                  <li>✗ Lunch on Day 1 & Day 3</li>
                  <li>✗ Personal expenses (tips, drinks, etc.)</li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
