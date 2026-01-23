import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Noida | OWC Machine Greater Noida - Solwearth",
  description: "Best organic waste converter machines in Noida. High-quality soil enricher production. Eco-friendly OWC machine for IT parks, apartments in Greater Noida. 6 years proven track record. Call +91 98950 44004.",
  keywords: "organic waste converter machine Noida, organic waste converter Noida, OWC machine Noida, food waste converter Noida, food waste converter machine Noida, automatic organic waste converter Noida, waste management solutions Noida, OWC machine Greater Noida, organic waste management Noida, waste converter Delhi NCR",
  openGraph: {
    title: "Organic Waste Converter Machine in Noida - Solwearth Ecotech",
    description: "Premium organic waste converter machines in Noida producing high-quality soil enricher. Eco-friendly solutions with 6 years proven track record. Serving IT parks, corporates, and residential societies across Noida and Greater Noida.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/noida"
  }
}

export default function NoidaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Noida"
      subtitle="Eco-Friendly Organic Waste Conversion Solutions for Modern Noida"
      location="Noida, India"
      description={[
        "Noida, a meticulously planned city and integral part of Delhi NCR, is renowned for its modern infrastructure, thriving IT industry, and high-quality residential developments. As one of India's most progressive cities, Noida requires waste management solutions that match its forward-thinking approach to urban development. Solwearth Ecotech offers advanced organic waste converter machines that transform organic waste into high-quality soil enricher, supporting Noida's vision of becoming a zero-waste city.",
        "Our organic waste converter machines in Noida have a proven track record spanning over 6 years, delivering environmentally friendly and cost-effective waste management solutions to businesses and institutions across the city. The organic waste converter machines produce nutrient-rich soil enricher that serves as an excellent natural alternative to chemical fertilizers, promoting hygiene, cleanliness, and sustainable agricultural practices. This aligns perfectly with the waste management mandates of Noida Authority and Greater Noida Industrial Development Authority.",
        "From the IT towers of Sector 62 and 63 to the residential high-rises of Sector 50 and 137, from the corporate offices of Sector 18 to the shopping malls of Sector 38A, Solwearth's organic waste converter machines are helping Noida establishments achieve their sustainability goals. Our solutions are easy to integrate with existing waste management systems and can be customized to meet the specific needs of any establishment in Noida or Greater Noida.",
      ]}
      benefits={[
        "Environmentally friendly dehydration technology",
        "Produces high-quality, nutrient-rich soil enricher",
        "Cost-effective long-term waste management solution",
        "Promotes hygiene, cleanliness, and healthy environments",
        "6+ years of proven track record and reliability",
        "Natural alternative to chemical fertilizers",
        "Sustainable waste management supporting green initiatives",
        "Easy integration with existing waste handling systems",
        "Helps comply with Noida Authority waste regulations",
        "Supports Noida's planned city and smart city vision",
      ]}
      targetMarket={[
        "IT Companies & Software Tech Parks",
        "Corporate Offices & Business Centers",
        "Residential Societies & High-rise Apartments",
        "Hotels, Restaurants & Food Courts",
        "Educational Institutions & Schools",
        "Hospitals & Healthcare Facilities",
        "Shopping Centers & Retail Malls",
        "Industrial Facilities & Manufacturing Units",
        "Co-working Spaces & Commercial Complexes",
        "Event Venues & Convention Centers",
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
