import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Mauritius | OWC Machine Port Louis - Solwearth",
  description: "Best organic waste converter machines in Mauritius. Automatic OWC machines for island resorts, hotels in Port Louis. Protect island ecosystems. Zero emission. 90% waste reduction. Tourism-focused solutions.",
  keywords: "organic waste converter Mauritius, organic waste converter machine Mauritius, OWC machine Mauritius, food waste converter machine Port Louis, resort waste management Mauritius, island waste converter Mauritius, hotel waste management Mauritius, sustainable tourism Mauritius, composting machine Mauritius, eco-tourism Mauritius",
  openGraph: {
    title: "Organic Waste Converter Machine in Mauritius - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Mauritius' tourism and hospitality sector. Protect island excellence with sustainable waste management. Perfect for resorts, hotels, and businesses across Mauritius.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/mauritius"
  }
}

export default function MauritiusPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Mauritius"
      subtitle="Sustainable Waste Solutions for Island Excellence"
      location="Mauritius"
      description={[
        "Mauritius, recognized globally for its commitment to environmental sustainability and eco-tourism, requires innovative waste management solutions that protect its pristine natural environment. As an island nation with limited land area and a thriving tourism industry, Mauritius faces unique challenges in managing organic waste from hotels, resorts, and the hospitality sector. Solwearth Ecotech supports Mauritius' environmental goals with advanced organic waste converter machines designed for island operations.",
        "Our organic waste converter machines in Mauritius provide eco-friendly processing with zero emissions and up to 90% volume reduction. This is particularly valuable for island operations where waste transportation and disposal options are limited and costly. The machines produce valuable soil enricher that can be used for resort landscaping, gardens, and local agriculture, supporting Mauritius' circular economy initiatives and reducing dependence on imported fertilizers.",
        "From the luxury beach resorts of Grand Baie and Flic en Flac to the hotels of Port Louis and Curepipe, from the shopping centers of Quatre Bornes to the healthcare facilities across the island, Solwearth's organic waste converter machines are helping Mauritius establishments reduce their environmental footprint. Our fully automatic PLC controlled operation with completely odor-free processing makes our machines ideal for Mauritius' tourism-focused economy where environmental preservation and guest experience are paramount.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction for efficient island waste management",
        "Cost-effective solution reducing waste transportation expenses",
        "Reduces environmental impact and protects island ecosystems",
        "Produces valuable soil enricher for landscaping and local agriculture",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
        "Supports Mauritius' eco-tourism and sustainability goals",
        "Helps achieve green certifications and sustainability ratings",
      ]}
      targetMarket={[
        "Hotels, Beach Resorts & Luxury Properties",
        "Restaurants, Cafes & Food Courts",
        "Shopping Malls & Retail Centers",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Industrial Parks & Manufacturing",
        "Municipal Corporations & Local Authorities",
        "Residential Estates & Apartments",
        "Cruise Ship Facilities & Maritime Services",
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
