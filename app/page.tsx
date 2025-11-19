"use client"
import { TestimonialsSection } from "../components/testimonials/testimonials-section"
import WhatsAppFloat from "../components/ui/WhatsAppFloat"
import  Hero  from "../components/hero/Hero"
import Link from "next/link"
import Image from 'next/image';
import { Waves, Users, Camera, Star } from "lucide-react"
// Modern animated carousel for About Preview
import { useEffect, useState } from "react"

const carouselImages = [
  "/coralreef1.jpg",
  "/lagoon1.jpg",
  "/whalevibe2.jpg",
  "/beach2.jpg"
]


function CarouselColl() {
  const [current, setCurrent] = useState(0)
  const [prevIdx, setPrevIdx] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIdx(current)
      setFade(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % carouselImages.length)
        setFade(false)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [current])

  const goTo = (idx: number) => {
    setPrevIdx(current)
    setFade(true)
    setTimeout(() => {
      setCurrent(idx)
      setFade(false)
    }, 500)
  }
  const prev = () => goTo((current - 1 + carouselImages.length) % carouselImages.length)
  const next = () => goTo((current + 1) % carouselImages.length)

  return (
    <div className="relative h-96 rounded-xl overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          key={`carousel-img-${current}`}
          src={carouselImages[current]}
          alt="Mafia Island Tour"
          className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white/20"
          style={{
            opacity: 1,
            position: 'absolute',
            transition: 'opacity 0.5s ease-in',
          }}
        />
      </div>
      {/* Carousel Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-20">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white z-20">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-4 h-4 rounded-full border-2 border-primary transition-all duration-300 ${i === current ? "bg-primary" : "bg-white/60"}`}
            aria-label={`Go to slide ${i+1}`}
          />
        ))}
      </div>
    </div>
  )
}

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
      <Hero />
      <WhatsAppFloat />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Why Choose Mafia Island Authentics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              We offer authentic, sustainable tourism experiences that benefit
              local communities while providing you with unforgettable
              adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-inter">
                  {feature.description}
                </p>
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
                Discover Tanzania's Best Kept Secrets
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-inter">
                Mafia Island is a pristine paradise in the Indian Ocean, home to
                the world's largest population of whale sharks and some of the
                most diverse marine life on Earth. Our locally-owned tour
                company is committed to sustainable tourism that protects this
                incredible ecosystem while providing authentic experiences.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center btn-primary px-6 py-3 rounded-lg hover:shadow-md transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              {/* Modern Animated Carousel */}
              <Image
                className="inset-0 w-full h-full object-cover z-0"
                src="/hippo1.jpg"
                alt="cute bat in mafia"
                fill
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-yellow-300 md:text-4xl font-bold  mb-4 font-montserrat">
            Ready for Your Mafia Island Authentic?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto font-inter">
            Join us for an unforgettable journey to one of the world's most
            pristine marine environments. Book your tour today and create
            memories that will last a lifetime.
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
  );
}