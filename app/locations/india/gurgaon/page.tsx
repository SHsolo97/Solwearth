import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Food Waste Converter Machine in Gurgaon | OWC Machine Gurugram - Solwearth",
  description: "Leading manufacturer of organic food waste converter machines in Gurgaon. 83-90% wet waste reduction. Multi-stage indirect heat technology. OWC urban strategy for Delhi NCR. Call +91 98950 44004.",
  keywords: "organic food waste converter machine Gurgaon, organic waste converter Gurgaon, OWC machine Gurgaon, food waste converter machine Gurugram, automatic organic waste converter Gurgaon, waste management solutions Gurgaon, composting machine Gurgaon, OWC machine Delhi NCR, organic waste management Gurugram",
  openGraph: {
    title: "Organic Food Waste Converter Machine in Gurgaon - Solwearth Ecotech",
    description: "Advanced organic food waste converter machines for Gurgaon. 83-90% wet waste volume reduction in 12-25 hours. Multi-stage indirect heat technology. Serving corporate offices, luxury apartments, and malls across Gurugram.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/india/gurgaon"
  }
}

export default function GurgaonPage() {
  return (
    <LocationPageTemplate
      title="Leading Manufacturer of Organic Food Waste Converter Machines in Gurgaon"
      subtitle="Advanced OWC Solutions for Delhi NCR's Corporate Hub"
      location="Gurgaon, India"
      description={[
        "Gurgaon (Gurugram), a major corporate and IT hub in Delhi NCR, is home to hundreds of Fortune 500 companies, luxury residential towers, and world-class commercial establishments. This concentration of businesses, offices, apartments, and hospitality venues generates substantial organic waste that requires efficient, modern management solutions. Solwearth Ecotech provides advanced organic food waste converter machines perfectly suited for Gurgaon's urban strategy and corporate environment.",
        "Our organic waste converter machines in Gurgaon achieve an impressive 83-90% wet waste volume reduction within just 12-25 hours. Utilizing multi-stage indirect heat and dry decomposition technology, our machines process organic waste without requiring any additives, enzymes, or bacteria. The integrated deodorization and humidity control systems ensure completely odor-free operation, making our machines ideal for Gurgaon's premium corporate and residential environments where air quality and aesthetics matter.",
        "From the corporate towers of Cyber City and DLF Phase buildings to the luxury condominiums of Golf Course Road, from the malls of MG Road to the hospitality hubs of Sector 29, Solwearth's organic waste converter machines are transforming how Gurgaon manages its organic waste. Our local assessment, quick installation, and dependable after-sales support ensure that your waste management operations run smoothly, contributing to Gurugram's smart city vision.",
      ]}
      benefits={[
        "83-90% wet waste volume reduction within 12-25 hours",
        "Multi-stage indirect heat decomposition technology",
        "No additives, enzymes, or bacteria required for processing",
        "Integrated deodorization system for odor-free operation",
        "Advanced humidity control technology for optimal results",
        "Local site assessment and quick installation available",
        "Dependable after-sales support across Gurgaon",
        "Perfect for corporate environments and premium properties",
        "Supports Gurugram's smart city and urban strategy goals",
        "Helps achieve green building certifications and sustainability ratings",
      ]}
      targetMarket={[
        "IT Parks & Corporate Office Towers",
        "Luxury Apartments & Premium Condominiums",
        "Hotels, Resorts & Business Hotels",
        "Hospitals & Healthcare Facilities",
        "Shopping Malls & Food Courts",
        "Educational Institutions & International Schools",
        "Corporate Cafeterias & Office Canteens",
        "Residential Societies & Gated Communities",
        "Co-working Spaces & Business Centers",
        "Convention Centers & Event Venues",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Capacity range: 40 KG to 1000 KG per batch (SE-501 to SE-1H models)",
        "Processing time: 12-24 hours depending on waste type and capacity",
        "83-90% average waste volume reduction through dehydration",
        "Zero emission - No exhaust system or chimney required",
        "Fully automatic PLC control with user-friendly interface",
        "Integrated deodorization for completely odor-free operation",
        "Durable stainless steel construction for hygiene and longevity",
        "No additives, bacteria, enzymes, or chemicals required",
        "1-year comprehensive warranty with local service support",
      ]}
    />
  )
}
