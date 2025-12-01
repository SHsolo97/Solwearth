import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Qatar | Organic Waste Converter Suppliers Doha - Solwearth",
  description: "Leading OWC machine suppliers in Qatar. Organic waste converters for Doha hotels, restaurants, hospitals. Qatar 2030 Vision compliant. Zero emission. Best prices.",
  keywords: "OWC machine Qatar, organic waste converter Qatar, food waste machine Doha, waste management Qatar, OWC suppliers Qatar, composting machine Qatar, waste converter Doha, organic waste management Qatar",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Qatar - Solwearth",
    description: "Premium OWC machines for Qatar. Supporting Qatar National Vision 2030 with sustainable waste management.",
    type: 'website',
  },
}

export default function QatarPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Qatar"
      subtitle="Supporting National Sustainability Goals"
      location="Qatar"
      description={[
        "Qatar faces landfill scarcity and has a strong push for sustainability. Solwearth Ecotech provides OWC solutions with multi-stage decomposition technology and custom machine ranges from 50kg to 1000kg per batch.",
        "Our systems offer up to 90% waste shrinkage, reduced disposal costs, zero emissions, odorless operation, and valuable compost output, supporting Qatar's National Vision 2030 sustainability goals.",
      ]}
      benefits={[
        "Reduces disposal costs significantly",
        "Up to 90% waste shrinkage",
        "Supports National Vision 2030",
        "Zero emissions",
        "Odorless operation",
        "Valuable compost production",
        "Custom capacity range: 50kg-1000kg/batch",
        "Addresses landfill scarcity",
      ]}
      targetMarket={[
        "Hotels and Resorts",
        "Restaurants and Catering",
        "Residential Compounds",
        "Commercial Buildings",
        "Hospitals",
        "Educational Institutions",
        "Industrial Facilities",
        "Sports and Entertainment Venues",
      ]}
      features={[
        "Multi-stage decomposition technology",
        "Custom machine range: 50kg-1000kg/batch",
        "Fully automated operation",
        "Nutrient-rich compost output",
        "Controlled, odor-free environment",
        "Up to 90% waste reduction",
        "Zero emissions",
        "Supports national sustainability",
      ]}
    />
  )
}
