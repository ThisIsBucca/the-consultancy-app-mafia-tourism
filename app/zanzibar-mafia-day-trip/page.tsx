"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Plane, Waves, Coffee, Bird, Calendar, Users, CreditCard, XCircle, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ZanzibarMafiaDayTripPage() {
  return (
    <div className="min-h-screen bg-background">
   

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">
              Day Trip – Zanzibar to Mafia Island
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              A full-day guided adventure from Zanzibar to Mafia Island featuring whale shark encounters and unique
              wildlife experiences.
            </p>
            <Badge variant="secondary" className="text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              Best Season: August – March
            </Badge>
          </div>

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
                Daily Itinerary
              </CardTitle>
              <CardDescription>Your complete day-by-day schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">5:00 AM</div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Hotel Pick-up</p>
                    <p className="text-sm text-muted-foreground">Comfortable transfer from your hotel in Zanzibar</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">7:00 AM</div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Plane className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Flight to Mafia Island</p>
                        <p className="text-sm text-muted-foreground">
                          Scenic 45-minute flight with stunning aerial views
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">8:30 AM</div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Waves className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Whale Shark Watching & Snorkeling</p>
                        <p className="text-sm text-muted-foreground">
                          3.5 hours swimming alongside majestic whale sharks with expert guides
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">1:00 PM</div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Coffee className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Lunch Break</p>
                        <p className="text-sm text-muted-foreground">Enjoy authentic local flavors and fresh cuisine</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">2:00 PM</div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Bird className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Flying Foxes Visit</p>
                        <p className="text-sm text-muted-foreground">
                          Witness the unique flying foxes/bats in their natural habitat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">3:00 PM</div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Return to Airport</p>
                    <p className="text-sm text-muted-foreground">Transfer back for your return flight</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">3:30 PM</div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Plane className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Flight Back to Zanzibar</p>
                        <p className="text-sm text-muted-foreground">Relax on your return journey</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-20 md:w-24 font-semibold text-sm md:text-base">4:15 PM</div>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Hotel Drop-off</p>
                    <p className="text-sm text-muted-foreground">Safe return to your accommodation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 mb-6 md:mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Round-trip flights Zanzibar ↔ Mafia Island</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Whale shark excursion with boat, guide & captain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Snorkeling equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Refreshments & lunch with local flavors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Flying foxes/bats visit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>All taxes and fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Not Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Personal travel insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Tips for guides and crew</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Alcoholic beverages and beer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>Beach towels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl">
                <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
                Booking & Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Payment Options</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Pay in full or secure your spot with a 50% deposit
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">Cancellation Policy</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Full refund for cancellations made 72 hours or more before departure
                </p>
              </div>

              <div className="flex items-start gap-2 p-3 md:p-4 bg-muted rounded-lg">
                <Users className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Minimum Passengers</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Requires minimum 5 passengers. If not met, trip will be rescheduled via Dar Es Salaam route.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">The trip operate under two conditions</h3>
              </div>

              <div className="flex items-start gap-2 p-3 md:p-4 bg-muted rounded-lg">
                <Pencil className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Condition 1</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Direct flight option - We arrange direct flight from Zanzibar to Mafia Island when we have a group of 8-10 passengers or more.
                  </p>
                </div>
              </div>

                <div className="flex items-start gap-2 p-3 md:p-4 bg-muted rounded-lg">
                <Pencil className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1 text-sm md:text-base">Condition 2</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Via Dar es salaam option - if the group is smaller, the flight will route via Dar es salaam before continuing to Mafia Island.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Trip Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <Waves className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Swim Alongside Whale Sharks</p>
                    <p className="text-sm text-muted-foreground">
                      Experience the thrill of encountering these gentle giants in their natural habitat
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Plane className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Scenic Flights</p>
                    <p className="text-sm text-muted-foreground">
                      Enjoy breathtaking aerial views of the Indian Ocean and island landscapes
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Bird className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Unique Wildlife</p>
                    <p className="text-sm text-muted-foreground">
                      Witness flying foxes and experience authentic local cuisine
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

           
           
           <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4">
            <Button
              onClick={() => {
                const defaultMessage =
                  "Hello Chinanda! I'm interested in Mafia day trip . Please provide more details.";
                const url = `https://wa.me/255785696021?text=${encodeURIComponent(
                  defaultMessage
                )}`;
                window.open(url, "_blank");
              }}
              className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
            > Book now </Button>
          </div>

        </div>
      </main>
    </div>
  )
}
