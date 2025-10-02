import { MapPin } from "lucide-react"

export function LocationsSection() {
  const locations = [
    "India",
    "Maldives",
    "Saudi Arabia",
    "Oman",
    "UAE",
    "Bahrain",
    "Kuwait",
    "Qatar",
    "Malaysia",
    "Bangladesh",
  ]

  return (
    <section className="py-16 md:py-24 bg-[#3E5F6F] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Locations List */}
          <div className="text-center md:text-right space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Locations</h2>
            <div className="space-y-2">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="text-lg md:text-xl font-light hover:text-green-400 transition-colors cursor-pointer"
                >
                  {location}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Globe Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/images/locations/locations-waste-management.png"
                alt="Global Locations - Waste Management Solutions"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
