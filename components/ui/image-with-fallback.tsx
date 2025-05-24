"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className: string
  emoji: string
}

export const ImageWithFallback = ({ src, alt, className, emoji }: ImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`${className} bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center`}>
        <span className="text-4xl">{emoji}</span>
      </div>
    )
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  )
}
