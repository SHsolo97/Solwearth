"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LeadFormSection } from "@/components/lead-form-section"
import { 
  Zap, 
  Cpu, 
  Settings, 
  Package, 
  Shield, 
  Leaf, 
  Headphones,
  CheckCircle2,
  Clock,
  Recycle,
  Wind,
  Droplet,
  Volume2,
  Award,
  TrendingUp
} from "lucide-react"
import { Card } from "@/components/ui/card"

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Best in class processing time",
      description: "Unmatched Speed and Efficiency",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Recycle,
      title: "90% Waste Reduction",
      description: "Maximum efficiency achieved",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Recycle,
      title: "Multi-Stage Decomposition",
      description: "Superior odor and emission control",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Droplet,
      title: "Water Recycling Technology",
      description: "Faster, greener operation",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Wind,
      title: "Zero Chemicals Required",
      description: "No additives, bacteria, or dilution needed",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Package,
      title: "Compact & Portable Design",
      description: "Fits anywhere, suitable for cities",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Settings,
      title: "Fully Automatic Operation",
      description: "Minimal user intervention required",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Robust Safety Features",
      description: "Hassle-free maintenance & warranty",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Headphones,
      title: "Dedicated Customer Service",
      description: "Extended warranty & support options",
      gradient: "from-rose-500 to-red-600"
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Reducing greenhouse gases & landfill",
      gradient: "from-red-500 to-orange-600"
    }
  ]

  const detailedFeatures = [
    {
      icon: Zap,
      title: "Unmatched Speed and Efficiency",
      description: "Solwearth converters can process organic waste into nutrient-rich soil supplements rapidly—faster than most leading global machines, which often require several days. With over 45,000 tonnes processed annually, the volume of waste is reduced by up to 90%, providing maximum efficiency and rapid turnaround for high-demand environments like hotels, malls, and flight kitchens.",
      color: "green"
    },
    {
      icon: Cpu,
      title: "Advanced Technology Integration",
      description: "Solwearth's machines use a multi-stage indirect heat & dry decomposition process, with both aerobic and anaerobic methods deployed for optimal, odor-free conversion. Water recycling technology uses condensate to control humidity and boost processing speed—an innovative feature not found in typical machines worldwide.",
      color: "emerald"
    },
    {
      icon: Settings,
      title: "Total Automation & User-Friendliness",
      description: "Fully automatic PLC controls make operation seamless, with minimal space, power, and labor requirements. There's no need for dilution, additives, bacteria, or chemicals—just load waste and let the system work. Maintenance is low and the warranty is comprehensive, with dedicated technical support.",
      color: "teal"
    },
    {
      icon: Package,
      title: "Compact, Portable, and Noise-Free",
      description: "Solwearth units are stand-alone, portable, and compact enough for urban settings, requiring no special installation, exhaust, or venting. The conversion happens without any sound or heat emissions, so the equipment is ideal for public spaces and eco-sensitive areas.",
      color: "cyan"
    },
    {
      icon: Shield,
      title: "Robust Safety and Odor Control",
      description: "Integrated deodorization and foul odor controls ensure the surrounding environment remains pleasant, a key edge over conventional composters that often struggle with smells. An internal safety mechanism stops operation if doors are open.",
      color: "blue"
    },
    {
      icon: Leaf,
      title: "Environmental and Economic Impact",
      description: "Solwearth maximizes sustainability by dramatically reducing landfill contributions and greenhouse gas emissions. The high-quality soil supplement output helps regenerate landscapes and gardens, enhancing agricultural yields without chemical fertilizers.",
      color: "indigo"
    },
    {
      icon: Headphones,
      title: "All-in-One Solution and Comprehensive Support",
      description: "Solwearth provides end-to-end support, from installation and user training to maintenance contracts, ensuring long-term reliability and customer satisfaction.",
      color: "purple"
    }
  ]

  const stats = [
    { number: "45000+", label: "Tonnes Processed Annually", icon: TrendingUp },
    { number: "90%", label: "Waste Reduction", icon: Recycle },
    { number: "500+", label: "Happy Clients", icon: Award },
    { number: "14", label: "Countries Served", icon: Leaf }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Award className="w-4 h-4" />
              World-Class Excellence
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose <span className="text-green-600">Solwearth</span>?
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Unmatched speed, efficiency, automation, and user-friendliness. Discover the distinctive advantages that set us apart globally.
            </p>

            {/* Made in India Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-white to-green-600 p-1 rounded-full shadow-lg">
              <div className="bg-white rounded-full px-6 py-3 flex items-center gap-2">
                <span className="font-bold text-gray-900">Proudly Made in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                  <stat.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Distinctive <span className="text-green-600">Features</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover what makes Solwearth the global leader in organic waste conversion technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-2xl transition-all duration-500 border-0 shadow-md hover:-translate-y-2 group bg-white overflow-hidden relative"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive <span className="text-green-600">Advantages</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deep dive into the technology and features that make Solwearth unbeatable
              </p>
            </div>

            <div className="space-y-8">
              {detailedFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-md group"
                >
                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Icon Section */}
                    <div className={`md:col-span-3 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                      <div className="text-center">
                        <feature.icon className="w-16 h-16 text-white mx-auto mb-3" />
                        <div className="h-1 w-16 bg-white/30 rounded-full mx-auto" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-9 p-8 bg-gradient-to-br from-white to-gray-50">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="text-green-600">Solwearth</span> vs Global Competitors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See why we're the preferred choice for world-class waste management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Solwearth - Superior */}
              <Card className="p-8 bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold">Solwearth</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Best in class batch processing time",
                    "90% waste reduction efficiency",
                    "Multi-stage decomposition technology",
                    "Water recycling system included",
                    "Zero chemicals or additives needed",
                    "Fully automatic PLC controls",
                    "Compact & portable design",
                    "Completely noise-free operation",
                    "Integrated odor control system",
                    "End-to-end support & warranty"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Global Competitors - Standard */}
              <Card className="p-8 bg-white border-2 border-gray-200 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Volume2 className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Global Competitors</h3>
                </div>

                <ul className="space-y-4">
                  {[
                    "Several days processing time",
                    "70-80% waste reduction (typical)",
                    "Basic composting methods",
                    "Manual water management",
                    "Requires chemicals & additives",
                    "Semi-automatic or manual controls",
                    "Bulky installation required",
                    "Noise and heat emissions",
                    "Odor control challenges",
                    "Limited support options"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Solwearth Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              Join 500+ satisfied clients across 14 countries who chose world-class waste management with our Made-in-India solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Get Free Consultation
              </button>

              <a
                href="/products"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                <Package className="w-5 h-5" />
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </div>
  )
}
