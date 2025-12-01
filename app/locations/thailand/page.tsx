import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Thailand | Organic Waste Converter Suppliers Bangkok - Solwearth",
  description: "Premium OWC machines in Thailand. Organic waste converters for hotels, restaurants, and businesses in Bangkok, Phuket, Pattaya. Zero emission technology. Contact for best prices.",
  keywords: "OWC machine Thailand, organic waste converter Thailand, food waste machine Bangkok, waste management Thailand, OWC suppliers Thailand, composting machine Thailand, waste converter Bangkok, organic waste management Thailand",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Thailand - Solwearth",
    description: "Eco-friendly OWC machines for Thailand's hospitality and food industry. 90% waste reduction. Perfect for hotels and resorts.",
    type: 'website',
  },
}

export default function ThailandPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Thailand"
      subtitle="Advanced Waste Management for a Sustainable Future"
      location="Thailand"
      description={[
        "Thailand is rapidly advancing its environmental initiatives and sustainable development goals. Solwearth Ecotech brings innovative organic waste management solutions to support Thailand's commitment to sustainability.",
        "Our waste converter machines provide efficient, eco-friendly processing for businesses, hotels, restaurants, and municipalities across Thailand, helping reduce landfill waste and environmental impact.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Cost-effective long-term waste management solutions",
        "Reduces greenhouse gas emissions significantly",
        "Produces valuable soil supplements from organic waste",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free operation with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Resorts",
        "Restaurants and Food Courts",
        "Shopping Malls and Retail Centers",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Industrial Complexes",
        "Municipal Corporations",
        "Residential Condominiums",
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
