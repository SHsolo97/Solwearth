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
    
    // Convert form data to the format expected by the backend
    formData.forEach((value, key) => {
      // Map form field names to backend expected format
      let fieldName = key
      if (key === "desired_capacity") fieldName = "capacity"
      if (key === "phone_no") fieldName = "phone"
      if (key === "company_name") fieldName = "company"
      
      data[fieldName] = value.toString()
    })

    // The Google Apps Script endpoint URL
    const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw86Fntt9_m9lE8H7Wb_vfdtIf3BpLq1PaBKzor-h8nvCigtwkS_pi7Mz5EpOUIZZCQ/exec'

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        // Google Apps Script requires redirect: 'follow' and plain text Content-Type
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
      
      const text = await response.text()
      let result: { status?: string; message?: string } = {}
      try {
        result = JSON.parse(text)
      } catch {
        // Google Apps Script may return non-JSON after redirect; treat as success
        result = { status: 'success' }
      }

      if (result.status === 'success') {
        setStatusMessage("Thank you! Your request has been sent successfully. We'll contact you soon.")
        setMessageType("success")
        ;(e.target as HTMLFormElement).reset()
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setStatusMessage("")
          setMessageType("")
        }, 5000)
      } else {
        // Handle errors returned by the script (e.g., validation)
        setStatusMessage(result.message || 'An error occurred. Please try again later.')
        setMessageType("error")
      }
    } catch (error) {
      console.error("Submission failed:", error)
      setStatusMessage("An unexpected error occurred. Please try again.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-20 border-t border-green-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form and our team will get back to you within 24 hours with a customized solution.
            </p>
          </div>

          {/* Centered Form */}
          <Card className="bg-white shadow-2xl mx-auto max-w-2xl">
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
                        <option value="40-50 KG">40-50 KG (SE-501)</option>
                        <option value="70-100 KG">70-100 KG (SE-1001)</option>
                        <option value="150-250 KG">150-250 KG (SE-2001)</option>
                        <option value="350-375 KG">350-375 KG (SE-3501)</option>
                        <option value="450-500 KG">450-500 KG (SE-5001)</option>
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
    </section>
  )
}
