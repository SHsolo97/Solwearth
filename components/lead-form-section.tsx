"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function LeadFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage("")
    setMessageType("")

    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    
    formData.forEach((value, key) => {
      const transformedKey = key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      data[transformedKey === "Phone No" ? "Phone No." : transformedKey] = value.toString()
    })

    try {
      // Simulate form submission - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setStatusMessage("Thank you! Your request has been sent successfully. We'll contact you soon.")
      setMessageType("success")
      ;(e.target as HTMLFormElement).reset()
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setStatusMessage("")
        setMessageType("")
      }, 5000)
    } catch (error) {
      console.error("Error:", error)
      setStatusMessage("An error occurred. Please try again later.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-20 border-t border-green-200">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form and our team will get back to you within 24 hours with a customized solution.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Section - Contact Information (3 columns width) */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Solwearth?</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Solwearth Ecotech Pvt. Ltd is committed to social responsibility and sustainable development. We offer
                  technology and support for waste management needs across various industries.
                </p>
              </div>

              {/* Office Cards in Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Head Office */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      Head Office
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Cochin, Kerala</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      46/2861-A, 1st Floor,<br />
                      Chakkaraparambu, Puthiya Road,<br />
                      Vennala P.O., Cochin - 682028,<br />
                      Kerala, India
                    </p>
                  </CardContent>
                </Card>

                {/* Factory Address */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      Factory
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Bengaluru, Karnataka</p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Sy No. 123-A, Heelalige Village,<br />
                      Chandapura Post, Anekal Taluk,<br />
                      Bengaluru Urban,<br />
                      Karnataka - 560099, India
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Details */}
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
                <CardContent className="p-8">
                  <div className="text-2xl font-bold mb-6">Contact Details</div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-green-100 mb-1">Call Us</p>
                        <a href="tel:+919895044004" className="text-xl font-semibold hover:text-green-100 transition-colors block">
                          +91 98950 44004
                        </a>
                        <a href="tel:+919746588804" className="text-lg hover:text-green-100 transition-colors block mt-1">
                          +91 97465 88804
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-green-100 mb-1">Email Us</p>
                        <a href="mailto:info@solwearth.com" className="text-xl font-semibold hover:text-green-100 transition-colors">
                          info@solwearth.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <div>
                <div className="text-xl font-bold text-gray-900 mb-4">Follow Us</div>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/Solwearth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/solwearth_ecotech/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/solwearth-ecotech-pvt-ltd/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form (2 columns width) */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-2xl sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Desired Capacity */}
                    <div>
                      <label htmlFor="desired_capacity" className="block text-sm font-semibold text-gray-700 mb-1">
                        Capacity*
                      </label>
                      <select
                        id="desired_capacity"
                        name="desired_capacity"
                        required
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      >
                        <option value="">Select Capacity</option>
                        <option value="25-50 KG">25-50 KG (SE-501)</option>
                        <option value="75-100 KG">75-100 KG (SE-1001)</option>
                        <option value="150-200 KG">150-200 KG (SE-2001)</option>
                        <option value="350-375 KG">350-375 KG (SE-3501)</option>
                        <option value="400-500 KG">400-500 KG (SE-5001)</option>
                        <option value="1000 KG (1 Ton)">1000 KG - 1 Ton (SE-1H)</option>
                      </select>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Phone No. */}
                    <div>
                      <label htmlFor="phone_no" className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        id="phone_no"
                        name="phone_no"
                        required
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-semibold text-gray-700 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                      />
                    </div>

                    {/* Status Message */}
                    {statusMessage && (
                      <div
                        className={`p-3 rounded-lg text-center text-sm font-medium ${
                          messageType === "success" 
                            ? "bg-green-100 text-green-800 border border-green-200" 
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {statusMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-spin mr-2">⏳</span>
                          SENDING...
                        </>
                      ) : (
                        "GET FREE QUOTE"
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      🔒 Your information is secure with us
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
