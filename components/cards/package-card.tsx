import type { Package } from "../../types/tourism"

interface PackageCardProps {
  package: Package
}

export const PackageCard = ({ package: pkg }: PackageCardProps) => (
  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border-2 border-blue-100">
    <div className="text-center mb-4 sm:mb-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{pkg.type} Packages</h3>
      <div className="text-2xl sm:text-4xl lg:text-3xl font-bold text-blue-600">{pkg.price}</div>
      <p className="text-xs sm:text-sm text-gray-500">per person</p>
    </div>
    <div className="space-y-2 sm:space-y-3">
      {pkg.options.map((option, optIndex) => (
        <div key={optIndex} className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
          <span className="text-xs sm:text-sm text-gray-700">{option}</span>
        </div>
      ))}
    </div>
  </div>
)
