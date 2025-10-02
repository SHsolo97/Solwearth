import { LocationPageTemplate } from "@/components/location-page-template"

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
