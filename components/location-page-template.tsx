import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

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
    { name: "SE 501", capacity: "25-50 KG", link: "/products/se-501" },
    { name: "SE 1001", capacity: "75-100 KG", link: "/products/se-1001" },
    { name: "SE 2001", capacity: "150-200 KG", link: "/products/se-2001" },
    { name: "SE 3501", capacity: "350-375 KG", link: "/products/se-3501" },
    { name: "SE 5001", capacity: "400-500 KG", link: "/products/se-5001" },
    { name: "SE 1H", capacity: "1000 KG", link: "/products/se-1h" },
  ]

  // Extract city name for schema
  const cityName = location.split(',')[0].trim()
  const stateName = location.split(',')[1]?.trim() || ''

  return (
    <main className="min-h-screen bg-white">
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Solwearth Ecotech - ${cityName}`,
            "description": `Organic waste converter supplier in ${cityName}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityName,
              "addressRegion": stateName,
              "addressCountry": "IN"
            },
            "telephone": "+91-98950-44004",
            "email": "info@solwearth.com",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": cityName
            },
            "parentOrganization": {
              "@type": "Organization",
              "name": "Solwearth Ecotech Private Limited"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Organic Waste Converters",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Organic Waste Converter"
                  }
                }
              ]
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

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Product Range</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allProducts.map((product) => (
                <Card key={product.name} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-green-600 font-semibold mb-4">Capacity: {product.capacity}</p>
                    <Link href={product.link}>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent w-full"
                      >
                        View Details
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
