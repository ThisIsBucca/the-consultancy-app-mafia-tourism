import { MapPin, Waves, Users } from "lucide-react"
import type { SiteInfo } from "../../types/tourism"

interface SiteHeaderProps {
  siteInfo: SiteInfo
}

export const SiteHeader = ({ siteInfo }: SiteHeaderProps) => (
  <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 text-white">
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">🏝️ {siteInfo.title}</h1>
        <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto">{siteInfo.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 lg:space-x-8 space-y-2 sm:space-y-0 text-xs sm:text-sm">
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{siteInfo.location}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Waves className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Marine Protected Area</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Local Community Tours</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)
