import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OWC Machine in Bangladesh | Organic Waste Converter Dhaka - Solwearth",
  description: "Leading OWC machine suppliers in Bangladesh. Organic waste converters for Dhaka, Chittagong. Hotel and restaurant waste management. Zero emission. Best prices in Bangladesh.",
  keywords: "OWC machine Bangladesh, organic waste converter Bangladesh, food waste machine Dhaka, waste management Bangladesh, OWC suppliers Bangladesh, composting machine Bangladesh, waste converter Dhaka, organic waste management Bangladesh",
  openGraph: {
    title: "Organic Waste Converter (OWC) Machines in Bangladesh - Solwearth",
    description: "Advanced OWC machines for Bangladesh. Sustainable waste management for hotels, hospitals, and institutions.",
    type: 'website',
  },
}

export default function BangladeshPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Bangladesh"
      subtitle="Sanitation and Resource Recovery for Growing Cities"
      location="Bangladesh"
      description={[
        "Bangladesh's rapid urbanization drives high organic waste generation, making OWCs essential for sanitation and resource recovery. Solwearth Ecotech provides scalable solutions from small commercial units to municipal-scale operations.",
        "Our systems create cleaner environments, reduce landfill burden, support sustainable agriculture, achieve up to 90% waste reduction, operate with zero emissions and odor-free processing, and produce outputs suitable for agriculture.",
      ]}
      benefits={[
        "Cleaner urban environments",
        "Reduces landfill burden",
        "Supports sustainable agriculture",
        "Up to 90% waste reduction",
        "Zero emissions",
        "Odor-free operation",
        "Agricultural output",
        "Scalable capacity options",
      ]}
      targetMarket={[
        "Small Commercial Facilities",
        "Community Centers",
        "Restaurants and Hotels",
        "Institutes and Universities",
        "Municipal Corporations",
        "Industrial Facilities",
        "Hospitals",
        "Large-Scale Operations",
      ]}
      features={[
        "SE-501 (50kg) & SE-1001 (100kg): Small commercial/community",
        "SE-2501 (250kg) & SE-3501 (350kg): Larger restaurants/institutes",
        "SE-5001 (500kg) & SE-1H (1 Ton): Municipal/industrial scale",
        "Up to 90% waste reduction",
        "Zero emissions",
        "Odor-free processing",
        "Agricultural-grade output",
        "Scalable technology",
      ]}
    />
  )
}
