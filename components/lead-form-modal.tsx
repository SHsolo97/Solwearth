"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LeadFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  if (!isOpen) return null

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
      
      setStatusMessage("Thank you! Your quote request has been sent successfully.")
      setMessageType("success")
      ;(e.target as HTMLFormElement).reset()
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setStatusMessage("")
        setMessageType("")
      }, 2000)
    } catch (error) {
      console.error("Error:", error)
      setStatusMessage("An error occurred. Please try again later.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Request Product Quote</h2>
            <p className="text-gray-600 text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Desired Capacity */}
            <div className="md:col-span-2">
              <label htmlFor="desired_capacity" className="block text-sm font-medium text-gray-700 mb-1">
                Desired Capacity*
              </label>
              <select
                id="desired_capacity"
                name="desired_capacity"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Capacity</option>
                <option value="25-50 KG">25-50 KG</option>
                <option value="75-100 KG">75-100 KG</option>
                <option value="150-200 KG">150-200 KG</option>
                <option value="350-375 KG">350-375 KG</option>
                <option value="400-500 KG">400-500 KG</option>
                <option value="1000 KG (1 Ton)">1000 KG (1 Ton)</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Phone No. */}
            <div>
              <label htmlFor="phone_no" className="block text-sm font-medium text-gray-700 mb-1">
                Phone No.*
              </label>
              <input
                type="tel"
                id="phone_no"
                name="phone_no"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City*
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Company Name */}
            <div className="md:col-span-2">
              <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`mt-4 p-3 rounded-md text-center ${
                messageType === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}
            >
              {statusMessage}
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8 text-right">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
