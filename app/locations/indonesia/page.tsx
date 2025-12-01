import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Indonesia | Organic Waste Converter Suppliers Jakarta - Solwearth",
  description: "Premium OWC machines in Indonesia. Organic waste converters for Jakarta, Bali, Surabaya. Hotel and resort waste management solutions. Zero emission technology. Best prices.",
  keywords: "OWC machine Indonesia, organic waste converter Indonesia, food waste machine Jakarta, waste management Indonesia, OWC suppliers Indonesia, composting machine Indonesia, waste converter Jakarta, organic waste management Indonesia",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Indonesia - Solwearth",
    description: "Advanced OWC machines for Indonesia's hospitality industry. Perfect for hotels, resorts, and restaurants.",
    type: 'website',
  },
}

export default function IndonesiaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Indonesia"
      subtitle="Advanced Solutions for Southeast Asia"
      location="Indonesia"
      description={[
        "Indonesia, with its vast archipelago and growing urban centers, faces unique waste management challenges. Solwearth Ecotech provides innovative organic waste management solutions tailored to Indonesia's diverse needs.",
        "Our waste converter machines offer efficient, eco-friendly processing for businesses, hotels, resorts, and municipalities across Indonesia, supporting the nation's environmental sustainability goals.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Cost-effective waste management solutions",
        "Reduces environmental pollution and greenhouse gases",
        "Produces valuable soil supplements for agriculture",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Resorts",
        "Restaurants and Food Service Industry",
        "Shopping Malls and Retail Centers",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Industrial Facilities",
        "Municipal Waste Management",
        "Residential Complexes and Condominiums",
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
