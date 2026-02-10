import { Button } from "@/components/ui/button"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              FULLY AUTOMATIC ORGANIC WASTE CONVERTER (OWC)
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A compact and efficient fully automatic organic waste converter (OWC), designed for seamless food waste management in
              restaurants, apartments, hostels, canteens, malls, and catering facilities. Our innovative technology
              ensures minimal effort and maximum efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-base transition-colors duration-300 hover:shadow-lg">
                  SEE OUR PRODUCTS
                </Button>
              </Link>
              <ScrollToFormButton
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-6 text-base bg-transparent transition-colors duration-300 hover:shadow-lg"
              >
                Enquire Now!
              </ScrollToFormButton>
            </div>
          </div>

          {/* Right Content - Product Image (LCP element) */}
          <div className="relative animate-slide-in-right">
            <Image
              src="/images/machine/automatic-waste-convertor-hero.png"
              alt="Fully automatic organic waste converter machine by Solwearth Ecotech for commercial food waste management"
              width={600}
              height={400}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-contain max-h-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
