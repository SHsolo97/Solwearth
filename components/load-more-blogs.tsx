"use client"

import { useState } from "react"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface LoadMoreBlogsProps {
  initialPosts: any[]
  hasNextPage: boolean
  endCursor: string | null
}

export function LoadMoreBlogs({ initialPosts, hasNextPage, endCursor }: LoadMoreBlogsProps) {
  const [posts, setPosts] = useState(initialPosts)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(hasNextPage)
  const [cursor, setCursor] = useState(endCursor)

  const loadMore = async () => {
    if (!hasMore || loading) return

    setLoading(true)
    try {
      const response = await fetch(`/api/load-more-posts?after=${cursor}`)
      const data = await response.json()
      
      if (data.success) {
        setPosts(prev => [...prev, ...data.posts])
        setHasMore(data.hasNextPage)
        setCursor(data.endCursor)
      }
    } catch (error) {
      console.error("Error loading more posts:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-16">
      {/* Featured/First Post - Large Card */}
      {posts.length > 0 && (
        <div className="mb-16">
          <div className="relative group">
            <BlogCard
              key={posts[0].id}
              title={posts[0].title}
              excerpt={posts[0].excerpt}
              slug={posts[0].slug}
              date={posts[0].date}
              author={posts[0].author?.node}
              featuredImage={posts[0].featuredImage?.node}
              categories={posts[0].categories?.nodes}
              featured={true}
            />
          </div>
        </div>
      )}

      {/* Regular Grid Posts */}
      {posts.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.slice(1).map((post: any) => (
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
      )}

      {/* Load More Section - Enhanced */}
      <div className="mt-20 text-center">
        {/* Stats Bar */}
        <div className="inline-block bg-gradient-to-r from-gray-50 to-white px-8 py-4 rounded-full shadow-sm border border-gray-100 mb-8">
          <p className="text-gray-700 font-medium">
            <span className="text-green-600 font-bold text-lg">{posts.length}</span>{" "}
            {posts.length === 1 ? "article" : "articles"} available
          </p>
        </div>
        
        {hasMore && (
          <div>
            <Button
              onClick={loadMore}
              disabled={loading}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Loading more articles...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span>Load More Articles</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </Button>
            <p className="mt-4 text-sm text-gray-500">More insights await</p>
          </div>
        )}
        
        {!hasMore && posts.length > 12 && (
          <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-900 font-semibold text-lg mb-2">You're all caught up!</p>
            <p className="text-gray-600 text-sm">
              You've reached the end • {posts.length} total articles
            </p>
          </div>
        )}
      </div>
    </div>
  )
}