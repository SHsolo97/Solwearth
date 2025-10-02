import { LocationPageTemplate } from "@/components/location-page-template"

export default function GoaPage() {
  return (
    <LocationPageTemplate
      title="Food Waste Converter Machine in Goa"
      subtitle="Preserving Paradise Through Sustainable Waste Management"
      location="Goa, India"
      description={[
        "Goa, India's premier beach tourism destination, requires special attention to waste management to preserve its pristine environment. Solwearth Ecotech provides tailored solutions for the hospitality and tourism industry.",
        "Our 24-hour waste-to-compost conversion supports sustainable tourism practices and helps preserve Goa's beautiful beaches and natural environment for future generations.",
      ]}
      benefits={[
        "24-hour conversion to compost",
        "Preserves Goa's pristine environment",
        "Perfect for tourism industry",
        "Supports sustainable tourism",
        "Reduces beach and coastal pollution",
        "Ideal for hotels and resorts",
        "Protects natural beauty",
        "Eco-friendly for tourist destinations",
      ]}
      targetMarket={[
        "Beach Resorts and Hotels",
        "Restaurants and Beach Shacks",
        "Tourist Establishments",
        "Residential Communities",
        "Catering Services",
        "Event Venues",
        "Hospitals",
        "Educational Institutions",
      ]}
      features={[
        "24-hour waste to compost conversion",
        "Tourism-focused design",
        "Environmental preservation focus",
        "Suitable for coastal areas",
        "Sustainable tourism support",
        "Hotel and restaurant optimized",
        "Compact for space-limited areas",
        "Odor-free for guest comfort",
      ]}
    />
  )
}
