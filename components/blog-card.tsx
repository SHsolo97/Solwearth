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
}

export function BlogCard({
  title,
  excerpt,
  slug,
  date,
  author,
  featuredImage,
  categories,
}: BlogCardProps) {
  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Strip HTML tags from excerpt
  const plainExcerpt = excerpt?.replace(/<[^>]*>/g, "").substring(0, 150) + "..."

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white border-0 shadow-lg">
      <Link href={`/blog/${slug}`} aria-label={`Read article: ${title}`}>
        {/* Featured Image */}
        {featuredImage?.sourceUrl ? (
          <div className="relative h-56 overflow-hidden bg-gray-200">
            <img
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText || title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Category Badge */}
            {categories && categories.length > 0 && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-95">
                  {categories[0].name}
                </span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="h-56 bg-gradient-to-br from-green-500 via-green-600 to-green-700 flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            <span className="text-white text-5xl font-bold relative z-10">S</span>
          </div>
        )}

        {/* Content */}
        <div className="p-6 bg-white">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
            {author && (
              <div className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
                <User className="w-4 h-4" />
                <span className="font-medium">{author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">{plainExcerpt}</p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all pt-3 border-t border-gray-100">
            <span>Read Full Article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </Card>
  )
}
