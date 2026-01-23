import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Malaysia | OWC Machine Kuala Lumpur - Solwearth",
  description: "Best organic waste converter machines in Malaysia. Energy-efficient OWC machines for hotels, restaurants, apartments in Kuala Lumpur, Penang, Johor. Zero emission. 24-hour processing. 90% waste reduction.",
  keywords: "organic waste converter Malaysia, organic waste converter machine Malaysia, OWC machine Malaysia, food waste converter machine Kuala Lumpur, automatic organic waste converter Malaysia, waste management solutions Malaysia, composting machine Malaysia, OWC machine KL, organic waste management Malaysia, sustainable waste management Malaysia",
  openGraph: {
    title: "Organic Waste Converter Machine in Malaysia - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Malaysia. Energy-efficient solutions with 90% waste reduction. Serving hotels, restaurants, and commercial establishments in Kuala Lumpur, Penang, Johor, and across Malaysia.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/malaysia"
  }
}

export default function MalaysiaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Malaysia"
      subtitle="Energy-Efficient Solutions for Sustainable Malaysia"
      location="Malaysia"
      description={[
        "Malaysia is rapidly advancing its environmental initiatives with a strong focus on sustainable waste management as part of its national sustainability roadmap. The country's diverse economy - from the bustling streets of Kuala Lumpur to the resort islands of Langkawi and Penang - generates significant organic waste from hospitality, food service, and residential sectors. Solwearth Ecotech provides advanced organic waste converter machines that help Malaysia achieve its environmental goals while offering cost-effective waste management solutions.",
        "Our organic waste converter machines in Malaysia are designed to reduce landfill dependency, cut operational costs, and deliver energy-efficient, rapid processing. The automatic models feature high capacity suitable for restaurants, institutions, and apartment complexes, with automatic processing that requires minimal operator intervention. Energy-saving design ensures quiet operation, while the compact size makes our machines suitable for Malaysia's diverse urban environments from high-rise buildings to suburban commercial centers.",
        "Producing eco-friendly soil enricher in less than 24 hours, our organic waste converter machines transform waste into a valuable resource that can be used for landscaping, agriculture, or sold as organic soil enricher. From the commercial districts of Kuala Lumpur and Petaling Jaya to the hospitality hubs of Penang and Langkawi, from the industrial centers of Johor Bahru to the residential areas across Malaysia, Solwearth's solutions are helping establishments embrace sustainable waste management practices suitable for the tropical climate.",
      ]}
      benefits={[
        "Significantly reduces landfill dependency and transportation costs",
        "Cuts overall waste management operational costs",
        "Energy-efficient operation with low power consumption",
        "Quick processing in less than 24 hours",
        "Produces eco-friendly soil enricher for landscaping and agriculture",
        "Quiet operation suitable for residential and commercial areas",
        "Compact design fitting diverse installation spaces",
        "Easy maintenance with minimal downtime",
        "Supports Malaysia's national sustainability initiatives",
        "Suitable for tropical climate conditions",
      ]}
      targetMarket={[
        "Restaurants, Cafes & Food Service Operators",
        "Institutions, Universities & Colleges",
        "Apartments, Condominiums & Residential Complexes",
        "Hotels, Resorts & Hospitality Industry",
        "Hospitals & Healthcare Facilities",
        "Shopping Malls & Retail Centers",
        "Commercial Buildings & Office Towers",
        "Industrial Facilities & Manufacturing Plants",
        "Catering Services & Event Venues",
        "Food Processing & Manufacturing",
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
