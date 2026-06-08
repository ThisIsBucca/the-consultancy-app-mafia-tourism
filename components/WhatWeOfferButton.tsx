"use client"

import Link from "next/link"
import { ChevronDown, Sparkles, Mail, Package, Waves, Tent, Compass, Ship, Leaf, Heart, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

interface OfferingItem {
  title: string
  href: string
  icon: React.ElementType
  description?: string
}

const offeringGroups: { label: string; items: OfferingItem[] }[] = [
  {
    label: "Tours & Activities",
    items: [
      { title: "All Tours & Activities", href: "/tours", icon: Compass, description: "Browse all experiences" },
      { title: "Swimming with Whale Sharks", href: "/swimming-with-whaleshark", icon: Waves, description: "Swim with gentle giants" },
      { title: "Village Tour", href: "/village-tour", icon: Home, description: "Experience local life" },
      { title: "Zanzibar–Mafia Day Trip", href: "/zanzibar-mafia-day-trip", icon: Ship, description: "Island hopping adventure" },
    ],
  },
  {
    label: "Plan Your Stay",
    items: [
      { title: "Tour Packages", href: "/packages", icon: Package, description: "Curated packages for every budget" },
      { title: "Camping Sites", href: "/camping-sites", icon: Tent, description: "Stay under the stars" },
    ],
  },
  {
    label: "Our Impact",
    items: [
      { title: "Conservation", href: "/conservation", icon: Leaf, description: "Protecting marine life" },
      { title: "Charity to Community", href: "/charity-to-community", icon: Heart, description: "Giving back locally" },
    ],
  },
]

export function WhatWeOfferButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1.5 text-sm font-medium group"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          What We Offer
          <ChevronDown className="h-3.5 w-3.5 opacity-50 group-data-[state=open]:rotate-180 transition-transform duration-200" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[280px] max-h-[75vh] overflow-y-auto rounded-xl border-border/50 shadow-xl p-1.5"
        sideOffset={8}
      >
        {offeringGroups.map((group, gi) => (
          <div key={group.label}>
            {gi > 0 && <DropdownMenuSeparator className="my-1.5" />}
            <DropdownMenuLabel className="px-2.5 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/60">
              {group.label}
            </DropdownMenuLabel>
            {group.items.map((item) => (
              <DropdownMenuItem key={item.href} asChild>
                <Link
                  href={item.href}
                  className="cursor-pointer rounded-lg py-2.5 px-2.5 text-sm flex items-start gap-3 group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm truncate">{item.title}</div>
                    {item.description && (
                      <div className="text-[11px] text-muted-foreground/70 mt-0.5 truncate">{item.description}</div>
                    )}
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        ))}
        <DropdownMenuSeparator className="my-1.5" />
        <DropdownMenuItem asChild>
          <Link
            href="/special-offer"
            className="cursor-pointer rounded-lg py-2.5 px-2.5 text-sm font-medium text-primary flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="h-4 w-4" />
            </div>
            <div>
              <div className="font-medium">Special Request</div>
              <div className="text-[11px] text-muted-foreground/70">Customize your perfect trip</div>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
