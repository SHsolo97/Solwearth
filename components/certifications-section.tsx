import Image from "next/image"

export function CertificationsSection() {
  const certifications = [
    { name: "CE", label: "CE Marking", image: "/images/certifications/CE.jpg" },
    { name: "RoHS", label: "RoHS Compliance", image: "/images/certifications/rohs.jpg" },
    { name: "SABER KSA", label: "SABER KSA Certified", image: "/images/certifications/saber-ksa.jpg" },
    { name: "MSME", label: "MSME Registered", image: "/images/certifications/msme.jpg" },
    { name: "ISO 9001", label: "ISO 9001 Certified", image: "/images/certifications/iso-9001.png" },
    { name: "ISO 14001", label: "ISO 14001 Certified", image: "/images/certifications/iso-14001.png" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Certifications</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We are empanelled by National Seeds Corporations, Gov. of India under Swachh Bharat mission in the
          Decentralized Composed machine (MISCA) category
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 flex items-center justify-center">
                <Image
                  src={cert.image}
                  alt={cert.label}
                  width={128}
                  height={128}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-600 text-center mt-2">{cert.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
