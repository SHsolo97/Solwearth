import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Oman | Your Complete Guide | OWC Machine Muscat - Solwearth",
  description: "Best organic waste converter machines in Oman. Eco-friendly OWC machines for hotels, restaurants in Muscat, Salalah. Advanced odor control. Zero emission technology. 90% waste reduction. Complete guide to organic waste conversion.",
  keywords: "organic waste converter Oman, organic waste converter machine Oman, OWC machine Oman, food waste converter machine Muscat, automatic organic waste converter Oman, waste management solutions Oman, composting machine Oman, OWC machine Muscat, organic waste management Oman, eco-friendly composting Oman",
  openGraph: {
    title: "Organic Waste Converter Machine in Oman: Your Complete Guide - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Oman. Eco-friendly organic waste conversion solutions with advanced odor control. Supporting the Sultanate's green initiatives. Serving Muscat, Salalah, and across Oman.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/oman"
  }
}

export default function OmanPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Oman: Your Complete Guide"
      subtitle="Eco-Friendly Organic Waste Conversion Solutions for the Sultanate"
      location="Oman"
      description={[
        "Oman, with its commitment to environmental conservation and sustainable development under Oman Vision 2040, is actively seeking innovative solutions to manage organic waste. The Sultanate's growing tourism industry, hospitality sector, and urban development create increasing volumes of organic waste that require efficient management. Solwearth Ecotech provides advanced organic waste converter machines that turn food and organic waste into valuable soil enricher, supporting Oman's green initiatives and environmental goals.",
        "Our organic waste converter machines in Oman utilize cutting-edge technology that combines multi-stage heat and moisture control with thermal dehydration for rapid and thorough processing. This technology significantly reduces landfill waste while producing eco-friendly soil enricher that can be used for landscaping, gardens, and agricultural purposes. The advanced odor control system ensures improved air quality, making our machines suitable for even the most sensitive environments across Muscat, Salalah, and other Omani cities.",
        "We offer a comprehensive range of organic waste converter machines including both automatic models and dedicated food waste converters. Our touch-screen operation provides user-friendly control, while the automated discharge system minimizes manual handling. Energy-efficient design and rapid processing capabilities make our machines ideal for high-volume operations in hotels, restaurants, hospitals, and commercial establishments throughout the Sultanate of Oman.",
      ]}
      benefits={[
        "Significantly reduces landfill waste and disposal costs",
        "Produces eco-friendly soil enricher for landscaping and agriculture",
        "Conserves natural resources through waste recycling",
        "Effective advanced odor control for improved air quality",
        "Improves overall environmental quality and hygiene",
        "Supports Oman Vision 2040 green initiatives",
        "Rapid processing results with minimal processing time",
        "Energy-efficient operation with low power consumption",
        "Reduces carbon footprint and environmental impact",
        "Creates valuable resource from organic waste",
      ]}
      targetMarket={[
        "Hotels, Resorts & Tourism Establishments",
        "Restaurants, Cafes & Catering Services",
        "Residential Apartments & Housing Complexes",
        "Commercial Buildings & Office Towers",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Industrial Facilities & Manufacturing Plants",
        "Government Complexes & Public Buildings",
        "Shopping Malls & Retail Centers",
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
