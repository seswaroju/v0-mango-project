"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface AddressAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
}

declare global {
  interface Window {
    google?: any
    initGoogleMaps?: () => void
  }
}

export function AddressAutocomplete({ value, onChange, placeholder, required }: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [useTextarea, setUseTextarea] = useState(false)

  useEffect(() => {
    const initializeAutocomplete = () => {
      if (inputRef.current && window.google && window.google.maps && window.google.maps.places) {
        try {
          const autocompleteInstance = new window.google.maps.places.Autocomplete(inputRef.current, {
            types: ["address"],
            componentRestrictions: { country: "IN" },
            fields: ["formatted_address", "geometry", "address_components"],
          })

          autocompleteInstance.addListener("place_changed", () => {
            const place = autocompleteInstance.getPlace()
            if (place.formatted_address) {
              onChange(place.formatted_address)
            }
          })

          setAutocomplete(autocompleteInstance)
          setIsLoaded(true)
          setHasError(false)
        } catch (error) {
          console.error("Error initializing Google Maps Autocomplete:", error)
          setHasError(true)
          setUseTextarea(true)
        }
      }
    }

    // Listen for Google Maps API errors
    window.addEventListener("error", (event) => {
      if (event.message && event.message.includes("Google Maps")) {
        console.error("Google Maps API Error:", event.message)
        setHasError(true)
        setUseTextarea(true)
      }
    })

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initializeAutocomplete()
    } else {
      // Set up a callback for when Google Maps loads
      window.initGoogleMaps = initializeAutocomplete

      // If Google Maps script isn't loaded yet, wait for it
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.places) {
          clearInterval(checkGoogleMaps)
          initializeAutocomplete()
        }
      }, 100)

      // Clean up interval after 5 seconds and fallback to textarea
      setTimeout(() => {
        clearInterval(checkGoogleMaps)
        if (!isLoaded) {
          setHasError(true)
          setUseTextarea(true)
        }
      }, 5000)
    }

    return () => {
      if (autocomplete) {
        try {
          window.google?.maps.event.clearInstanceListeners(autocomplete)
        } catch (error) {
          console.error("Error cleaning up autocomplete:", error)
        }
      }
    }
  }, [onChange, isLoaded])

  // If there's an error or Google Maps isn't available, use textarea
  if (hasError || useTextarea) {
    return (
      <div className="grid gap-2">
        <Label htmlFor="address" className="text-sm font-medium text-mango-800">
          Delivery Address
        </Label>
        <Textarea
          ref={textareaRef}
          id="address"
          name="address"
          placeholder="Enter your complete delivery address including area, landmark, and pin code"
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-mango-200 focus-visible:ring-mango-500"
          rows={3}
        />
        <p className="text-xs text-muted-foreground">
          Please enter your complete address including area, landmark, and pin code for accurate delivery
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-2">
      <Label htmlFor="address" className="text-sm font-medium text-mango-800">
        Delivery Address
      </Label>
      <Input
        ref={inputRef}
        id="address"
        name="address"
        placeholder={placeholder || "Start typing your address..."}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-mango-200 focus-visible:ring-mango-500"
      />
      <p className="text-xs text-muted-foreground">
        {isLoaded ? "Start typing and select your address from the suggestions" : "Loading address suggestions..."}
      </p>
    </div>
  )
}
