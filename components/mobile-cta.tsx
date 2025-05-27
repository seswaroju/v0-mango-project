"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-mango-200 p-4 shadow-lg md:hidden">
      <div className="flex gap-3">
        <a href="#order" className="flex-1">
          <Button className="w-full bg-mango-500 hover:bg-mango-600">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Order Now
          </Button>
        </a>
        <a
          href="https://wa.me/916309985812?text=Hi, I want to order Royal Mangoes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
            WhatsApp
          </Button>
        </a>
      </div>
    </div>
  )
}
