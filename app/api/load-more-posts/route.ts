import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/wordpress'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const after = searchParams.get('after')

  try {
    const data = await getAllPosts(12, after || undefined)
    
    return NextResponse.json({
      success: true,
      posts: data?.nodes || [],
      hasNextPage: data?.pageInfo?.hasNextPage || false,
      endCursor: data?.pageInfo?.endCursor || null,
    })
  } catch (error) {
    console.error('Error loading more posts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to load posts' },
      { status: 500 }
    )
  }
}