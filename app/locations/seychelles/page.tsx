import { LocationPageTemplate } from "@/components/location-page-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organic Waste Converter Machine in Seychelles | OWC Machine for Island Resorts - Solwearth",
  description: "Best organic waste converter machines for Seychelles island resorts. Protect pristine ecosystems. Zero emission. 90% waste reduction. Perfect for luxury resorts and eco-tourism. Sustainable island solutions.",
  keywords: "organic waste converter Seychelles, organic waste converter machine Seychelles, OWC machine Seychelles, food waste converter machine Seychelles, resort waste management Seychelles, island waste converter Seychelles, hotel waste management Seychelles, eco-tourism Seychelles, sustainable tourism Seychelles, composting machine Seychelles",
  openGraph: {
    title: "Organic Waste Converter Machine in Seychelles - Solwearth Ecotech",
    description: "Premium organic waste converter machines for Seychelles. Protecting pristine island ecosystems through sustainable innovation. Perfect for luxury resorts, hotels, and eco-tourism establishments.",
    type: 'website',
  },
  alternates: {
    canonical: "https://www.solwearth.com/locations/seychelles"
  }
}

export default function SeychellesPage() {
  return (
    <LocationPageTemplate
      title="Organic Waste Converter Machine in Seychelles"
      subtitle="Protecting Pristine Island Ecosystems Through Innovation"
      location="Seychelles"
      description={[
        "Seychelles, an archipelago of 115 pristine islands renowned for its extraordinary biodiversity and natural beauty, is a global leader in environmental conservation. With strict environmental protection laws and a commitment to sustainable development, Seychelles requires waste management solutions that align with its conservation values. Solwearth Ecotech provides eco-friendly organic waste converter technology specifically designed for island environments, helping protect Seychelles' unique ecosystems while efficiently managing organic waste from the tourism and hospitality sectors.",
        "Our organic waste converter machines in Seychelles deliver eco-friendly processing with zero emissions and up to 90% volume reduction. This is critical for an island nation where waste disposal options are limited and protecting marine and terrestrial ecosystems is paramount. The machines produce valuable soil enricher that can be used for resort landscaping and local agriculture, reducing the need to import fertilizers and creating a sustainable circular economy within the islands.",
        "From the luxury resorts of Mahé and Praslin to the boutique properties on La Digue and private islands, from the hotels in Victoria to the eco-lodges throughout the archipelago, Solwearth's organic waste converter machines are helping Seychelles' tourism industry maintain its reputation for environmental excellence. Our fully automatic operation with completely odor-free processing ensures guest comfort while supporting Seychelles' position as a leader in sustainable tourism and environmental conservation.",
      ]}
      benefits={[
        "Eco-friendly waste processing with zero emissions",
        "Up to 90% volume reduction protecting island waste systems",
        "Protects island ecosystems from organic waste pollution",
        "Significantly reduces shipping costs for waste disposal",
        "Produces valuable soil enricher for local use",
        "Fully automatic operation with minimal labor requirements",
        "No chemicals, additives, or bacteria required",
        "Completely odor-free with integrated deodorization",
        "Supports Seychelles' environmental conservation leadership",
        "Helps achieve eco-certifications and sustainable tourism ratings",
      ]}
      targetMarket={[
        "Hotels, Island Resorts & Luxury Properties",
        "Restaurants, Cafes & Food Service Industry",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions",
        "Government Facilities & Public Buildings",
        "Municipal Waste Management Bodies",
        "Residential Complexes & Housing Estates",
        "Tourism & Hospitality Sector",
        "Eco-Lodges & Conservation Facilities",
        "Maritime & Cruise Facilities",
      ]}
      features={[
        "Multi-stage indirect heat and dry decomposition technology",
        "Capacity range: 40 KG to 1000 KG per batch (SE-501 to SE-1H models)",
        "Processing time: 12-30 hours depending on waste type and capacity",
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
