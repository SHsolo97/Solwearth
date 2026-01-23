import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Kuwait | OWC Machine Kuwait City - Solwearth",
  description: "Best organic waste converter machines in Kuwait. Eco-friendly OWC machines for hotels, restaurants, businesses in Kuwait City. Supports agriculture & sustainability. Zero emission technology. Best prices.",
  keywords: "organic waste converter Kuwait, organic waste converter machine Kuwait, OWC machine Kuwait, food waste converter machine Kuwait City, automatic organic waste converter Kuwait, waste management solutions Kuwait, composting machine Kuwait, OWC suppliers Kuwait, organic waste management Kuwait, eco-friendly waste Kuwait",
  openGraph: {
    title: "Organic Waste Converter Machine in Kuwait - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Kuwait. Eco-friendly solutions supporting agriculture and sustainability. Reduces landfill impact. IoT-enabled technology. Serving hotels, restaurants, and businesses across Kuwait.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/kuwait"
  }
}

export default function KuwaitPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Kuwait"
      subtitle="Eco-Friendly Solutions Supporting Agriculture and Sustainability"
      location="Kuwait"
      description={[
        "Kuwait is making significant investments in sustainable practices and agricultural development to diversify its economy and reduce environmental impact. With limited arable land and growing concerns about landfill capacity, Kuwait requires innovative waste management solutions that can convert organic waste into valuable resources. Solwearth Ecotech's organic waste converter machines transform food and garden waste into nutrient-rich soil enricher, reducing landfill impact while enriching soil and supporting Kuwait's agricultural initiatives.",
        "Our organic waste converter machines in Kuwait help establishments significantly reduce landfill volume while enhancing soil quality for landscaping and agricultural purposes. The soil enricher produced by our machines supports Kuwait's local agriculture and food security goals, turning waste into a valuable resource. With government incentives available for sustainable waste management, our machines offer both environmental and economic benefits for businesses across Kuwait City and beyond.",
        "Looking toward the future, our organic waste converter machines are designed with IoT-enabled capabilities, allowing for smart monitoring, remote diagnostics, and data-driven optimization. This future-ready technology aligns with Kuwait's smart city ambitions and commitment to technological innovation. From the commercial districts of Kuwait City to the residential areas of Hawalli and Salmiya, Solwearth's solutions are helping Kuwait embrace sustainable waste management practices.",
      ]}
      benefits={[
        "Significantly reduces landfill volume and waste transportation",
        "Enhances soil quality with nutrient-rich soil enricher output",
        "Supports local agriculture and food security initiatives",
        "Government incentives available for sustainable solutions",
        "IoT-enabled and future-ready technology",
        "Converts both food and garden waste efficiently",
        "Enriches soil naturally for landscaping projects",
        "Sustainable waste management with environmental benefits",
        "Reduces operational costs and waste disposal expenses",
        "Supports Kuwait's sustainability and diversification goals",
      ]}
      targetMarket={[
        "Agricultural Facilities & Farms",
        "Hotels, Resorts & Hospitality Industry",
        "Residential Communities & Housing Compounds",
        "Commercial Complexes & Office Buildings",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions & Universities",
        "Government Buildings & Public Facilities",
        "Industrial Facilities & Manufacturing Plants",
        "Shopping Malls & Food Courts",
        "Restaurants, Cafes & Catering Services",
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
