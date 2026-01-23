import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Food Waste Converter Machine Manufacturer in Pune | OWC Machine Maharashtra - Solwearth",
  description: "Best food waste converter machine manufacturer in Pune. Automatic one-touch control OWC machines for IT parks, educational institutions, hotels in Maharashtra. 80% waste conversion. Call +91 98950 44004.",
  keywords: "food waste converter machine manufacturer Pune, organic waste converter Pune, OWC machine Pune, automatic food waste converter Pune, automatic organic waste converter Pune, waste management solutions Pune, composting machine Pune, OWC suppliers Pune, organic waste management Maharashtra",
  openGraph: {
    title: "Food Waste Converter Machine Manufacturer in Pune - Solwearth Ecotech",
    description: "Premium food waste converter machines for Pune. Automatic one-touch control with 80% waste conversion. Serving IT parks, educational institutions, and hospitality industry across Maharashtra.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/pune"
  }
}

export default function PunePage() {
  return (
    <LocationPageTemplate
      title="Food Waste Converter Machine Manufacturer in Pune"
      subtitle="Latest Technology for Maharashtra's Cultural Capital"
      location="Pune, India"
      description={[
        "Pune, Maharashtra's cultural capital and one of India's fastest-growing IT and educational hubs, generates approximately 2,100 tonnes of solid waste daily. The city's unique blend of prestigious educational institutions, thriving IT industry, and expanding residential sectors creates diverse waste management needs that require innovative solutions. Solwearth Ecotech brings the latest food waste converter machine technology to Pune, supporting the city's tech-driven development and green initiatives.",
        "Our food waste converter machines in Pune are equipped with fully automatic one-touch control systems, making waste management effortless for operators. The machines convert up to 80% of organic waste into useful resources, producing nutrient-rich soil enricher that improves soil health and supports Pune's expanding green spaces. This advanced technology ensures efficiency and durability while maintaining the highest standards of environmental responsibility.",
        "From the IT corridors of Hinjewadi and Magarpatta to the educational campuses of Fergusson College and Symbiosis, from the hospitality hubs of Koregaon Park to the residential societies of Baner and Wakad, Solwearth's organic waste converter machines are transforming how Pune manages its organic waste. Our solutions help establishments comply with Pune Municipal Corporation's waste management mandates while contributing to Maharashtra's vision of sustainable urban development.",
      ]}
      benefits={[
        "Latest technology ensuring efficiency and durability",
        "Up to 80% organic waste conversion to valuable resources",
        "Fully automatic one-touch control for effortless operation",
        "Improves soil health with nutrient-rich soil enricher output",
        "Soil enricher production reducing chemical dependency",
        "Supports Pune's green initiatives and environmental goals",
        "Tech-driven waste management for modern establishments",
        "Cost-effective operation with low maintenance requirements",
        "Helps comply with PMC waste management regulations",
        "Contributes to Maharashtra's sustainable development vision",
      ]}
      targetMarket={[
        "IT Parks & Software Technology Campuses",
        "Educational Institutions & University Hostels",
        "Hotels, Resorts & Hospitality Industry",
        "Residential Societies & Gated Communities",
        "Corporate Offices & Business Parks",
        "Hospitals, Clinics & Healthcare Facilities",
        "Food Courts, Restaurants & Cafes",
        "Manufacturing Units & Industrial Canteens",
        "Shopping Malls & Commercial Complexes",
        "Event Venues & Catering Services",
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
