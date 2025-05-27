import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Use Playfair Display for headings
const fontHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Royal Mangoes - Buy Premium Himayath, Rasalu & Banginapalli Mangoes Online in Hyderabad",
  description:
    "Order fresh premium mangoes online in Hyderabad. Himayath ₹270/kg, Rasalu ₸180/kg, Banginapalli ₹170/kg. Free delivery included. Same day dispatch. 100% satisfaction guaranteed.",
  keywords:
    "buy mangoes online, Himayath mango, Rasalu mango, Banginapalli mango, premium mangoes Hyderabad, mango delivery, fresh mangoes",
  generator: "v0.dev",
  openGraph: {
    title: "Royal Mangoes - Premium Mango Delivery in Hyderabad",
    description:
      "Fresh premium mangoes delivered to your doorstep. Free delivery, same day dispatch, 100% satisfaction guaranteed.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
