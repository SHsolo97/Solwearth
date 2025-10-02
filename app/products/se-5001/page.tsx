import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Zap, Settings, Shield, Leaf } from "lucide-react"
import Link from "next/link"

export default function SE5001Page() {
  const specifications = [
    { label: "Capacity", value: "400–500 KG" },
    { label: "Input per Batch", value: "500 Kg" },
    { label: "Processing Time", value: "22–26 hrs" },
    { label: "Power Consumption", value: "9 Kw" },
    { label: "Dimension (W×D×H)", value: "2342×1442×1600 mm" },
    { label: "Weight", value: "1100 Kg" },
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

  return (
    <main className="min-h-screen bg-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Waste Management?</h2>
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
