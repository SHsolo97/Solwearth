import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function TechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Technology Description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              SE food waste converter is an automated on-site compostable waste processing system. We use multi-stage
              indirect heat and dry decomposition process in our machines. The system is equipped with water recycling
              technology that uses the condensate run out to control the humidity in the processing chamber, which in
              turn translates to faster processing speeds.
            </p>
            <Link href="/faq">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
                SEE FAQ
              </Button>
            </Link>
          </div>

          {/* Right - Video */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/a5wJfYbmTbE"
                title="Solwearth Technology - Organic Waste Converter"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full border-0"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Watch our technology in action</p>
          </div>
        </div>
      </div>
    </section>
  )
}
