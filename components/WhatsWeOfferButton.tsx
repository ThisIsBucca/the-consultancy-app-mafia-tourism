"use client"

import Link from "next/link"
import { ChevronDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1.5 text-sm font-medium"
        >
          What We Offer
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[260px] max-h-[75vh] overflow-y-auto rounded-xl border-border/50 shadow-xl p-1.5"
      >
        {offerings.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link
              href={item.href}
              className="cursor-pointer rounded-lg py-2.5 text-sm"
            >
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
        <div className="mt-1.5 pt-1.5 border-t border-border/50">
          <DropdownMenuItem asChild>
            <Link
              href="/special-offer"
              className="cursor-pointer rounded-lg py-2.5 text-sm font-medium text-primary"
            >
              <Mail className="h-4 w-4" />
              Special Request
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
