"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage("")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setStatusMessage("Thank you! Your message has been sent successfully.")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()

    setTimeout(() => setStatusMessage(""), 5000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with us for inquiries, support, or to learn more about our waste management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Solwearth Ecotech Pvt. Ltd is committed to social responsibility and sustainable development. We offer
                  technology and support for waste management needs across various industries.
                </p>
              </div>

              {/* Head Office */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Head Office (Cochin)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    46/2861-A, 1st Floor, Chakkaraparambu,
                    <br />
                    Puthiya Road, Vennala P.O.,
                    <br />
                    Cochin - 682028, Kerala
                  </p>
                </CardContent>
              </Card>

              {/* Factory Address */}
              <Card className="bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Factory Address (Bengaluru)
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sy No. 123-A, Heelalige Village,
                    <br />
                    Chandapura Post, Anekal Taluk,
                    <br />
                    Bengaluru (Bangalore) Urban,
                    <br />
                    Karnataka, 560099
                  </p>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                  <a href="tel:+919895044004" className="text-gray-700 hover:text-green-600 transition-colors">
                    +91 98950 44004
                  </a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Mail className="w-6 h-6 text-green-600" />
                  <a href="mailto:info@solwearth.com" className="text-gray-700 hover:text-green-600 transition-colors">
                    info@solwearth.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/Solwearth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/solwearth_ecotech/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/solwearth-ecotech-pvt-ltd/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name (required)
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email (required)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    {statusMessage && (
                      <div className="p-3 bg-green-50 text-green-700 rounded-md text-center">{statusMessage}</div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-md transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Locations We Serve</h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide our waste management solutions across multiple countries and regions:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "India",
                "Maldives",
                "Saudi Arabia",
                "Oman",
                "UAE",
                "Bahrain",
                "Qatar",
                "Kuwait",
                "Malaysia",
                "Bangladesh",
              ].map((location) => (
                <span key={location} className="px-6 py-3 bg-white text-gray-700 rounded-full shadow-md font-medium">
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
