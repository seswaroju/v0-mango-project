"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Logo() {
  const [imageError, setImageError] = useState(false)

  return (
    <Link href="/" className="flex items-center gap-2">
      {!imageError ? (
        <Image
          src="/images/logo.png"
          alt="Royal Mangoes Logo"
          width={40}
          height={40}
          className="h-10 w-10"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mango-500">
          <span className="text-sm font-bold text-white">RM</span>
        </div>
      )}
      <span className="font-heading text-xl font-bold">Royal Mangoes</span>
    </Link>
  )
}
