import type { CulturalActivity } from "../../types/tourism"
import { ImageWithFallback } from "../ui/image-with-fallback"

interface CulturalActivityCardProps {
  activity: CulturalActivity
}

export const CulturalActivityCard = ({ activity }: CulturalActivityCardProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-36 sm:h-48 overflow-hidden">
      <ImageWithFallback
        src={activity.image || "/placeholder.svg"}
        alt={activity.name}
        emoji="🎭"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex justify-between items-start mb-2 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">{activity.name}</h3>
        <span className="text-xl sm:text-2xl font-bold text-green-600">{activity.price}</span>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{activity.description}</p>
    </div>
  </div>
)
