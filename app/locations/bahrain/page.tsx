import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Bahrain | OWC Machine Manama - Solwearth",
  description: "Best organic waste converter machines in Bahrain. Compact OWC machines for apartments, villas, hotels, businesses in Manama. Eco-friendly technology. Zero emission. Best prices in Bahrain.",
  keywords: "organic waste converter Bahrain, organic waste converter machine Bahrain, OWC machine Bahrain, food waste converter machine Manama, automatic organic waste converter Bahrain, waste management solutions Bahrain, composting machine Bahrain, OWC machine Manama, organic waste management Bahrain, compact waste converter Bahrain",
  openGraph: {
    title: "Organic Waste Converter Machine in Bahrain - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Bahrain. Compact solutions for apartments, villas, businesses, and institutions. Eco-friendly and odor-free operation. Perfect for Manama and across the Kingdom.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/bahrain"
  }
}

export default function BahrainPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Bahrain"
      subtitle="Compact and Efficient Solutions for the Kingdom"
      location="Bahrain"
      description={[
        "Bahrain, as a small island nation with limited land area, requires efficient and space-conscious waste management solutions. The Kingdom's dense urban environment, growing hospitality sector, and commitment to environmental sustainability create unique challenges that demand innovative approaches. Solwearth Ecotech offers organic waste converter machines specifically designed for Bahrain's requirements - from compact units for apartments and villas to high-capacity systems for businesses and institutions.",
        "Our organic waste converter machines in Bahrain are engineered to meet local electrical specifications and environmental standards. The compact units are perfect for residential apartments with efficient kitchen waste processing, operating completely odor-free with eco-friendly technology. For institutions and commercial establishments, our automatic systems offer durability, high-volume capacity, and ease of use - all producing valuable on-site soil enricher that can be used for landscaping or sold as a resource.",
        "From the financial district of Manama to the residential compounds of Riffa, from the hotels of Juffair to the commercial centers of Seef, Solwearth's organic waste converter machines are helping Bahrain establishments reduce their environmental footprint. Our solutions support Bahrain's sustainability initiatives and help reduce the Kingdom's landfill dependency while lowering carbon emissions from waste transportation.",
      ]}
      benefits={[
        "Compact design perfect for space-limited apartments and villas",
        "Efficient kitchen waste processing with minimal footprint",
        "Completely odor-free operation for residential comfort",
        "Eco-friendly technology with zero emissions",
        "Automatic systems available for institutions and businesses",
        "Durable construction for high-volume commercial use",
        "Significantly reduces landfill dependency",
        "Lowers carbon footprint from waste transportation",
        "Produces valuable on-site soil enricher for landscaping",
        "Designed for local electrical specifications and standards",
      ]}
      targetMarket={[
        "Apartments, Villas & Residential Compounds",
        "Hotels, Resorts & Hospitality Industry",
        "Restaurants, Cafes & Catering Services",
        "Business Complexes & Office Buildings",
        "Institutions & Educational Facilities",
        "Hospitals & Healthcare Centers",
        "Shopping Malls & Retail Centers",
        "Government Buildings & Public Facilities",
        "Industrial Facilities & Manufacturing",
        "Event Venues & Convention Centers",
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
