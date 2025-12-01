import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Ghana | Organic Waste Converter Suppliers Accra - Solwearth",
  description: "Buy OWC machines in Ghana. Organic waste converters for businesses in Accra, Kumasi. Sustainable waste management solutions. Zero emission technology. 90% waste reduction.",
  keywords: "OWC machine Ghana, organic waste converter Ghana, food waste machine Accra, waste management Ghana, OWC suppliers Ghana, composting machine Ghana, waste converter Accra, organic waste management Ghana",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Ghana - Solwearth",
    description: "Advanced OWC machines for sustainable waste management in Ghana. Perfect for hotels, hospitals, and institutions.",
    type: 'website',
  },
}

export default function GhanaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Ghana"
      subtitle="Sustainable Waste Management Solutions"
      location="Ghana"
      description={[
        "Ghana is making significant strides in waste management and environmental sustainability. Solwearth Ecotech offers innovative organic waste management solutions tailored to Ghana's unique needs and growing urban centers.",
        "Our waste converter machines help businesses, municipalities, and institutions across Ghana manage organic waste efficiently while contributing to a cleaner, greener environment.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Cost-effective waste management solutions",
        "Reduces methane emissions and environmental pollution",
        "Produces valuable soil supplements for agriculture",
        "Fully automatic operation with minimal labor",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Hospitality Industry",
        "Restaurants and Food Service Providers",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Manufacturing and Industrial Facilities",
        "Municipal Waste Management",
        "Shopping Centers and Retail",
        "Residential Complexes",
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
