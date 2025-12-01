import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Kenya | Organic Waste Converter Suppliers Nairobi - Solwearth",
  description: "Leading OWC machine suppliers in Kenya. Organic waste converters for Nairobi, Mombasa, Kisumu. Eco-friendly waste management. Zero emission. 90% waste reduction guaranteed.",
  keywords: "OWC machine Kenya, organic waste converter Kenya, food waste machine Nairobi, waste management Kenya, OWC suppliers Kenya, composting machine Kenya, waste converter Nairobi, organic waste management Kenya",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Kenya - Solwearth",
    description: "Premium OWC machines for Kenya's hotels, hospitals, and municipalities. Sustainable waste management solutions.",
    type: 'website',
  },
}

export default function KenyaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Kenya"
      subtitle="Leading Waste Management for East Africa"
      location="Kenya"
      description={[
        "Kenya is at the forefront of environmental conservation and sustainable development in East Africa. Solwearth Ecotech supports Kenya's green initiatives with advanced organic waste management solutions.",
        "Our waste converter machines provide efficient, eco-friendly processing for businesses, hotels, and municipalities across Kenya, helping achieve waste reduction goals and environmental sustainability.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Cost-effective long-term waste management",
        "Reduces greenhouse gas emissions significantly",
        "Generates valuable compost for agriculture",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Safari Lodges",
        "Restaurants and Food Courts",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Industrial Parks and Manufacturing",
        "Municipal Corporations",
        "Shopping Malls and Retail Centers",
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
