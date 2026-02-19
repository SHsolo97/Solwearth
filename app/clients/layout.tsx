import type { Metadata } from "next"

// Clients page is fully static - force pre-render at build time, serve from CDN
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Our Clients - Hotels, Corporates & Institutions | Solwearth Ecotech",
  description: "500+ satisfied clients trust Solwearth organic waste converters. From luxury hotels like Taj & Marriott to corporates like IKEA & Adani. Serving India & Middle East.",
  keywords: "Solwearth clients, OWC installations, organic waste converter customers, hotel waste management, corporate clients India",
  openGraph: {
    title: "Our Clients - Leading Organizations Choose Solwearth",
    description: "Trusted by 500+ organizations including prestigious hotels, corporates, and institutions across the globe.",
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.solwearth.com/clients',
  },
}

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
