"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight, ChevronDown, Camera, Maximize2, Heart, Share2 } from "lucide-react"

const publicImages = [
  "beach1.jpg", "lagoon2.jpg", "coralreef1.jpg", "hippo1.jpg", "coralreef3.jpg",
  "coralreefsvibe2.jpg", "sunsetcruise1.jpg", "cutecoralreef.jpg", "kasa.jpg",
  "lagoon1.jpg", "sunsetcruise2.jpg", "sandbank3.jpg", "whaleshark-blue-1.jpg",
  "juani.jpg", "chole2.jpg", "whaleshark-blue-3.jpg", "chole1.jpg",
  "whaleshark-greenblue-1.jpg", "hippopond1.jpg", "chole3.jpg", "kua3.jpg",
  "whalesharkvibe1.jpg", "hippo2.jpg", "bat2.jpg", "kua1.jpg", "bat1.jpg",
  "sandbank1.jpg", "mkumbi1.jpg", "sunsetCruise4.jpg", "turtle1.jpg",
  "mkumbi2.jpg", "turtle2.jpg", "village1.jpg", "village2.jpg",
]

const descriptions: Record<string, string> = {
  "beach1.jpg": "A pristine white sand beach with turquoise waters.",
  "lagoon2.jpg": "A clear blue lagoon surrounded by dense green mangroves.",
  "coralreef1.jpg": "Vibrant coral reef teeming with tropical fish.",
  "hippo1.jpg": "Hippo partially submerged in a calm pond.",
  "coralreef3.jpg": "Panoramic view of coral gardens beneath crystal water.",
  "coralreefsvibe2.jpg": "Coral reefs glowing in the sunlight.",
  "sunsetcruise1.jpg": "A dhow sailing at sunset on the Indian Ocean.",
  "cutecoralreef.jpg": "Small fish darting among cute coral formations.",
  "kasa.jpg": "Sea turtle gliding above coral reefs.",
  "lagoon1.jpg": "Aerial view of a tranquil blue-green lagoon.",
  "sunsetcruise2.jpg": "Tourists enjoying a sunset cruise.",
  "sandbank3.jpg": "Fresh fish skewered and cooking over an open fire.",
  "whaleshark-blue-1.jpg": "Whale shark swimming gracefully in the blue ocean.",
  "juani.jpg": "Juani Island with lush vegetation and tall palm trees.",
  "chole2.jpg": "Jackfruits growing on a tree trunk at Chole Island.",
  "whaleshark-blue-3.jpg": "A majestic whale shark surrounded by tiny fish.",
  "chole1.jpg": "Calm waterfront scene at Chole Island.",
  "hippopond1.jpg": "Lush wetland area with patches of green vegetation.",
  "chole3.jpg": "A quiet historic spot surrounded by nature.",
  "kua3.jpg": "Stone staircase leading up between weathered walls.",
  "whalesharkvibe1.jpg": "A playful whale shark enjoying the tropical vibe.",
  "hippo2.jpg": "Two hippos partially submerged in a calm pond.",
  "bat2.jpg": "A group of bats hanging upside down on a branch.",
  "kua1.jpg": "Ancient stone ruins surrounded by dense green forest.",
  "mkumbi1.jpg": "The iconic red-and-white striped lighthouse.",
  "mkumbi2.jpg": "Lighthouse surrounded by green trees.",
  "bat1.jpg": "A bat hanging upside down on a tree branch.",
  "turtle1.jpg": "A tiny baby sea turtle crawling on the sandy beach.",
  "turtle2.jpg": "A baby sea turtle moving across sandy ground.",
  "village1.jpg": "Tall coconut palm trees leaning over a lush landscape.",
  "village2.jpg": "A peaceful dirt path through a grove of coconut palms.",
  "sandbank1.jpg": "Narrow sandbar extending into the water with a boat docked.",
}

function getCategory(filename: string): string {
  if (filename.includes("whale")) return "Whale Sharks"
  if (filename.includes("coral")) return "Coral Reefs"
  if (filename.includes("beach")) return "Beaches"
  if (filename.includes("lagoon")) return "Lagoons"
  if (filename.includes("sunset")) return "Sunset Cruises"
  if (filename.includes("juani") || filename.includes("chole")) return "Islands"
  if (filename.includes("bat") || filename.includes("hippo")) return "Wildlife"
  if (filename.includes("kasa") || filename.includes("turtle")) return "Turtles"
  if (filename.includes("sandbank")) return "Sandbanks"
  if (filename.includes("mkumbi")) return "Lighthouse"
  if (filename.includes("kua")) return "Kua Ruins"
  if (filename.includes("village")) return "Village Life"
  return "Other"
}

const images = publicImages.map((filename) => ({
  src: `/${filename}`,
  alt: filename.replace(/[-_]/g, " ").replace(/\.[a-zA-Z]+$/, ""),
  description: descriptions[filename] || "A beautiful scene from Mafia Island.",
  category: getCategory(filename),
}))

const categories = [
  "All", "Whale Sharks", "Coral Reefs", "Beaches", "Lagoons",
  "Islands", "Turtles", "Wildlife", "Sunset Cruises",
  "Lighthouse", "Kua Ruins", "Village Life",
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || revealed) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [revealed])
  return { ref, revealed }
}

function GridImage({ image, index, onClick }: { image: typeof images[0]; index: number; onClick: () => void }) {
  const { ref, revealed } = useScrollReveal()

  const aspectClasses = [
    "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]", "aspect-square",
    "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/3]",
    "aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/3]",
    "aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]",
    "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]",
    "aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/3]",
  ]

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer transition-all duration-700 ${
        revealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      } ${aspectClasses[index % aspectClasses.length]}`}
      style={{ transitionDelay: `${Math.min(index * 50, 500)}ms` }}
      onClick={onClick}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
          <Maximize2 className="h-3.5 w-3.5 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full mb-1.5">
          {image.category}
        </span>
        <p className="text-xs text-white/80 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
          {image.description}
        </p>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [liked, setLiked] = useState(false)

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((img) => img.category === selectedCategory)

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
    )
  }, [filteredImages.length])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    )
  }, [filteredImages.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null)
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [lightboxIndex, goToPrev, goToNext])

  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  const filteredRef = useRef<HTMLDivElement>(null)
  const scrollToGallery = (cat: string) => {
    setSelectedCategory(cat)
    setTimeout(() => filteredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/lagoon1.jpg"
          alt="Mafia Island"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        {loaded && (
          <div className="relative z-10 text-center px-4 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Camera className="h-3.5 w-3.5" />
              Gallery
            </span>
            <h1 className="font-montserrat font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 sm:mb-5 leading-tight tracking-tight">
              Experience Mafia Island
            </h1>
            <p className="text-sm sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Immerse yourself in the beauty of Mafia Island through our collection of stunning photographs
            </p>
          </div>
        )}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float">
          <ChevronDown className="h-5 w-5 text-white/50" />
        </div>
      </section>

      <section ref={filteredRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => scrollToGallery(category)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {selectedCategory === category && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-dark" />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {filteredImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <GridImage
                key={`${image.src}-${index}`}
                image={image}
                index={index}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="h-8 w-8 text-gray-300" />
            </div>
            <h3 className="font-montserrat text-lg font-bold text-gray-900 mb-1">
              No images in this category
            </h3>
            <p className="text-sm text-gray-500">Try selecting a different category</p>
          </div>
        )}

        <div className="text-center mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 sm:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
                Start Your Journey
              </span>
              <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Create Your Own Memories?
              </h2>
              <p className="text-sm sm:text-base text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
                Join us for an unforgettable adventure and capture your own stunning moments in paradise
              </p>
              <a
                href="/tours"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Book Your Adventure
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/60 text-xs font-medium font-montserrat">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-center max-w-lg w-full px-4">
              <p className="text-sm text-white/60 leading-relaxed">
                {filteredImages[lightboxIndex].description}
              </p>
              <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-white/30 mt-1.5 font-montserrat">
                {filteredImages[lightboxIndex].category}
              </span>
            </div>

            <button
              className="absolute left-2 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              onClick={goToPrev}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              className="absolute right-2 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              onClick={goToNext}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4 sm:mx-20 my-20">
              <Image
                key={lightboxIndex}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
