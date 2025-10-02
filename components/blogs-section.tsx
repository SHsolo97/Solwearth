import Link from "next/link"
import { BlogCard } from "./blog-card"
import { ArrowRight } from "lucide-react"

interface BlogsSectionProps {
  posts: any[]
}

export function BlogsSection({ posts }: BlogsSectionProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  // Show only 3 most recent posts on homepage
  const recentPosts = posts.slice(0, 3)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, news, and innovations in waste management and sustainability.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              author={post.author?.node}
              featuredImage={post.featuredImage?.node}
              categories={post.categories?.nodes}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            View All Articles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
