'use client'

import { Building2, Award, Globe, Scale } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"

interface ClientLogo {
  name: string
  image: string
  category: string
}

const clients: ClientLogo[] = [
  // Hospitality
  { name: "ITC Hotels", image: "/images/itc-hotels.jpg", category: "Hospitality" },
  { name: "Taj Vivanta", image: "/images/taj-vivanta.jpg", category: "Hospitality" },
  { name: "JW Marriott", image: "/images/jw-marriot.png", category: "Hospitality" },
  { name: "Hilton", image: "/images/hilton.png", category: "Hospitality" },
  { name: "W Hotel", image: "/images/w-hotel.jpg", category: "Hospitality" },
  { name: "Novotel", image: "/images/novotel.png", category: "Hospitality" },
  { name: "Four Points", image: "/images/fourpoints.png", category: "Hospitality" },
  { name: "Fairfield", image: "/images/fairfield.png", category: "Hospitality" },
  { name: "GRT Hotels", image: "/images/grt.jpg", category: "Hospitality" },
  { name: "Turya Hotel", image: "/images/turya.jpg", category: "Hospitality" },
  { name: "Caspia Hotel Goa", image: "/images/caspia_hotel_goa.jpg", category: "Hospitality" },
  { name: "CGH Earth", image: "/images/cghEarth.jpg", category: "Hospitality" },
  { name: "Good Earth", image: "/images/Good-Earth.png", category: "Hospitality" },
  { name: "Fragrant Nature", image: "/images/fragrandNature.jpg", category: "Hospitality" },
  { name: "Punnamada Resort", image: "/images/punnamada_resort.jpg", category: "Hospitality" },
  { name: "Cidade de Goa", image: "/images/cidadegoa.jpg", category: "Hospitality" },
  
  // Real Estate & Builders
  { name: "Prestige Group", image: "/images/prestige.png", category: "Real Estate" },
  { name: "Godrej Properties", image: "/images/godgrej.png", category: "Real Estate" },
  { name: "Brigade World Trade Centre", image: "/images/brigade_world_trade_centre_logo.jpg", category: "Real Estate" },
  { name: "Shapoorji Pallonji", image: "/images/Shapoorji_Pallonji_Group_logo.jpg", category: "Real Estate" },
  { name: "India Bulls", image: "/images/india-bulls.png", category: "Real Estate" },
  { name: "Pokarna", image: "/images/pokarna.png", category: "Real Estate" },
  { name: "Chandak Group", image: "/images/chandak.jpg", category: "Real Estate" },
  { name: "JM Housing", image: "/images/jmhousing.png", category: "Real Estate" },
  { name: "Malabar Builders", image: "/images/Malabar-Builders.png", category: "Real Estate" },
  { name: "Prime Property Developers", image: "/images/Prime-Property-Developers.png", category: "Real Estate" },
  { name: "SFS Homes", image: "/images/SFS-Homes.jpg", category: "Real Estate" },
  { name: "Skyline Builders", image: "/images/Skyline.png", category: "Real Estate" },
  { name: "Asset Builders", image: "/images/assest_builders.jpg", category: "Real Estate" },
  { name: "Kalyan Developers", image: "/images/Kalyan.jpg", category: "Real Estate" },
  
  // Corporate & Industrial
  { name: "Ashok Leyland", image: "/images/ashok-leyland.jpg", category: "Corporate" },
  { name: "ONGC", image: "/images/ongc.jpg", category: "Corporate" },
  { name: "LNG", image: "/images/LNG.jpg", category: "Corporate" },
  { name: "TVS", image: "/images/tvs.png", category: "Corporate" },
  { name: "Procter & Gamble", image: "/images/p-g.jpg", category: "Corporate" },
  { name: "Syngene", image: "/images/syngene.jpg", category: "Corporate" },
  { name: "Synthite", image: "/images/synthite.png", category: "Corporate" },
  { name: "Kent RO", image: "/images/Kent-480x480.jpg", category: "Corporate" },
  { name: "Venky's", image: "/images/venkys.png", category: "Corporate" },
  
  // Educational & Healthcare
  { name: "IIM", image: "/images/iim.png", category: "Education" },
  { name: "St. Joseph's", image: "/images/St_josephs_logo.jpg", category: "Education" },
  { name: "St. Philomena's", image: "/images/St.-Philomenas-Logo.jpg", category: "Education" },
  { name: "Gokulam Medical Center", image: "/images/gokulam_medical_center.jpg", category: "Healthcare" },
  
  // Retail & Others
  { name: "Lulu", image: "/images/lulu.png", category: "Retail" },
  { name: "Ambani Group", image: "/images/ambani.png", category: "Corporate" },
  { name: "Abad Group", image: "/images/Abad.jpg", category: "Hospitality" },
  { name: "Anthem", image: "/images/anthem.jpg", category: "Real Estate" },
  { name: "Ashkar", image: "/images/ashkar.png", category: "Corporate" },
  { name: "Emperador Emmanuel", image: "/images/empero-emmanual.png", category: "Hospitality" },
  { name: "Marsleeva", image: "/images/Marsleeva.png", category: "Real Estate" },
  { name: "Noel", image: "/images/Noel.png", category: "Corporate" },
  { name: "SAI", image: "/images/sai.jpg", category: "Corporate" },
]

// Group clients by category
const categories = Array.from(new Set(clients.map(c => c.category)))

export function ClientsSection() {
  const stats = [
    { icon: Building2, label: "Installations", value: "500+" },
    { icon: Scale, label: "Tonnes Processed Annually", value: "45,000+" },
    { icon: Globe, label: "Countries Served", value: "10+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our organic waste converters are the choice of prestigious hotels, corporate offices, 
            educational institutions, and residential complexes across the globe.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Client Logos by Category */}
        {categories.map((category) => {
          const categoryClients = clients.filter(c => c.category === category)
          return (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categoryClients.map((client, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-100 hover:border-green-200"
                  >
                    <div className="relative w-full h-24 flex items-center justify-center">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Family</h3>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                Become part of the sustainable waste management revolution. 
                Get your free consultation today.
              </p>
              <ScrollToFormButton className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105 shadow-lg" variant="default">
                Get Started Now
              </ScrollToFormButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
