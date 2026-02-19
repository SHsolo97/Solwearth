import { getPostsByCategory, getAllCategories } from "@/lib/wordpress"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false // Prevent dynamic rendering of unknown categories

// Generate static params for all categories at build time
export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories
    .filter((cat: { count: number; slug: string }) => cat.count > 0 && cat.slug !== 'uncategorized')
    .map((category: { slug: string }) => ({
      slug: category.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const categories = await getAllCategories()
  const category = categories?.find((cat: { slug: string }) => cat.slug === slug)
  
  const categoryName = category?.name || slug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
  
  return {
    title: `${categoryName} | Solwearth Blog`,
    description: `Browse all articles about ${categoryName}. Learn about sustainable waste management solutions, organic waste converters, and eco-friendly practices from Solwearth.`,
    openGraph: {
      title: `${categoryName} Articles | Solwearth Blog`,
      description: `Explore our collection of articles about ${categoryName}. Expert insights on waste management and sustainability.`,
      type: 'website',
      url: `https://www.solwearth.com/blog/category/${slug}`,
    },
    alternates: {
      canonical: `https://www.solwearth.com/blog/category/${slug}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  
  let posts = []
  let categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())
  let allCategories: { id: string; name: string; slug: string; count: number }[] = []
  let error = null

  try {
    // Get all categories
    allCategories = await getAllCategories()
    const category = allCategories?.find((cat: { slug: string }) => cat.slug === slug)
    
    if (category) {
      categoryName = category.name
    }
    
    // Get posts by category
    posts = await getPostsByCategory(slug, 50)
    
    if (!posts || posts.length === 0) {
      // If no posts found, it might not be a valid category
      notFound()
    }
  } catch (err) {
    console.error("Error fetching category posts:", err)
    error = "Failed to load posts for this category. Please try again later."
  }

  // Filter out uncategorized for the category list
  const displayCategories = allCategories.filter(
    (cat: { slug: string; count: number }) => cat.slug !== 'uncategorized' && cat.count > 0
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16 md:py-24 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Category
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight capitalize">
              {categoryName}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Browse all articles about {categoryName.toLowerCase()}
            </p>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {error ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-red-800">Error Loading Posts</h3>
                    <p className="mt-2 text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:flex-1">
                  {/* Posts Count */}
                  <div className="mb-8">
                    <p className="text-gray-600">
                      Showing <span className="font-semibold text-green-600">{posts.length}</span> {posts.length === 1 ? 'article' : 'articles'}
                    </p>
                  </div>
                  
                  {/* Posts Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post: any) => (
                      <BlogCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                        date={post.date}
                        author={post.author?.node ? {
                          name: post.author.node.name,
                          avatar: post.author.node.avatar?.url
                        } : undefined}
                        featuredImage={post.featuredImage?.node ? {
                          sourceUrl: post.featuredImage.node.sourceUrl,
                          altText: post.featuredImage.node.altText || post.title
                        } : undefined}
                        categories={post.categories?.nodes}
                      />
                    ))}
                  </div>
                </div>

                {/* Sidebar - Categories */}
                {displayCategories.length > 0 && (
                  <aside className="lg:w-80 shrink-0">
                    <div className="sticky top-24 bg-gray-50 rounded-2xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-green-600" />
                        Categories
                      </h3>
                      <ul className="space-y-2">
                        {displayCategories.map((cat: { id: string; name: string; slug: string; count: number }) => (
                          <li key={cat.id}>
                            <Link
                              href={`/blog/category/${cat.slug}`}
                              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                                cat.slug === slug
                                  ? 'bg-green-600 text-white shadow-md'
                                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                              }`}
                            >
                              <span className="font-medium">{cat.name}</span>
                              <span className={`text-sm px-2 py-0.5 rounded-full ${
                                cat.slug === slug
                                  ? 'bg-white/20 text-white'
                                  : 'bg-gray-100 text-gray-500'
                              }`}>
                                {cat.count}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      
                      {/* All Posts Link */}
                      <Link
                        href="/blog"
                        className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-green-200 transition-all font-medium"
                      >
                        View All Posts
                      </Link>
                    </div>
                  </aside>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </div>
  )
}
