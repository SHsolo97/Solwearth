import { Check } from "lucide-react"

export function AboutSection() {
  const features = [
    "Requires minimal space, power, and labor",
    "Easy to install and maintain",
    "Fully automatic operation with one-touch control",
    "Reduces waste volume by up to 90%",
    "Processes waste in less than 24 hours",
    "Operates without emissions, smoke, or odor",
    "No need for bacteria, additives, or water",
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* About Us */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">About Solwearth Ecotech</h2>
            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold">Solwearth Ecotech Pvt. Ltd.</span> is committed to social responsibility
              and sustainable development. By integrating advanced technology with industry expertise, we have developed
              a revolutionary food waste converter machine that meets the diverse waste management needs of businesses,
              from small restaurants to large-scale kitchens.
            </p>
          </div>

          {/* Unique Features */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Key Features of Our Organic Waste Converters</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
