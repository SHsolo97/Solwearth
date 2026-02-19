import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { GoogleAnalytics } from "@/components/google-analytics"
import "./globals.css"

const PopupLeadForm = dynamic(
  () => import("@/components/popup-lead-form").then(mod => ({ default: mod.PopupLeadForm })),
  { ssr: false }
)

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://solwearth.com'),
  title: "Organic Waste Converter|Food Waste Management - Solwearth",
  description: "Leading organic waste converter manufacturer in India. Fully automatic OWC converts food waste to compost in 24 hours.",
  keywords: "organic waste converter, food waste converter, OWC machine, automatic waste converter, compost machine, waste management India",
  openGraph: {
    title: "Automatic Organic Waste Converter - Solwearth Ecotech",
    description: "Transform food waste into compost with our fully automatic organic waste converters. Available across India and Middle East.",
    images: ['/images/machine/automatic-waste-convertor-hero.png'],
    url: 'https://solwearth.com',
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
        {/* DNS prefetch and preconnect for critical third-party origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        {/* Hreflang tags for search engines */}
        <link rel="alternate" hrefLang="en" href="https://www.solwearth.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.solwearth.com" />
      </head>
      <body className={`${openSans.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
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
                "https://www.linkedin.com/company/solwearth-ecotech-pvt-ltd/",
                "https://x.com/solwearth"
              ]
            })
          }}
        />
        <PopupLeadForm />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
