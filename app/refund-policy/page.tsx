import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Shield, Clock, Camera, CreditCard } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="container py-8">
      <div className="mb-6 flex items-center">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="font-heading mb-4 text-4xl font-bold text-mango-800">Refund Policy</h1>
          <p className="text-lg text-muted-foreground">We strive for your complete satisfaction with every order</p>
        </div>

        {/* Hero Banner */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-leaf-500 to-leaf-600 p-6 text-center text-white">
          <Shield className="mx-auto mb-4 h-12 w-12" />
          <h2 className="font-heading mb-2 text-2xl font-bold">100% Satisfaction Guarantee</h2>
          <p className="text-leaf-100">
            If you're not completely happy with your mangoes, we'll make it right - no questions asked.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="premium-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-mango-100 p-2">
                <Shield className="h-6 w-6 text-mango-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-mango-800">Eligibility</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Damaged mangoes upon delivery</li>
              <li>• Overripe or underripe mangoes</li>
              <li>• Wrong variety delivered</li>
              <li>• Quality not meeting our standards</li>
              <li>• Missing items from your order</li>
            </ul>
          </div>

          <div className="premium-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-mango-100 p-2">
                <Clock className="h-6 w-6 text-mango-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-mango-800">Timeline</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Contact us within 24 hours of delivery</li>
              <li>• Refund processed within 2-3 business days</li>
              <li>• Replacement orders dispatched same day</li>
              <li>• WhatsApp support available 9 AM - 7 PM</li>
            </ul>
          </div>

          <div className="premium-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-mango-100 p-2">
                <Camera className="h-6 w-6 text-mango-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-mango-800">Process</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Send photos of the issue via WhatsApp</li>
              <li>• Our team will review within 2 hours</li>
              <li>• Choose refund or replacement</li>
              <li>• No need to return the mangoes</li>
            </ul>
          </div>

          <div className="premium-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-full bg-mango-100 p-2">
                <CreditCard className="h-6 w-6 text-mango-600" />
              </div>
              <h3 className="font-heading text-xl font-bold text-mango-800">Refund Method</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Full refund to original payment method</li>
              <li>• UPI refunds processed instantly</li>
              <li>• Bank transfers within 2-3 days</li>
              <li>• Store credit option available</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 rounded-xl bg-mango-50 p-6 text-center">
          <h3 className="font-heading mb-4 text-xl font-bold text-mango-800">Need Help?</h3>
          <p className="mb-4 text-muted-foreground">
            Our customer support team is here to help you with any concerns about your order.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/916309985812?text=Hi, I need help with my Royal Mangoes order"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 sm:w-auto">WhatsApp Support</Button>
            </a>
            <a href="tel:+916309985812">
              <Button variant="outline" className="w-full border-mango-200 text-mango-700 hover:bg-mango-50 sm:w-auto">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
