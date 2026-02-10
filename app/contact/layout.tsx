import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Solwearth Ecotech | Get Quote for Organic Waste Converters",
  description: "Contact Solwearth Ecotech for organic waste converter inquiries. Get expert advice, pricing, and support. Call +91-98950-44004 or email info@solwearth.com",
  keywords: "contact Solwearth, OWC inquiry, waste converter quote, food waste management contact, buy organic waste converter",
  openGraph: {
    title: "Contact Us - Solwearth Ecotech",
    description: "Get in touch for expert waste management solutions. Available across India and Middle East.",
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.solwearth.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
