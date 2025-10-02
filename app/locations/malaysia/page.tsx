import { LocationPageTemplate } from "@/components/location-page-template"

export default function MalaysiaPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Malaysia"
      subtitle="Energy-Efficient Solutions for Sustainable Malaysia"
      location="Malaysia"
      description={[
        "Malaysia is advancing its environmental initiatives with focus on sustainable waste management. Solwearth Ecotech provides OWCs that reduce landfill dependency, cut costs, and offer energy-efficient, quick operation.",
        "Our automatic models feature high capacity for restaurants, institutions, and apartments with automatic processing, energy-saving design, quiet operation, compact size, and easy maintenance, producing eco-friendly compost in less than 24 hours.",
      ]}
      benefits={[
        "Reduces landfill dependency",
        "Cuts waste management costs",
        "Energy-efficient operation",
        "Quick operation (less than 24 hours)",
        "Eco-friendly compost production",
        "Quiet operation",
        "Compact design",
        "Easy maintenance",
      ]}
      targetMarket={[
        "Restaurants and Food Services",
        "Institutions and Universities",
        "Apartments and Condominiums",
        "Hotels and Resorts",
        "Hospitals",
        "Shopping Malls",
        "Commercial Buildings",
        "Industrial Facilities",
      ]}
      features={[
        "Automatic processing",
        "Energy-saving technology",
        "Quiet operation",
        "Compact design",
        "Easy maintenance",
        "High capacity for bulk operations",
        "Less than 24-hour processing",
        "Suitable for tropical climate",
      ]}
    />
  )
}
