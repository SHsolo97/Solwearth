import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Qatar | OWC Machine Doha - Solwearth",
  description: "Best organic waste converter machines in Qatar. Automatic OWC machines for hotels, restaurants, hospitals in Doha. Qatar National Vision 2030 compliant. Up to 90% waste reduction. Zero emission. Best prices.",
  keywords: "organic waste converter Qatar, organic waste converter machine Qatar, OWC machine Qatar, food waste converter machine Doha, automatic organic waste converter Qatar, waste management solutions Qatar, composting machine Qatar, OWC machine Doha, organic waste management Qatar, Qatar 2030 Vision waste management",
  openGraph: {
    title: "Organic Waste Converter Machine in Qatar - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Qatar. Supporting Qatar National Vision 2030. Up to 90% waste shrinkage. Custom machines 50kg-1000kg/batch. Zero emissions and odorless operation.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/qatar"
  }
}

export default function QatarPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Qatar"
      subtitle="Supporting Qatar National Vision 2030 Sustainability Goals"
      location="Qatar"
      description={[
        "Qatar, with its limited land area and strong push for sustainability, faces unique waste management challenges. The country's landfill scarcity and ambitious environmental goals under Qatar National Vision 2030 create an urgent need for efficient organic waste management solutions. Solwearth Ecotech provides advanced organic waste converter machines with multi-stage decomposition technology, offering custom solutions from 50kg to 1000kg per batch to meet Qatar's diverse requirements.",
        "Our organic waste converter machines in Qatar achieve up to 90% waste shrinkage, dramatically reducing the volume of waste that needs to be transported and disposed of. This addresses Qatar's landfill scarcity while significantly reducing disposal costs for businesses and institutions. The machines operate with zero emissions and completely odorless processing, producing valuable soil enricher that can be used for Qatar's expanding green spaces and urban beautification projects.",
        "From the gleaming towers of West Bay to the hospitality establishments of The Pearl, from the sports venues hosting international events to the educational institutions in Education City, Solwearth's organic waste converter machines are helping Qatar achieve its sustainability ambitions. Our fully automated systems with nutrient-rich soil enricher output support Qatar's commitment to environmental stewardship and sustainable urban development.",
      ]}
      benefits={[
        "Significantly reduces waste disposal costs",
        "Up to 90% waste shrinkage and volume reduction",
        "Supports Qatar National Vision 2030 sustainability goals",
        "Zero emissions meeting Qatar environmental standards",
        "Completely odorless operation for premium environments",
        "Valuable soil enricher production for green space development",
        "Custom capacity range from 50kg to 1000kg per batch",
        "Addresses Qatar's landfill scarcity challenge",
        "Reduces carbon footprint and environmental impact",
        "Helps achieve sustainability certifications",
      ]}
      targetMarket={[
        "Hotels, Resorts & Hospitality Industry",
        "Restaurants, Cafes & Catering Services",
        "Residential Compounds & Apartment Complexes",
        "Commercial Buildings & Office Towers",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Industrial Facilities & Free Zones",
        "Sports & Entertainment Venues",
        "Shopping Malls & Retail Centers",
        "Government Buildings & Public Facilities",
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
