import { LocationPageTemplate } from "@/components/location-page-template"

export default function DelhiPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine Manufacturer in Delhi"
      subtitle="Advanced Waste Management for the Capital"
      location="Delhi, India"
      description={[
        "Delhi, India's capital city, faces significant waste management challenges due to its large population and urban density. Solwearth Ecotech provides advanced organic waste converter solutions using aerobic and anaerobic processes.",
        "Our machines convert waste from restaurants, hotels, canteens, and general organic sources into high-quality compost in just hours, offering a sustainable solution for Delhi's waste crisis.",
      ]}
      benefits={[
        "Advanced aerobic and anaerobic processes",
        "Converts waste to high-quality compost in hours",
        "Handles restaurant, hotel, and canteen waste",
        "High-quality materials and construction",
        "Rigorous testing and industry standards compliance",
        "Ongoing maintenance and repair services",
        "Perfect for Delhi's high-density urban environment",
        "Reduces burden on landfills",
      ]}
      targetMarket={[
        "Government Institutions",
        "Hotels and Restaurants",
        "Corporate Offices",
        "Hospitals",
        "Educational Institutions",
        "Residential Societies",
        "Food Courts and Malls",
        "Catering Services",
      ]}
      features={[
        "Advanced aerobic and anaerobic technology",
        "Rapid composting in hours",
        "High-quality material construction",
        "Industry standards compliance",
        "Rigorous testing protocols",
        "Maintenance and repair services included",
        "Suitable for all types of organic waste",
        "Energy-efficient operation",
      ]}
    />
  )
}
