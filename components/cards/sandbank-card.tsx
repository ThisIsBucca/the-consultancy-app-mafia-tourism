import type { Sandbank } from "../../types/tourism"
import { ImageWithFallback } from "../ui/image-with-fallback"

interface SandbankCardProps {
  sandbank: Sandbank
}

export const SandbankCard = ({ sandbank }: SandbankCardProps) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-24 sm:h-32 overflow-hidden">
      <ImageWithFallback
        src={sandbank.image || "/placeholder.svg"}
        alt={sandbank.name}
        emoji="🏖️"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-3 sm:p-4">
      <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{sandbank.name}</h4>
      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">{sandbank.price}</div>
      <p className="text-xs sm:text-sm text-gray-600">{sandbank.features}</p>
    </div>
  </div>
)
