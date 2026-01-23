import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Mumbai | Food Waste Converter Maharashtra - Solwearth",
  description: "Best organic waste converter machine in Mumbai. Pioneering food waste converter solutions for hotels, restaurants, apartments in Maharashtra. 24-hour conversion. Zero emissions. Call +91 98950 44004.",
  keywords: "organic waste converter Mumbai, organic waste converter machine Mumbai, food waste converter machine Mumbai, OWC machine Mumbai, automatic organic waste converter Mumbai, waste management solutions Mumbai, composting machine Mumbai, OWC suppliers Maharashtra, organic waste management Mumbai",
  openGraph: {
    title: "Organic Waste Converter Machine in Mumbai - Solwearth Ecotech",
    description: "Pioneering organic waste converter solutions for Mumbai. Transform food waste into soil enricher in 24 hours. Serving hotels, restaurants, high-rises, and commercial establishments across Maharashtra.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/mumbai"
  }
}

export default function MumbaiPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Mumbai"
      subtitle="Pioneering Waste Management Solutions for India's Financial Capital"
      location="Mumbai, India"
      description={[
        "Mumbai, India's financial capital and most populous city, generates over 9,000 tonnes of municipal solid waste daily, with organic waste comprising nearly 70% of this volume. The city's unique challenges - from space constraints in high-rise buildings to the massive waste generation from its world-famous hospitality and entertainment sectors - demand innovative, space-efficient waste management solutions. Solwearth Ecotech brings pioneering organic waste converter technology to Mumbai, addressing these challenges with cutting-edge machines designed for metropolitan environments.",
        "Our organic waste converter machines in Mumbai are designed to handle a diverse range of organic waste including food waste, vegetable and fruit waste, yard trimmings, and even paper products. This versatility makes our OWC machines ideal for Mumbai's diverse commercial and residential sectors, from the high-rises of Worli and BKC to the commercial kitchens of Colaba and Fort. The machines convert organic waste into valuable soil enricher within 24 hours, significantly reducing environmental impact while creating useful resources.",
        "Solwearth's commitment to quality ensures all our organic waste converter machines comply with the highest environmental and manufacturing standards. We provide excellent technical support and maintenance services across Mumbai and Maharashtra, ensuring our clients enjoy uninterrupted operation. Our solutions help establishments meet BMC's waste segregation requirements while contributing to Maharashtra's goal of becoming a model state for waste management.",
      ]}
      benefits={[
        "Handles diverse organic waste types including food, vegetable, fruit, and paper",
        "Significant environmental impact reduction with zero emission technology",
        "Cost-effective long-term solution reducing waste disposal expenses",
        "Promotes sustainable living and circular economy principles",
        "Reduces transportation and landfill disposal costs substantially",
        "Full compliance with highest quality and environmental standards",
        "Excellent technical support and maintenance services",
        "Ideal compact design for Mumbai's space-constrained high-density areas",
        "Helps meet BMC waste segregation and Swachh Mumbai requirements",
        "Supports Maharashtra's sustainable development goals",
      ]}
      targetMarket={[
        "High-Rise Residential Buildings & Housing Societies",
        "Hotels, Resorts & Hospitality Industry",
        "Corporate Offices & Business Parks",
        "Shopping Malls & Food Courts",
        "Hospitals, Clinics & Healthcare Facilities",
        "Educational Institutions & College Campuses",
        "Catering Services & Cloud Kitchens",
        "Industrial Kitchens & Food Processing Units",
        "Restaurants, Cafes & Quick Service Restaurants",
        "Entertainment Venues & Convention Centers",
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
