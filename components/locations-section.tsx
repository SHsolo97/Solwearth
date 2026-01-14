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
    "Thailand",
    "Indonesia",
    "Ghana",
    "Kenya",
    "Lebanon",
    "Seychelles",
    "Mauritius"
  ]

  return (
    <section className="py-16 md:py-24 bg-[#3E5F6F] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Locations List (two-column) */}
          <div className="flex flex-col justify-center w-full space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Locations</h2>

            <div className="w-full px-4 md:px-0">
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mx-auto max-w-lg">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="text-lg font-light hover:text-green-400 transition-colors cursor-pointer flex items-center justify-start md:justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0 opacity-70" />
                    <span className="whitespace-nowrap">{location}</span>
                  </div>
                ))}
              </div>
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
