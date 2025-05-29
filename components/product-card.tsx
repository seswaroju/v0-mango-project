"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  image: string
  description: string
  price: number
  status: string
}

export function ProductCard({ name, image, description, price, status }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    console.log(`Failed to load image: ${image}`)
    setImageError(true)
  }

  return (
    <div className="premium-card group overflow-hidden p-1">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {status && (
          <Badge
            variant="outline"
            className="absolute right-3 top-3 z-10 border-mango-300 bg-white/90 px-3 py-1 text-xs font-medium text-mango-700 backdrop-blur-sm"
          >
            {status}
          </Badge>
        )}
        {!imageError ? (
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-mango-100">
            <span className="text-lg font-medium text-mango-800">{name}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading mb-2 text-2xl font-bold text-mango-800">{name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-mango-600">₹{price}/kg</div>
            <div className="text-xs font-medium text-leaf-600">FREE Delivery Included!</div>
          </div>
          <div className="text-xs text-muted-foreground">Min Order: 2kg</div>
        </div>
        <a href="#order">
          <Button className="w-full bg-mango-500 text-white hover:bg-mango-600">Order Now</Button>
        </a>
      </div>
    </div>
  )
}
