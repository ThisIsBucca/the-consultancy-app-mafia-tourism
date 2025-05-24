"use client"

import { Menu, X } from "lucide-react"
import type { NavigationTab } from "../../types/tourism"

interface MobileNavigationProps {
  tabs: NavigationTab[]
  activeSection: string
  onSectionChange: (section: string) => void
  isOpen: boolean
  onToggle: () => void
}

export const MobileNavigation = ({ tabs, activeSection, onSectionChange, isOpen, onToggle }: MobileNavigationProps) => {
  const activeTab = tabs.find((tab) => tab.id === activeSection)

  return (
    <div className="lg:hidden">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full bg-white rounded-xl p-3 shadow-lg mb-4"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
      >
        <div className="flex items-center space-x-2">
          {activeTab?.icon && <activeTab.icon className="w-5 h-5 text-blue-600" />}
          <span className="font-medium">{activeTab?.label || "Select Category"}</span>
        </div>
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="bg-white rounded-xl shadow-lg p-2 mb-6 absolute z-10 left-4 right-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onSectionChange(tab.id)
                onToggle()
              }}
              className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-medium text-left transition-all duration-200 ${
                activeSection === tab.id ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
