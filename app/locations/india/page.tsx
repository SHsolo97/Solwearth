import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in India | OWC Machine Manufacturers & Suppliers - Solwearth",
  description: "Leading organic waste converter machine manufacturers in India. Buy automatic OWC machines for food waste management. 40-1000 KG capacity. Zero emission technology. Trusted by 100+ clients across India. Contact +91 98950 44004.",
  keywords: "organic waste converter India, organic waste converter machine India, OWC machine India, food waste converter machine India, automatic organic waste converter India, waste management solutions India, OWC manufacturers India, composting machine India, waste converter suppliers India, food waste machine India, organic waste management India, OWC price India",
  openGraph: {
    title: "Organic Waste Converter Machine in India - Solwearth Ecotech",
    description: "India's leading organic waste converter manufacturers. Premium OWC machines with 90% waste reduction, zero emission technology. Serving hotels, hospitals, IT parks, municipalities across India.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india"
  }
}

export default function IndiaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in India"
      subtitle="Sustainable Waste Management Solutions for a Greener Future"
      location="India"
      description={[
        "India generates over 150,000 tonnes of municipal solid waste daily, with organic waste constituting nearly 50% of this volume. As urbanization accelerates across tier-1 and tier-2 cities, the need for efficient organic waste management has never been more critical. Solwearth Ecotech, headquartered in Kerala, is India's trusted manufacturer of organic waste converter machines, delivering cutting-edge solutions to businesses, municipalities, and institutions nationwide.",
        "Our organic waste converter machines (OWC machines) utilize advanced multi-stage indirect heat and dry decomposition technology to transform food waste, vegetable waste, and other organic materials into nutrient-rich soil enricher within 12-24 hours. Unlike traditional composting methods that take weeks or months, our automatic food waste converter machines provide rapid, odor-free, and emission-free processing with minimal operator intervention.",
        "From the bustling metros of Mumbai, Delhi, and Bangalore to emerging smart cities across India, Solwearth's OWC machines are helping establishments achieve zero-waste goals while complying with Solid Waste Management Rules 2016 and supporting Swachh Bharat Mission objectives. Our solutions are installed in leading hotels, IT parks, hospitals, educational institutions, and residential townships across all major Indian states.",
      ]}
      benefits={[
        "90% volume reduction in organic waste within 12-30 hours processing time",
        "Zero emission technology - no exhaust, smoke, or harmful gases released",
        "Fully automatic PLC controlled operation with one-touch convenience",
        "No additives, bacteria, enzymes, or chemicals required for decomposition",
        "Integrated deodorization system ensuring completely odor-free operation",
        "Produces valuable soil enricher for gardens, landscaping, and agriculture",
        "Reduces waste transportation and landfill disposal costs by up to 80%",
        "Compliant with Solid Waste Management Rules 2016 and environmental regulations",
        "Low power consumption with energy-efficient design",
        "Minimal maintenance with durable stainless steel construction",
      ]}
      targetMarket={[
        "Hotels, Resorts & Hospitality Industry",
        "Restaurants, Cafes & Cloud Kitchens",
        "IT Parks, Tech Campuses & Corporate Offices",
        "Hospitals, Clinics & Healthcare Facilities",
        "Educational Institutions & University Campuses",
        "Residential Apartments, Townships & Gated Communities",
        "Flight Kitchens & Catering Services",
        "Food Processing Units & Manufacturing Facilities",
        "Shopping Malls, Food Courts & Retail Complexes",
        "Municipal Corporations & Urban Local Bodies",
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
