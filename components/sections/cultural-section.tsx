import type { CulturalActivity } from "../../types/tourism"
import { CulturalActivityCard } from "../cards/cultural-activity-card"

interface CulturalSectionProps {
  activities: CulturalActivity[]
}

export const CulturalSection = ({ activities }: CulturalSectionProps) => (
  <div className="space-y-6 sm:space-y-8">
    <div className="text-center mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Cultural Experiences</h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        Immerse yourself in authentic local culture and unique island traditions
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {activities.map((activity, index) => (
        <CulturalActivityCard key={index} activity={activity} />
      ))}
    </div>

    {/* Special Events */}
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 lg:p-8 border border-orange-200">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">✨</span>
        Special Weekend Events
      </h3>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-3 sm:p-4">
          <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Afro Sunset Cruise & BBQ</h4>
          <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
            Every Saturday evening (advance booking required)
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Beach bonfire, sunset cruise, and community dining experience
          </p>
        </div>
      </div>
    </div>
  </div>
)
