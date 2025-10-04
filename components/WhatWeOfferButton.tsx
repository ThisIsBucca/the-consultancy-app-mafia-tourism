"use client"

import Link from "next/link"
import { ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function WhatWeOfferButton() {
  const offerings = [
    { title: "Packages", href: "/packages" },
    { title: "Swimming with whaleshark", href: "/swimming-with-whaleshark" },
    { title: "Camping sites", href: "/camping-sites" },
    { title: "Tours & Activities", href: "/tours" },
    { title: "Zanzibar-Mafia day trip", href: "/zanzibar-mafia-day-trip" },
    { title: "Conservation", href: "/conservation" },
    { title: "Charity to community", href: "/charity-to-community" },
    { title: "Village tour", href: "/village-tour" },
  ]

  return (
    <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1 text-base btn-primary ">
                What We Offer
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[280px] max-h-[80vh] overflow-y-auto">
              {offerings.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="cursor-pointer">
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild className="mt-2 border-t pt-2">
                <Link
                  href="/special-offer"
                  className="cursor-pointer bg-gradient-to-r from-green-600 to-green-300 text-white font-semibold rounded-md px-3 py-2 hover:from-green-800 hover:to-green-500 transition-all duration-200 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Special Request
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
  )
}
