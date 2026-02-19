import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

// Homepage is fully static - force pre-render at build time, serve from CDN
export const dynamic = 'force-static'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.solwearth.com',
  },
}

// Dynamic imports for below-fold sections to reduce initial JS bundle
const QuoteSection = dynamic(() => import("@/components/quote-section").then(mod => ({ default: mod.QuoteSection })), {
  loading: () => <div className="bg-[#3E5F6F] py-8" />,
})
const AchievementsSection = dynamic(() => import("@/components/achievements-section").then(mod => ({ default: mod.AchievementsSection })), {
  loading: () => <div className="py-16 md:py-24" />,
})
const CertificationsSection = dynamic(() => import("@/components/certifications-section").then(mod => ({ default: mod.CertificationsSection })), {
  loading: () => <div className="py-16" />,
})
const LocationsSection = dynamic(() => import("@/components/locations-section").then(mod => ({ default: mod.LocationsSection })), {
  loading: () => <div className="py-16 md:py-24 bg-[#3E5F6F]" />,
})
const TechnologySection = dynamic(() => import("@/components/technology-section").then(mod => ({ default: mod.TechnologySection })), {
  loading: () => <div className="py-16 md:py-24" />,
})
const LeadFormSection = dynamic(() => import("@/components/lead-form-section").then(mod => ({ default: mod.LeadFormSection })), {
  loading: () => <div className="py-16 md:py-20" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <div className="cv-auto">
        <QuoteSection />
      </div>
      <div className="cv-auto">
        <AchievementsSection />
      </div>
      <div className="cv-auto">
        <CertificationsSection />
      </div>
      <div className="cv-auto">
        <LocationsSection />
      </div>
      <div className="cv-auto">
        <TechnologySection />
      </div>
      <LeadFormSection />
      <Footer />
    </main>
  )
}
