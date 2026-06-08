import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-primary" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-foreground/60 mb-3 font-montserrat">
          Start Your Adventure
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4 font-montserrat leading-tight">
          Ready for Your Mafia Island
          <br />
          <span className="text-primary-foreground">Adventure?</span>
        </h2>
        <p className="text-base sm:text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us for an unforgettable journey to one of the world&apos;s most
          pristine marine environments. Book your tour today and create
          memories that will last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/tours"
            className="group inline-flex items-center justify-center gap-2 bg-card text-primary px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-muted transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100"
          >
            Browse Tours
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all duration-300 hover:scale-105 active:scale-100"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
