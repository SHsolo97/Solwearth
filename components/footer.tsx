import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#2C4A57] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SOLWEARTH</h3>
            <p className="text-sm text-gray-300">Ecotech Private Limited</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Committed to sustainable development and eco-friendly waste management solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/se-1001" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  SE 1001 (75-100KG)
                </Link>
              </li>
              <li>
                <Link href="/products/se-5001" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  SE 5001 (400-500KG)
                </Link>
              </li>
              <li>
                <Link href="/products/se-1h" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  SE 1H (1000KG)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Solwearth Ecotech Private Limited. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link href="/contact" aria-label="Contact Solwearth for Waste Management Solutions">
          <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-lg">
            <Phone className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </footer>
  )
}
