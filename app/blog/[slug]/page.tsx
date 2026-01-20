import { getPostBySlug, getRecentPosts, getAllPostSlugs } from "@/lib/wordpress"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Tag } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs()
    return posts.map((post: { slug: string }) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  // Fallback description from excerpt or content
  const description = post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) || 
                     post.content?.replace(/<[^>]*>/g, '').slice(0, 160) || 
                     `Read ${post.title} on Solwearth Blog`

  return {
    title: `${post.title} | Solwearth Blog`,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author?.node?.name || 'Solwearth Team'],
      images: post.featuredImage?.node?.sourceUrl ? [post.featuredImage.node.sourceUrl] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  
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

  // Remove duplicate title and featured image from WordPress content
  let cleanContent = post.content
  
  // Remove any h1, h2, or h3 tags that contain the exact title
  const titleRegex = new RegExp(`<h[1-3][^>]*>\\s*${post.title}\\s*<\\/h[1-3]>`, 'gi')
  cleanContent = cleanContent.replace(titleRegex, '')
  
  // Remove the first image if it matches the featured image
  if (post.featuredImage?.node?.sourceUrl) {
    const imageUrl = post.featuredImage.node.sourceUrl
    const firstImageRegex = new RegExp(`<figure[^>]*>.*?<img[^>]*src=["']${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>.*?<\\/figure>`, 'i')
    cleanContent = cleanContent.replace(firstImageRegex, '')
    
    // Also try without figure tags
    const simpleImageRegex = new RegExp(`<img[^>]*src=["']${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'i')
    cleanContent = cleanContent.replace(simpleImageRegex, '')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Featured Image */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Image with Overlay */}
        {post.featuredImage?.node?.sourceUrl && (
          <div className="absolute inset-0">
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />
          </div>
        )}

        <div className="relative container mx-auto px-4 py-12 md:py-20">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-green-400 font-semibold mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Categories */}
            {post.categories?.nodes && post.categories.nodes.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.nodes
                  .filter((category: any) => category.name !== "organic waste management machine")
                  .map((category: any) => (
                    <span
                      key={category.slug}
                      className="bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                    >
                      {category.name}
                    </span>
                  ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              {post.author?.node && (
                <div className="flex items-center gap-3">
                  {post.author.node.avatar?.url ? (
                    <img
                      src={post.author.node.avatar.url}
                      alt={post.author.node.name}
                      className="w-12 h-12 rounded-full ring-2 ring-white/20"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center ring-2 ring-white/20">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">
                        {post.author.node.name}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-12" />
          
          {/* Content with enhanced styling */}
          <div
            className="prose prose-xl max-w-none
              [&>*:first-child]:text-2xl [&>*:first-child]:text-gray-600 [&>*:first-child]:leading-relaxed [&>*:first-child]:mb-8 [&>*:first-child]:font-normal
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight prose-headings:scroll-mt-24
              prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-2 prose-h2:border-gradient-to-r prose-h2:from-green-600 prose-h2:to-emerald-600 prose-h2:relative
              prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:-bottom-[2px] prose-h2:before:w-24 prose-h2:before:h-[2px] prose-h2:before:bg-gradient-to-r prose-h2:before:from-green-600 prose-h2:before:to-emerald-600 prose-h2:before:rounded-full
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-green-700 prose-h3:flex prose-h3:items-center prose-h3:gap-3
              prose-h3:before:content-['▸'] prose-h3:before:text-green-600 prose-h3:before:font-bold
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-green-600 prose-h4:font-semibold
              prose-p:text-lg prose-p:text-gray-700 prose-p:leading-[1.8] prose-p:mb-6
              prose-a:text-green-600 prose-a:no-underline prose-a:font-semibold prose-a:border-b-2 prose-a:border-green-200 hover:prose-a:border-green-600 hover:prose-a:text-green-700 prose-a:transition-all prose-a:duration-300
              prose-strong:text-gray-900 prose-strong:font-bold prose-strong:bg-green-50 prose-strong:px-1 prose-strong:py-0.5 prose-strong:rounded
              prose-em:text-gray-800 prose-em:not-italic prose-em:font-medium prose-em:bg-yellow-50 prose-em:px-1 prose-em:py-0.5 prose-em:rounded
              prose-ul:my-8 prose-ul:space-y-3 prose-ul:pl-0
              prose-ol:my-8 prose-ol:space-y-3 prose-ol:pl-0
              prose-li:text-lg prose-li:text-gray-700 prose-li:leading-relaxed prose-li:pl-2 prose-li:relative
              prose-li:before:absolute prose-li:before:left-[-1.5rem] prose-li:before:text-green-600 prose-li:before:font-bold
              [&_ul>li]:before:content-['✓'] [&_ul>li]:pl-8 [&_ul>li]:bg-gradient-to-r [&_ul>li]:from-green-50/50 [&_ul>li]:to-transparent [&_ul>li]:py-3 [&_ul>li]:px-4 [&_ul>li]:rounded-lg [&_ul>li]:mb-2 [&_ul>li]:border-l-4 [&_ul>li]:border-green-500
              [&_ol>li]:pl-8 [&_ol>li]:bg-gradient-to-r [&_ol>li]:from-blue-50/50 [&_ol>li]:to-transparent [&_ol>li]:py-3 [&_ol>li]:px-4 [&_ol>li]:rounded-lg [&_ol>li]:mb-2 [&_ol>li]:border-l-4 [&_ol>li]:border-blue-500
              prose-blockquote:border-l-[6px] prose-blockquote:border-green-600 prose-blockquote:bg-gradient-to-r prose-blockquote:from-green-50 prose-blockquote:to-emerald-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:my-10 prose-blockquote:shadow-lg prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:font-medium
              prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-12 prose-img:ring-1 prose-img:ring-gray-200 prose-img:hover:shadow-green-200 prose-img:transition-all prose-img:duration-300
              prose-figure:my-12 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-gray-500 prose-figcaption:mt-4 prose-figcaption:italic
              prose-pre:bg-gradient-to-br prose-pre:from-gray-900 prose-pre:to-gray-800 prose-pre:text-gray-100 prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:p-8 prose-pre:my-10 prose-pre:border prose-pre:border-gray-700 prose-pre:overflow-x-auto
              prose-code:text-green-700 prose-code:font-semibold prose-code:bg-green-50 prose-code:px-2.5 prose-code:py-1 prose-code:rounded-md prose-code:text-base prose-code:border prose-code:border-green-200
              prose-table:my-10 prose-table:w-full prose-table:border-collapse prose-table:shadow-xl prose-table:rounded-xl prose-table:overflow-hidden
              prose-thead:bg-gradient-to-r prose-thead:from-green-600 prose-thead:to-emerald-600 prose-thead:text-white
              prose-th:py-4 prose-th:px-6 prose-th:text-left prose-th:font-bold prose-th:text-base
              prose-td:py-4 prose-td:px-6 prose-td:border-b prose-td:border-gray-200 prose-td:text-gray-700
              prose-tr:even:bg-gray-50 prose-tr:hover:bg-green-50 prose-tr:transition-colors
              prose-hr:my-16 prose-hr:border-0 prose-hr:h-px prose-hr:bg-gradient-to-r prose-hr:from-transparent prose-hr:via-green-300 prose-hr:to-transparent"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />

          {/* Tags */}
          {post.tags?.nodes && post.tags.nodes.length > 0 && (
            <div className="mt-16 pt-8 border-t-2 border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-2 text-gray-900 font-bold">
                  <Tag className="w-5 h-5 text-green-600" />
                  <span>Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.nodes.map((tag: any) => (
                    <span
                      key={tag.slug}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-full hover:from-green-100 hover:to-emerald-100 transition-all shadow-sm hover:shadow-md cursor-pointer"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Found this article helpful?</h3>
                <p className="text-gray-600">Share it with others who might benefit from this information.</p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                Read More Articles
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts && recentPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Continue <span className="text-green-600">Reading</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore more insights on waste management and sustainability
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts
                  .filter((p: any) => p.slug !== slug)
                  .slice(0, 3)
                  .map((relatedPost: any) => (
                    <Card key={relatedPost.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.featuredImage?.node?.sourceUrl ? (
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={relatedPost.featuredImage.node.sourceUrl}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        ) : (
                          <div className="h-56 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                            </div>
                            <span className="text-white text-5xl font-bold relative z-10">S</span>
                          </div>
                        )}
                        <div className="p-6 bg-white">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors leading-tight min-h-[56px]">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(relatedPost.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
              </div>

              {/* View All Posts CTA */}
              <div className="text-center mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  View All Blog Posts
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
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
