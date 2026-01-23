import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Bangalore | Food Waste Converter Bengaluru - Solwearth",
  description: "Best organic waste converter machine in Bangalore. Automatic food waste converter for IT parks, hotels, apartments in Bengaluru. Thermal dehydration technology. 24-hour processing. Free installation. Call +91 98950 44004.",
  keywords: "organic waste converter Bangalore, organic waste converter machine Bangalore, food waste converter machine Bangalore, OWC machine Bangalore, automatic organic waste converter Bangalore, waste management solutions Bangalore, composting machine Bangalore, OWC machine Bengaluru, food waste machine Bengaluru, organic waste management Bangalore",
  openGraph: {
    title: "Organic Waste Converter Machine in Bangalore - Solwearth Ecotech",
    description: "Leading supplier of organic waste converter machines in Bangalore. Eco-friendly thermal dehydration technology. Serving 100+ clients across Karnataka including IT parks, hotels, and residential communities.",
    url: 'https://www.solwearth.com/locations/india/bangalore',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/bangalore"
  }
}

export default function BangalorePage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Bangalore"
      subtitle="Eco-Friendly Food Waste Solutions for India's Silicon Valley"
      location="Bangalore, India"
      description={[
        "Bangalore, India's IT capital and one of Asia's fastest-growing cities, generates approximately 5,000 tonnes of solid waste daily, with organic waste accounting for nearly 60% of this volume. The city's thriving tech industry, vibrant food culture, and rapidly expanding residential sectors create an unprecedented demand for efficient organic waste management solutions. Solwearth Ecotech brings cutting-edge organic waste converter machines to Bangalore, helping businesses and communities achieve sustainable waste management goals.",
        "Our food waste converter machines in Bangalore utilize advanced thermal dehydration technology to transform kitchen waste, food scraps, and organic materials into nutrient-rich soil enrichers within just 24 hours. This eco-friendly process eliminates the need for landfill disposal, reduces greenhouse gas emissions, and supports Bengaluru's Smart City initiatives. Unlike traditional methods that attract pests and produce odors, our OWC machines operate in a completely enclosed, odor-free environment.",
        "From Electronic City's tech campuses to Indiranagar's restaurants, from Whitefield's IT parks to Jayanagar's residential complexes, Solwearth's organic waste converter machines are transforming how Bangalore manages its organic waste. Our solutions help establishments comply with BBMP's waste segregation mandates while contributing to Karnataka's vision of becoming a zero-waste state.",
      ]}
      benefits={[
        "Rapid 24-hour waste-to-soil-enricher conversion using thermal dehydration",
        "Eco-friendly processing with zero emissions, smoke, or harmful gases",
        "Self-cleaning mechanism reducing manual intervention and maintenance",
        "User-friendly touch-screen interface for one-touch operation",
        "Generates valuable soil enricher for gardens and landscaping",
        "Significant reduction in waste disposal costs and logistics",
        "Perfect for Bangalore's tech-savvy businesses and smart city goals",
        "Helps comply with BBMP waste segregation and management rules",
        "Reduces carbon footprint and supports sustainability certifications",
        "Local installation and after-sales support available across Karnataka",
      ]}
      targetMarket={[
        "IT Parks, Tech Campuses & Software Companies",
        "Restaurants, Cafes & Cloud Kitchens",
        "Residential Apartments & Gated Communities",
        "Hotels, Resorts & Hospitality Industry",
        "Corporate Canteens & Office Cafeterias",
        "Educational Institutions & College Hostels",
        "Hospitals, Clinics & Healthcare Facilities",
        "PG Accommodations & Co-living Spaces",
        "Shopping Malls & Food Courts",
        "Catering Services & Event Venues",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Capacity range: 40 KG to 1000 KG per batch (SE-501 to SE-1H models)",
        "Processing time: 12-24 hours depending on waste type and capacity",
        "83-90% average waste volume reduction through dehydration",
        "Zero emission - No exhaust system or chimney required",
        "Fully automatic PLC control with user-friendly interface",
        "Integrated deodorization for completely odor-free operation",
        "Durable stainless steel construction for hygiene and longevity",
        "No additives, bacteria, enzymes, or chemicals required",
        "1-year comprehensive warranty with local service support",
      ]}
    />
  )
}
