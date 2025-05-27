import Image from "next/image"
import { MapPin, Phone } from "lucide-react"
import { Logo } from "./logo"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-beige-50">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Bringing the finest mangoes from Telangana's orchards directly to your doorstep in Hyderabad. Each mango
              is handpicked and delivered at the perfect ripeness.
            </p>
          </div>
          <div>
            <h3 className="font-heading mb-6 text-lg font-bold text-mango-800">Quick Links</h3>
            <ul className="grid gap-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-mango-600">
                  Home
                </Link>
              </li>
              <li>
                <a href="#products" className="text-sm text-muted-foreground transition-colors hover:text-mango-600">
                  Our Mangoes
                </a>
              </li>
              <li>
                <a href="#order" className="text-sm text-muted-foreground transition-colors hover:text-mango-600">
                  Order Now
                </a>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-mango-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-sm text-muted-foreground transition-colors hover:text-mango-600"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-mango-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading mb-6 text-lg font-bold text-mango-800">Contact Us</h3>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-mango-600" />
                <span className="text-sm text-muted-foreground">Shamshabad, Hyderabad, Telangana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-mango-600" />
                <span className="text-sm text-muted-foreground">Call or WhatsApp: +91 6309985812</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading mb-6 text-lg font-bold text-mango-800">Business Hours</h3>
            <ul className="grid gap-3">
              <li className="flex justify-between">
                <span className="text-sm text-muted-foreground">Monday - Friday:</span>
                <span className="text-sm font-medium">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-sm text-muted-foreground">Saturday:</span>
                <span className="text-sm font-medium">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-sm text-muted-foreground">Sunday:</span>
                <span className="text-sm font-medium">10:00 AM - 2:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 rounded-md bg-mango-100 p-3">
              <p className="text-sm font-medium text-mango-800">Mango Season: March to July</p>
            </div>
          </div>
        </div>
        <div className="relative mt-16 border-t border-mango-200 pt-8 text-center">
          <div className="mb-4 flex justify-center">
            <Image src="/images/logo.png" alt="Royal Mangoes Logo" width={60} height={60} className="h-15 w-15" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Royal Mangoes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
