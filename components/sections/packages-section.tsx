import type { Package } from "../../types/tourism"
import { PackageCard } from "../cards/package-card"

interface PackagesSectionProps {
  packages: Package[]
}

export const PackagesSection = ({ packages }: PackagesSectionProps) => (
  <div className="space-y-6 sm:space-y-8">
    <div className="text-center mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Tour Packages</h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
        Combine multiple experiences for better value and comprehensive island exploration
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-12">
      {packages.map((pkg, index) => (
        <PackageCard key={index} package={pkg} />
      ))}
    </div>

    {/* Pricing Summary */}
    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Pricing Overview</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        <div className="text-center">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">$10-25</div>
          <p className="text-xs sm:text-sm text-gray-600">Budget Activities</p>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">$25-50</div>
          <p className="text-xs sm:text-sm text-gray-600">Standard Excursions</p>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">$50-70</div>
          <p className="text-xs sm:text-sm text-gray-600">Premium Experiences</p>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-1 sm:mb-2">$70+</div>
          <p className="text-xs sm:text-sm text-gray-600">Specialist Activities</p>
        </div>
      </div>
    </div>
  </div>
)
