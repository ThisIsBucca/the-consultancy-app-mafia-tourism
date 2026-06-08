import type { Metadata } from "next"
import { TestimonialsSection } from "../components/testimonials/testimonials-section"
import Hero from "../components/hero/Hero"
import FeaturedTours from "../components/tours/featured-tours"
import FeaturedVideo from "../components/tours/featured-video"
import FeaturedAccommodation from "../components/accommodation/featured-accommodation"

export const metadata: Metadata = {
  title: "Mafia Island Authentic – Tanzania's Hidden Paradise",
  description:
    "Experience whale shark encounters, pristine coral reefs, and authentic Swahili culture on Mafia Island, Tanzania. Book your adventure today.",
  openGraph: {
    title: "Mafia Island Authentic – Tanzania's Hidden Paradise",
    description:
      "Experience whale shark encounters, pristine coral reefs, and authentic Swahili culture on Mafia Island, Tanzania.",
  },
}
import BlogPreview from "../components/sections/BlogPreview"
// import WhyChooseUs from "../components/features/why-choose-us"
// import AboutPreview from "../components/about/about-preview"
import CtaSection from "../components/ui/cta-section"

export default function HomePage() {
  return (           
    <div>
      <Hero />
      <FeaturedTours />
      <FeaturedVideo />
      <FeaturedAccommodation />
      <BlogPreview />
      {/* <WhyChooseUs /> */}
      {/* <AboutPreview /> */}
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}
