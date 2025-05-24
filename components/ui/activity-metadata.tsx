import { Clock, Calendar, MapPin, Info } from "lucide-react"
import type { Activity } from "../../types/tourism"

interface ActivityMetadataProps {
  activity: Activity
}

export const ActivityMetadata = ({ activity }: ActivityMetadataProps) => (
  <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
    {activity.duration && (
      <div className="flex items-center space-x-1 text-gray-500">
        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.duration}</span>
      </div>
    )}
    {activity.startTime && (
      <div className="flex items-center space-x-1 text-gray-500">
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.startTime}</span>
      </div>
    )}
    {activity.season && (
      <div className="flex items-center space-x-1 text-gray-500">
        <Info className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.season}</span>
      </div>
    )}
    {activity.location && (
      <div className="flex items-center space-x-1 text-gray-500">
        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.location}</span>
      </div>
    )}
    {activity.bestTime && (
      <div className="flex items-center space-x-1 text-gray-500">
        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.bestTime}</span>
      </div>
    )}
    {activity.size && (
      <div className="flex items-center space-x-1 text-gray-500">
        <Info className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.size}</span>
      </div>
    )}
    {activity.period && (
      <div className="flex items-center space-x-1 text-gray-500">
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
        <span>{activity.period}</span>
      </div>
    )}
  </div>
)
