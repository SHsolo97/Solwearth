import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  onRequestQuote?: () => void
}

export function HeroSection({ onRequestQuote }: HeroSectionProps) {
  return (
    <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" style={{ animation: 'slideInFromLeft 0.8s ease-out' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              FULLY AUTOMATIC ORGANIC WASTE CONVERTER (OWC)
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A compact and efficient Organic waste converter machines, designed for seamless food waste management in
              restaurants, apartments, hostels, canteens, malls, and catering facilities. Our innovative technology
              ensures minimal effort and maximum efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  SEE OUR PRODUCTS
                </Button>
              </Link>
              <Button
                onClick={() => {
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-6 text-base bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Enquire Now!
              </Button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative" style={{ animation: 'slideInFromRight 0.8s ease-out' }}>
            <img
              src="/images/machine/automatic-waste-convertor-hero.png"
              alt="Fully automatic organic waste converter machine by Solwearth Ecotech for commercial food waste management"
              className="w-full h-auto object-contain max-h-80 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
