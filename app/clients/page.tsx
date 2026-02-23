import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { ClientsSection } from "@/components/clients-section"
import { CheckCircle2, Award, TrendingUp, Shield, Quote } from "lucide-react"

export default function ClientsPage() {
  const trustFactors = [
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "Over 500 successful installations across diverse sectors with 99.9% customer satisfaction rate."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple awards for innovation in waste management and sustainability from national and international bodies."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From small restaurants to large industrial complexes, our solutions grow with your needs."
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "24/7 customer support with rapid response times and comprehensive maintenance programs."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Clients</h1>
            <p className="text-xl md:text-2xl text-green-50 leading-relaxed">
              Partnering with industry leaders to create a sustainable future. 
              From luxury hotels to corporate giants, educational institutions to healthcare facilities.
            </p>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Leaders Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation has made us the preferred choice 
              for organizations across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => {
              const Icon = factor.icon
              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientsSection />

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from organisations that have transformed their waste management with Solwearth solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Gokulam Medical Center",
                type: "Healthcare",
                quote: "We relocated the machine to our terrace and cleared out valuable floor space we could put to better use. Go for Solwearth — it is the most practical solution available.",
                product: "SE-501"
              },
              {
                name: "K R Bakes",
                type: "Restaurant Chain",
                quote: "Food waste management has turned into a completely hassle-free experience. The odour-free operation is critical for our customer-facing environment.",
                product: "SE-501"
              },
              {
                name: "Asset Builders",
                type: "Residential Complex",
                quote: "Our residents had been complaining about the foul smell from our old composting system. The Solwearth machine proved to be the most economical and effective alternative.",
                product: "SE-501"
              },
              {
                name: "Fragrant Nature Hotels & Resorts",
                type: "Hospitality — Munnar, Kerala",
                quote: "The Solwearth team was professional and courteous throughout the installation. We recommend Solwearth as a superior solution to anything else available in the market.",
                product: "SE-2001"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-green-200"
              >
                <Quote className="w-8 h-8 text-green-200 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.type}</p>
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our versatile solutions cater to diverse sectors with customized waste management systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Hospitality", icon: "🏨", color: "from-blue-500 to-blue-600" },
              { name: "Real Estate", icon: "🏗️", color: "from-purple-500 to-purple-600" },
              { name: "Corporate", icon: "🏢", color: "from-green-500 to-green-600" },
              { name: "Education", icon: "🎓", color: "from-yellow-500 to-yellow-600" },
              { name: "Healthcare", icon: "🏥", color: "from-red-500 to-red-600" },
              { name: "Retail", icon: "🛒", color: "from-pink-500 to-pink-600" },
              { name: "Industrial", icon: "🏭", color: "from-gray-500 to-gray-600" },
              { name: "Residential", icon: "🏘️", color: "from-indigo-500 to-indigo-600" },
              { name: "Government", icon: "🏛️", color: "from-cyan-500 to-cyan-600" },
              { name: "Agriculture", icon: "🌾", color: "from-lime-500 to-lime-600" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 text-center group"
              >
                <div className={`text-4xl mb-3 transform group-hover:scale-110 transition-transform`}>
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </div>
  )
}
