import type { Activity, Sandbank } from "../../types/tourism"
import { ActivityCard } from "../cards/activity-card"
import { SandbankCard } from "../cards/sandbank-card"

interface IslandsSectionProps {
  activities: Activity[]
  sandbanks: Sandbank[]
}

export const IslandsSection = ({ activities, sandbanks }: IslandsSectionProps) => (
  <div className="space-y-6 sm:space-y-8">
    <div className="text-center mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Island Exploration</h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        Discover hidden lagoons, ancient ruins, and pristine sandbanks throughout the archipelago
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-12">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>

    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
        <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🏖️</span>
        Exclusive Sandbank Experiences
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {sandbanks.map((sandbank, index) => (
          <SandbankCard key={index} sandbank={sandbank} />
        ))}
      </div>
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
        <p className="text-xs sm:text-sm text-blue-800">
          <strong>Note:</strong> Sandbanks are temporary islands that appear/disappear with tidal cycles. All locations
          include BBQ lunch and are accessible only by traditional dhow boats.
        </p>
      </div>
    </div>
  </div>
)
