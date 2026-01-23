import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine Manufacturer in Delhi | OWC Machine Delhi NCR - Solwearth",
  description: "Leading organic waste converter machine manufacturer in Delhi NCR. Automatic OWC machines with thermal dehydration technology for government offices, corporates, hotels in Delhi. Call +91 98950 44004.",
  keywords: "organic waste converter manufacturer Delhi, organic waste converter machine Delhi, OWC machine Delhi, food waste converter machine Delhi NCR, automatic organic waste converter Delhi, waste management solutions Delhi, composting machine Delhi, OWC suppliers Delhi NCR, organic waste management Delhi",
  openGraph: {
    title: "Organic Waste Converter Machine Manufacturer in Delhi - Solwearth Ecotech",
    description: "Premium organic waste converter manufacturer in Delhi NCR. Advanced thermal dehydration technology. Serving government institutions, corporates, hotels, and commercial establishments.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/delhi"
  }
}

export default function DelhiPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine Manufacturer in Delhi"
      subtitle="Advanced Waste Management Solutions for India's Capital"
      location="Delhi, India"
      description={[
        "Delhi, India's capital and the heart of the National Capital Region (NCR), generates approximately 11,000 tonnes of municipal solid waste daily, making it one of the highest waste-generating cities in Asia. The city's dense population, government institutions, corporate headquarters, and thriving hospitality sector create an urgent need for efficient organic waste management solutions. Solwearth Ecotech, a leading organic waste converter machine manufacturer, provides advanced OWC solutions specifically designed for Delhi's unique waste management challenges.",
        "Our organic waste converter machines utilize multi-stage indirect heat and dry decomposition technology to transform food waste from restaurants, hotels, canteens, and institutional kitchens into high-quality soil enricher within just hours. Unlike conventional composting methods, our technology employs controlled dehydration that accelerates the breakdown process while eliminating odors and pathogens. The machines are manufactured using high-quality materials and undergo rigorous testing to meet the highest industry standards.",
        "From the government corridors of Central Delhi to the corporate towers of Connaught Place, from the hospitality hubs of Aerocity to the residential societies of South Delhi, Solwearth's organic waste converter machines are transforming how Delhi manages its organic waste. Our comprehensive solutions include ongoing maintenance and repair services, ensuring uninterrupted operation and maximum efficiency for all our clients across Delhi NCR.",
      ]}
      benefits={[
        "Advanced multi-stage thermal dehydration process for optimal results",
        "Converts organic waste to high-quality soil enricher in just hours",
        "Handles diverse waste types including restaurant, hotel, and canteen waste",
        "High-quality materials and construction for durability and reliability",
        "Rigorous testing and compliance with industry standards",
        "Ongoing maintenance and repair services included",
        "Perfect solution for Delhi's high-density urban environment",
        "Significantly reduces burden on already-stressed landfills",
        "Helps achieve compliance with Solid Waste Management Rules 2016",
        "Supports Delhi's pollution control and clean city initiatives",
      ]}
      targetMarket={[
        "Government Institutions & Ministries",
        "Hotels, Resorts & Hospitality Industry",
        "Corporate Offices & Business Centers",
        "Hospitals, Nursing Homes & Healthcare Facilities",
        "Educational Institutions & University Campuses",
        "Residential Societies & Housing Complexes",
        "Food Courts, Restaurants & Catering Services",
        "Shopping Malls & Commercial Complexes",
        "Event Venues & Convention Centers",
        "Industrial Canteens & Manufacturing Units",
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
