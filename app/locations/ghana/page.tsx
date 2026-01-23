import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Ghana | OWC Machine Accra - Solwearth",
  description: "Best organic waste converter machines in Ghana. Automatic OWC machines for hotels, hospitals, institutions in Accra, Kumasi. Sustainable waste management. Zero emission technology. 90% waste reduction. Africa focus.",
  keywords: "organic waste converter Ghana, organic waste converter machine Ghana, OWC machine Ghana, food waste converter machine Accra, automatic organic waste converter Ghana, waste management solutions Ghana, composting machine Ghana, OWC machine Accra, organic waste management Ghana, sustainable waste Africa, waste converter Kumasi",
  openGraph: {
    title: "Organic Waste Converter Machine in Ghana - Solwearth Ecotech",
    description: "Advanced organic waste converter machines for Ghana. Supporting sustainable development in West Africa. Zero emissions. 90% waste reduction. Serving hotels, hospitals, and institutions in Accra, Kumasi, and across Ghana.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/ghana"
  }
}

export default function GhanaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Ghana"
      subtitle="Sustainable Waste Management for West Africa's Rising Star"
      location="Ghana"
      description={[
        "Ghana, as one of West Africa's most stable and progressive economies, is making significant strides in environmental sustainability and waste management infrastructure. With growing urban centers like Accra and Kumasi generating increasing volumes of organic waste, the need for efficient, eco-friendly waste management solutions has never been more critical. Solwearth Ecotech brings innovative organic waste converter technology to Ghana, supporting the nation's sustainable development goals and helping businesses and institutions manage waste responsibly.",
        "Our organic waste converter machines in Ghana offer eco-friendly waste processing with zero emissions and up to 90% volume reduction. The machines convert organic waste from hotels, restaurants, hospitals, and institutions into valuable soil enrichers that can be used for agriculture and landscaping - a significant benefit for Ghana's agricultural economy. The fully automatic operation with minimal labor requirements makes our machines ideal for diverse operational environments across the country.",
        "With no chemicals, additives, or bacteria required during processing, and completely odor-free operation through integrated deodorization, our organic waste converter machines are suitable for installation even in sensitive environments. From the business districts of Accra to the educational institutions of Kumasi, from the hospitality establishments across Ghana's regions to the healthcare facilities serving communities, Solwearth's solutions are helping Ghana embrace sustainable waste management while reducing environmental pollution and landfill dependency.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in organic waste",
        "Cost-effective long-term waste management solution",
        "Reduces methane emissions and environmental pollution",
        "Produces valuable soil enricher for agriculture",
        "Fully automatic operation with minimal labor requirements",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
        "Supports Ghana's sustainable development goals",
        "Reduces dependency on stressed landfill systems",
      ]}
      targetMarket={[
        "Hotels & Hospitality Industry",
        "Restaurants & Food Service Providers",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Manufacturing & Industrial Facilities",
        "Municipal Waste Management Bodies",
        "Shopping Centers & Retail Complexes",
        "Residential Complexes & Housing Estates",
        "Government Buildings & Public Offices",
        "Mining & Resource Companies",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Capacity range: 40 KG to 1000 KG per batch (SE-501 to SE-1H models)",
        "Processing time: 12-30 hours depending on waste type and capacity",
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
