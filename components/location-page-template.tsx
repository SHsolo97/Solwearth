import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Phone, Mail, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface LocationPageProps {
  title: string
  subtitle?: string
  description: string[]
  benefits: string[]
  targetMarket?: string[]
  features?: string[]
  location: string
}

export function LocationPageTemplate({
  title,
  subtitle,
  description,
  benefits,
  targetMarket,
  features,
  location,
}: LocationPageProps) {
  const allProducts = [
    { name: "SE 501", capacity: "40-50 KG", link: "/products/se-501", image: "/images/machine/small/se501.png" },
    { name: "SE 1001", capacity: "70-100 KG", link: "/products/se-1001", image: "/images/machine/small/se1001.png" },
    { name: "SE 2001", capacity: "150-250 KG", link: "/products/se-2001", image: "/images/machine/small/se2001.png" },
    { name: "SE 3501", capacity: "350-375 KG", link: "/products/se-3501", image: "/images/machine/small/se3501.png" },
    { name: "SE 5001", capacity: "450-500 KG", link: "/products/se-5001", image: "/images/machine/small/se5001.png" },
    { name: "SE 1H", capacity: "1000 KG", link: "/products/se-1h", image: "/images/machine/small/se10001.png" },
  ]

  // Extract city name for schema
  const cityName = location.split(',')[0].trim()
  const stateName = location.split(',')[1]?.trim() || ''

  return (
    <main className="min-h-screen bg-white">
      {/* Local Business & Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "Service"],
            "name": `Organic Waste Converter Solutions in ${cityName}`,
            "description": `Professional organic waste converter solutions and services in ${cityName}. Request a quote for waste management machines tailored to your needs.`,
            "serviceType": "Waste Management",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityName,
              "addressRegion": stateName,
              "addressCountry": "IN"
            },
            "telephone": "+91-98950-44004",
            "email": "info@solwearth.com",
            "areaServed": {
              "@type": "City",
              "name": cityName
            },
            "provider": {
              "@type": "Organization",
              "name": "Solwearth Ecotech Private Limited"
            }
          })
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{location}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-green-600 font-semibold mb-6">{subtitle}</p>}
            <div className="space-y-4">
              {description.map((para, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      {targetMarket && targetMarket.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Ideal For</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {targetMarket.map((market, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{market}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Technology & Features
              </h2>
              <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Fragrant Nature Hotels & Resorts",
                  type: "Hospitality — Munnar, Kerala",
                  quote: "The Solwearth team was professional and courteous. We recommend Solwearth as a superior solution to anything else available in the market.",
                },
                {
                  name: "Gokulam Medical Center",
                  type: "Healthcare",
                  quote: "We relocated the machine to our terrace and cleared out valuable floor space. Go for Solwearth — it is the most practical solution available.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-100"
                >
                  <Quote className="w-6 h-6 text-green-300 mb-3" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-3">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Product Range</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allProducts.map((product) => (
                <Card key={product.name} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 relative h-48 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={`${product.name} Organic Waste Converter`}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{product.name}</h3>
                    <p className="text-green-600 font-semibold mb-4 text-center">Capacity: {product.capacity}</p>
                    <Link href={product.link}>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent w-full"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">View All Products</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Started Today</h2>
            <p className="text-xl mb-8">Contact us to learn more about our waste management solutions in {location}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919895044004" className="text-lg font-semibold hover:underline">
                  +91 98950 440 04
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@solwearth.com" className="text-lg font-semibold hover:underline">
                  info@solwearth.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </main>
  )
}
