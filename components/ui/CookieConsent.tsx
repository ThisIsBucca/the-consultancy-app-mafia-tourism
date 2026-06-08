"use client"

import { useState, useEffect } from "react"

type Consent = "accepted" | "rejected" | null

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent")
    if (stored !== "accepted" && stored !== "rejected") {
      setVisible(true)
    }
    setConsent(stored as Consent)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setConsent("accepted")
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setConsent("rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="mx-auto max-w-3xl bg-white rounded-xl shadow-2xl border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-700 leading-relaxed">
          This website uses cookies to improve your experience. By continuing, you accept our{" "}
          <a href="/privacy" className="text-primary underline hover:no-underline">Privacy Policy</a>.
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
