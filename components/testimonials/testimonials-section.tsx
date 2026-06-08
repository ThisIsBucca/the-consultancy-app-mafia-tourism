"use client"

import { useTestimonials } from "../../lib/queries"
import { Star, Quote } from "lucide-react"

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <div
      className="group relative bg-card rounded-2xl p-5 sm:p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-w-[280px] sm:min-w-[320px] xl:min-w-[380px] w-[320px] sm:w-[360px] xl:w-[420px] shrink-0 animate-fade-up opacity-0 [animation-fill-mode:forwards]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/5 group-hover:text-primary/10 transition-colors duration-300" />
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating ? "text-primary fill-primary" : "text-border"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic line-clamp-4">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-foreground truncate">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground truncate">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export const TestimonialsSection = () => {
  const { data: testimonials } = useTestimonials()

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const mid = Math.ceil(testimonials.length / 2)
  const row1 = testimonials.slice(0, mid)
  const row2 = testimonials.slice(mid)

  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat leading-tight">
            What Our <span className="text-primary">Guests</span> Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Hear from travelers who have experienced the magic of Mafia Island with us.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 sm:gap-6 xl:gap-8">
        <div className="flex gap-4 sm:gap-5 xl:gap-7 animate-marquee-left hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} index={i} />
          ))}
        </div>
        <div className="flex gap-4 sm:gap-5 xl:gap-7 animate-marquee-right hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} index={i + row1.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
