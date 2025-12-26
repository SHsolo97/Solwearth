"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PopupLeadForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem("leadFormPopupShown")

    if (!hasShownPopup) {
      // Show popup after 3 seconds delay
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem("leadFormPopupShown", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

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
    const API_ENDPOINT =
      "https://script.google.com/macros/s/AKfycbw86Fntt9_m9lE8H7Wb_vfdtIf3BpLq1PaBKzor-h8nvCigtwkS_pi7Mz5EpOUIZZCQ/exec"

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        // Google Apps Script requires redirect: 'follow' and plain text Content-Type
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.status === "success") {
        setStatusMessage(
          "Thank you! Your request has been sent successfully. We'll contact you soon."
        )
        setMessageType("success")
        ;(e.target as HTMLFormElement).reset()

        // Close popup after 2 seconds on success
        setTimeout(() => {
          closePopup()
        }, 2000)
      } else {
        // Handle errors returned by the script (e.g., validation)
        setStatusMessage(
          result.message || "An error occurred. Please try again later."
        )
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

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop with blur effect */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
        onClick={closePopup}
      >
        {/* Popup Card */}
        <Card
          className="w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <CardHeader className="space-y-2 pb-4 pt-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 pr-2">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Get Your Free Quote Today
                </CardTitle>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form and our team will get back to you within 24 hours with a customized solution.
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 transition-colors bg-white shadow-md hover:shadow-lg"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Desired Capacity */}
              <div>
                <label
                  htmlFor="desired_capacity"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
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

              {/* Close Button */}
              <Button
                type="button"
                onClick={closePopup}
                variant="outline"
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5 rounded-lg font-semibold transition-all"
              >
                Close
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
