"use client"

import { useState } from "react"
import { SiteHeader } from "./components/layout/site-header"
import { ImportantNotice } from "./components/layout/important-notice"
import { MobileNavigation } from "./components/navigation/mobile-navigation"
import { DesktopNavigation } from "./components/navigation/desktop-navigation"
import { MarineSection } from "./components/sections/marine-section"
import { IslandsSection } from "./components/sections/islands-section"
import { CulturalSection } from "./components/sections/cultural-section"
import { PackagesSection } from "./components/sections/packages-section"
import { Footer } from "./components/layout/footer"
import {
  marineActivities,
  islandActivities,
  culturalActivities,
  sandbanks,
  packages,
  navigationTabs,
  siteInfo,
} from "./data/tourism-data"

const MafiaIslandTourism = () => {
  const [activeSection, setActiveSection] = useState("marine")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case "marine":
        return <MarineSection activities={marineActivities} />
      case "islands":
        return <IslandsSection activities={islandActivities} sandbanks={sandbanks} />
      case "cultural":
        return <CulturalSection activities={culturalActivities} />
      case "packages":
        return <PackagesSection packages={packages} />
      default:
        return <MarineSection activities={marineActivities} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <SiteHeader siteInfo={siteInfo} />
      <ImportantNotice fee={siteInfo.marineParkFee} />

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 lg:py-12 relative">
        <MobileNavigation
          tabs={navigationTabs}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={mobileNavOpen}
          onToggle={toggleMobileNav}
        />

        <DesktopNavigation tabs={navigationTabs} activeSection={activeSection} onSectionChange={setActiveSection} />

        {renderActiveSection()}

        <Footer />
      </div>
    </div>
  )
}

export default MafiaIslandTourism
