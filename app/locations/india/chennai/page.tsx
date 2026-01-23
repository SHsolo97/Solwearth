import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Food Waste Converter Machine in Chennai | Organic Waste Converter Tamil Nadu - Solwearth",
  description: "Best food waste converter machine in Chennai. Automatic organic waste converter for IT companies, hotels, restaurants in Tamil Nadu. 24-hour processing time. Thermal dehydration technology. Call +91 98950 44004.",
  keywords: "food waste converter machine Chennai, organic waste converter Chennai, OWC machine Chennai, automatic organic waste converter Chennai, waste management solutions Chennai, composting machine Chennai, food waste machine Tamil Nadu, organic waste management Chennai, OWC suppliers Chennai",
  openGraph: {
    title: "Food Waste Converter Machine in Chennai - Solwearth Ecotech",
    description: "State-of-the-art food waste converter machines for Chennai. Advanced thermal dehydration technology. Processing time under 24 hours. Serving IT parks, hotels, industries across Tamil Nadu.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/chennai"
  }
}

export default function ChennaiPage() {
  return (
    <LocationPageTemplate
      title="Food Waste Converter Machine in Chennai"
      subtitle="State-of-the-Art Waste Management Technology for Tamil Nadu"
      location="Chennai, India"
      description={[
        "Chennai, the capital of Tamil Nadu and one of India's largest metropolitan cities, generates over 5,400 tonnes of municipal solid waste daily. As a major industrial hub, IT corridor, and cultural center, Chennai faces unique waste management challenges that require innovative solutions. Solwearth Ecotech brings state-of-the-art food waste converter machines to Chennai, helping businesses and institutions transform organic waste into valuable resources.",
        "Our food waste converter machines in Chennai utilize advanced multi-stage indirect heat and dry decomposition technology to process organic waste in less than 24 hours. This revolutionary approach eliminates the dependency on chemical fertilizers by producing natural, nutrient-rich soil enricher that improves soil quality. The technology requires minimum space, power, and labor while operating without bacteria additives, chemicals, or water additions.",
        "From the IT corridors of OMR and Siruseri to the bustling commercial districts of T. Nagar and Anna Nagar, Solwearth's organic waste converter machines are helping Chennai establishments achieve their sustainability goals. Our solutions support Tamil Nadu's waste management policies and help businesses comply with Tamil Nadu Pollution Control Board regulations while contributing to a cleaner, greener Chennai.",
      ]}
      benefits={[
        "Ultra-fast processing time of less than 24 hours for complete dehydration",
        "Minimum space, power, and labor requirements for cost-effective operation",
        "No bacteria, additives, enzymes, or water required during processing",
        "Produces natural soil enricher alternative reducing chemical dependency",
        "Promotes environmental sustainability with zero emission technology",
        "Energy-efficient design with low operational costs",
        "Creates valuable soil enricher output for gardens and landscaping",
        "Helps comply with Tamil Nadu waste management regulations",
        "Reduces waste transportation costs and landfill burden",
        "Supports Chennai's smart city and sustainability initiatives",
      ]}
      targetMarket={[
        "Manufacturing Industries & Industrial Parks",
        "Hotels, Resorts & Hospitality Sector",
        "IT Parks & Software Technology Campuses",
        "Hospitals, Clinics & Healthcare Facilities",
        "Educational Institutions & University Hostels",
        "Residential Communities & Apartment Complexes",
        "Food Processing Units & Manufacturing Plants",
        "Commercial Complexes & Office Buildings",
        "Restaurants, Cafes & Catering Services",
        "Shopping Malls & Food Courts",
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
