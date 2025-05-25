import { TestimonialsSection } from "../components/testimonials/testimonials-section"
import WhatsAppFloat from "../components/ui/WhatsAppFloat"
import  Hero  from "../components/hero/Hero"
import Link from "next/link"
import Image from "next/image"
import { Waves, Users, Camera, Star } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Waves,
      title: "Marine Adventures",
      description: "Swim with whale sharks and explore pristine coral reefs in protected marine areas.",
    },
    {
      icon: Users,
      title: "Cultural Experiences",
      description: "Connect with local communities and experience authentic Tanzanian island culture.",
    },
    {
      icon: Camera,
      title: "Unforgettable Moments",
      description: "Create lasting memories with professional guides and stunning natural beauty.",
    },
    {
      icon: Star,
      title: "Expert Guides",
      description: "Learn from experienced local guides who know every secret of Mafia Island.",
    },
  ]

  return (
    <div>
      {/* Hero Section - Inline Component */}
       <Hero/>
       <WhatsAppFloat/>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Why Choose Mafia Island Tours?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              We offer authentic, sustainable tourism experiences that benefit local communities while providing you
              with unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">{feature.title}</h3>
                <p className="text-gray-600 font-inter">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                Discover Tanzania's Best Kept Secret
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-inter">
                Mafia Island is a pristine paradise in the Indian Ocean, home to the world's largest population of whale
                sharks and some of the most diverse marine life on Earth. Our locally-owned tour company is committed to
                sustainable tourism that protects this incredible ecosystem while providing authentic experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center btn-primary px-6 py-3 rounded-lg hover:shadow-md transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1031200/pexels-photo-1031200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
                alt="Aerial photo of blue water and green trees by Pok Rie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Ready for Your Mafia Island Adventure?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-inter">
            Join us for an unforgettable journey to one of the world's most pristine marine environments. Book your tour
            today and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Tours
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
