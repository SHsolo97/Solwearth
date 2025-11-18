import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Choose Us | Solwearth - World-Class Organic Waste Converters",
  description: "Discover why Solwearth organic waste converters stand out globally. Unmatched speed (12-15 hours), 90% waste reduction, advanced technology, fully automatic operation, and comprehensive support. Made in India for the world.",
  keywords: [
    "why choose Solwearth",
    "organic waste converter advantages",
    "fastest waste converter",
    "automatic composting machine",
    "eco-friendly waste management",
    "made in India organic waste converter",
    "food waste converter benefits",
    "sustainable waste solutions",
    "green technology India"
  ],
  openGraph: {
    title: "Why Choose Solwearth - World-Class Organic Waste Management",
    description: "12-15 hour processing, 90% waste reduction, zero chemicals, fully automatic. Discover the Solwearth advantage.",
    type: "website",
    url: "https://www.solwearth.com/why-choose-us",
  },
}

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
