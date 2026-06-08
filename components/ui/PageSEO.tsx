"use client"
import { useEffect } from "react"

interface PageSEOProps {
  title: string
  description: string
  keywords?: string
  image?: string
}

export default function PageSEO({ title, description, keywords, image }: PageSEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Mafia Island Authentic`
    document.title = fullTitle

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name"
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta("description", description)
    if (keywords) setMeta("keywords", keywords)
    setMeta("og:title", fullTitle, true)
    setMeta("og:description", description, true)
    if (image) setMeta("og:image", image, true)
    setMeta("twitter:title", fullTitle)
    setMeta("twitter:description", description)
    if (image) setMeta("twitter:image", image)
  }, [title, description, keywords, image])

  return null
}
