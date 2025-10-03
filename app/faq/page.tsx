"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is the difference between the SE Food Waste Converter and other similar units on the market?",
      answer:
        "The SE Food Waste Converter does not require ANY additional products such as wood chips, chemicals, or charcoal to be added to the waste. It also consumes NO fresh water and does not discharge any 'dirty water' to sanitary. The only discharge from the unit is the 'Sterile Biomass' and a few gallons of condensate runoff from the condenser unit.",
    },
    {
      question: "Is it a fully automatic machine?",
      answer:
        "Yes, it is a fully automatic machine which converts all kinds of organic waste into soil supplement without any additives.",
    },
    {
      question: "What is the volume and weight reduction can I expect from a SE Food Waste Converter?",
      answer:
        "You can expect a 90% reduction in volume. Weight reduction will be determined by the type of waste. Typical volume reduction will be in the 70 to 90% reduction range.",
    },
    {
      question: "What type of material can go into the SE Food Waste Converter?",
      answer: "All organic and compostable materials can go into a SE Food Waste Converter.",
    },
    {
      question: "Should I expect some sort of odour?",
      answer:
        "The system is designed to absorb the odour during operation. However, it may emit a very low odour resembling cooking smell at times, which is very much bearable. It effectively manages odour through activated charcoal air filters and a super-heated exhaust.",
    },
    {
      question: "Our workers may not sort the waste if they are in a busy schedule. Is it harmful?",
      answer:
        "Materials like spoons will not damage the machine if not in large numbers. But make sure that you are removing them after the cycle. It is always advised to avoid putting such materials into the machine.",
    },
    {
      question: "How should I use my end product?",
      answer:
        "You could spread it on the grounds of your premises, at your residence, or send it to a composting facility as manure or to the landfill. Because the end product is 95% dry, it is very manageable. Another option is to mix with natural soil so that it will get composted in a few days' time.",
    },
    {
      question: "Will the seeds present in the input grow from the output if I use it in my garden?",
      answer:
        "Not at all. During the cycle, the waste is heated and sterilized over 12 hours, killing all bacteria and seeds which were present in the input.",
    },
    {
      question: "What should be added to the system for processing?",
      answer:
        "Nothing needs to be added to the system for processing the food waste. If you are depositing high volumes of oily waste, it is recommended to add a portion of green leaves, cardboard bits, or tissue papers to absorb the oil content.",
    },
    {
      question: "Are there any limitations in filling the unit with food waste?",
      answer:
        "You are advised to fill only up to the agitator level to attain maximum efficiency. Overloading will prolong the process time and can even damage the inbuilt sensors.",
    },
    {
      question: "How much water drainage can I expect from the machine?",
      answer:
        "For medium wet waste, you can expect around 25 to 30 liters of water per 100 kgs during a process of 12 hours duration.",
    },
    {
      question: "Can I open the door and check if the output is ready for discharge?",
      answer:
        "No. You are not supposed to open the door during the process. This will delay the process cycle to a longer period. The system is programmed to achieve optimum performance.",
    },
    {
      question: "How do I know if my product is safe for soil application?",
      answer:
        "Since you are using different types of food waste, it is recommended to carry out a soil analysis to determine what needs to be added to convert the output suitable for soil application or to be used as fertilizer. We can assist you in carrying out the analysis if needed.",
    },
    {
      question: "What type of container is easier to use to collect the product from the SE Food Waste Converter?",
      answer:
        "You can use any containers or bins to collect the output from the machine. See that the container fits below the discharge chute.",
    },
    {
      question: "What power requirements do I need?",
      answer: "The units are 3 phase 415 volt. Refer to our specification sheets for detailed information.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our organic waste converter machines
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-8">{faq.question}</h3>
                      {openIndex === index && <p className="text-gray-600 leading-relaxed mt-4">{faq.answer}</p>}
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-green-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you with any additional questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-lg text-gray-700">
                <p className="font-semibold">Call Us: +91 98950 440 04</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@solwearth.com" className="text-green-600 hover:underline">
                    info@solwearth.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </main>
  )
}
