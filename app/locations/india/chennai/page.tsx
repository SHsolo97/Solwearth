import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Food Waste Converter in Chennai | Organic Waste Management Solutions - Solwearth",
  description: "Premium food waste converter supplier in Chennai. Automatic OWC machines for IT companies, hotels, restaurants in Chennai. Advanced waste management technology. Call +91 98950 440 04",
  keywords: "food waste converter Chennai, organic waste converter Chennai, OWC machine Chennai, waste management Chennai, compost machine Chennai",
  openGraph: {
    title: "Food Waste Converter Chennai - Solwearth Ecotech",
    description: "State-of-the-art food waste management solutions for Chennai's industrial and commercial sectors. Process waste in under 24 hours.",
    type: 'website',
  },
}

export default function ChennaiPage() {
  return (
    <LocationPageTemplate
      title="Food Waste Converter Machine in Chennai"
      subtitle="State-of-the-Art Waste Management Technology"
      location="Chennai, India"
      description={[
        "Chennai, a major metropolitan city and industrial hub, requires efficient waste management solutions. Solwearth Ecotech brings state-of-the-art technology to Chennai with processing times of less than 24 hours.",
        "Our food waste converter machines use heat, pressure, and microorganisms to transform waste into valuable compost, reducing chemical fertilizer dependency and promoting environmental sustainability.",
      ]}
      benefits={[
        "Processing time less than 24 hours",
        "Minimum space, power, and labor requirements",
        "No bacteria, additives, or water required",
        "Cost-effective waste management solution",
        "Reduces chemical fertilizer dependency",
        "Promotes environmental sustainability",
        "Energy-efficient operation",
        "Creates valuable compost output",
      ]}
      targetMarket={[
        "Manufacturing Industries",
        "Hotels and Restaurants",
        "IT Parks",
        "Hospitals",
        "Educational Institutions",
        "Residential Communities",
        "Food Processing Units",
        "Commercial Complexes",
      ]}
      features={[
        "State-of-the-art heat and pressure technology",
        "Microorganism-assisted decomposition",
        "Less than 24-hour processing",
        "Minimal space requirements",
        "Low power consumption",
        "No additives or chemicals needed",
        "Automatic operation",
        "Produces natural fertilizer alternative",
      ]}
    />
  )
}
