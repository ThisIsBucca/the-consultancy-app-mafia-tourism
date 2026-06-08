"use client"

import { createContext, useContext, useCallback, useRef, useState } from "react"

interface LoaderContextType {
  registerImage: (id: string) => void
  onImageLoaded: (id: string) => void
  allLoaded: boolean
  progress: number
}

const LoaderContext = createContext<LoaderContextType>({
  registerImage: () => {},
  onImageLoaded: () => {},
  allLoaded: false,
  progress: 0,
})

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const pendingRef = useRef(new Set<string>())
  const [allLoaded, setAllLoaded] = useState(false)
  const [total, setTotal] = useState(0)
  const [loadedCount, setLoadedCount] = useState(0)
  const progress = total === 0 ? 0 : Math.round((loadedCount / total) * 100)

  const registerImage = useCallback((id: string) => {
    if (!pendingRef.current.has(id)) {
      pendingRef.current.add(id)
      setTotal(prev => prev + 1)
    }
  }, [])

  const onImageLoaded = useCallback((id: string) => {
    if (pendingRef.current.has(id)) {
      pendingRef.current.delete(id)
      setLoadedCount(prev => prev + 1)
      if (pendingRef.current.size === 0) {
        setAllLoaded(true)
      }
    }
  }, [])

  return (
    <LoaderContext.Provider value={{ registerImage, onImageLoaded, allLoaded, progress }}>
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)
