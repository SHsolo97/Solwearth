import { Button } from "@/components/ui/button"
import Link from "next/link"

export function QuoteSection() {
  return (
    <section className="bg-[#3E5F6F] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <h3 className="text-2xl font-bold text-white">Get Your Free Quote</h3>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">Click Here</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
