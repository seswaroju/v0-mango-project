import Image from "next/image"

export function PaymentSection() {
  return (
    <div className="premium-card p-6">
      <h3 className="font-heading mb-6 text-xl font-bold text-mango-800">Pay with UPI</h3>
      <div className="mb-6 flex justify-center">
        <div className="overflow-hidden rounded-xl border border-mango-200 bg-white p-6 shadow-sm">
          <Image
            src="/images/upi-qr-code.jpeg"
            alt="UPI QR Code for Royal Mangoes Payment"
            width={200}
            height={200}
            className="h-48 w-48"
          />
        </div>
      </div>
      <div className="mb-6 rounded-lg bg-mango-50 p-4 text-center">
        <p className="text-sm font-medium text-mango-700">
          Scan this QR using any UPI app. Mention your order details in the UPI note.
        </p>
        <p className="mt-2 text-sm text-mango-600">You'll receive a confirmation on WhatsApp shortly.</p>
      </div>

      <p className="mb-4 text-center text-xs text-muted-foreground">Compatible with all major UPI apps:</p>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <Image src="/images/googlepay-logo.png" alt="Google Pay" width={40} height={40} className="h-10 w-10" />
          <span className="text-xs text-muted-foreground">Google Pay</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src="/images/phonepe-logo.png" alt="PhonePe" width={40} height={40} className="h-10 w-10" />
          <span className="text-xs text-muted-foreground">PhonePe</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src="/images/paytm-logo.png" alt="Paytm" width={40} height={40} className="h-10 w-10" />
          <span className="text-xs text-muted-foreground">Paytm</span>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-leaf-200 bg-leaf-50 p-4">
        <p className="text-sm text-leaf-700">
          <span className="font-medium">Order Process:</span> After payment, you'll receive an order confirmation via
          WhatsApp or SMS. Your mangoes will be delivered within 24-48 hours.
        </p>
      </div>

      {/* Payment Instructions */}
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-medium text-mango-800">Payment Instructions:</h4>
        <ol className="text-xs text-muted-foreground space-y-1">
          <li>1. Scan the QR code with any UPI app</li>
          <li>2. Enter the total amount for your order</li>
          <li>3. Add your name and order details in the note</li>
          <li>4. Complete the payment</li>
          <li>5. Screenshot and send payment confirmation via WhatsApp</li>
        </ol>
      </div>
    </div>
  )
}
