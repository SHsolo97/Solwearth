import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { QuoteSection } from "@/components/quote-section"
import { AchievementsSection } from "@/components/achievements-section"
import { CertificationsSection } from "@/components/certifications-section"
import { LocationsSection } from "@/components/locations-section"
import { TechnologySection } from "@/components/technology-section"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <QuoteSection />
      <AchievementsSection />
      <CertificationsSection />
      <LocationsSection />
      <TechnologySection />
      <LeadFormSection />
      <Footer />
    </main>
  )
}
