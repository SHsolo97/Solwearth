import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Fragrant Nature Hotels & Resorts",
      type: "Hospitality — Munnar, Kerala",
      quote:
        "The Solwearth team was professional and courteous throughout the installation. We recommend Solwearth as a superior solution to anything else available in the market.",
    },
    {
      name: "Gokulam Medical Center",
      type: "Healthcare",
      quote:
        "We relocated the machine to our terrace and cleared out valuable floor space. Go for Solwearth — it is the most practical solution available.",
    },
    {
      name: "Asset Builders",
      type: "Residential Complex",
      quote:
        "Our residents had been complaining about the foul smell from our old composting system. The Solwearth machine proved to be the most economical and effective alternative.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Organisations across hospitality, healthcare, and residential sectors rely on Solwearth for efficient, odour-free organic waste management.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <Quote className="w-6 h-6 text-green-300 mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-3">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
