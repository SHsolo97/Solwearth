import type { Metadata } from "next"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Zap, Settings, Shield, Leaf } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SE 1001 Organic Waste Converter (75-100 KG) | Buy OWC Machine - Solwearth",
  description: "SE 1001 automatic food waste converter processes 75-100 kg waste daily. Ideal for restaurants, hotels, canteens. 24-hour composting. Get price quote.",
  keywords: "SE 1001, 75kg waste converter, restaurant waste converter, hotel composting machine, food waste machine, organic waste converter",
  openGraph: {
    title: "SE 1001 - 75-100 KG Organic Waste Converter",
    description: "Compact automatic waste converter for medium-scale operations. Convert food waste to compost in 24 hours.",
    images: ['/images/machine/small/se1001.png'],
    url: 'https://www.solwearth.com/products/se-1001',
  },
  alternates: {
    canonical: "https://www.solwearth.com/products/se-1001"
  }
}

export default function SE1001Page() {
  const specifications = [
    { label: "Capacity", value: "75–100 KG" },
    { label: "Input per Batch", value: "100 Kg" },
    { label: "Processing Time", value: "16–18 hrs" },
    { label: "Power Consumption", value: "4 Kw" },
    { label: "Dimension (W×D×H)", value: "1240×1140×1350 mm" },
    { label: "Weight", value: "420 Kg" },
    { label: "Tank Volume", value: "5 Cu. Feet" },
    { label: "Material", value: "Stainless Steel" },
    { label: "Average Reduction", value: "83–90%" },
    { label: "Warranty", value: "1 year" },
  ]

  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Fully Automatic",
      description: "PLC Controlled system for hassle-free operation",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Impeller stops automatically when door opens",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Odour Treatment",
      description: "Integrated deodorisation system",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Easy Installation",
      description: "No special installation required",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Portable Design",
      description: "Stand-alone, portable unit",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Multi-stage Process",
      description: "Indirect heat & dry decomposition",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "SE 1001 Organic Waste Converter",
            "description": "Automatic food waste converter with 75-100 KG daily capacity. Perfect for restaurants, hotels, and medium-scale commercial kitchens.",
            "brand": {
              "@type": "Brand",
              "name": "Solwearth"
            },
            "model": "SE 1001",
            "category": "Organic Waste Converter",
            "offers": {
              "@type": "Offer",
              "price": "Contact for quote",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://www.solwearth.com/products/se-1001",
              "seller": {
                "@type": "Organization",
                "name": "Solwearth Ecotech Private Limited"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "45"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Capacity",
                "value": "75-100 KG"
              },
              {
                "@type": "PropertyValue",
                "name": "Processing Time",
                "value": "16-18 hours"
              },
              {
                "@type": "PropertyValue",
                "name": "Power Consumption",
                "value": "4 KW"
              }
            ]
          })
        }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.solwearth.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://www.solwearth.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SE 1001",
                "item": "https://www.solwearth.com/products/se-1001"
              }
            ]
          })
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/#products" className="text-green-600 hover:text-green-700 font-medium mb-4 inline-block">
              ← Back to Products
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center shadow-lg p-6 h-80">
                  <img
                    src="/images/machine/big/se1001.png"
                    alt="SE 1001 automatic organic waste converter machine processing 75-100 kg food waste daily for restaurants and hotels"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">SE-1001</h1>
                  <p className="text-xl text-green-600 font-semibold">Capacity: 75–100 KG</p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The SE-1001 is a robust organic waste converter designed for larger operations. Ideal for
                  restaurants, institutions, cafeterias, and hospitals that require efficient and reliable waste
                  processing capabilities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">
                    Request Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 bg-transparent"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
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

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Technical Specifications
            </h2>
            <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                      <span className="font-semibold text-gray-700">{spec.label}:</span>
                      <span className="text-gray-900 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ideal For</h2>
            <p className="text-xl text-gray-600 mb-8">
              The SE-1001 is perfectly suited for restaurants, institutions, cafeterias, and hospitals that need
              reliable and efficient waste management solutions.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {["Restaurants", "Institutions", "Cafeterias", "Hospitals"].map((useCase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Waste Management?</h2>
            <p className="text-xl mb-8 text-green-50">
              Contact us today to learn more about the SE-1001 and how it can benefit your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-lg">
                <p className="font-semibold">Call Us: +91 98950 440 04</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@solwearth.com" className="underline hover:text-green-100">
                    info@solwearth.com
                  </a>
                </p>
              </div>
              <Link href="/contact">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6">Contact Us Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </main>
  )
}
