"use client"

import { useState, useEffect } from "react"
import { useLoader } from "@/lib/loader-context"

export default function Loader() {
  const { allLoaded, progress } = useLoader()
  const [show, setShow] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (allLoaded) {
      setFading(true)
    }
  }, [allLoaded])

  useEffect(() => {
    if (fading) {
      const timer = setTimeout(() => setShow(false), 500)
      return () => clearTimeout(timer)
    }
  }, [fading])

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl text-foreground tracking-tight">
            Mafia Island
          </h1>
          <span className="font-playfair text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-primary to-primary-dark">
            - Authentic -
          </span>
        </div>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="font-montserrat text-xs tracking-widest text-muted-foreground">
          {77 + Math.round((progress / 100) * 23)}%
        </p>
      </div>
    </div>
  )
}
