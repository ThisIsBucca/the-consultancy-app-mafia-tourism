import { Info } from "lucide-react"

interface ImportantNoticeProps {
  fee: string
}

export const ImportantNotice = ({ fee }: ImportantNoticeProps) => (
  <div className="max-w-7xl mx-auto px-4 -mt-4 sm:-mt-6 lg:-mt-8 relative z-10">
    <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4 shadow-lg">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <Info className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-red-800 text-sm sm:text-base">Marine Park Entry Fee Required</h3>
          <p className="text-red-700 text-xs sm:text-sm">
            {fee} per person daily fee applies to all marine activities (paid directly to authorities)
          </p>
        </div>
      </div>
    </div>
  </div>
)
