import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { PopupLeadForm } from "@/components/popup-lead-form"
import { GoogleAnalytics } from "@/components/google-analytics"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.solwearth.com'),
  title: "Organic Waste Converter|Food Waste Management - Solwearth",
  description: "Leading manufacturer of automatic organic waste converters in India. Convert food waste to compost in 24 hours. Capacities 25kg to 1000kg.",
  keywords: "organic waste converter, food waste converter, OWC machine, automatic waste converter, compost machine, waste management India",
  openGraph: {
    title: "Automatic Organic Waste Converter - Solwearth Ecotech",
    description: "Transform food waste into compost with our fully automatic organic waste converters. Available across India and Middle East.",
    images: ['/images/machine/automatic-waste-convertor-hero.png'],
    url: 'https://www.solwearth.com',
    siteName: 'Solwearth Ecotech',
    type: 'website',
  },
  robots: "index, follow",
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </head>
      <body className={`${openSans.variable} font-sans antialiased`}>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Solwearth Ecotech Private Limited",
              "url": "https://www.solwearth.com",
              "logo": "https://www.solwearth.com/images/logo/solwearth-ecotech.png",
              "description": "Leading manufacturer of organic waste converters and food waste management solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "46/2861-A, 1st Floor, Chakkaraparambu, Puthiya Road",
                "addressLocality": "Vennala",
                "addressRegion": "Kerala",
                "postalCode": "682028",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98950-44004",
                "contactType": "sales",
                "email": "info@solwearth.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/Solwearth",
                "https://www.instagram.com/solwearth_ecotech/",
                "https://www.linkedin.com/company/solwearth-ecotech-pvt-ltd/"
              ]
            })
          }}
        />
        <PopupLeadForm />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
