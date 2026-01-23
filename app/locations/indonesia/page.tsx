import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Indonesia | OWC Machine Jakarta Bali - Solwearth",
  description: "Best organic waste converter machines in Indonesia. Automatic OWC machines for hotels, resorts in Jakarta, Bali, Surabaya. Archipelago-focused solutions. Zero emission technology. 90% waste reduction. Best prices.",
  keywords: "organic waste converter Indonesia, organic waste converter machine Indonesia, OWC machine Indonesia, food waste converter machine Jakarta, automatic organic waste converter Indonesia, waste management solutions Indonesia, composting machine Bali, OWC machine Jakarta, organic waste management Indonesia, resort waste converter Bali, sustainable tourism Indonesia",
  openGraph: {
    title: "Organic Waste Converter Machine in Indonesia - Solwearth Ecotech",
    description: "Advanced organic waste converter machines for Indonesia. Perfect for hotels, resorts, and businesses in Jakarta, Bali, Surabaya, and across the archipelago. 90% waste reduction. Zero emissions.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/indonesia"
  }
}

export default function IndonesiaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Indonesia"
      subtitle="Advanced Solutions for Southeast Asia's Largest Archipelago"
      location="Indonesia"
      description={[
        "Indonesia, with its vast archipelago of over 17,000 islands and growing urban centers, faces unique waste management challenges that require innovative solutions. From the bustling capital of Jakarta to the tourism paradise of Bali, from the industrial hubs of Surabaya and Bandung to the emerging cities across the islands, organic waste management is becoming increasingly critical for environmental sustainability. Solwearth Ecotech provides advanced organic waste converter machines tailored to Indonesia's diverse needs and archipelago geography.",
        "Our organic waste converter machines in Indonesia offer eco-friendly processing with zero emissions and up to 90% volume reduction in organic waste. This is particularly valuable for Indonesian islands where waste transportation to mainland disposal facilities is costly and environmentally impactful. The machines convert organic waste into valuable soil enricher that can be used for agriculture and landscaping, supporting Indonesia's agricultural sector and green development initiatives.",
        "Whether you're managing a luxury resort in Bali, a hotel in Jakarta, a shopping mall in Surabaya, or a hospital in Medan, Solwearth's organic waste converter machines provide efficient, reliable waste management solutions. Our fully automatic PLC controlled operation with no chemicals, additives, or bacteria required makes our machines ideal for diverse Indonesian environments, from coastal resorts to urban commercial districts. The completely odor-free processing with integrated deodorization ensures suitability for even guest-facing hospitality environments.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction reducing transportation needs",
        "Cost-effective solution ideal for island logistics challenges",
        "Reduces environmental pollution and greenhouse gases",
        "Produces valuable soil enricher for agriculture",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
        "Suitable for tropical humid climate conditions",
        "Supports Indonesia's sustainability and environmental goals",
      ]}
      targetMarket={[
        "Hotels, Resorts & Tourism Establishments",
        "Restaurants & Food Service Industry",
        "Shopping Malls & Retail Centers",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Industrial Facilities & Manufacturing Plants",
        "Municipal Waste Management Bodies",
        "Residential Complexes & Condominiums",
        "Cruise Ships & Maritime Facilities",
        "Catering Services & Event Venues",
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
