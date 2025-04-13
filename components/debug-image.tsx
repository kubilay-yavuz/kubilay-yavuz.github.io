"use client"

import { useState } from "react"

export default function DebugImage() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="fixed top-20 right-4 z-50 bg-background p-4 rounded-lg shadow-lg border border-primary">
      <h3 className="text-lg font-bold mb-2">Image Debug</h3>
      <img
        src="/images/kubilay-profile.png"
        alt="Debug"
        className="w-32 h-32 object-cover mb-2 border border-primary"
      />
      <button onClick={() => setIsVisible(false)} className="text-xs text-primary hover:underline">
        Close
      </button>
    </div>
  )
}
