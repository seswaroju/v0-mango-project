"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SeasonalCounter } from "./seasonal-counter"
import { SimpleAddressInput } from "./simple-address-input"

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    variety: "",
    quantity: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddressChange = (address: string) => {
    setFormData((prev) => ({ ...prev, address }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - in a real app, this would send the data to a server
    console.log("Order submitted:", formData)
    alert("Thank you for your order! We'll contact you shortly via WhatsApp or SMS to confirm.")
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card p-6">
      <h3 className="font-heading mb-6 text-xl font-bold text-mango-800">Your Order Details</h3>

      <div className="mb-6">
        <SeasonalCounter />
      </div>

      <div className="mb-6 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-sm font-medium text-mango-800">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border-mango-200 focus-visible:ring-mango-500"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-sm font-medium text-mango-800">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="border-mango-200 focus-visible:ring-mango-500"
          />
        </div>
        <SimpleAddressInput value={formData.address} onChange={handleAddressChange} required />
        <div className="grid gap-2">
          <Label htmlFor="variety" className="text-sm font-medium text-mango-800">
            Mango Variety
          </Label>
          <Select value={formData.variety} onValueChange={(value) => handleSelectChange("variety", value)}>
            <SelectTrigger id="variety" className="border-mango-200 focus-visible:ring-mango-500">
              <SelectValue placeholder="Select mango variety" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="himayath">Himayath</SelectItem>
              <SelectItem value="banginapalli">Banginapalli</SelectItem>
              <SelectItem value="rasalu">Rasalu</SelectItem>
              <SelectItem value="assorted">Assorted Box (Mix of all 3)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="quantity" className="text-sm font-medium text-mango-800">
            Quantity (kg)
          </Label>
          <Select value={formData.quantity} onValueChange={(value) => handleSelectChange("quantity", value)}>
            <SelectTrigger id="quantity" className="border-mango-200 focus-visible:ring-mango-500">
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 kg</SelectItem>
              <SelectItem value="3">3 kg</SelectItem>
              <SelectItem value="5">5 kg</SelectItem>
              <SelectItem value="10">10 kg</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="w-full bg-mango-500 text-white hover:bg-mango-600">
        Place Order
      </Button>
    </form>
  )
}
