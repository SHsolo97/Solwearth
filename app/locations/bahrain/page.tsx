import { LocationPageTemplate } from "@/components/location-page-template"

export default function BahrainPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Bahrain"
      subtitle="Compact Solutions for the Kingdom"
      location="Bahrain"
      description={[
        "Bahrain requires efficient, space-conscious waste management solutions. Solwearth Ecotech offers OWCs for apartments, villas, businesses, and institutions, all designed to meet local electrical specifications.",
        "Our compact units are perfect for apartments with efficient kitchen waste processing, while our automatic systems for institutions offer durability, high-volume capacity, and ease of use, all producing on-site compost.",
      ]}
      benefits={[
        "Compact design for apartments",
        "Efficient kitchen waste processing",
        "Odor-free operation",
        "Eco-friendly technology",
        "Automatic systems for institutions",
        "Durable and high-volume capable",
        "Reduces landfill dependency",
        "Lower carbon footprint",
      ]}
      targetMarket={[
        "Apartments and Villas",
        "Hotels and Resorts",
        "Restaurants",
        "Business Complexes",
        "Institutions",
        "Hospitals",
        "Educational Facilities",
        "Government Buildings",
      ]}
      features={[
        "Designed for local electrical specs",
        "Compact for space-limited areas",
        "Odor-free operation",
        "Eco-friendly processing",
        "Automatic for institutions",
        "Durable construction",
        "High-volume capacity",
        "On-site compost production",
      ]}
    />
  )
}
