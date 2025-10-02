import { LocationPageTemplate } from "@/components/location-page-template"

export default function UAEPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in UAE"
      subtitle="Advanced Waste Management for a Modern Nation"
      location="United Arab Emirates"
      description={[
        "The UAE's rapid urban development creates substantial organic waste from institutions, apartments, hotels, and restaurants. Solwearth Ecotech provides advanced OWC solutions that address this challenge with cutting-edge technology.",
        "Our systems reduce landfill dependency, lower costs, and offer odorless, rapid conversion (less than 24 hours) with outputs suitable for landscaping, perfectly suited for the UAE's modern infrastructure.",
      ]}
      benefits={[
        "Reduces landfill dependency",
        "Lowers waste management costs",
        "Odorless operation",
        "Rapid conversion (less than 24 hours)",
        "Output suitable for landscaping",
        "Supports UAE's sustainability goals",
        "Automated mixing, grinding, and heating",
        "Emission-free technology",
      ]}
      targetMarket={[
        "Hotels and Luxury Resorts",
        "Restaurants and Food Courts",
        "Residential Towers",
        "Commercial Complexes",
        "Hospitals",
        "Educational Institutions",
        "Shopping Malls",
        "Industrial Facilities",
      ]}
      features={[
        "Manual and Automatic models available",
        "Automatic recommended for bulk generators",
        "Residential and Commercial variants",
        "Automated mixing and grinding",
        "Advanced heating technology",
        "Emission-free operation",
        "Less than 24-hour processing",
        "Landscaping-ready output",
      ]}
    />
  )
}
