"use client";
import Image from "next/image"
import { useState } from "react"

export default function GalleryPage() {
  const images = [
    {
      src: "/whaleshark-blue-1.jpg",
      alt: "Whale shark swimming in blue water",
      category: "Marine Life",
    },
    {
      src: "/coralreef1.jpg",
      alt: "Colorful coral reef with tropical fish",
      category: "Coral Reefs",
    },
    {
      src: "/sunsetcruise1.jpg",
      alt: "Traditional dhow boat at sunset",
      category: "Culture",
    },
    {
      src: "/beach1.jpg",
      alt: "Pristine white sand beach",
      category: "Beaches",
    },
    {
      src: "/whaleshark-greenblue-1.jpg",
      alt: "Whale shark in green-blue water",
      category: "Marine Life",
    },
    {
      src: "/coralreef2.jpg",
      alt: "Coral reef closeup",
      category: "Coral Reefs",
    },
    {
      src: "/lagoon1.jpg",
      alt: "Lagoon aerial view",
      category: "Nature",
    },
    {
      src: "/sunsetcruise2.jpg",
      alt: "Sunset cruise on Mafia Island",
      category: "Culture",
    },
    {
      src: "/beach2.jpg",
      alt: "Secluded beach",
      category: "Beaches",
    },
  ]

  const categories = ["All", "Marine Life", "Coral Reefs", "Culture", "Beaches", "Nature"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <span className="text-primary font-medium text-lg tracking-wide uppercase mb-4 block">GALLERY</span>
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-gray-900 mb-6">
              Experience Mafia Island
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Immerse yourself in the beauty of Mafia Island through our collection of stunning photographs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium bg-white text-gray-700 hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 ${selectedCategory === category ? "bg-primary text-white" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Check if images exist */}
        {filteredImages.length > 0 ? (
          <>
            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                >
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                        {image.category}
                      </span>
                      <p className="text-sm font-inter">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* No Images State */
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-gray-900 mb-4">No Gallery Images Available</h3>
              <p className="text-gray-600 font-inter">Please check back later for new images</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Memories?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-inter leading-relaxed">
              Join us for an unforgettable adventure and capture your own stunning moments in paradise
            </p>
            <a
              href="/tours"
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 inline-block"
            >
              Book Your Adventure
            </a>
          </div>
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
  )
}
