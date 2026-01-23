import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in UAE | OWC Machine Dubai Abu Dhabi - Solwearth",
  description: "Best organic waste converter machines in UAE. Automatic OWC machines for hotels, restaurants, apartments in Dubai, Abu Dhabi, Sharjah. High efficiency with rapid conversion. Advanced food waste management. Contact for prices.",
  keywords: "organic waste converter UAE, organic waste converter machine UAE, OWC machine UAE, food waste converter machine Dubai, automatic organic waste converter UAE, waste management solutions UAE, composting machine Abu Dhabi, OWC machine Dubai, organic waste management UAE, food waste machine Sharjah",
  openGraph: {
    title: "Organic Waste Converter Machine in UAE - Solwearth Ecotech",
    description: "Premium organic waste converter machines for UAE. Advanced automatic technology for hotels, restaurants, residential towers, and commercial complexes in Dubai, Abu Dhabi, and across the Emirates.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/uae"
  }
}

export default function UAEPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in UAE"
      subtitle="Advanced Automatic Waste Management for a Modern Nation"
      location="United Arab Emirates"
      description={[
        "The United Arab Emirates, with its rapid urban development, world-class hospitality sector, and commitment to sustainability, requires advanced waste management solutions that match its modern infrastructure. Dubai, Abu Dhabi, Sharjah, and other Emirates generate substantial organic waste from hotels, restaurants, residential towers, and commercial complexes. Solwearth Ecotech provides cutting-edge organic waste converter machines designed to meet the UAE's high standards and sustainability goals.",
        "Our automatic organic waste converter machines in the UAE deliver high efficiency with rapid conversion times of less than 24 hours. The systems reduce landfill dependency, lower waste management costs, and provide odorless operation with outputs perfectly suitable for landscaping - a critical feature for the UAE's focus on green spaces and urban beautification. The automated mixing, grinding, and heating processes ensure consistent results with minimal operator intervention.",
        "From the iconic hotels of Dubai Marina to the government facilities of Abu Dhabi, from the residential compounds of Al Ain to the commercial centers of Sharjah, Solwearth's organic waste converter machines are helping UAE establishments meet their sustainability targets. Our emission-free technology aligns perfectly with the UAE's Vision 2021 goals and the nation's commitment to becoming a global leader in sustainable development.",
      ]}
      benefits={[
        "Significantly reduces landfill dependency and waste transportation",
        "Lowers overall waste management costs with efficient operation",
        "Completely odorless operation suitable for premium environments",
        "Rapid conversion in less than 24 hours for quick processing",
        "Output ideal for landscaping and green space development",
        "Supports UAE Vision 2021 and sustainability initiatives",
        "Automated mixing, grinding, and heating for consistent results",
        "Emission-free technology meeting UAE environmental standards",
        "High-quality construction suitable for Gulf climate conditions",
        "Local support and service available across all Emirates",
      ]}
      targetMarket={[
        "Hotels, Resorts & Luxury Hospitality",
        "Restaurants, Cafes & Food Courts",
        "Residential Towers & Apartment Complexes",
        "Commercial Complexes & Business Centers",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Shopping Malls & Retail Centers",
        "Industrial Facilities & Free Zones",
        "Government Buildings & Public Facilities",
        "Catering Companies & Event Venues",
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
