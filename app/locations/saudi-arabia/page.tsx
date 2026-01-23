import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Saudi Arabia | OWC Machine Riyadh Jeddah - Solwearth",
  description: "Best organic waste converter machines in Saudi Arabia. Automatic OWC machines for hotels, restaurants in Riyadh, Jeddah, Dammam. Vision 2030 compliant. Zero emission technology. Authorized dealer FARZ. Best prices KSA.",
  keywords: "organic waste converter Saudi Arabia, organic waste converter machine Saudi Arabia, OWC machine Saudi Arabia, food waste converter machine Riyadh, automatic organic waste converter KSA, waste management solutions Saudi Arabia, composting machine Jeddah, OWC machine Dammam, organic waste management Saudi Arabia, Vision 2030 waste management",
  openGraph: {
    title: "Organic Waste Converter Machine in Saudi Arabia - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Saudi Arabia. Supporting Vision 2030 sustainability goals. Up to 80% volume reduction. Authorized dealer FARZ Environmental Services. Serving Riyadh, Jeddah, Dammam, and across KSA.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/saudi-arabia"
  }
}

export default function SaudiArabiaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Saudi Arabia"
      subtitle="Sustainable Waste Management Supporting Vision 2030"
      location="Saudi Arabia"
      description={[
        "Saudi Arabia is making unprecedented investments in sustainability and environmental initiatives as part of its ambitious Vision 2030 program. The Kingdom's focus on diversifying its economy, developing tourism, and creating sustainable cities creates growing demand for advanced waste management solutions. Solwearth Ecotech provides automated organic waste converter machines for homes, businesses, and communities throughout Saudi Arabia, supporting the nation's green transformation.",
        "Our organic waste converter machines in Saudi Arabia achieve up to 80% volume reduction while producing nutrient-rich soil enricher outputs. The multi-stage indirect heat technology with dry decomposition and closed-loop systems ensures efficient processing suitable for the Kingdom's arid climate. These user-friendly machines offer significant cost savings over traditional waste management methods while reducing the burden on landfills across Riyadh, Jeddah, Dammam, and other major cities.",
        "Solwearth has partnered with FARZ Environmental Services in Riyadh as our authorized dealer, ensuring local support, installation, and after-sales service across Saudi Arabia. Our solutions align perfectly with Vision 2030's sustainability goals and the Kingdom's commitment to becoming a regional leader in environmental stewardship. From the holy cities of Makkah and Madinah to the futuristic NEOM project, our organic waste converter machines are helping Saudi establishments embrace sustainable waste management.",
      ]}
      benefits={[
        "Up to 80% volume reduction in organic waste",
        "Produces nutrient-rich soil enricher for landscaping and agriculture",
        "Significantly reduces landfill burden and transportation costs",
        "Supports Vision 2030 sustainability and environmental goals",
        "User-friendly operation with minimal training required",
        "Significant long-term cost savings on waste management",
        "Aligns with Kingdom's green transformation initiatives",
        "Suitable for arid climate with climate-adapted design",
        "Local dealer support through FARZ Environmental Services",
        "Helps achieve sustainability certifications and ratings",
      ]}
      targetMarket={[
        "Hotels, Resorts & Hospitality Industry",
        "Restaurants, Cafes & Food Services",
        "Residential Communities & Housing Compounds",
        "Commercial Complexes & Office Buildings",
        "Industrial Facilities & Manufacturing Plants",
        "Educational Institutions & Universities",
        "Healthcare Facilities & Hospitals",
        "Government Buildings & Public Facilities",
        "Pilgrimage Facilities & Religious Centers",
        "Entertainment Venues & Tourism Destinations",
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
