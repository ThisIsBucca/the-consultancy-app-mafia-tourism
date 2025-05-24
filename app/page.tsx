import { TestimonialsSection } from "../components/testimonials/testimonials-section"
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
     <div className="relative h-[100dvh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920')`,
    }}
  ></div>

  {/* White Overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-sm z-10"></div>

  {/* Hero Content */}
  <div className="relative z-20 text-center max-w-5xl mx-auto px-4 py-20">
    {/* Welcome Label */}
    <div className="mb-6">
      <span className="text-primary font-medium text-lg tracking-wide uppercase font-montserrat">
        Welcome to Paradise
      </span>
    </div>

    {/* Main Heading */}
    <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
      Mafia Island Adventures
    </h1>

    {/* Divider */}
    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>

    {/* Description Box */}
    <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto shadow-md mb-10">
      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-inter">
        Discover Tanzania's hidden paradise with pristine coral reefs, whale sharks, and authentic cultural
        experiences in the Indian Ocean.
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/tours"
        className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        Explore Tours
      </Link>
      <Link
        href="/contact"
        className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
      >
        Contact Us
      </Link>
    </div>
  </div>

  {/* WhatsApp Button */}
  <div className="fixed bottom-6 right-6 z-30">
    <a
      href="https://wa.me/255776986840"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382... (same path)" />
      </svg>
    </a>
  </div>
</div>


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
                src="/placeholder.svg?height=400&width=600"
                alt="Mafia Island coral reef"
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
