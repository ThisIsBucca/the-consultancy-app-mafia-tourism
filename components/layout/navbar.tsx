"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useLoader } from "@/lib/loader-context"
import {
  Home,
  MapPin,
  Info,
  Camera,
  Phone,
  FileText,
  Grid3X3,
  Package,
  Waves,
  Tent,
  Compass,
  Ship,
  Leaf,
  Heart,
  ChevronDown,
  ArrowRight,
  Sun,
  Star,
  Globe,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

/* ─── Data ─── */

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Tours", href: "/tours", icon: MapPin },
  { name: "About", href: "/about", icon: Info },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "Contact", href: "/contact", icon: MessageCircle },
]

interface OfferItem {
  title: string
  href: string
  icon: React.ElementType
  desc: string
}

const offerGroups: { label: string; items: OfferItem[] }[] = [
  {
    label: "Tours & Activities",
    items: [
      { title: "All Tours", href: "/tours", icon: Compass, desc: "Browse all experiences" },
      { title: "Whale Shark Swim", href: "/swimming-with-whaleshark", icon: Waves, desc: "Swim with gentle giants" },
      { title: "Village Tour", href: "/village-tour", icon: Home, desc: "Experience local life" },
      { title: "Zanzibar Day Trip", href: "/zanzibar-mafia-day-trip", icon: Ship, desc: "Island hopping adventure" },
    ],
  },
  {
    label: "Plan Your Stay",
    items: [
      { title: "Packages", href: "/packages", icon: Package, desc: "Curated for every budget" },
      { title: "Camping Sites", href: "/camping-sites", icon: Tent, desc: "Sleep under the stars" },
    ],
  },
  {
    label: "Our Impact",
    items: [
      { title: "Conservation", href: "/conservation", icon: Leaf, desc: "Protecting marine life" },
      { title: "Charity & Community", href: "/charity-to-community", icon: Heart, desc: "Giving back locally" },
    ],
  },
]

/* ─── Desktop Nav Link ─── */

function NavLink({
  href,
  name,
  icon: Icon,
  isActive,
  scrolled,
  onClick,
}: {
  href: string
  name: string
  icon?: React.ElementType
  isActive: boolean
  scrolled: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative px-2.5 lg:px-3.5 py-2 group"
    >
      <div
        className={`relative z-10 flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
          isActive
            ? "text-primary"
            : scrolled
              ? "text-muted-foreground group-hover:text-primary"
              : "text-white/80 group-hover:text-white"
        }`}
      >
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {name}
      </div>
      {isActive && (
        <span className="absolute inset-0 rounded-lg bg-primary/10 scale-100" />
      )}
      <span className="absolute inset-0 rounded-lg bg-muted/80 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" />
    </Link>
  )
}

/* ─── Mega Menu Desktop ─── */

function MegaMenu({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false)
        }
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group ${
          scrolled
            ? "text-muted-foreground hover:text-primary hover:bg-muted"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <Grid3X3 className="h-3.5 w-3.5 text-primary" />
        What We Offer
        <ChevronDown
          className={`h-3.5 w-3.5 text-muted-foreground/50 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-[580px] bg-popover backdrop-blur-xl rounded-2xl border border-border shadow-2xl p-2">
          <div className="grid grid-cols-2 gap-1 p-1">
            {offerGroups.map((group) => (
              <div key={group.label} className="col-span-1">
                <div className="px-3 py-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  {group.label}
                </div>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-all duration-200"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground truncate">{item.desc}</div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100 -translate-x-1" />
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-1 pt-1 px-1">
            <Link
              href="/special-offer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-primary hover:bg-primary/5 transition-all"
              onClick={() => setOpen(false)}
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div>Special Request</div>
                <div className="text-[11px] text-muted-foreground">Customize your perfect trip</div>
              </div>
              <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground/50" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Navbar Component ─── */

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [offerOpen, setOfferOpen] = useState(false)
  const pathname = usePathname()

  const { registerImage, onImageLoaded } = useLoader()

  useEffect(() => {
    registerImage('navbar-logo')
  }, [registerImage])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      const dh = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(dh > 0 ? (y / dh) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setOfferOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const closeAll = useCallback(() => {
    setIsOpen(false)
    setOfferOpen(false)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div
            className={`relative mx-auto transition-all duration-500 rounded-2xl ${
              scrolled
                ? "bg-background/90 backdrop-blur-xl border border-border shadow-lg"
                : "bg-transparent border-transparent"
            }`}
          >
            {/* Inner container */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-5">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 sm:gap-2.5 group z-[110] shrink-0"
                onClick={closeAll}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card/10 backdrop-blur-sm shadow-sm flex items-center justify-center overflow-hidden ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                  <Image
                    src="/icon.png"
                    alt="Mafia Island Authentic"
                    fill
                    sizes="56px"
                    className="object-cover"
                    priority
                    onLoad={() => onImageLoaded('navbar-logo')}
                  />
                </div>
                <div className="hidden xs:block">
                    <span
                      className={`font-montserrat font-bold text-sm leading-tight transition-colors duration-300 ${
                        scrolled ? "text-foreground" : "text-white"
                      }`}
                    >
                      Mafia Island
                    </span>
                    <span
                      className={`block text-[8px] tracking-[0.2em] uppercase leading-tight transition-colors duration-300 ${
                        scrolled ? "text-muted-foreground" : "text-white/70"
                      }`}
                    >
                      Authentic
                    </span>
                </div>
              </Link>

              {/* Desktop Nav (centered) */}
              <div className="hidden md:flex items-center justify-center flex-1 px-4">
                <div className="flex items-center gap-0.5">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      name={item.name}
                      icon={item.icon}
                      isActive={isActive(item.href)}
                      scrolled={scrolled}
                    />
                  ))}
                  <MegaMenu scrolled={scrolled} />
                </div>
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    scrolled
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                  }`}
                >
                  Book Now
                </Link>
              </div>

              {/* Desktop spacer to keep layout when hamburger is absent on md+ */}
              <div className="md:hidden w-12 sm:w-14" />
            </div>

            {/* Scroll progress bar — inside the pill */}
            {scrolled && (
            <div className="absolute -bottom-px left-3 sm:left-5 right-3 sm:right-5 h-[2px] bg-border/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-150 ease-out rounded-full"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            )}
          </div>
        </div>
      </nav>

      {/* ─── Mobile Hamburger (outside nav, above overlay) ─── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-[20px] sm:top-[28px] right-3 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 z-[10010] ${
          isOpen
            ? "bg-muted text-foreground"
            : scrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
        }`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="relative w-5 sm:w-6 h-4 sm:h-5 flex flex-col justify-between">
          <span className={`block h-[2px] rounded-full bg-current transform origin-center transition-all duration-300 ${isOpen ? "w-full rotate-45 translate-y-[7px] sm:translate-y-[9px]" : "w-full"}`} />
          <span className={`block h-[2px] rounded-full bg-current transition-all duration-300 ${isOpen ? "w-0 opacity-0" : "w-full opacity-100"}`} />
          <span className={`block h-[2px] rounded-full bg-current transform origin-center transition-all duration-300 ${isOpen ? "w-full -rotate-45 -translate-y-[7px] sm:-translate-y-[9px]" : "w-full"}`} />
        </div>
      </button>

      {/* ─── Mobile Full-Screen Overlay ─── */}
      <div
        className={`fixed inset-0 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 10000 }}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/95 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeAll}
        />

        {/* Panel */}
        <div
          className={`absolute inset-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isOpen ? "translate-y-0" : "translate-y-6"
          }`}
        >
          {/* Top spacer */}
          <div className="h-16 sm:h-[72px]" />

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-6 pb-6">
            {/* Nav items */}
            <div className="space-y-1.5 mb-6">
              {navItems.map((item, i) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeAll}
                    className={`group/link flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                      active
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground"
                    } ${
                      isOpen
                        ? "animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                        : ""
                    } active:scale-[0.98]`}
                    style={isOpen ? { animationDelay: `${80 + i * 70}ms` } : undefined}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        active
                          ? "bg-primary/15 scale-110"
                          : "bg-muted group-hover/link:bg-muted/80"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${active ? "text-primary" : "text-foreground/50 group-hover/link:text-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <span className={`${active ? "text-primary font-semibold" : ""}`}>
                        {item.name}
                      </span>
                      {active && (
                        <span className="block text-[11px] text-primary/60 font-normal mt-0.5">
                          Current page
                        </span>
                      )}
                    </div>
                    {active && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                    {!active && (
                      <ArrowRight className="h-4 w-4 text-foreground/20 group-hover/link:text-foreground/40 group-hover/link:translate-x-0.5 transition-all" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* What We Offer accordion */}
            <div
              className={
                isOpen
                  ? "animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                  : ""
              }
              style={isOpen ? { animationDelay: `${80 + 5 * 70}ms` } : undefined}
            >
              <button
                onClick={() => setOfferOpen(!offerOpen)}
                className="flex items-center justify-between w-full px-5 py-4 rounded-2xl text-base font-medium text-foreground/70 hover:bg-muted hover:text-foreground transition-all duration-200 active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Grid3X3 className="h-5 w-5 text-primary" />
                  </div>
                  <span>What We Offer</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${
                    offerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  offerOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 sm:pl-5 space-y-0.5 mt-1">
                  {(() => {
                    const allItems = offerGroups.flatMap((g) => g.items)
                    return allItems.map((item) => {
                      const Icon = item.icon
                      const active = isActive(item.href)
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeAll}
                          className={`group/sub flex items-center gap-3.5 px-5 py-3.5 rounded-xl text-sm transition-all duration-200 active:scale-[0.98] ${
                            active
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-foreground/60 hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              active ? "bg-primary/15" : "bg-muted"
                            }`}
                          >
                            <Icon className={`h-4 w-4 ${active ? "text-primary" : "text-foreground/50 group-hover/sub:text-foreground"}`} />
                          </div>
                          <span className="truncate">{item.title}</span>
                          {active && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          )}
                        </Link>
                      )
                    })
                  })()}
                  <Link
                    href="/special-offer"
                    onClick={closeAll}
                    className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl text-sm text-accent font-medium hover:bg-muted transition-all duration-200 active:scale-[0.98]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <Star className="h-4 w-4 text-accent" />
                    </div>
                    <span>Special Request</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div
              className={`mt-8 space-y-3 ${
                isOpen
                  ? "animate-fade-up opacity-0 [animation-fill-mode:forwards]"
                  : ""
              }`}
              style={isOpen ? { animationDelay: `${80 + 6 * 70 + 150}ms` } : undefined}
            >
              <Link
                href="/contact"
                onClick={closeAll}
                className="flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" />
                Book Now
              </Link>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Globe className="h-3 w-3" />
                  Tanzania
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                <span className="flex items-center gap-1.5">
                  <Sun className="h-3 w-3" />
                  Paradise Awaits
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
