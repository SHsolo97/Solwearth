'use client'

import { Button } from "@/components/ui/button"

export function QuoteSection() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#3E5F6F] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <h3 className="text-2xl font-bold text-white">Get Your Free Quote</h3>
          <Button 
            onClick={scrollToForm}
            className="bg-green-600 hover:bg-green-700 text-white px-8"
          >
            Click Here
          </Button>
        </div>
      </div>
    </section>
  )
}
