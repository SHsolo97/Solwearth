import { getAllPosts, getAllCategories } from "@/lib/wordpress"
import { LoadMoreBlogs } from "@/components/load-more-blogs"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

// Cache blog listing indefinitely - use /api/revalidate to refresh when new posts are published
// On Netlify this uses On-Demand Builder (ODB) which caches after first render, not the server function
export const revalidate = false

export const metadata: Metadata = {
  title: "Waste Management Blog | Insights & News - Solwearth Ecotech",
  description: "Stay updated with the latest in organic waste management, sustainability tips, and Solwearth Ecotech news. Read our expert articles.",
  openGraph: {
    title: "Solwearth Ecotech Blog - Waste Management Insights",
    description: "Expert articles on food waste recycling, composting technology, and sustainable business practices.",
    url: 'https://www.solwearth.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.solwearth.com/blog',
  },
}

export default async function BlogPage() {
  let posts = []
  let hasNextPage = false
  let endCursor = null
  let error = null
  let categories: { id: string; name: string; slug: string; count: number }[] = []

  try {
    const [data, allCategories] = await Promise.all([
      getAllPosts(50),
      getAllCategories()
    ])
    posts = data?.nodes || []
    hasNextPage = data?.pageInfo?.hasNextPage || false
    endCursor = data?.pageInfo?.endCursor || null
    // Filter out uncategorized
    categories = allCategories?.filter(
      (cat: { slug: string; count: number }) => cat.slug !== 'uncategorized' && cat.count > 0
    ) || []
  } catch (err) {
    console.error("Error fetching posts:", err)
    error = "Failed to load blog posts. Please try again later."
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - More Elegant */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 md:py-32 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full shadow-lg">
                Knowledge Hub
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Insights & <span className="text-green-600">Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Explore the latest in waste management technology, sustainability practices, and environmental solutions that are shaping a greener future.
            </p>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/blog/category/${cat.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full hover:bg-green-600 hover:text-white transition-all shadow-sm hover:shadow-md font-medium text-sm"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {cat.name}
                    <span className="text-xs bg-gray-100 group-hover:bg-white/20 px-2 py-0.5 rounded-full">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Blog Posts Section - Enhanced Layout */}
      <section className="py-20 bg-white">
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
          ) : posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Posts Yet</h3>
              <p className="text-lg text-gray-600 mb-8">We're working on bringing you amazing content. Check back soon!</p>
              <Link href="/contact">
                <ScrollToFormButton className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                  Get in Touch
                </ScrollToFormButton>
              </Link>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Latest Articles
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
              </div>

              <LoadMoreBlogs 
                initialPosts={posts}
                hasNextPage={hasNextPage}
                endCursor={endCursor}
              />
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #16a34a 35px, #16a34a 36px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-block mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to Transform Your <br className="hidden md:block" />
                  <span className="text-green-100">Waste Management?</span>
                </h2>
                <p className="text-xl md:text-2xl mb-10 text-green-50 max-w-3xl mx-auto leading-relaxed">
                  Discover how our innovative organic waste converters can help your organization achieve sustainability goals while reducing costs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <ScrollToFormButton className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all hover:scale-105 shadow-xl hover:shadow-2xl" variant="default">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us Today
                  </ScrollToFormButton>
                  <Link href="/products">
                    <button className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all hover:scale-105">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      View Products
                    </button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                      <div className="text-green-100 text-sm md:text-base">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">14</div>
                      <div className="text-green-100 text-sm md:text-base">Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold mb-2">45K+</div>
                      <div className="text-green-100 text-sm md:text-base">Tons Processed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </div>
  )
}
