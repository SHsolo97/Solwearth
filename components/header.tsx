"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [indiaDropdownOpen, setIndiaDropdownOpen] = useState(false)
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false)

  const productLinks = [
    { label: "All Products", href: "/products" },
    { label: "SE-501 (25-50 KG)", href: "/products/se-501" },
    { label: "SE-1001 (75-100 KG)", href: "/products/se-1001" },
    { label: "SE-2001 (150-200 KG)", href: "/products/se-2001" },
    { label: "SE-3501 (350-375 KG)", href: "/products/se-3501" },
    { label: "SE-5001 (400-500 KG)", href: "/products/se-5001" },
    { label: "SE-1H (1000 KG)", href: "/products/se-1h" },
  ]

  const indianCities = [
    { label: "India Overview", href: "/locations/india" },
    { label: "Bangalore", href: "/locations/india/bangalore" },
    { label: "Mumbai", href: "/locations/india/mumbai" },
    { label: "Chennai", href: "/locations/india/chennai" },
    { label: "Delhi", href: "/locations/india/delhi" },
    { label: "Hyderabad", href: "/locations/india/hyderabad" },
    { label: "Pune", href: "/locations/india/pune" },
    { label: "Gurgaon", href: "/locations/india/gurgaon" },
    { label: "Noida", href: "/locations/india/noida" },
    { label: "Kerala", href: "/locations/india/kerala" },
    { label: "Goa", href: "/locations/india/goa" },
    { label: "Andhra Pradesh", href: "/locations/india/andhra-pradesh" },
  ]

  const internationalLocations = [
    { label: "Maldives", href: "/locations/maldives" },
    { label: "Saudi Arabia", href: "/locations/saudi-arabia" },
    { label: "Oman", href: "/locations/oman" },
    { label: "UAE", href: "/locations/uae" },
    { label: "Bahrain", href: "/locations/bahrain" },
    { label: "Qatar", href: "/locations/qatar" },
    { label: "Kuwait", href: "/locations/kuwait" },
    { label: "Malaysia", href: "/locations/malaysia" },
    { label: "Bangladesh", href: "/locations/bangladesh" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo/solwearth-ecotech.png" 
              alt="Solwearth Ecotech Private Limited"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1">
                Locations <ChevronDown className="w-4 h-4" />
              </button>
              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 max-h-96 overflow-visible">
                    {/* India Submenu */}
                    <div
                      className="relative"
                      onMouseEnter={() => setIndiaDropdownOpen(true)}
                      onMouseLeave={() => setIndiaDropdownOpen(false)}
                    >
                      <button 
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center justify-between"
                        onClick={() => setIndiaDropdownOpen(!indiaDropdownOpen)}
                      >
                        India <ChevronDown className="w-4 h-4 -rotate-90" />
                      </button>
                      {indiaDropdownOpen && (
                        <div className="absolute left-full top-0 pl-2 z-[60]">
                          <div className="w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto">
                            {indianCities.map((city) => (
                              <Link
                                key={city.href}
                                href={city.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors whitespace-nowrap"
                              >
                                {city.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* International Locations */}
                    <div className="max-h-64 overflow-y-auto">
                      {internationalLocations.map((location) => (
                        <Link
                          key={location.href}
                          href={location.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          {location.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/clients" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Clients
            </Link>

            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Blog
            </Link>

            <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              FAQ
            </Link>

            <button 
              onClick={() => {
                document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm hover:shadow-md"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <Link
              href="/about"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Products */}
            <div className="py-3">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {productsDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Locations */}
            <div className="py-3">
              <button
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Locations <ChevronDown className={`w-4 h-4 transition-transform ${locationsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsDropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <div>
                    <button
                      onClick={() => setIndiaDropdownOpen(!indiaDropdownOpen)}
                      className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                    >
                      India <ChevronDown className={`w-4 h-4 transition-transform ${indiaDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {indiaDropdownOpen && (
                      <div className="mt-2 ml-4 space-y-2">
                        {indianCities.map((city) => (
                          <Link
                            key={city.href}
                            href={city.href}
                            className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {city.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  {internationalLocations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {location.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/clients"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </Link>

            <Link
              href="/blog"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className="block py-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="w-full mt-2 px-5 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
