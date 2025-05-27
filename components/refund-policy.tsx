import { ShieldCheck } from "lucide-react"

export function RefundPolicy() {
  return (
    <div className="rounded-xl border border-mango-200 bg-gradient-to-r from-mango-50 to-beige-50 p-6 shadow-sm">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mango-100">
          <ShieldCheck className="h-6 w-6 text-mango-600" />
        </div>
        <div>
          <h3 className="font-heading mb-1 text-lg font-bold text-mango-800">
            Refunds? No Problem. We believe in Mango & Customer Satisfaction.
          </h3>
          <p className="text-sm text-muted-foreground">
            If you're not completely satisfied with your mangoes, we'll refund your money - no questions asked.
          </p>
        </div>
        <div className="ml-auto hidden sm:block">
          <div className="rounded-full border border-mango-200 bg-white px-4 py-2 text-xs font-bold text-mango-700 shadow-sm">
            100% Hassle-Free Refunds
          </div>
        </div>
      </div>
    </div>
  )
}
