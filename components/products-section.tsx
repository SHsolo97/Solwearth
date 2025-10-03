"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

interface ProductsSectionProps {
  showAll?: boolean
  onRequestQuote?: () => void
}

export function ProductsSection({ showAll = false, onRequestQuote }: ProductsSectionProps) {
  const allProducts = [
    {
      id: "se-501",
      name: "SE 501",
      capacity: "25-50KG",
      description: "waste converter machine - 25-50 KG",
      link: "/products/se-501",
      image: "/images/machine/small/se501.png",
    },
    {
      id: "se-1001",
      name: "SE 1001",
      capacity: "75-100KG",
      description: "waste converter machine - 75-100 KG",
      link: "/products/se-1001",
      image: "/images/machine/small/se1001.png",
    },
    {
      id: "se-2001",
      name: "SE 2001",
      capacity: "150-200KG",
      description: "waste converter machine - 150-200 KG",
      link: "/products/se-2001",
      image: "/images/machine/small/se2001.png",
    },
    {
      id: "se-3501",
      name: "SE 3501",
      capacity: "350-375KG",
      description: "waste converter machine - 350-375 KG",
      link: "/products/se-3501",
      image: "/images/machine/small/se3501.png",
    },
    {
      id: "se-5001",
      name: "SE 5001",
      capacity: "400-500KG",
      description: "waste converter machine - 400-500 KG",
      link: "/products/se-5001",
      image: "/images/machine/small/se5001.png",
    },
    {
      id: "se-1h",
      name: "SE 1H",
      capacity: "1000KG",
      description: "waste converter machine - 1000 KG",
      link: "/products/se-1h",
      image: "/images/machine/small/se10001.png",
    },
  ]

  // Show SE 1001, SE 5001, and SE 1H on home page (indices 1, 4, 5)
  const products = showAll ? allProducts : [allProducts[1], allProducts[4], allProducts[5]]

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Food Waste Converter Machine
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SE food waste converter machines offer various capacities to suit your needs. Select from a reliable and
            eco-friendly choice for businesses looking to manage waste effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center mb-4 p-3 h-40">
                  <img
                    src={product.image}
                    alt={product.description}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-600 uppercase tracking-wide">{product.name}</p>
                <h3 className="text-2xl font-bold text-gray-900">Capacity: {product.capacity}</h3>
              </CardContent>
              <CardFooter className="justify-center">
                <Link href={product.link}>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    {product.name} Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <Link href="/products">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6">SEE ALL PRODUCTS</Button>
            </Link>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Call Us: <span className="font-semibold">+91 98950 440 04</span> | Mail us:{" "}
            <a href="mailto:info@solwearth.com" className="text-green-600 hover:underline">
              info@solwearth.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
