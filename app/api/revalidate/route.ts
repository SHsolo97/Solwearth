import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

// Secret token for securing the revalidation endpoint
// Set this in your environment variables: REVALIDATE_SECRET
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { secret, path, slug, type } = body

    // Validate secret token
    if (!REVALIDATE_SECRET) {
      console.error("REVALIDATE_SECRET is not configured")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    if (secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: "Invalid secret token" },
        { status: 401 }
      )
    }

    // Handle different revalidation types
    const revalidatedPaths: string[] = []

    if (type === "all" || type === "blog-list") {
      // Revalidate the main blog listing page
      revalidatePath("/blog")
      revalidatedPaths.push("/blog")
    }

    if (type === "all" || type === "blog-post") {
      if (slug) {
        // Revalidate a specific blog post
        revalidatePath(`/blog/${slug}`)
        revalidatedPaths.push(`/blog/${slug}`)
      } else if (type === "blog-post") {
        return NextResponse.json(
          { error: "slug is required for type 'blog-post'" },
          { status: 400 }
        )
      }
    }

    if (path) {
      // Revalidate a custom path
      revalidatePath(path)
      revalidatedPaths.push(path)
    }

    // If no specific type or path provided, revalidate blog listing by default
    if (revalidatedPaths.length === 0) {
      revalidatePath("/blog")
      revalidatedPaths.push("/blog")
    }

    console.log(`Revalidated paths: ${revalidatedPaths.join(", ")}`)

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Revalidation error:", error)
    return NextResponse.json(
      { error: "Failed to revalidate", details: String(error) },
      { status: 500 }
    )
  }
}

// Also support GET requests for easier testing (with secret in query params)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get("secret")
  const path = searchParams.get("path")
  const slug = searchParams.get("slug")
  const type = searchParams.get("type")

  // Convert GET to POST-like handling
  const body = { secret, path, slug, type }

  // Validate secret token
  if (!REVALIDATE_SECRET) {
    console.error("REVALIDATE_SECRET is not configured")
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    )
  }

  if (secret !== REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: "Invalid secret token" },
      { status: 401 }
    )
  }

  const revalidatedPaths: string[] = []

  if (type === "all" || type === "blog-list" || (!type && !slug && !path)) {
    revalidatePath("/blog")
    revalidatedPaths.push("/blog")
  }

  if (type === "all" || type === "blog-post" || slug) {
    if (slug) {
      revalidatePath(`/blog/${slug}`)
      revalidatedPaths.push(`/blog/${slug}`)
    }
  }

  if (path) {
    revalidatePath(path)
    revalidatedPaths.push(path)
  }

  console.log(`Revalidated paths: ${revalidatedPaths.join(", ")}`)

  return NextResponse.json({
    revalidated: true,
    paths: revalidatedPaths,
    timestamp: new Date().toISOString(),
  })
}
