import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function TermsPage() {
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
          <h1 className="font-heading mb-4 text-4xl font-bold text-mango-800">Terms & Conditions</h1>
          <p className="text-lg text-muted-foreground">Please read these terms carefully before placing your order</p>
        </div>

        <div className="space-y-8">
          <section className="premium-card p-6">
            <h2 className="font-heading mb-4 text-2xl font-bold text-mango-800">Payment Policy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• All payments must be completed before order processing</p>
              <p>• We accept UPI payments through Google Pay, PhonePe, Paytm, and BHIM</p>
              <p>• Prices include all taxes and delivery charges within Hyderabad</p>
              <p>• Payment confirmation via WhatsApp or SMS within 30 minutes</p>
              <p>• Failed payments will be refunded within 2-3 business days</p>
            </div>
          </section>

          <section className="premium-card p-6">
            <h2 className="font-heading mb-4 text-2xl font-bold text-mango-800">Delivery Zones</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• Currently delivering within Hyderabad city limits</p>
              <p>• Free delivery on all orders (charges included in product price)</p>
              <p>• Delivery within 24-48 hours of order confirmation</p>
              <p>• Delivery time slots: 9 AM - 7 PM</p>
              <p>• Expanding to other cities soon - stay tuned!</p>
            </div>
          </section>

          <section className="premium-card p-6">
            <h2 className="font-heading mb-4 text-2xl font-bold text-mango-800">Order & Cancellation</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• Minimum order quantity: 2 kg per variety</p>
              <p>• Orders can be cancelled within 2 hours of placement</p>
              <p>• Cancellation after dispatch will incur delivery charges</p>
              <p>• Seasonal availability may affect order fulfillment</p>
              <p>• We reserve the right to substitute varieties of similar quality if unavailable</p>
            </div>
          </section>

          <section className="premium-card p-6">
            <h2 className="font-heading mb-4 text-2xl font-bold text-mango-800">Quality Assurance</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• All mangoes are handpicked and quality-checked before dispatch</p>
              <p>• Natural ripening process - no artificial chemicals used</p>
              <p>• Mangoes delivered at optimal ripeness for immediate consumption</p>
              <p>• Storage recommendations provided with each order</p>
              <p>• 100% satisfaction guarantee with hassle-free refunds</p>
            </div>
          </section>

          <section className="premium-card p-6">
            <h2 className="font-heading mb-4 text-2xl font-bold text-mango-800">Data Privacy</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• Your personal information is collected only for order processing</p>
              <p>• We do not share your data with third parties</p>
              <p>• Phone numbers used only for order updates and customer support</p>
              <p>• You can request data deletion by contacting our support team</p>
              <p>• We use secure payment gateways to protect your financial information</p>
            </div>
          </section>

          <section className="premium-card p-6">
            <h2 className="font-heading mb-4 text-2xl font-bold text-mango-800">Liability</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• Royal Mangoes is not liable for allergic reactions to mangoes</p>
              <p>• Customers are advised to check for allergies before consumption</p>
              <p>• Natural variations in taste and appearance are expected</p>
              <p>• We are not responsible for delays due to weather or unforeseen circumstances</p>
              <p>• Maximum liability limited to the order value</p>
            </div>
          </section>
        </div>

        <div className="mt-8 rounded-xl bg-mango-50 p-6 text-center">
          <h3 className="font-heading mb-4 text-xl font-bold text-mango-800">Questions About Our Terms?</h3>
          <p className="mb-4 text-muted-foreground">
            If you have any questions about these terms and conditions, please don't hesitate to contact us.
          </p>
          <a
            href="https://wa.me/916309985812?text=Hi, I have questions about your terms and conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700">Contact Us on WhatsApp</Button>
          </a>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
