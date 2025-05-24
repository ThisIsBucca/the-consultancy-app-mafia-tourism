import type { Activity } from "../../types/tourism"
import { ActivityCard } from "../cards/activity-card"

interface MarineSectionProps {
  activities: Activity[]
}

export const MarineSection = ({ activities }: MarineSectionProps) => (
  <div className="space-y-6 sm:space-y-8">
    <div className="text-center mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Marine Adventures</h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        Explore one of the world's most pristine marine environments with incredible wildlife encounters
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  </div>
)
