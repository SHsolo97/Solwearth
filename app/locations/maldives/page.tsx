import { LocationPageTemplate } from "@/components/location-page-template"

export default function MaldivesPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converters in Maldives"
      subtitle="Protecting Paradise Through Sustainable Waste Management"
      location="Maldives"
      description={[
        "The Maldives faces unique waste management challenges due to high tourist volume and its fragile marine ecosystem. Solwearth Ecotech provides sustainable solutions that protect the beautiful islands and marine environment.",
        "Our compact, energy-efficient machines are custom-designed for the tropical climate, offering emissions-free operation with significant cost savings, perfect for islands, resorts, and businesses across the Maldives.",
      ]}
      benefits={[
        "Reduces sea disposal and environmental impact",
        "Emissions-free operation",
        "Significant cost savings",
        "Custom machines for tropical climate",
        "Up to 90% waste reduction",
        "Protects marine ecosystem",
        "Ideal for island environments",
        "Nutrient-rich soil enricher output",
      ]}
      targetMarket={[
        "Island Resorts and Hotels",
        "Luxury Resorts",
        "Restaurants and Cafes",
        "Guest Houses",
        "Dive Centers and Marine Facilities",
        "Island Communities",
        "Tourist Facilities",
        "Catering Services",
      ]}
      features={[
        "Multi-stage indirect heat technology",
        "Closed loop system",
        "Nutrient-rich soil enricher output",
        "Up to 90% waste reduction",
        "Compact and energy-efficient",
        "Minimal user input required",
        "Automated operation",
        "Installation and maintenance support included",
      ]}
    />
  )
}
