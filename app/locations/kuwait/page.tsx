import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Kuwait | Organic Waste Converter Suppliers Kuwait City - Solwearth",
  description: "Premium OWC machines in Kuwait. Organic waste converters for Kuwait City businesses. Hotel and restaurant waste management. Zero emission technology. Best prices.",
  keywords: "OWC machine Kuwait, organic waste converter Kuwait, food waste machine Kuwait City, waste management Kuwait, OWC suppliers Kuwait, composting machine Kuwait, waste converter Kuwait City, organic waste management Kuwait",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Kuwait - Solwearth",
    description: "Advanced OWC machines for Kuwait's commercial and hospitality sectors. Sustainable waste management solutions.",
    type: 'website',
  },
}

export default function KuwaitPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Kuwait"
      subtitle="Supporting Agriculture and Sustainability"
      location="Kuwait"
      description={[
        "Kuwait is investing in sustainable practices and agricultural development. Solwearth Ecotech's OWCs convert food and garden waste into compost, reducing landfill impact while enriching soil and supporting local agriculture.",
        "Our systems help reduce landfill volume, enhance soil quality, support agriculture, benefit from government incentives, and are ready for IoT-enabled future technology integration.",
      ]}
      benefits={[
        "Reduces landfill volume",
        "Enhances soil quality",
        "Supports local agriculture",
        "Government incentives available",
        "IoT-enabled future-ready",
        "Converts food and garden waste",
        "Enriches soil naturally",
        "Sustainable waste management",
      ]}
      targetMarket={[
        "Agricultural Facilities",
        "Hotels and Restaurants",
        "Residential Communities",
        "Commercial Complexes",
        "Hospitals",
        "Educational Institutions",
        "Government Buildings",
        "Industrial Facilities",
      ]}
      features={[
        "Converts food and garden waste",
        "Reduces landfill impact",
        "Enriches soil quality",
        "Supports agriculture",
        "Government incentive eligible",
        "IoT-enabled capabilities",
        "Sort waste before processing",
        "Regular monitoring system",
      ]}
    />
  )
}
