import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Food Waste Converter Machine in Goa | Organic Waste Converter for Hotels & Resorts - Solwearth",
  description: "Best food waste converter machine in Goa for hotels, resorts & beach shacks. 24-hour organic waste processing. Preserve Goa's pristine beaches. Sustainable tourism solutions. Call +91 98950 44004.",
  keywords: "food waste converter machine Goa, organic waste converter Goa, OWC machine Goa, automatic organic waste converter Goa, waste management solutions Goa, composting machine Goa, hotel waste converter Goa, resort waste management Goa, beach shack waste converter, sustainable tourism Goa",
  openGraph: {
    title: "Food Waste Converter Machine in Goa - Solwearth Ecotech",
    description: "Premium food waste converter machines for Goa's hospitality industry. 24-hour organic waste processing. Preserving Goa's pristine beaches through sustainable waste management for hotels, resorts, and restaurants.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/goa"
  }
}

export default function GoaPage() {
  return (
    <LocationPageTemplate
      title="Food Waste Converter Machine in Goa"
      subtitle="Preserving Paradise Through Sustainable Waste Management"
      location="Goa, India"
      description={[
        "Goa, India's premier beach tourism destination, welcomes millions of tourists annually, generating substantial organic waste from its world-renowned hospitality sector. The state's pristine beaches, lush forests, and unique biodiversity require special attention to waste management to preserve the natural environment that makes Goa a global travel destination. Solwearth Ecotech provides tailored food waste converter solutions specifically designed for Goa's hospitality and tourism industry.",
        "Our food waste converter machines in Goa offer 24-hour organic waste processing, transforming kitchen waste from hotels, resorts, restaurants, and beach shacks into valuable soil enricher. This rapid processing cycle ensures that waste doesn't accumulate, reducing the risk of pest infestation and unpleasant odors that could affect guest experience. The soil enricher produced can be used for hotel landscaping, gardens, and local agricultural purposes, creating a complete circular economy.",
        "From the luxury resorts of Candolim and Calangute to the boutique hotels of Panjim, from the beach shacks of Baga to the heritage properties of Fontainhas, Solwearth's organic waste converter machines are helping Goa's hospitality establishments embrace sustainable tourism practices. Our solutions protect Goa's beautiful beaches and natural environment for future generations while helping businesses achieve their sustainability certifications and green tourism goals.",
      ]}
      benefits={[
        "24-hour conversion of food waste to valuable soil enricher",
        "Preserves Goa's pristine beaches and natural environment",
        "Perfect solution for tourism and hospitality industry needs",
        "Supports sustainable tourism practices and certifications",
        "Reduces beach and coastal pollution from organic waste",
        "Ideal for hotels, resorts, and beach-side establishments",
        "Protects natural beauty that attracts tourism",
        "Eco-friendly operation with zero emissions and no odor",
        "Guest-friendly with completely odor-free processing",
        "Contributes to Goa's environmental conservation goals",
      ]}
      targetMarket={[
        "Beach Resorts & Luxury Hotels",
        "Restaurants, Cafes & Beach Shacks",
        "Tourist Establishments & Guest Houses",
        "Residential Communities & Villas",
        "Catering Services & Event Management",
        "Wedding & Event Venues",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions",
        "Cruise Ships & Maritime Facilities",
        "Casinos & Entertainment Venues",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Capacity range: 40 KG to 1000 KG per batch (SE-501 to SE-1H models)",
        "Processing time: 12-24 hours depending on waste type and capacity",
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
