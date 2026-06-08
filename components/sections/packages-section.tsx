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

    
  </div>
)
