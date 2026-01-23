import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Lebanon | OWC Machine Beirut - Solwearth",
  description: "Best organic waste converter machines in Lebanon. Automatic OWC machines for hotels, restaurants in Beirut. Middle East hospitality focus. Zero emission technology. 90% waste reduction. Sustainable solutions.",
  keywords: "organic waste converter Lebanon, organic waste converter machine Lebanon, OWC machine Lebanon, food waste converter machine Beirut, automatic organic waste converter Lebanon, waste management solutions Lebanon, composting machine Lebanon, OWC machine Beirut, organic waste management Lebanon, hospitality waste converter Beirut",
  openGraph: {
    title: "Organic Waste Converter Machine in Lebanon - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Lebanon. Eco-friendly solutions for hotels, restaurants, and commercial establishments in Beirut and across Lebanon. 90% waste reduction.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/lebanon"
  }
}

export default function LebanonPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Lebanon"
      subtitle="Modern Waste Management Solutions for the Middle East"
      location="Lebanon"
      description={[
        "Lebanon, with its rich cultural heritage and vibrant hospitality industry, is working towards improving its waste management infrastructure as part of broader environmental sustainability initiatives. The country's renowned restaurant scene, hotels, and commercial establishments generate significant organic waste that requires efficient management solutions. Solwearth Ecotech offers advanced organic waste converter machines to support Lebanon's environmental initiatives and help businesses manage waste effectively.",
        "Our organic waste converter machines in Lebanon provide eco-friendly processing with zero emissions and up to 90% volume reduction. This is particularly valuable in addressing Lebanon's waste management challenges by reducing landfill dependency and transportation costs. The machines produce valuable soil enricher from organic waste, creating a circular economy where waste becomes a resource for landscaping, gardens, and agricultural use.",
        "From the bustling restaurant districts of Beirut to the hospitality establishments of Jounieh and Byblos, from the commercial centers of Tripoli to the growing developments across the country, Solwearth's organic waste converter machines are helping Lebanese businesses embrace sustainable practices. Our fully automatic PLC controlled operation with completely odor-free processing with integrated deodorization makes our machines ideal for Lebanon's hospitality-focused economy where guest experience and environmental responsibility go hand in hand.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in organic waste",
        "Cost-effective long-term waste management solution",
        "Significantly reduces landfill dependency and transportation",
        "Produces valuable soil enricher from organic waste",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
        "Supports Lebanon's environmental sustainability goals",
        "Perfect for hospitality industry requirements",
      ]}
      targetMarket={[
        "Hotels & Hospitality Industry",
        "Restaurants, Cafes & Food Service Providers",
        "Shopping Centers & Retail Complexes",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Industrial Facilities & Manufacturing Plants",
        "Municipal Corporations & Local Authorities",
        "Residential Complexes & Apartment Buildings",
        "Catering Services & Event Venues",
        "Tourism & Entertainment Establishments",
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
