import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative h-12 w-12 overflow-hidden">
        <Image src="/images/logo.png" alt="Royal Mangoes Logo" fill className="object-contain" />
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-xl font-bold leading-none text-mango-700">Royal Mangoes</span>
        <span className="text-xs text-muted-foreground">Premium Hyderabadi Flavors</span>
      </div>
    </Link>
  )
}
