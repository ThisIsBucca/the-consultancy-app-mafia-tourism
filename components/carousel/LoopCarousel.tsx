"use client"

import { useState, useEffect } from 'react'
import { useLoader } from '@/lib/loader-context'

const slides = [
  { id: 1, src: '/lagoon1.jpg', alt: 'blue lagoon' },
  // { id: 2, src: '/turtle1.jpg', alt: 'turtle' },
  // { id: 3, src: '/whaleface.jpg', alt: 'whale face' },
  { id: 4, src: '/whaleshark-blue-3.jpg', alt: 'whale shark' },
  // { id: 5, src: '/coralreef2.jpg', alt: 'coral reef' },
  // { id: 6, src: '/coralreef1.jpg', alt: 'coral reef' },
  { id: 7, src: '/bat1.jpg', alt: 'bat' },
]

export default function LoopCarousel() {
  const [current, setCurrent] = useState(0)
  const { registerImage, onImageLoaded } = useLoader()

  useEffect(() => {
    const heroImages = slides.slice(0, 2)
    heroImages.forEach((slide) => {
      registerImage(slide.src)
      const img = new Image()
      img.onload = img.onerror = () => onImageLoaded(slide.src)
      img.src = slide.src
    })
  }, [registerImage, onImageLoaded])

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full h-full relative" style={{ minHeight: 'inherit' }}>
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${s.src})`,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.7s ease-in-out',
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}
      {/* Subtle overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/20 z-[2]" />
    </div>
  )
}
