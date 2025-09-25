import { Info } from "lucide-react"
import type { Activity } from "../../types/tourism"
import { ImageWithFallback } from "../ui/image-with-fallback"
import { CategoryBadge } from "../ui/category-badge"
import { ActivityMetadata } from "../ui/activity-metadata"
import { ActivityHighlights } from "../ui/activity-highlights"

interface ActivityCardProps {
  activity: Activity
}

export const ActivityCard = ({ activity }: ActivityCardProps) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
    {/* Image Header */}
    <div className="relative h-40 sm:h-48 overflow-hidden">
      <ImageWithFallback
        src={activity.image || "/placeholder.svg"}
        alt={activity.title}
        emoji={activity.emoji}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
        <CategoryBadge category={activity.category} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3 sm:p-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">{activity.title}</h3>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 sm:p-6">
      {/* Price Section */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {activity.price && <span className="text-xl sm:text-2xl font-bold text-blue-600">{activity.price}</span>}
          {activity.additionalFees && (
            <span className="text-xs sm:text-sm text-gray-500">+ {activity.additionalFees} fees</span>
          )}
        </div>z
      </div>

      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{activity.description}</p>

      <ActivityMetadata activity={activity} />

      {activity.highlights && <ActivityHighlights highlights={activity.highlights} />}

      {activity.note && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 sm:p-3 mt-3 sm:mt-4">
          <div className="flex items-center space-x-2">
            <Info className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
            <span className="text-amber-800 text-xs sm:text-sm">{activity.note}</span>
          </div>
        </div>
      )}
    </div>
  </div>
)
