"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { SimpleAddressInput } from "./simple-address-input"

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    mangoType: "",
    quantity: 1,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      console.log("🚀 Submitting order:", formData)

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log("📥 API Response:", result)

      if (result.success) {
        setSubmitStatus("success")
        // Reset form
        setFormData({
          name: "",
          phone: "",
          address: "",
          mangoType: "",
          quantity: 1,
        })

        // Show WhatsApp message after successful order
        const message = `Hi! I've placed an order for ${formData.quantity}kg of ${formData.mangoType} mangoes. Order ID: ${result.id}. Please confirm my order.`
        const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`

        setTimeout(() => {
          window.open(whatsappUrl, "_blank")
        }, 2000)
      } else {
        setSubmitStatus("error")
        setErrorMessage(result.error || "Failed to place order. Please try again.")
      }
    } catch (error) {
      console.error("❌ Order submission error:", error)
      setSubmitStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateTotal = () => {
    const rates: Record<string, number> = {
      himayath: 270,
      banginapalli: 170,
      rasalu: 180,
      assorted: 200,
    }
    return (rates[formData.mangoType?.toLowerCase()] || 0) * formData.quantity
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-amber-800">Your Order Details</CardTitle>
      </CardHeader>
      <CardContent>
        {submitStatus === "success" ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Order Placed Successfully!</h3>
            <p className="text-gray-600 mb-4">We'll contact you on WhatsApp to confirm your order.</p>
            <Button onClick={() => setSubmitStatus("idle")} className="bg-amber-600 hover:bg-amber-700">
              Place Another Order
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <Label htmlFor="address">Delivery Address</Label>
              <SimpleAddressInput
                value={formData.address}
                onChange={(address) => setFormData({ ...formData, address })}
              />
            </div>

            <div>
              <Label htmlFor="mangoType">Mango Variety</Label>
              <Select
                value={formData.mangoType}
                onValueChange={(value) => setFormData({ ...formData, mangoType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select mango variety" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="himayath">Himayath Mangoes - ₹270/kg</SelectItem>
                  <SelectItem value="banginapalli">Banginapalli Mangoes - ₹170/kg</SelectItem>
                  <SelectItem value="rasalu">Rasalu Mangoes - ₹180/kg</SelectItem>
                  <SelectItem value="assorted">Assorted Mix - ₹200/kg</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Select
                value={formData.quantity.toString()}
                onValueChange={(value) => setFormData({ ...formData, quantity: Number.parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 10, 15, 20].map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty} kg
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.mangoType && (
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="text-xl font-bold text-amber-700">₹{calculateTotal()}</span>
                </div>
                <p className="text-sm text-amber-600 mt-1">Free delivery across Hyderabad</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              disabled={isSubmitting || !formData.name || !formData.phone || !formData.address || !formData.mangoType}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Placing Order...
                </>
              ) : (
                "Place Order"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By placing an order, you agree to our terms and conditions. We'll contact you via WhatsApp to confirm your
              order.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
