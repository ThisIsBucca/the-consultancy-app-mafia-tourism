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
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
       
 {/* Background Pattern */}
<div className="absolute inset-0 ">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://www.pexels.com/photo/green-forest-2739664/?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
    }}
  ></div>
</div>


        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-20">
          {/* Welcome Label */}
          <div className="mb-8">
            <span className="text-primary font-medium text-lg tracking-wide uppercase font-montserrat">
              WELCOME TO PARADISE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-gray-900 mb-8 leading-tight">
            Mafia Island Adventures
          </h1>

          {/* Accent Divider */}
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-inter">
            Discover Tanzania's hidden paradise with pristine coral reefs, whale sharks, and authentic cultural
            experiences in the Indian Ocean
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/tours"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Explore Tours
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/255776986840"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-110"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
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
