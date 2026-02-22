import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Zap, Settings, Shield, Leaf, Quote, Mountain } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SE 2001 Organic Waste Converter (150-200 KG) | Medium Scale OWC Machine - Solwearth",
  description: "Buy SE 2001 automatic organic waste converter for medium capacity food waste management. Process 150-200 KG food waste daily. Fully automatic, PLC controlled, stainless steel construction.",
  keywords: "SE 2001, medium organic waste converter, 200kg food waste converter, commercial OWC machine, hotel waste management, medium scale compost machine",
  openGraph: {
    title: "SE 2001 Medium Organic Waste Converter - Solwearth",
    description: "Ideal for hotels, large restaurants and commercial facilities. Convert 150-200 KG food waste daily with our SE 2001 organic waste converter.",
    images: ['/images/machine/SE-2001-front-view.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.solwearth.com/products/se-2001',
  },
}

export default function SE2001Page() {
  const specifications = [
    { label: "Capacity", value: "150–200 KG" },
    { label: "Input per Batch", value: "150-250 Kg" },
    { label: "Processing Time", value: "16–22 hrs" },
    { label: "Power Consumption", value: "6 Kw" },
    { label: "Dimension (W×D×H)", value: "1480×1200×1300 mm" },
    { label: "Weight", value: "600 Kg" },
    { label: "Tank Volume", value: "9 Cu. Feet" },
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SE 2001 Organic Waste Converter",
    "description": "Medium capacity fully automatic organic waste converter for commercial food waste management. Processes 150-200 KG daily with advanced PLC control.",
    "image": "https://www.solwearth.com/images/machine/SE-2001-front-view.png",
    "brand": {
      "@type": "Brand",
      "name": "Solwearth Ecotech"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Solwearth Ecotech"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": 0,
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        }
      }
    },
    "additionalProperty": [
      {"@type": "PropertyValue", "name": "Capacity", "value": "150-200 KG"},
      {"@type": "PropertyValue", "name": "Processing Time", "value": "16-22 hours"},
      {"@type": "PropertyValue", "name": "Power Consumption", "value": "6 Kw"},
      {"@type": "PropertyValue", "name": "Material", "value": "Stainless Steel"},
      {"@type": "PropertyValue", "name": "Warranty", "value": "1 year"}
    ],
    "category": "Waste Management Equipment",
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Organization", "name": "Fragrant Nature Hotels and Resorts" },
        "reviewBody": "The Solwearth team was professional and courteous throughout the installation. The SE-2001 handles our daily waste effortlessly — we recommend Solwearth as a superior solution to anything else available in the market.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1",
      "bestRating": "5"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.solwearth.com/"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Products",
        "item": "https://www.solwearth.com/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SE 2001",
        "item": "https://www.solwearth.com/products/se-2001"
      }
    ]
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                    src="/images/machine/big/se2001.png"
                    alt="SE-2001 Waste Converter"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">SE-2001</h1>
                  <p className="text-xl text-green-600 font-semibold">Capacity: 150–200 KG</p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The SE-2001 is a high-capacity organic waste converter designed for large-scale operations. Perfect
                  for large food courts, IT campuses, and hospitals that need powerful and efficient waste processing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <ScrollToFormButton className="bg-green-600 hover:bg-green-700 text-white px-8 py-6" variant="default">
                    Request Quote
                  </ScrollToFormButton>
                  <a href="https://drive.google.com/file/d/13In5rIl2FBqbW2m5DrODB7Wz0AGh3lVe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 bg-transparent"
                    >
                      Download Brochure
                    </Button>
                  </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">SE 2001 Key Features</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SE 2001 Ideal For</h2>
            <p className="text-xl text-gray-600 mb-8">
              The SE-2001 is perfectly suited for large food courts, IT campuses, and hospitals requiring high-capacity
              waste management solutions.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {["Large Food Courts", "IT Campuses", "Hospitals", "Corporate Facilities"].map((useCase, index) => (
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

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Proven in Demanding Environments
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              The SE-2001 delivers consistent, odour-free waste processing even in the most challenging operating conditions.
            </p>

            <Card className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-600 px-8 py-4 flex items-center gap-3">
                  <Mountain className="w-6 h-6 text-white" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Fragrant Nature Hotels & Resorts, Munnar</h3>
                    <p className="text-green-100 text-sm">Hill Station Luxury Resort</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Challenge</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Hilltop resort with only 50 sq. ft. of available space, cold mountain temperatures, and 250 kg of daily food waste requiring odour-free processing.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Solution</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        SE-2001 was disassembled and reassembled on-site to overcome transport constraints. The system operates independently of ambient temperature, requiring no waste segregation.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Result</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Complete processing in 12–15 hours with zero odour. Output converted into nutrient-rich soil supplement for the resort&apos;s landscaping.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-6">
                    <Quote className="w-6 h-6 text-green-400 mb-3" />
                    <blockquote className="text-gray-700 italic leading-relaxed text-lg mb-3">
                      &ldquo;The Solwearth team was professional and courteous throughout the installation. The SE-2001 handles our daily waste effortlessly — we recommend Solwearth as a superior solution to anything else available in the market.&rdquo;
                    </blockquote>
                    <p className="text-sm font-semibold text-gray-900">Fragrant Nature Hotels and Resorts</p>
                    <p className="text-sm text-green-600">Munnar, Kerala</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your SE 2001 Waste Converter Today</h2>
            <p className="text-xl mb-8 text-green-50">
              Contact us today to learn more about the SE-2001 and how it can benefit your facility.
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
              <ScrollToFormButton className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6" variant="default">
                Get SE 2001 Quote
              </ScrollToFormButton>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </main>
  )
}
