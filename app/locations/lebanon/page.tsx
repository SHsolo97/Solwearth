import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Lebanon | Organic Waste Converter Suppliers Beirut - Solwearth",
  description: "Buy OWC machines in Lebanon. Organic waste converters for Beirut businesses. Sustainable waste management solutions. Zero emission technology. 90% waste reduction.",
  keywords: "OWC machine Lebanon, organic waste converter Lebanon, food waste machine Beirut, waste management Lebanon, OWC suppliers Lebanon, composting machine Lebanon, waste converter Beirut, organic waste management Lebanon",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Lebanon - Solwearth",
    description: "Eco-friendly OWC machines for Lebanon. Perfect for hotels, restaurants, and commercial establishments.",
    type: 'website',
  },
}

export default function LebanonPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Lebanon"
      subtitle="Modern Waste Management for the Middle East"
      location="Lebanon"
      description={[
        "Lebanon is working towards improving its waste management infrastructure and environmental sustainability. Solwearth Ecotech offers advanced organic waste management solutions to support Lebanon's environmental initiatives.",
        "Our waste converter machines provide efficient, eco-friendly processing for businesses, hotels, restaurants, and municipalities across Lebanon, helping address waste management challenges effectively.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in waste",
        "Cost-effective long-term waste management",
        "Reduces landfill dependency and environmental impact",
        "Produces valuable soil supplements from organic waste",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
      ]}
      targetMarket={[
        "Hotels and Hospitality Industry",
        "Restaurants and Food Service Providers",
        "Shopping Centers and Retail",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Industrial Facilities",
        "Municipal Corporations",
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
