import { LocationPageTemplate } from "@/components/location-page-template"

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
