"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="px-0 md:hidden" aria-label="Toggle Menu">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="flex flex-col gap-4 px-4 py-8">
          <a
            href="#products"
            className="flex py-2 text-lg font-medium transition-colors hover:text-mango-600"
            onClick={() => setOpen(false)}
          >
            Our Mangoes
          </a>
          <a
            href="#order"
            className="flex py-2 text-lg font-medium transition-colors hover:text-mango-600"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
          <a
            href="#about"
            className="flex py-2 text-lg font-medium transition-colors hover:text-mango-600"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="flex py-2 text-lg font-medium transition-colors hover:text-mango-600"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
