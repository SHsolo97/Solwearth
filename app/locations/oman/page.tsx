import { LocationPageTemplate } from "@/components/location-page-template"

export default function OmanPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Oman"
      subtitle="Eco-Friendly Composting Solutions"
      location="Oman"
      description={[
        "Oman is committed to environmental conservation and sustainable development. Solwearth Ecotech's OWCs turn food and organic waste into valuable compost, supporting the Sultanate's green initiatives.",
        "Our technology combines multi-stage heat/moisture control with microbial decomposition for rapid results, reducing landfill waste, controlling odors, and improving air quality across Oman.",
      ]}
      benefits={[
        "Reduces landfill waste",
        "Produces eco-friendly compost",
        "Conserves resources",
        "Effective odor control",
        "Improves air quality",
        "Supports green initiatives",
        "Rapid composting results",
        "Energy-efficient operation",
      ]}
      targetMarket={[
        "Hotels and Resorts",
        "Restaurants and Canteens",
        "Residential Apartments",
        "Commercial Buildings",
        "Hospitals",
        "Educational Institutions",
        "Industrial Facilities",
        "Government Complexes",
      ]}
      features={[
        "Automatic and food waste converters available",
        "Touch-screen operation",
        "Automated discharge system",
        "Advanced odor control",
        "Energy-efficient design",
        "Multi-stage heat/moisture technology",
        "Microbial decomposition",
        "Rapid processing for high-volume operations",
      ]}
    />
  )
}
