import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatic Food Waste Converter Machine in Hyderabad | OWC Machine Telangana - Solwearth",
  description: "Best automatic food waste converter machine in Hyderabad. Organic waste converter for IT parks, hotels, apartments in Telangana. 24-hour processing with thermal dehydration technology. Call +91 98950 44004.",
  keywords: "automatic food waste converter machine Hyderabad, organic waste converter Hyderabad, OWC machine Hyderabad, food waste converter machine Hyderabad, automatic organic waste converter Hyderabad, waste management solutions Hyderabad, composting machine Hyderabad, OWC machine Telangana, organic waste management Hyderabad",
  openGraph: {
    title: "Automatic Food Waste Converter Machine in Hyderabad - Solwearth Ecotech",
    description: "Premium automatic food waste converter machines in Hyderabad. Advanced thermal dehydration technology. 24-hour processing. Serving IT parks, hotels, and residential communities across Telangana.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/hyderabad"
  }
}

export default function HyderabadPage() {
  return (
    <LocationPageTemplate
      title="Automatic Food Waste Converter Machine in Hyderabad"
      subtitle="Sustainable Waste Solutions for the City of Pearls"
      location="Hyderabad, India"
      description={[
        "Hyderabad, Telangana's capital and one of India's fastest-growing technology hubs, generates approximately 5,500 tonnes of solid waste daily. The city's unique blend of historic heritage, modern IT corridors like HITEC City and Gachibowli, and rapidly expanding residential sectors creates diverse waste management needs. Solwearth Ecotech brings fully automatic food waste converter machines to Hyderabad, offering reliable and cost-effective solutions for the city's growing organic waste challenges.",
        "Our automatic food waste converter machines in Hyderabad utilize advanced multi-stage indirect heat and dry decomposition technology to process organic waste in less than 24 hours. This thermal dehydration approach ensures thorough processing while maintaining the nutritional value of the output soil enricher. The fully automatic operation with PLC controls means minimal operator intervention, making our machines perfect for Hyderabad's tech-savvy establishments that value efficiency and automation.",
        "From the IT towers of Madhapur to the hospitality hubs of Banjara Hills, from the residential townships of Kondapur to the commercial districts of Jubilee Hills, Solwearth's organic waste converter machines are helping Hyderabad establishments achieve zero-waste goals. Our solutions support Telangana's waste management policies and help businesses contribute to Hyderabad's vision of becoming a sustainable smart city.",
      ]}
      benefits={[
        "Fully automatic PLC controlled operation with minimal supervision",
        "Less than 24-hour processing time for complete decomposition",
        "Reliable and cost-effective waste management system",
        "Encourages sustainable living and environmental responsibility",
        "Significantly reduces waste management burden and costs",
        "Perfect fit for tech parks and modern business facilities",
        "Energy-efficient technology with low power consumption",
        "Minimal maintenance required with durable construction",
        "Supports Hyderabad's smart city and sustainability goals",
        "Local installation and service support across Telangana",
      ]}
      targetMarket={[
        "IT Parks, Tech Campuses & Software Companies",
        "Hotels, Resorts & Hospitality Industry",
        "Residential Apartments & Gated Communities",
        "Hospitals, Clinics & Healthcare Facilities",
        "Educational Institutions & Engineering Colleges",
        "Corporate Canteens & Office Cafeterias",
        "Food Courts & Shopping Malls",
        "Catering Services & Event Venues",
        "Restaurants, Cafes & Cloud Kitchens",
        "Manufacturing Units & Industrial Campuses",
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
