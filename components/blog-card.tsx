import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Card } from "./ui/card"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  author?: {
    name: string
    avatar?: string
  }
  featuredImage?: {
    sourceUrl: string
    altText: string
  }
  categories?: Array<{
    name: string
    slug: string
  }>
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  slug,
  date,
  author,
  featuredImage,
  categories,
  featured = false,
}: BlogCardProps) {
  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Strip HTML tags from excerpt
  const plainExcerpt = excerpt?.replace(/<[^>]*>/g, "").substring(0, featured ? 200 : 150) + "..."

  // Featured post layout (full width, horizontal)
  if (featured) {
    return (
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border-0 shadow-xl">
        <Link href={`/blog/${slug}`} aria-label={`Read article: ${title}`}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Featured Image */}
            {featuredImage?.sourceUrl ? (
              <div className="relative h-80 md:h-auto overflow-hidden bg-gray-200">
                <img
                  src={featuredImage.sourceUrl}
                  alt={featuredImage.altText || title}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-xl backdrop-blur-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Featured
                  </span>
                </div>
                {/* Category Badge */}
                {categories && categories.length > 0 && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-white/95 text-green-600 text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                      {categories[0].name}
                    </span>
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ) : (
              <div className="h-80 md:h-auto bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>
                <span className="text-white text-7xl font-bold relative z-10">S</span>
              </div>
            )}

            {/* Content */}
            <div className="p-10 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-5 flex-wrap">
                {author && (
                  <div className="flex items-center gap-2 hover:text-green-600 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-semibold">{author.name}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{formattedDate}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 group-hover:text-green-600 transition-colors leading-tight">
                {title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 text-lg mb-8 leading-relaxed line-clamp-3">{plainExcerpt}</p>

              {/* Read More Link */}
              <div className="flex items-center gap-3 text-green-600 font-bold text-lg group-hover:gap-5 transition-all">
                <span>Read Full Article</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </Card>
    )
  }

  // Regular post layout (grid card)
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border-0 shadow-md hover:-translate-y-2">
      <Link href={`/blog/${slug}`} aria-label={`Read article: ${title}`}>
        {/* Featured Image */}
        {featuredImage?.sourceUrl ? (
          <div className="relative h-56 overflow-hidden bg-gray-200">
            <img
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText || title}
              width={600}
              height={350}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Category Badge */}
            {categories && categories.length > 0 && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-95">
                  {categories[0].name}
                </span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ) : (
          <div className="h-56 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            <span className="text-white text-6xl font-bold relative z-10">S</span>
          </div>
        )}

        {/* Content */}
        <div className="p-7 bg-white">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 flex-wrap">
            {author && (
              <div className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                <User className="w-3.5 h-3.5" />
                <span className="font-semibold">{author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-medium">{formattedDate}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight min-h-[56px]">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed min-h-[60px]">{plainExcerpt}</p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-green-600 font-bold text-sm group-hover:gap-3 transition-all pt-4 border-t border-gray-100">
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  )
}
