import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Products | OWC Machine Range 25KG to 1000KG - Solwearth",
  description: "Browse our complete range of automatic organic waste converters. Models from 25KG to 1000KG capacity. SE-501, SE-1001, SE-2001, SE-3501, SE-5001, SE-1H. Buy OWC machine online.",
  keywords: "organic waste converter products, OWC machine range, food waste converter models, automatic waste management, compost machine varieties",
  openGraph: {
    title: "Complete OWC Machine Product Range - Solwearth",
    description: "Choose from 6 models of organic waste converters, from small 25KG units to industrial 1000KG capacity machines.",
    type: 'website',
  },
}

export default function AllProductsPage() {
  const products = [
    {
      id: "se-501",
      name: "SE 501",
      capacity: "40-50KG",
      description: "Perfect for medium restaurants, apartments, canteens, and institutions",
      specs: "Input: 50 Kg | Processing: 12-16 hrs | Power: 2.8 Kw",
      link: "/products/se-501",
      image: "/images/machine/small/se501.png",
    },
    {
      id: "se-1001",
      name: "SE 1001",
      capacity: "70-100KG",
      description: "Ideal for restaurants, institutions, cafeterias, and hospitals",
      specs: "Input: 70-100 Kg | Processing: 16-18 hrs | Power: 4 Kw",
      link: "/products/se-1001",
      image: "/images/machine/small/se1001.png",
    },
    {
      id: "se-2001",
      name: "SE 2001",
      capacity: "150-200KG",
      description: "Perfect for large food courts, IT campuses, and hospitals",
      specs: "Input: 150-250 Kg | Processing: 16-22 hrs | Power: 6 Kw",
      link: "/products/se-2001",
      image: "/images/machine/small/se2001.png",
    },
    {
      id: "se-3501",
      name: "SE 3501",
      capacity: "350-375KG",
      description: "Designed for large food caterers and institutional canteens",
      specs: "Input: 350 Kg | Processing: 21-25 hrs | Power: 8 Kw",
      link: "/products/se-3501",
      image: "/images/machine/small/se3501.png",
    },
    {
      id: "se-5001",
      name: "SE 5001",
      capacity: "450-500KG",
      description: "For large-scale operations and convention centres",
      specs: "Input: 450-500 Kg | Processing: 22-26 hrs | Power: 9 Kw",
      link: "/products/se-5001",
      image: "/images/machine/small/se5001.png",
    },
    {
      id: "se-1h",
      name: "SE 1H",
      capacity: "1000KG (1 Ton)",
      description: "Industrial-grade for municipalities and very high volume operations",
      specs: "Input: 1000 Kg | Processing: 27-30 hrs | Power: 12 Kw",
      link: "/products/se-1h",
      image: "/images/machine/small/se10001.png",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Product Range</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of organic waste converters designed to meet every scale of operation, from
              small restaurants to large municipalities.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="bg-white hover:shadow-xl transition-shadow flex flex-col">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center mb-4 p-3 h-40 relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} Waste Converter`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3 flex-grow">
                    <p className="text-sm text-gray-600 uppercase tracking-wide">{product.name}</p>
                    <h3 className="text-2xl font-bold text-green-600">Capacity: {product.capacity}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                    <p className="text-xs text-gray-500 pt-2">{product.specs}</p>
                  </CardContent>
                  <CardFooter className="justify-center pb-6">
                    <Link href={product.link} className="w-full">
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent w-full"
                      >
                        VIEW DETAILS
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Common Features Across All Models
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Fully Automatic PLC Controlled",
                "Multi-stage Indirect Heat & Dry Decomposition",
                "83–90% Average Waste Reduction",
                "Integrated Deodorisation System",
                "Safety Feature: Impeller Stops When Door Opens",
                "No Special Installation Required",
                "Stand-alone, Portable Design",
                "Stainless Steel Construction",
                "1 Year Warranty",
                "Eco-friendly Operation",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team of experts is ready to help you find the perfect waste management solution for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-lg text-gray-700">
                <p className="font-semibold">Call Us: +91 98950 440 04</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@solwearth.com" className="text-green-600 hover:underline">
                    info@solwearth.com
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <ScrollToFormButton className="bg-green-600 hover:bg-green-700 text-white px-8 py-6" variant="default">
                  Request Information
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
      </section>

      <LeadFormSection />
      <Footer />
    </main>
  )
}
