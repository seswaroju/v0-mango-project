import { Truck, Clock, MapPin, Shield } from "lucide-react"

export function DeliveryInfo() {
  return (
    <section className="section-spacing bg-beige-50">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
            We Deliver Across <span className="text-mango-600">Hyderabad & Major Cities</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Fast, reliable delivery ensuring your mangoes reach you at perfect ripeness
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-mango-100 p-3">
                <Truck className="h-8 w-8 text-mango-600" />
              </div>
            </div>
            <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">Free Delivery</h3>
            <p className="text-sm text-muted-foreground">
              No extra charges! Delivery costs included in all our prices across Hyderabad.
            </p>
          </div>

          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-leaf-100 p-3">
                <Clock className="h-8 w-8 text-leaf-600" />
              </div>
            </div>
            <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">Same/Next Day</h3>
            <p className="text-sm text-muted-foreground">
              Orders placed before 2 PM are dispatched the same day. Next day delivery guaranteed.
            </p>
          </div>

          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-beige-100 p-3">
                <MapPin className="h-8 w-8 text-beige-600" />
              </div>
            </div>
            <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">Wide Coverage</h3>
            <p className="text-sm text-muted-foreground">
              Currently serving all areas of Hyderabad. Expanding to Bangalore, Chennai & Mumbai soon!
            </p>
          </div>

          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-mango-100 p-3">
                <Shield className="h-8 w-8 text-mango-600" />
              </div>
            </div>
            <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">Safe Packaging</h3>
            <p className="text-sm text-muted-foreground">
              Specially designed boxes ensure your mangoes arrive fresh and damage-free.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-gradient-to-r from-mango-500 to-mango-600 p-6 text-center text-white">
          <h3 className="font-heading mb-2 text-xl font-bold">Track Your Order</h3>
          <p className="mb-4 text-mango-100">
            Get real-time updates via WhatsApp from order confirmation to doorstep delivery
          </p>
          <div className="text-sm text-mango-200">Order → Confirmation → Dispatch → Out for Delivery → Delivered</div>
        </div>
      </div>
    </section>
  )
}
