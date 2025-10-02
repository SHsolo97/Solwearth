import { LocationPageTemplate } from "@/components/location-page-template"

export default function BangalorePage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machines in Bangalore"
      subtitle="Food Waste Solutions for India's Silicon Valley"
      location="Bangalore, India"
      description={[
        "Bangalore, India's IT capital, generates massive amounts of organic waste from its thriving restaurant, hotel, and corporate sectors. Solwearth Ecotech provides cutting-edge waste management solutions tailored for Bangalore's dynamic environment.",
        "Our food waste converter machines use bacterial decomposition to convert waste into soil supplements within 24 hours, making them perfect for Bangalore's commercial establishments.",
      ]}
      benefits={[
        "Reduces landfill waste significantly",
        "Generates methane-free processing",
        "Creates valuable soil supplements",
        "Self-cleaning and user-friendly operation",
        "Durable materials for long-lasting performance",
        "Perfect for Bangalore's tech-savvy businesses",
        "Cost-effective waste management",
        "24-hour waste conversion process",
      ]}
      targetMarket={[
        "IT Campuses and Tech Parks",
        "Restaurants and Cloud Kitchens",
        "Apartments and Residential Communities",
        "Hotels and Hospitality Industry",
        "Corporate Canteens",
        "Educational Institutions",
        "Hospitals and Healthcare",
        "Hostels and PG Accommodations",
      ]}
      features={[
        "Bacterial decomposition technology",
        "Self-cleaning mechanism",
        "User-friendly interface",
        "Durable stainless steel construction",
        "Fully automatic operation",
        "24-hour processing time",
        "Local installation and support available",
        "Energy-efficient design",
      ]}
    />
  )
}
