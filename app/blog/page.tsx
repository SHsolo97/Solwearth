import { getAllPosts } from "@/lib/wordpress"
import { LoadMoreBlogs } from "@/components/load-more-blogs"
import { Header } from "@/components/header"
import { LeadFormSection } from "@/components/lead-form-section"
import { Footer } from "@/components/footer"
import { ScrollToFormButton } from "@/components/scroll-to-form-button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default async function BlogPage() {
  let posts = []
  let hasNextPage = false
  let endCursor = null
  let error = null

  try {
    const data = await getAllPosts(50) // Increase to 50 posts initially
    posts = data?.nodes || []
    hasNextPage = data?.pageInfo?.hasNextPage || false
    endCursor = data?.pageInfo?.endCursor || null
  } catch (err) {
    console.error("Error fetching posts:", err)
    error = "Failed to load blog posts. Please try again later."
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl text-green-50 leading-relaxed">
              Insights, news, and updates about waste management, sustainability, and organic waste conversion technology.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg max-w-2xl mx-auto">
              <p className="font-semibold">Error Loading Posts</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 text-gray-700 px-6 py-12 rounded-lg max-w-2xl mx-auto text-center">
              <p className="text-xl font-semibold mb-2">No blog posts available yet</p>
              <p className="text-gray-600">Check back soon for updates and insights!</p>
            </div>
          ) : (
            <LoadMoreBlogs 
              initialPosts={posts}
              hasNextPage={hasNextPage}
              endCursor={endCursor}
            />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Learn More?</h2>
              <p className="text-xl mb-8 text-green-50 max-w-2xl mx-auto">
                Get in touch with us to discover how our organic waste converters can benefit your organization.
              </p>
              <ScrollToFormButton className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all hover:scale-105 shadow-lg" variant="default">
                Contact Us <ArrowRight className="w-5 h-5" />
              </ScrollToFormButton>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection />
      <Footer />
    </div>
  )
}
