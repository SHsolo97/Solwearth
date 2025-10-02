import { LocationPageTemplate } from "@/components/location-page-template"

export default function IndiaPage() {
  return (
    <LocationPageTemplate
      title="Waste Converter Machines in India"
      subtitle="Sustainable Solutions for a Greener Future"
      location="India"
      description={[
        "India faces significant waste management challenges, with rapidly growing urban populations and increasing waste generation. Solwearth Ecotech provides comprehensive organic waste management solutions across the country.",
        "Our waste converter machines offer eco-friendly processing, landfill reduction, and cost-effective solutions for businesses, municipalities, and industrial clients throughout India.",
      ]}
      benefits={[
        "Eco-friendly waste processing with multi-stage indirect heat and dry decomposition",
        "Significant landfill waste reduction - up to 90% volume reduction",
        "Cost-effective solutions for long-term waste management",
        "Reduces methane emissions and environmental impact",
        "Generates valuable soil supplements from waste",
        "Fully automatic PLC controlled operation",
        "No additives, bacteria, or chemicals required",
        "Integrated deodorization for odor-free operation",
      ]}
      targetMarket={[
        "Restaurants and Hotels",
        "Residential Apartments and Townships",
        "IT Campuses and Corporate Parks",
        "Hospitals and Healthcare Facilities",
        "Educational Institutions",
        "Flight Kitchens and Catering Services",
        "Food Processing Units",
        "Municipal Corporations",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Processing time: 12-30 hours depending on capacity",
        "83-90% average waste reduction",
        "Water recycling technology maintains chamber humidity",
        "No emissions, smoke, or odor during operation",
        "Easy installation with no special requirements",
        "Durable stainless steel construction",
        "1-year warranty on all models",
      ]}
    />
  )
}
