"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [indiaDropdownOpen, setIndiaDropdownOpen] = useState(false)
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false)

  const productLinks = [
    { label: "SE-501 (40-50 KG)", href: "/products/se-501" },
    { label: "SE-1001 (70-100 KG)", href: "/products/se-1001" },
    { label: "SE-2001 (150-250 KG)", href: "/products/se-2001" },
    { label: "SE-3501 (350-375 KG)", href: "/products/se-3501" },
    { label: "SE-5001 (450-500 KG)", href: "/products/se-5001" },
    { label: "SE-1H (1000 KG)", href: "/products/se-1h" },
  ]

  const indianCities = [
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
    { label: "Thailand", href: "/locations/thailand" },
    { label: "Indonesia", href: "/locations/indonesia" },
    { label: "Ghana", href: "/locations/ghana" },
    { label: "Kenya", href: "/locations/kenya" },
    { label: "Lebanon", href: "/locations/lebanon" },
    { label: "Seychelles", href: "/locations/seychelles" },
    { label: "Mauritius", href: "/locations/mauritius" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo/solwearth-ecotech.png" 
              alt="Solwearth Ecotech Private Limited"
              width={180}
              height={64}
              priority
              sizes="180px"
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
              <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1">
                Products <ChevronDown className="w-4 h-4" />
              </Link>
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
                      <Link 
                        href="/locations/india"
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors flex items-center justify-between"
                        onMouseEnter={() => setIndiaDropdownOpen(true)}
                      >
                        India <ChevronDown className="w-4 h-4 -rotate-90" />
                      </Link>
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

            <Link href="/why-choose-us" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
              Why Choose Us
            </Link>

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
              Get Free Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-2 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <Link
              href="/about"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Products */}
            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <Link
                  href="/products"
                  className="flex-1 py-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="p-3 text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="Toggle products submenu"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {productsDropdownOpen && (
                <div className="pl-4 pb-3 space-y-2">
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
            <div className="border-b border-gray-100">
              <button
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                Locations <ChevronDown className={`w-4 h-4 transition-transform ${locationsDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {locationsDropdownOpen && (
                <div className="pl-4 pb-3 space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/locations/india"
                        className="flex-1 py-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        India
                      </Link>
                      <button
                        onClick={() => setIndiaDropdownOpen(!indiaDropdownOpen)}
                        className="p-3 text-gray-600 hover:text-green-600 transition-colors"
                        aria-label="Toggle India cities submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${indiaDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {indiaDropdownOpen && (
                      <div className="pl-4 border-l border-gray-200 ml-2 space-y-2 my-1">
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
              href="/why-choose-us"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Us
            </Link>

            <Link
              href="/clients"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clients
            </Link>

            <Link
              href="/blog"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>

            <Link
              href="/faq"
              className="block py-3 text-sm font-medium text-gray-700 border-b border-gray-100 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <div className="pt-4 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="w-full px-5 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm"
              >
                Get Free Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
