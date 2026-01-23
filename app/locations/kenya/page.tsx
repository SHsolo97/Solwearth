import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Kenya | OWC Machine Nairobi Mombasa - Solwearth",
  description: "Best organic waste converter machines in Kenya. Automatic OWC machines for hotels, safari lodges, hospitals in Nairobi, Mombasa, Kisumu. Eco-friendly. Zero emission. 90% waste reduction. East Africa focus.",
  keywords: "organic waste converter Kenya, organic waste converter machine Kenya, OWC machine Kenya, food waste converter machine Nairobi, automatic organic waste converter Kenya, waste management solutions Kenya, composting machine Kenya, OWC machine Nairobi, organic waste management Kenya, sustainable waste East Africa, safari lodge waste converter",
  openGraph: {
    title: "Organic Waste Converter Machine in Kenya - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Kenya. Leading waste management solutions for East Africa. Perfect for hotels, safari lodges, hospitals, and municipalities in Nairobi, Mombasa, and across Kenya.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/kenya"
  }
}

export default function KenyaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Kenya"
      subtitle="Leading Waste Management for East Africa's Economic Hub"
      location="Kenya"
      description={[
        "Kenya, as East Africa's largest economy and a leader in environmental conservation, is at the forefront of sustainable development initiatives in the region. From the bustling capital of Nairobi to the coastal city of Mombasa, from the safari lodges of the Maasai Mara to the emerging urban centers of Kisumu and Nakuru, Kenya generates significant organic waste that requires efficient management. Solwearth Ecotech supports Kenya's green initiatives with advanced organic waste converter machines designed for the country's diverse environments.",
        "Our organic waste converter machines in Kenya provide eco-friendly waste processing with zero emissions and up to 90% volume reduction. The machines convert organic waste from hotels, restaurants, hospitals, and municipalities into valuable soil enricher that can be used for agriculture - a significant benefit for Kenya's agricultural economy and food security initiatives. This creates a circular economy where waste becomes a resource, reducing dependency on chemical fertilizers while improving soil health.",
        "Whether you're managing a luxury safari lodge in the wildlife conservancies, a hotel in Nairobi's business district, a hospital in Mombasa, or municipal waste operations in any Kenyan county, Solwearth's organic waste converter machines provide reliable, efficient waste management solutions. Our fully automatic PLC controlled operation with completely odor-free processing with integrated deodorization makes our machines suitable for even the most environmentally sensitive locations, including wildlife areas and tourism establishments.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction in organic waste",
        "Cost-effective long-term waste management solution",
        "Significantly reduces greenhouse gas emissions",
        "Generates valuable soil enricher for agriculture and food security",
        "Fully automatic PLC controlled operation",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
        "Supports Kenya's sustainable development goals",
        "Suitable for wildlife areas and eco-sensitive locations",
      ]}
      targetMarket={[
        "Hotels, Safari Lodges & Eco-Tourism Establishments",
        "Restaurants, Cafes & Food Courts",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Industrial Parks & Manufacturing Units",
        "Municipal Corporations & County Governments",
        "Shopping Malls & Retail Centers",
        "Residential Estates & Apartments",
        "Agricultural Processing Facilities",
        "Wildlife Conservancies & National Parks",
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
