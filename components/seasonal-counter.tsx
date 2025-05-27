"use client"

import { useEffect, useState } from "react"

export function SeasonalCounter() {
  const [days, setDays] = useState(12)

  useEffect(() => {
    const timer = setInterval(() => {
      setDays((prevDays) => {
        if (prevDays <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevDays
      })
    }, 86400000) // Update once per day (24 hours)

    return () => clearInterval(timer)
  }, [])

  if (days <= 0) {
    return (
      <div className="rounded-lg border border-leaf-200 bg-leaf-50 p-3 text-center shadow-sm">
        <p className="text-sm font-medium text-leaf-700">Mango season has ended. Pre-book for next season!</p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-mango-200 bg-mango-50 p-3 text-center shadow-sm">
      <p className="text-sm font-medium text-mango-700">
        <span className="font-bold">Rasalu Season Ends in {days} Days</span> – Order Now!
      </p>
    </div>
  )
}
