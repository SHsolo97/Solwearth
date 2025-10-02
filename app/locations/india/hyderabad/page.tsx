import { LocationPageTemplate } from "@/components/location-page-template"

export default function HyderabadPage() {
  return (
    <LocationPageTemplate
      title="Automatic Food Waste Converter Machine in Hyderabad"
      subtitle="Sustainable Waste Solutions for the City of Pearls"
      location="Hyderabad, India"
      description={[
        "Hyderabad, a rapidly growing tech hub and historic city, needs modern waste management solutions. Solwearth Ecotech offers fully automatic food waste converter machines with processing times of less than 24 hours.",
        "Using heat, pressure, and microbes, our systems provide reliable and cost-effective food waste management for Hyderabad's diverse establishments, encouraging sustainable living and waste reduction.",
      ]}
      benefits={[
        "Fully automatic operation",
        "Less than 24 hours processing time",
        "Reliable cost-effective systems",
        "Encourages sustainable living",
        "Reduces waste management burden",
        "Perfect for tech parks and modern facilities",
        "Energy-efficient technology",
        "Minimal maintenance required",
      ]}
      targetMarket={[
        "IT Parks and Tech Companies",
        "Hotels and Restaurants",
        "Apartments and Gated Communities",
        "Hospitals",
        "Educational Institutions",
        "Corporate Canteens",
        "Food Courts",
        "Catering Services",
      ]}
      features={[
        "Fully automatic PLC controlled",
        "Heat, pressure, and microbial technology",
        "Less than 24-hour processing",
        "Cost-effective operation",
        "Reliable performance",
        "Easy to use interface",
        "Minimal operator intervention",
        "Sustainable waste reduction",
      ]}
    />
  )
}
