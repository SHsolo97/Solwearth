import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"

export const metadata: Metadata = {
  title: "Organic Waste Converter in Bangalore | Food Waste Management Solutions",
  description: "Top organic waste converter supplier in Bangalore. Automatic OWC machines for hotels, restaurants, apartments. Free installation. Call +91 98950 44004.",
  keywords: "organic waste converter Bangalore, food waste converter Bangalore, OWC machine Bangalore, waste management Bangalore, compost machine Bangalore",
  openGraph: {
    title: "Organic Waste Converter in Bangalore - Solwearth Ecotech",
    description: "Leading supplier of automatic organic waste converters in Bangalore. Serving 100+ clients across Karnataka.",
    url: 'https://www.solwearth.com/locations/india/bangalore',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/bangalore"
  }
}

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
