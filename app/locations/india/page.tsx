import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in India | Organic Waste Converter Manufacturers & Suppliers - Solwearth",
  description: "Leading OWC machine manufacturers in India. Buy organic waste converters for food waste management across India. 40-1000 KG capacity. Zero emission technology. Contact +91 98950 44004.",
  keywords: "OWC machine India, organic waste converter India, food waste machine India, waste management solutions India, OWC suppliers India, organic waste management India, composting machine India, waste converter manufacturers India",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in India - Solwearth",
    description: "Premium OWC machines for sustainable waste management in India. 90% waste reduction. Zero emission technology. Serving hotels, hospitals, restaurants across India.",
    type: 'website',
  },
}

export default function IndiaPage() {
  return (
    <LocationPageTemplate
      title="Waste Converter Machines in India"
      subtitle="Sustainable Solutions for a Greener Future"
      location="India"
      description={[
        "India faces significant waste management challenges, with rapidly growing urban populations and increasing waste generation. Solwearth Ecotech provides comprehensive organic waste management solutions across the country.",
        "Our waste converter machines offer eco-friendly processing, landfill reduction, and cost-effective solutions for businesses, municipalities, and industrial clients throughout India.",
      ]}
      benefits={[
        "Eco-friendly waste processing with multi-stage indirect heat and dry decomposition",
        "Significant landfill waste reduction - up to 90% volume reduction",
        "Cost-effective solutions for long-term waste management",
        "Reduces methane emissions and environmental impact",
        "Generates valuable soil supplements from waste",
        "Fully automatic PLC controlled operation",
        "No additives, bacteria, or chemicals required",
        "Integrated deodorization for odor-free operation",
      ]}
      targetMarket={[
        "Restaurants and Hotels",
        "Residential Apartments and Townships",
        "IT Campuses and Corporate Parks",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Flight Kitchens and Catering Services",
        "Food Processing Units",
        "Municipal Corporations",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Processing time: 12-30 hours depending on capacity",
        "83-90% average waste reduction",
        "Zero emission - No exhaust system required",
        "No emissions, smoke, or odor during operation",
        "Easy installation with no special requirements",
        "Durable stainless steel construction",
        "1-year warranty on all models",
      ]}
    />
  )
}
