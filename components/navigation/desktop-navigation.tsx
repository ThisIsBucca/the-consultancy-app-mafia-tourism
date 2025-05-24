"use client"

import type { NavigationTab } from "../../types/tourism"

interface DesktopNavigationProps {
  tabs: NavigationTab[]
  activeSection: string
  onSectionChange: (section: string) => void
}

export const DesktopNavigation = ({ tabs, activeSection, onSectionChange }: DesktopNavigationProps) => (
  <div className="hidden lg:flex flex-wrap justify-center mb-12 bg-white rounded-xl p-2 shadow-lg">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onSectionChange(tab.id)}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
          activeSection === tab.id ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <tab.icon className="w-5 h-5" />
        <span>{tab.label}</span>
      </button>
    ))}
  </div>
)
