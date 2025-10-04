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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
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

      {/* Load More Button */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Showing {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
        
        {hasMore && (
          <Button
            onClick={loadMore}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More Posts"
            )}
          </Button>
        )}
        
        {!hasMore && posts.length > 12 && (
          <p className="text-gray-500 text-sm">
            All posts loaded • {posts.length} total posts
          </p>
        )}
      </div>
    </>
  )
}