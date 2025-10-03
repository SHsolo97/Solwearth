import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter in Mumbai | Food Waste Management Solutions - Solwearth",
  description: "Leading organic waste converter supplier in Mumbai. Automatic OWC machines for hotels, restaurants, apartments in Mumbai. Convert food waste to compost in 24 hours. Call +91 98950 440 04",
  keywords: "organic waste converter Mumbai, food waste converter Mumbai, OWC machine Mumbai, waste management Mumbai, compost machine Mumbai",
  openGraph: {
    title: "Organic Waste Converter Mumbai - Solwearth Ecotech",
    description: "Transform Mumbai's food waste into compost with our automatic organic waste converters. Serving hotels, restaurants and commercial establishments.",
    type: 'website',
  },
}

export default function MumbaiPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Mumbai"
      subtitle="Pioneering Waste Management Solutions"
      location="Mumbai, India"
      description={[
        "Mumbai, India's financial capital and most populous city, faces unique waste management challenges. Solwearth Ecotech offers pioneering solutions for effective waste management in this bustling metropolis.",
        "Our organic waste converters handle a variety of organic waste including food, vegetable, fruit, yard waste, and paper products, making them ideal for Mumbai's diverse commercial and residential sectors.",
      ]}
      benefits={[
        "Handles diverse organic waste types",
        "Significant environmental impact reduction",
        "Cost-effective long-term solution",
        "Promotes sustainable living",
        "Reduces transportation and disposal costs",
        "Compliance with highest quality standards",
        "Excellent technical support and maintenance",
        "Ideal for Mumbai's high-density areas",
      ]}
      targetMarket={[
        "High-Rise Residential Buildings",
        "Hotels and Restaurants",
        "Corporate Offices",
        "Shopping Malls and Food Courts",
        "Hospitals",
        "Educational Institutions",
        "Catering Services",
        "Industrial Kitchens",
      ]}
      features={[
        "Handles food, vegetable, fruit, yard, and paper waste",
        "Durable materials and construction",
        "Quality standards compliance",
        "Technical support and maintenance services",
        "Space-efficient design",
        "Fully automatic operation",
        "Odor-free processing",
        "Quick installation",
      ]}
    />
  )
}
