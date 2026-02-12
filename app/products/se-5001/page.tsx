import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Zap, Settings, Shield, Leaf } from "lucide-react"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SE 5001 Organic Waste Converter (400-500 KG) | Heavy Duty OWC Machine - Solwearth",
  description: "Buy SE 5001 heavy duty automatic organic waste converter for large scale food waste management. Process 400-500 KG food waste daily. Industrial grade, PLC controlled, stainless steel construction.",
  keywords: "SE 5001, heavy duty organic waste converter, 500kg food waste converter, industrial OWC machine, factory waste management, heavy duty compost machine",
  openGraph: {
    title: "SE 5001 Heavy Duty Organic Waste Converter - Solwearth",
    description: "Industrial strength solution for factories, large corporations and institutions. Convert 400-500 KG food waste daily with our SE 5001 organic waste converter.",
    images: ['/images/machine/SE-5001-front-view.png'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.solwearth.com/products/se-5001',
  },
}

export default function SE5001Page() {
  const specifications = [
    { label: "Capacity", value: "450–500 KG" },
    { label: "Input per Batch", value: "450-500 Kg" },
    { label: "Processing Time", value: "22–26 hrs" },
    { label: "Power Consumption", value: "9 Kw" },
    { label: "Dimension (W×D×H)", value: "1450×2540×1450 mm" },
    { label: "Weight", value: "1000 Kg" },
    { label: "Tank Volume", value: "21 Cu. Feet" },
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
    "name": "SE 5001 Organic Waste Converter",
    "description": "Heavy duty fully automatic organic waste converter for industrial food waste management. Processes 400-500 KG daily with robust PLC control system.",
    "image": "https://www.solwearth.com/images/machine/SE-5001-front-view.png",
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
      {"@type": "PropertyValue", "name": "Capacity", "value": "400-500 KG"},
      {"@type": "PropertyValue", "name": "Processing Time", "value": "22-26 hours"},
      {"@type": "PropertyValue", "name": "Power Consumption", "value": "9 Kw"},
      {"@type": "PropertyValue", "name": "Material", "value": "Stainless Steel"},
      {"@type": "PropertyValue", "name": "Warranty", "value": "1 year"}
    ],
    "category": "Waste Management Equipment"
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
        "name": "SE 5001",
        "item": "https://www.solwearth.com/products/se-5001"
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
                    src="/images/machine/big/se5001.png"
                    alt="SE-5001 Waste Converter"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 md:order-2 space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">SE-5001</h1>
                  <p className="text-xl text-green-600 font-semibold">Capacity: 400–500 KG</p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The SE-5001 is a premium organic waste converter designed for large-scale commercial operations.
                  Perfect for convention centres and large-scale facilities that demand maximum waste processing
                  capacity.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">SE 5001 Key Features</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">SE 5001 Ideal For</h2>
            <p className="text-xl text-gray-600 mb-8">
              The SE-5001 is perfectly suited for large-scale operations, convention centres, and facilities requiring
              maximum waste management capacity.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {["Convention Centres", "Large-Scale Operations", "Major Events Venues", "Airport Facilities"].map(
                  (useCase, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{useCase}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your SE 5001 Waste Converter Today</h2>
            <p className="text-xl mb-8 text-green-50">
              Contact us today to learn more about the SE-5001 and how it can benefit your facility.
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
                Get SE 5001 Quote
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
