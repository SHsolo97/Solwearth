import { getPostBySlug, getRecentPosts } from "@/lib/wordpress"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params
  
  let post = null
  let recentPosts = []
  
  try {
    post = await getPostBySlug(slug)
    recentPosts = await getRecentPosts(3)
  } catch (err) {
    console.error("Error fetching post:", err)
  }

  if (!post) {
    notFound()
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post.featuredImage?.node?.sourceUrl && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Categories */}
          {post.categories?.nodes && post.categories.nodes.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.nodes.map((category: any) => (
                <span
                  key={category.slug}
                  className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            {post.author?.node && (
              <div className="flex items-center gap-3">
                {post.author.node.avatar?.url && (
                  <img
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    className="w-12 h-12 rounded-full"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-semibold text-gray-900">
                      {post.author.node.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg prose-pre:bg-gray-100 prose-pre:text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags?.nodes && post.tags.nodes.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-gray-600" />
                {post.tags.nodes.map((tag: any) => (
                  <span
                    key={tag.slug}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts && recentPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Recent Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts
                  .filter((p: any) => p.slug !== slug)
                  .slice(0, 3)
                  .map((relatedPost: any) => (
                    <Card key={relatedPost.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.featuredImage?.node?.sourceUrl ? (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={relatedPost.featuredImage.node.sourceUrl}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                            <span className="text-white text-3xl font-bold">S</span>
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-green-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {new Date(relatedPost.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <LeadFormSection />
      <Footer />
    </div>
  )
}
