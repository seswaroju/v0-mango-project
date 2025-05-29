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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const payload = {
    name: formData.name,
    phone: formData.phone,
    address: formData.address,
    mangoType: formData.variety.charAt(0).toUpperCase() + formData.variety.slice(1),
    quantity: parseInt(formData.quantity),
  }

  try {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    const result = await res.json()

    if (result.success) {
      alert("✅ Order submitted successfully! We'll confirm via WhatsApp shortly.")
      setFormData({ name: '', phone: '', address: '', variety: '', quantity: '' })
    } else {
      alert('❌ Submission failed. Please try again or contact support.')
      console.error(result.error)
    }
  } catch (err) {
    alert('❌ Network error. Please try again.')
    console.error(err)
  }
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
