import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Leaf, Heart, Award } from "lucide-react"

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="font-heading mb-4 text-4xl font-bold text-mango-800 md:text-5xl">
          About <span className="text-mango-600">Royal Mangoes</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A story of passion, sustainability, and bringing the finest mangoes from Telangana's orchards to your
          doorstep.
        </p>
      </section>

      {/* Founder Section */}
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="/images/aarthi-founder.jpg"
              alt="Aarthi Sunkoj - Founder of Royal Mangoes"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-mango-800">Meet Aarthi Sunkoj</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 1993 by Aarthi Sunkoj, Royal Mangoes began as a dream to connect urban families with the
              authentic taste of premium mangoes directly from Telangana's fertile orchards in Shamshabad.
            </p>
            <blockquote className="mb-6 border-l-4 border-mango-300 bg-mango-50 p-4 italic">
              <p className="text-mango-800">
                "I've always believed trees are our silent teachers. They give unconditionally, and through Royal
                Mangoes, I want to share that same spirit of giving - bringing nature's sweetest gifts directly to
                families across Hyderabad."
              </p>
              <footer className="mt-2 text-sm font-medium text-mango-600">- Aarthi Sunkoj, Founder</footer>
            </blockquote>
            <p className="text-muted-foreground">
              With a background in sustainable agriculture and a deep love for traditional farming practices, Aarthi
              works directly with local farmers in Shamshabad to ensure every mango meets the highest standards of
              quality and taste.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="font-heading mb-8 text-center text-3xl font-bold text-mango-800">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-leaf-100 p-3">
                <Leaf className="h-8 w-8 text-leaf-600" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-xl font-bold text-mango-800">Organic Excellence</h3>
            <p className="text-sm text-muted-foreground">
              Our mangoes grow in Shamshabad in a highly maintained area using only organic fertilizers for high quality
              growth of each mango, ensuring pure, natural taste without harmful chemicals.
            </p>
          </div>
          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-mango-100 p-3">
                <Heart className="h-8 w-8 text-mango-600" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-xl font-bold text-mango-800">Quality First</h3>
            <p className="text-sm text-muted-foreground">
              Every mango is handpicked at the perfect ripeness and carefully sorted to ensure you receive only the
              finest quality fruits that meet our royal standards.
            </p>
          </div>
          <div className="premium-card p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-beige-100 p-3">
                <Award className="h-8 w-8 text-beige-600" />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-xl font-bold text-mango-800">Customer Satisfaction</h3>
            <p className="text-sm text-muted-foreground">
              Your happiness is our priority. We offer hassle-free refunds and go the extra mile to ensure every
              customer experience exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="mb-16">
        <h2 className="font-heading mb-8 text-center text-3xl font-bold text-mango-800">Our Journey</h2>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mango-100 text-mango-600">
                <span className="font-bold">1993</span>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">The Beginning</h3>
                <p className="text-muted-foreground">
                  Aarthi started Royal Mangoes in Shamshabad with a simple mission: eliminate middlemen and bring
                  farm-fresh mangoes directly to Hyderabad families using only organic farming methods.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mango-100 text-mango-600">
                <span className="font-bold">2000</span>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">Growing Trust</h3>
                <p className="text-muted-foreground">
                  Expanded our network of partner farmers and introduced our signature varieties: Himayath,
                  Banginapalli, and Rasalu, all grown with organic fertilizers.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mango-100 text-mango-600">
                <span className="font-bold">2024</span>
              </div>
              <div>
                <h3 className="font-heading mb-2 text-lg font-bold text-mango-800">Royal Standards</h3>
                <p className="text-muted-foreground">
                  Today, we're proud to serve thousands of families across Hyderabad with our premium organic mangoes,
                  maintaining the same commitment to quality and sustainability for over 30 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-xl bg-gradient-to-r from-mango-500 to-mango-600 p-8 text-center text-white">
        <h2 className="font-heading mb-4 text-2xl font-bold">Experience the Royal Difference</h2>
        <p className="mb-6 text-mango-100">
          Join thousands of satisfied customers who trust Royal Mangoes for the finest quality organic mangoes in
          Hyderabad.
        </p>
        <Link href="/#order">
          <Button className="bg-white text-mango-600 hover:bg-mango-50">Order Your Mangoes Today</Button>
        </Link>
      </section>
    </div>
  )
}
