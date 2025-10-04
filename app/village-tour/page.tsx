"use client"


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Palmtree, Home, Shirt, Factory, DollarSign } from "lucide-react"

export default function VillageTourPage() {
  return (
    <div className="min-h-screen bg-background">
     

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">
              Dongo Village Tour – Mafia Island
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Immerse in Mafia Island's Culture & Traditions
            </p>
            <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Just 3 km from Mafia Airport</span>
            </div>
          </div>

          <Card className="mb-6 md:mb-8">
            <CardContent className="pt-6">
              <p className="text-base md:text-lg leading-relaxed">
                Join us for a unique and immersive experience in Dongo Village. Explore the island's rich culture,
                traditions, and community through hands-on activities and meaningful interactions with local families.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Tour Itinerary</CardTitle>
              <CardDescription>Experience authentic village life through these activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <Palmtree className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Ukili Art Gallery</h3>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-2">
                      Visit a small collection showcasing raffia products made by skilled local women.
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      <strong>Crafts include:</strong> Ukili mats, coarse mats, bags, and baskets
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Community Engagement</h3>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-2">
                      Visit a local family and participate in farming activities:
                    </p>
                    <ul className="text-sm md:text-base text-muted-foreground space-y-1 ml-4">
                      <li>• Creating a sweet potato terrace</li>
                      <li>• Fetching water from a natural spring well</li>
                      <li>• Learn about daily village life</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <Palmtree className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Coconut Uses & Activities</h3>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-2">
                      Discover versatile uses of coconuts: firewood, roofing, wine making, climbing & peeling coconuts.
                    </p>
                    <ul className="text-sm md:text-base text-muted-foreground space-y-1 ml-4">
                      <li>• Fresh coconut juice tasting</li>
                      <li>• Participate in making a traditional coconut bag (Pakacha)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <Factory className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Virgin Coconut Oil Factory</h3>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                      Visit a small factory producing high-quality virgin coconut oil.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0">
                    <Shirt className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-2">Cultural Experience</h3>
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground mb-2">
                      Learn to wear traditional clothing:
                    </p>
                    <ul className="text-sm md:text-base text-muted-foreground space-y-1 ml-4">
                      <li>
                        • <strong>Women:</strong> Wrap a Kanga cloth
                      </li>
                      <li>
                        • <strong>Men:</strong> Wear a Shuka and Kofia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Tour Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Unique cultural immersion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Hands-on activities and learning experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Opportunity to engage with local communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Support local economy</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 mb-6 md:mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg md:text-xl">Duration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl md:text-3xl font-bold">2–3 hours</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg md:text-xl">Pricing</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base text-muted-foreground">Single:</span>
                  <span className="text-xl md:text-2xl font-bold">$40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base text-muted-foreground">Shared (3+):</span>
                  <span className="text-xl md:text-2xl font-bold">$30</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Guided tour and participation in local activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Cultural experiences with traditional clothing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Refreshments (fresh coconut juice)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Transportation from Kilindoni to Dongo Village via Bicycle, Motorcycle (Boda Boda), Tuk Tuk/Bajaji,
                    or Group vehicle
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6 md:mb-8 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Your Tour Fees Support</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    <strong>Transportation costs:</strong> fuel, maintenance, vehicle expenses
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    <strong>Guide fees:</strong> for experienced local guides
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    <strong>Family support:</strong> portion of fees goes directly to local families
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          <Button
                            onClick={() => {
                              const defaultMessage =
                                "Hello Chinanda! I'm interested in Dongo Village Tour. Please provide more details.";
                              const url = `https://wa.me/255785696021?text=${encodeURIComponent(
                                defaultMessage
                              )}`;
                              window.open(url, "_blank");
                            }}
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
                          > Book Your Dongo Village Tour Today </Button>
                        </div>


        </div>
      </main>
    </div>
  )
}
