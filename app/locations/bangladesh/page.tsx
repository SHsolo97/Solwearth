import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Bangladesh | OWC Machine Dhaka - Solwearth",
  description: "Best organic waste converter machines in Bangladesh. Scalable OWC machines for hotels, hospitals, municipalities in Dhaka, Chittagong. Food waste solutions. Zero emission. Up to 90% waste reduction. Best prices.",
  keywords: "organic waste converter Bangladesh, organic waste converter machine Bangladesh, OWC machine Bangladesh, food waste converter machine Dhaka, automatic organic waste converter Bangladesh, waste management solutions Bangladesh, composting machine Bangladesh, OWC machine Dhaka, organic waste management Bangladesh, municipal waste converter Bangladesh",
  openGraph: {
    title: "Organic Waste Converter Machine in Bangladesh - Solwearth Ecotech",
    description: "Advanced organic waste converter machines for Bangladesh. Scalable solutions from small commercial to municipal scale. Up to 90% waste reduction. Serving Dhaka, Chittagong, and across Bangladesh.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/bangladesh"
  }
}

export default function BangladeshPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Bangladesh"
      subtitle="Sanitation and Resource Recovery for Growing Cities"
      location="Bangladesh"
      description={[
        "Bangladesh, with its rapid urbanization and densely populated cities, faces significant waste management challenges. Dhaka, one of the world's most densely populated cities, along with Chittagong, Sylhet, and other growing urban centers, generates enormous volumes of organic waste daily. This high organic waste generation makes advanced waste converter technology essential for sanitation, public health, and resource recovery. Solwearth Ecotech provides scalable organic waste converter solutions from small commercial units to municipal-scale operations to address Bangladesh's diverse waste management needs.",
        "Our organic waste converter machines in Bangladesh create cleaner urban environments by processing organic waste on-site, reducing the burden on already-stressed landfills. The systems achieve up to 90% waste reduction with zero emissions and completely odor-free processing, producing agricultural-grade soil enricher that can support Bangladesh's farming sector. This dual benefit - improved sanitation and agricultural resource generation - makes our machines particularly valuable for Bangladesh's economy and environment.",
        "We offer a complete range of organic waste converter machines suitable for Bangladesh's varied requirements: SE-501 (50kg) and SE-1001 (100kg) for small commercial facilities and community centers; SE-2501 (250kg) and SE-3501 (350kg) for larger restaurants, hotels, and institutions; and SE-5001 (500kg) and SE-1H (1 Ton) for municipal corporations and industrial-scale operations. This scalability ensures that establishments of all sizes across Bangladesh can access sustainable waste management solutions.",
      ]}
      benefits={[
        "Creates cleaner urban environments and improves public health",
        "Significantly reduces burden on stressed landfill systems",
        "Supports sustainable agriculture with organic soil enricher output",
        "Up to 90% waste volume reduction on-site",
        "Zero emissions with environmentally safe processing",
        "Completely odor-free operation for urban areas",
        "Agricultural-grade output supporting farming sector",
        "Scalable capacity options for all establishment sizes",
        "Cost-effective solution for long-term waste management",
        "Supports Bangladesh's sustainable development goals",
      ]}
      targetMarket={[
        "Small Commercial Facilities & Restaurants",
        "Community Centers & Housing Societies",
        "Hotels, Resorts & Hospitality Industry",
        "Institutions, Universities & Colleges",
        "Municipal Corporations & Urban Bodies",
        "Industrial Facilities & Manufacturing Plants",
        "Hospitals & Healthcare Centers",
        "Large-Scale Commercial Operations",
        "Food Processing & Manufacturing Units",
        "Shopping Centers & Commercial Complexes",
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
