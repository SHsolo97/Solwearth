"use client"

import { useState, useCallback } from "react"
import Image from "next/image"

interface YouTubeFacadeProps {
  videoId: string
  title: string
}

export function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const loadVideo = useCallback(() => {
    setIsLoaded(true)
  }, [])

  if (isLoaded) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      />
    )
  }

  return (
    <button
      onClick={loadVideo}
      className="relative w-full h-full bg-black cursor-pointer group border-0 p-0"
      aria-label={`Play video: ${title}`}
    >
      {/* YouTube thumbnail */}
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8 md:w-10 md:h-10 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  )
}
