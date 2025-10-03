import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Zap, Users, Globe, Award } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Solwearth Ecotech | Leading Organic Waste Converter Manufacturer in India",
  description: "Learn about Solwearth Ecotech, India's leading manufacturer of organic waste converters. ISO certified company specializing in sustainable food waste management solutions since 2010.",
  keywords: "about Solwearth, organic waste converter manufacturer, food waste management company India, ISO certified waste management, sustainable technology",
  openGraph: {
    title: "About Solwearth Ecotech - Organic Waste Management Leaders",
    description: "Discover how Solwearth Ecotech is revolutionizing waste management across India and the Middle East with innovative organic waste converters.",
    type: 'website',
  },
}

export default function AboutPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Minimum Requirements",
      description: "Minimum space, power, and labor requirement",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Easy Maintenance",
      description: "Easy installation and maintenance",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Fully Automatic",
      description: "One-touch control system",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Less than 24 hours processing time",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "No emissions, smoke, or odour",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "No Additives",
      description: "No bacteria, additives, or water required",
    },
  ]

  const globalLocations = [
    "India",
    "Maldives",
    "Saudi Arabia",
    "Oman",
    "UAE",
    "Bahrain",
    "Qatar",
    "Kuwait",
    "Malaysia",
    "Bangladesh",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Solwearth Ecotech</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Solwearth Ecotech Pvt. Ltd focuses on social commitment and sustainable development, combining robust
              technology, expertise, and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl font-light italic">
              "Our Mission is to create a reliable and cost-effective food waste management system"
            </p>
          </div>
        </div>
      </section>

      {/* Core Idea */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Core Idea</h2>
            <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Transform food waste into a productive soil supplement. Our machines convert 90% of the input volume
                  within a short period, with the remaining 10% becoming a useful soil additive.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Multiple models are available to address different volume requirements, catering to a variety of
                  industries including restaurants, townships, hotels, pilgrim centers, IT campuses, flight kitchens,
                  residential apartments, fruit/vegetable processors, and hospitals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Features of SE Waste Converters
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Technology Used</h2>
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Automated On-Site Compostable Waste Processing
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our system uses a multi-stage indirect heat and dry decomposition process to efficiently convert
                    organic waste into valuable soil supplements.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Water recycling technology maintains chamber humidity via condensate run-off, enabling faster
                    processing speeds while minimizing water usage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Global Presence</h2>
            <Card className="bg-white">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 mb-6 text-center">
                  We proudly serve customers across multiple countries and regions:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {globalLocations.map((location, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{location}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-xl">
                <strong>Address:</strong> Solwearth Ecotech Pvt. Ltd, 46/2861-A, 1st Floor, Chakkaraparambu, Puthiya
                Road, Vennala P.O., Cochin-682028, Kerala, India
              </p>
              <p className="text-xl">
                <strong>Phone:</strong> +91 98950 440 04
              </p>
              <p className="text-xl">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@solwearth.com" className="underline hover:text-green-100">
                  info@solwearth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </main>
  )
}
