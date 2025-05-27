"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "916309985812"
  const defaultMessage = "Hi, I'm interested in Royal Mangoes. Can you help me with availability?"

  const openWhatsApp = (message: string = defaultMessage) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  const quickMessages = ["Check mango availability", "Help with my order", "Delivery information", "Bulk order inquiry"]

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-green-500 p-0 shadow-lg hover:bg-green-600"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-lg border bg-white shadow-xl">
          <div className="rounded-t-lg bg-green-500 p-4 text-white">
            <h3 className="font-medium">Chat with Royal Mangoes</h3>
            <p className="text-sm text-green-100">We typically reply instantly</p>
          </div>
          <div className="p-4">
            <p className="mb-4 text-sm text-muted-foreground">
              Hi! 👋 How can we help you with your mango needs today?
            </p>
            <div className="space-y-2">
              {quickMessages.map((message, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(`Hi, I need help with: ${message}`)}
                  className="w-full rounded-md border border-mango-200 bg-mango-50 p-2 text-left text-sm text-mango-700 transition-colors hover:bg-mango-100"
                >
                  {message}
                </button>
              ))}
            </div>
            <Button onClick={() => openWhatsApp()} className="mt-4 w-full bg-green-500 hover:bg-green-600">
              Start Chat on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
