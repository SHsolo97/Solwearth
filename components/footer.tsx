import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
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
            <p className="text-sm text-gray-300">Ecotech Pvt. Ltd</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Solwearth Ecotech Pvt. Ltd is a company that focuses primarily on social commitment and sustainable development. Merging robust technology, expertise and dedicated support, we have created a product that can cater the waste management needs of different industries ranging from small restaurants to flight kitchens.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li>
                <Link href="/locations/india" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  India
                </Link>
              </li>
              <li>
                <Link href="/locations/maldives" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Maldives
                </Link>
              </li>
              <li>
                <Link href="/locations/saudi-arabia" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Saudi Arabia
                </Link>
              </li>
              <li>
                <Link href="/locations/oman" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Oman
                </Link>
              </li>
              <li>
                <Link href="/locations/uae" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  UAE
                </Link>
              </li>
              <li>
                <Link href="/locations/bahrain" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Bahrain
                </Link>
              </li>
              <li>
                <Link href="/locations/qatar" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Qatar
                </Link>
              </li>
              <li>
                <Link href="/locations/kuwait" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Kuwait
                </Link>
              </li>
              <li>
                <Link href="/locations/malaysia" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Malaysia
                </Link>
              </li>
              <li>
                <Link href="/locations/bangladesh" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  Bangladesh
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              {/* Contact Numbers */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919895044004" className="text-sm text-gray-300 hover:text-green-400 transition-colors block">
                    +91 98950 44004
                  </a>
                  <a href="tel:+919746588804" className="text-sm text-gray-300 hover:text-green-400 transition-colors block">
                    +91 97465 88804
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@solwearth.com" className="text-sm text-gray-300 hover:text-green-400 transition-colors">
                  info@solwearth.com
                </a>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    46/2861-A, 1st Floor,<br />
                    Chakkaraparambu, Puthiya Road,<br />
                    Vennala P.O., Cochin - 682028,<br />
                    Kerala, India
                  </p>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <p className="text-xs text-gray-400 mb-2">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/Solwearth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/solwearth_ecotech/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/solwearth-ecotech-pvt-ltd/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
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
