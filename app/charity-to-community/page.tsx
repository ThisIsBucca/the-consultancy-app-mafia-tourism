"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CharityToCommunityPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Supporting the Mafia Island Community
          </h1>

          <Card className="mb-6 md:mb-8">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Mafia Island Authentic</CardTitle>
              <CardDescription className="text-base">Committed to giving back to the local community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 md:space-y-6">
              <p className="leading-relaxed text-sm md:text-base">
                At Mafia Island Authentic, we are committed to giving back to the local community, focusing on
                underprivileged children, schools, and healthcare facilities on Mafia Island. Our annual charity program
                takes place in two phases, and anyone willing to contribute or participate is warmly welcomed.
              </p>

              <div className="bg-muted/50 p-4 md:p-6 rounded-lg">
                <h3 className="font-semibold mb-2 text-base md:text-lg">Partnership</h3>
                <p className="leading-relaxed text-sm md:text-base">
                  We work in partnership with the social group <strong>Mafia Upendo Initiative</strong>, with the core
                  mission of supporting the vulnerable and underserved people living on Mafia Island.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="font-semibold mb-3 text-base md:text-lg">
                  By joining or contributing to this initiative, you help:
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3 text-sm md:text-base">
                    <span className="text-primary mt-1 text-lg">📚</span>
                    <span>Provide school supplies and educational support for children in need</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base">
                    <span className="text-primary mt-1 text-lg">🏥</span>
                    <span>Support local hospitals and healthcare centers with essential resources</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base">
                    <span className="text-primary mt-1 text-lg">🌱</span>
                    <span>Improve the lives of the community through sustainable development projects</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-r-lg">
                <p className="leading-relaxed text-sm md:text-base font-medium">
                  Your involvement is more than just a donation—it is a chance to make a direct and meaningful impact,
                  showing love, solidarity, and support for the people of Mafia Island.
                </p>
              </div>


              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          <Button
                            onClick={() => {
                              const defaultMessage =
                                "Hello Chinanda! I'm interested in charity . Please provide more details.";
                              const url = `https://wa.me/255785696021?text=${encodeURIComponent(
                                defaultMessage
                              )}`;
                              window.open(url, "_blank");
                            }}
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
                          > Get Involved Today </Button>
                        </div>

              
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
