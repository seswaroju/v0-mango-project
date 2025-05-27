"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SimpleAddressInputProps {
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export function SimpleAddressInput({ value, onChange, required }: SimpleAddressInputProps) {
  const [area, setArea] = useState("")
  const [landmark, setLandmark] = useState("")
  const [pincode, setPincode] = useState("")

  const hyderabadAreas = [
    "Banjara Hills",
    "Jubilee Hills",
    "Gachibowli",
    "Hitech City",
    "Kondapur",
    "Madhapur",
    "Kukatpally",
    "Miyapur",
    "Begumpet",
    "Secunderabad",
    "Ameerpet",
    "Somajiguda",
    "Abids",
    "Nampally",
    "Charminar",
    "Tolichowki",
    "Mehdipatnam",
    "Lakdi Ka Pul",
    "Masab Tank",
    "Malakpet",
    "Dilsukhnagar",
    "LB Nagar",
    "Uppal",
    "Kompally",
    "Shamshabad",
    "Other",
  ]

  const updateFullAddress = (newArea: string, newLandmark: string, newPincode: string) => {
    const parts = []
    if (newLandmark.trim()) parts.push(newLandmark.trim())
    if (newArea && newArea !== "Other") parts.push(newArea)
    if (newPincode.trim()) parts.push(newPincode.trim())
    parts.push("Hyderabad, Telangana")

    onChange(parts.join(", "))
  }

  const handleAreaChange = (newArea: string) => {
    setArea(newArea)
    updateFullAddress(newArea, landmark, pincode)
  }

  const handleLandmarkChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newLandmark = e.target.value
    setLandmark(newLandmark)
    updateFullAddress(area, newLandmark, pincode)
  }

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPincode = e.target.value
    setPincode(newPincode)
    updateFullAddress(area, landmark, newPincode)
  }

  return (
    <div className="grid gap-4">
      <Label className="text-sm font-medium text-mango-800">Delivery Address</Label>

      <div className="grid gap-3">
        <div className="grid gap-2">
          <Label htmlFor="area" className="text-xs font-medium text-mango-700">
            Area/Locality
          </Label>
          <Select value={area} onValueChange={handleAreaChange}>
            <SelectTrigger id="area" className="border-mango-200 focus-visible:ring-mango-500">
              <SelectValue placeholder="Select your area" />
            </SelectTrigger>
            <SelectContent>
              {hyderabadAreas.map((areaName) => (
                <SelectItem key={areaName} value={areaName}>
                  {areaName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="landmark" className="text-xs font-medium text-mango-700">
            House/Flat No., Street, Landmark
          </Label>
          <Textarea
            id="landmark"
            placeholder="e.g., Flat 301, Green Valley Apartments, Near Metro Station"
            value={landmark}
            onChange={handleLandmarkChange}
            className="border-mango-200 focus-visible:ring-mango-500"
            rows={2}
            required={required}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="pincode" className="text-xs font-medium text-mango-700">
            Pin Code
          </Label>
          <Input
            id="pincode"
            placeholder="e.g., 500032"
            value={pincode}
            onChange={handlePincodeChange}
            className="border-mango-200 focus-visible:ring-mango-500"
            maxLength={6}
            pattern="[0-9]{6}"
          />
        </div>
      </div>

      {value && (
        <div className="rounded-md bg-mango-50 p-3">
          <p className="text-xs font-medium text-mango-700 mb-1">Complete Address:</p>
          <p className="text-sm text-mango-800">{value}</p>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Please provide complete address details for accurate delivery within Hyderabad
      </p>
    </div>
  )
}
