"use client"

import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu"
import { ProductCard } from "@/components/product-card"
import { OrderForm } from "@/components/order-form"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { Logo } from "@/components/logo"
import { RefundPolicy } from "@/components/refund-policy"
import { PaymentSection } from "@/components/payment-section"
import { Testimonial } from "@/components/testimonial"
import { DeliveryInfo } from "@/components/delivery-info"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between py-4">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium transition-colors hover:text-mango-600">
              Our Mangoes
            </a>
            <a href="#order" className="text-sm font-medium transition-colors hover:text-mango-600">
              Order Now
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-mango-600">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-mango-600">
              Contact
            </a>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Mango background"
              fill
              className="object-cover brightness-[0.8]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-28 text-center text-white md:py-36">
            <div className="mb-6 inline-block rounded-full bg-mango-500/20 px-4 py-1.5 text-sm font-medium text-mango-100">
              Season Special
            </div>
            <h1 className="font-heading mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Juicy Summer Royalty <br className="hidden md:block" />
              <span className="text-mango-300">Now Shipping Pan Hyderabad!</span>
            </h1>
            <p className="mb-8 max-w-[42rem] text-lg text-mango-100 sm:text-xl">
              Delivering Fresh Rasalu, Banginapalli & Himayath right to your doorstep
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex h-12 items-center justify-center rounded-md bg-mango-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-mango-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Varieties
              </button>
              <button
                onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex h-12 items-center justify-center rounded-md border border-mango-200/30 bg-white/10 px-8 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Scan to Pay
              </button>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 animate-bounce">
            <button
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm"
            >
              <ChevronDown className="h-6 w-6 text-white" />
            </button>
          </div>
        </section>

        {/* Refund Banner */}
        <section className="py-6 md:py-8">
          <div className="container">
            <RefundPolicy />
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section-spacing bg-beige-50">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
                Mangoes <span className="text-mango-600">Fit for a Nizam</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Our premium selection of the finest mangoes from the orchards of Telangana, handpicked at the perfect
                ripeness for an unforgettable taste experience.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ProductCard
                name="Himayath"
                image="/images/himayath.jpg"
                description="The king of mangoes with a rich, aromatic flavor and a smooth, fiber-less pulp. A true royal delight."
                price={270}
                status="In Stock"
              />
              <ProductCard
                name="Banginapalli"
                image="/images/banginapalli.jpg"
                description="Known for its golden yellow color and sweet, nectar-like taste. A perfect balance of sweetness and tanginess."
                price={170}
                status="Limited Stock"
              />
              <ProductCard
                name="Rasalu"
                image="/images/rasalu.jpg"
                description="Miyaan, taste the Royal Rasalu! Juicy, aromatic, and incredibly sweet - a true Hyderabadi favorite."
                price={180}
                status="Back in Stock!"
              />
            </div>
          </div>
        </section>

        {/* Cultural Accent Section */}
        <section className="bg-gradient-to-r from-mango-500 to-mango-600 py-16 text-white md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <Image src="/images/logo.png" alt="Royal Mangoes Logo" width={80} height={80} className="h-20 w-20" />
              </div>
              <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
                Miyaan, Kya Aapko Rasalu Pasand Nahi?
              </h2>
              <p className="mb-6 text-lg text-mango-100">
                Our mangoes are as iconic to Hyderabad as the Charminar. Grown with care in the fertile soils of
                Shamshabad using only organic fertilizers, each mango carries the rich legacy of our region's
                agricultural excellence.
              </p>
              <a
                href="#order"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-mango-600 shadow transition-colors hover:bg-mango-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Order Abhi Karo!
              </a>
            </div>
          </div>
        </section>

        {/* Delivery Info Section */}
        <DeliveryInfo />

        {/* Order Section */}
        <section id="order" className="section-spacing">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
                Swad <span className="text-mango-600">Hyderabad ka, Seedha Ghar Tak</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Fresh mangoes delivered to your doorstep within Hyderabad.
                <span className="font-medium text-mango-600">
                  {" "}
                  Currently delivering only in Hyderabad – Expanding soon!
                </span>
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <OrderForm />
              <PaymentSection />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-spacing bg-beige-50">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
                What Our <span className="text-mango-600">Customers Say</span>
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Testimonial
                quote="The Himayath mangoes were absolutely divine! The sweetness and aroma took me back to my childhood. Delivery was prompt and the mangoes were perfectly ripe."
                author="Priya Reddy"
                location="Banjara Hills"
              />
              <Testimonial
                quote="Banginapalli mangoes from Royal Mangoes are the best in Hyderabad! The ordering process was simple, and the UPI payment was convenient. Will definitely order again."
                author="Mohammed Hussain"
                location="Tolichowki"
              />
              <Testimonial
                quote="My kids loved the Himayath! Super fresh and the taste is unmatched. The WhatsApp updates about my order were very helpful."
                author="Farida"
                location="Banjara Hills"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-spacing">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-heading mb-6 text-3xl font-bold md:text-4xl">
                  About <span className="text-mango-600">Royal Mangoes</span>
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Founded in 1993, Royal Mangoes has been bringing the finest mango varieties to Hyderabad homes for
                  over 30 years. Our journey began with a simple mission: to deliver premium quality mangoes directly
                  from orchards to your table, eliminating middlemen and ensuring freshness.
                </p>
                <p className="mb-4 text-muted-foreground">
                  We work directly with farmers in Shamshabad in a highly maintained area, using only organic
                  fertilizers for high quality growth of each mango. Our mangoes are naturally ripened without any
                  artificial chemicals, preserving their authentic taste and nutritional value.
                </p>
                <p className="mb-6 text-muted-foreground">
                  What sets us apart is our commitment to quality and customer satisfaction. Each mango is handpicked,
                  carefully sorted, and delivered at the perfect ripeness for you to enjoy.
                </p>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-mango-100 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-mango-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Quality Guaranteed</h3>
                    <p className="text-sm text-muted-foreground">100% satisfaction or money back</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image src="/images/hero-bg.jpg" alt="Mango orchard" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Chat */}
      <WhatsAppChat />

      {/* Mobile CTA */}
      <MobileCTA />
    </div>
  )
}
