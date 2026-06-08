import { TestimonialsSection } from "../components/testimonials/testimonials-section"
import WhatsAppFloat from "../components/ui/WhatsAppFloat"
import Hero from "../components/hero/Hero"
import FeaturedTours from "../components/tours/featured-tours"
import FeaturedVideo from "../components/tours/featured-video"
import FeaturedAccommodation from "../components/accommodation/featured-accommodation"
import BlogPreview from "../components/sections/BlogPreview"
// import WhyChooseUs from "../components/features/why-choose-us"
// import AboutPreview from "../components/about/about-preview"
import CtaSection from "../components/ui/cta-section"

export default function HomePage() {
  return (           
    <div>
      <Hero />
      <WhatsAppFloat />
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
