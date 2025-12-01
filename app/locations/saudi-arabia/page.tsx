import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Saudi Arabia | Organic Waste Converter Riyadh Jeddah - Solwearth",
  description: "Leading OWC machine suppliers in Saudi Arabia. Organic waste converters for Riyadh, Jeddah, Dammam. Vision 2030 compliant. Zero emission technology. Best prices KSA.",
  keywords: "OWC machine Saudi Arabia, organic waste converter KSA, food waste machine Riyadh, waste management Saudi Arabia, OWC suppliers Jeddah, composting machine Saudi Arabia, waste converter Riyadh, Vision 2030 waste management",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Saudi Arabia - Solwearth",
    description: "Premium OWC machines for Saudi Arabia. Supporting Vision 2030 sustainability goals with advanced waste management.",
    type: 'website',
  },
}

export default function SaudiArabiaPage() {
  return (
    <LocationPageTemplate
      title="Automated Organic Waste Converters in Saudi Arabia"
      subtitle="Sustainable Waste Management for the Kingdom"
      location="Saudi Arabia"
      description={[
        "Saudi Arabia is investing heavily in sustainability and environmental initiatives. Solwearth Ecotech provides automated OWC solutions for homes, businesses, and communities throughout the Kingdom.",
        "Our systems achieve up to 80% volume reduction, producing nutrient-rich outputs while reducing landfill burden. With user-friendly operation and significant savings, we support Saudi Arabia's Vision 2030 sustainability goals.",
      ]}
      benefits={[
        "Up to 80% volume reduction",
        "Nutrient-rich output production",
        "Reduces landfill burden",
        "Supports sustainability initiatives",
        "User-friendly operation",
        "Significant cost savings",
        "Aligns with Vision 2030 goals",
        "Suitable for arid climate",
      ]}
      targetMarket={[
        "Hotels and Resorts",
        "Restaurants and Food Services",
        "Residential Communities",
        "Commercial Complexes",
        "Industrial Facilities",
        "Educational Institutions",
        "Healthcare Facilities",
        "Government Buildings",
      ]}
      features={[
        "Automated operation",
        "Multi-stage indirect heat technology",
        "Dry decomposition process",
        "Closed loop system",
        "Up to 80% waste reduction",
        "Nutrient-rich output",
        "Dealer support: FARZ Environmental Services, Riyadh",
        "Climate-adapted design",
      ]}
    />
  )
}
