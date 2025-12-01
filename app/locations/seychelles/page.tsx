import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Seychelles | Organic Waste Converter Island Resorts - Solwearth",
  description: "Premium OWC machines for Seychelles resorts and hotels. Organic waste converters for island waste management. Zero emission. Protect island ecosystems. 90% waste reduction.",
  keywords: "OWC machine Seychelles, organic waste converter Seychelles, food waste machine Seychelles, waste management Seychelles, OWC suppliers Seychelles, composting machine Seychelles, resort waste management Seychelles",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Seychelles - Solwearth",
    description: "Eco-friendly OWC machines for Seychelles' pristine island environment. Perfect for resorts and hospitality.",
    type: 'website',
  },
}

export default function SeychellesPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Seychelles"
      subtitle="Protecting Island Ecosystems Through Innovation"
      location="Seychelles"
      description={[
        "Seychelles, an island nation committed to environmental conservation, requires innovative waste management solutions to protect its pristine natural environment. Solwearth Ecotech provides eco-friendly organic waste management technology.",
        "Our waste converter machines are ideal for Seychelles' hotels, resorts, and businesses, offering efficient processing while maintaining the islands' commitment to environmental preservation and sustainability.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Protects island ecosystems from waste pollution",
        "Reduces shipping costs for waste disposal",
        "Produces valuable soil supplements for local agriculture",
        "Fully automatic operation with minimal labor",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Island Resorts",
        "Restaurants and Food Service Industry",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Government Facilities",
        "Municipal Waste Management",
        "Residential Complexes",
        "Tourism and Hospitality Sector",
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
