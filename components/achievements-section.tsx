"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function AchievementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const achievements = [
    {
      title: "Top Icon Award",
      year: "2024",
      image: "/images/achievements/top-icon-award-2024.jpg",
      description: "Recognized as a top icon in the waste management industry.",
    },
    {
      title: "Inspirational Leaders Award",
      year: "2023",
      image: "/images/achievements/inspirational-leaders.jpg",
      description: "Leadership recognition in sustainable technology.",
    },
    {
      title: "CIO Look Recognition",
      year: "2023",
      image: "/images/achievements/ciolook.jpg",
      description: "Featured in CIO Look for innovative technology solutions.",
    },
    {
      title: "Environmental Products Manufacturer of the Year",
      year: "2022",
      image: "/images/achievements/vyapar-jagath-1.jpg",
      description: "Recognized by Vyapar Jagat for excellence in environmental product manufacturing.",
    },
    {
      title: "Business Excellence Award",
      year: "2022",
      image: "/images/achievements/business-award-2022.jpg",
      description: "Honored for business excellence and innovative solutions.",
    },
    {
      title: "Swachh Bharat Mission Empanelment",
      year: "2021",
      image: "/images/achievements/swatch-bharath-empanelled.jpg",
      description: "Empanelled under the Swachh Bharat Mission for waste management solutions.",
    },
    {
      title: "Suchitwa Mission Recognition",
      year: "2021",
      image: "/images/achievements/suchitwa-mission.jpg",
      description: "Recognition for contributions to Suchitwa Mission initiatives.",
    },
    {
      title: "Market Leaders of the Year",
      year: "2020",
      image: "/images/achievements/market-leaders.jpg",
      description: "Award won for offering impeccable products/services with enthralled customer support and organization management.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
    }, 6000) // Increased to 6 seconds for a more soothing interval
    return () => clearInterval(interval)
  }, [isAutoPlaying, achievements.length])

  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < 3; i++) {
      slides.push(achievements[(currentIndex + i) % achievements.length])
    }
    return slides
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Achievements & Recognitions</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Celebrating our journey of excellence and recognition in the waste management industry
        </p>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Desktop View - 3 slides */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 relative">
            {getVisibleSlides().map((achievement, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out transform animate-fade-in-slide ${
                  index === 1 
                    ? 'scale-105 z-10 shadow-2xl' 
                    : 'opacity-90 hover:opacity-100 hover:scale-102'
                }`}
              >
                <div className="relative h-64 bg-gradient-to-br from-green-50 to-blue-50">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {achievement.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg transition-colors duration-300 hover:text-green-600">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 slide */}
          <div className="md:hidden">
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out animate-fade-in-slide"
            >
              <div className="relative h-80 bg-gradient-to-br from-green-50 to-blue-50">
                <Image
                  src={achievements[currentIndex].image}
                  alt={achievements[currentIndex].title}
                  width={400}
                  height={320}
                  className="w-full h-full object-contain p-6"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {achievements[currentIndex].year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-xl">{achievements[currentIndex].title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{achievements[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110 z-20 active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Previous achievement"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110 z-20 active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Next achievement"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-colors duration-300 ease-in-out hover:bg-green-500 min-w-[44px] min-h-[44px] flex items-center justify-center relative ${
                  index === currentIndex ? 'bg-transparent' : 'bg-transparent'
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              >
                <span className={`block h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-green-600 w-8 shadow-md' : 'bg-gray-300 w-3'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
