import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Mauritius | Organic Waste Converter Suppliers Port Louis - Solwearth",
  description: "Leading OWC machine suppliers in Mauritius. Organic waste converters for Port Louis hotels and resorts. Eco-friendly waste management. Zero emission. Best prices.",
  keywords: "OWC machine Mauritius, organic waste converter Mauritius, food waste machine Port Louis, waste management Mauritius, OWC suppliers Mauritius, composting machine Mauritius, resort waste management Mauritius",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Mauritius - Solwearth",
    description: "Premium OWC machines for Mauritius' tourism and hospitality sector. Sustainable waste management solutions.",
    type: 'website',
  },
}

export default function MauritiusPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Mauritius"
      subtitle="Sustainable Waste Solutions for Island Excellence"
      location="Mauritius"
      description={[
        "Mauritius is recognized for its commitment to environmental sustainability and green development. Solwearth Ecotech supports Mauritius' environmental goals with innovative organic waste management solutions.",
        "Our waste converter machines provide efficient, eco-friendly processing for hotels, resorts, businesses, and municipalities across Mauritius, helping preserve the island's natural beauty while managing organic waste effectively.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Cost-effective waste management for island operations",
        "Reduces environmental impact and pollution",
        "Produces valuable compost for local agriculture",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Beach Resorts",
        "Restaurants and Food Courts",
        "Shopping Malls and Retail Centers",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Industrial Parks",
        "Municipal Corporations",
        "Residential Estates and Apartments",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Processing time: 12-30 hours depending on capacity",
        "83-90% average waste reduction",
        "Zero emission - No exhaust system required",
        "Noise-free and smoke-free operation",
        "Easy installation with no special requirements",
        "Durable stainless steel construction",
        "1-year warranty on all models",
      ]}
    />
  )
}
