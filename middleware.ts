import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Cache Next.js RSC payload requests at the Netlify CDN layer.
 *
 * Why this exists:
 *   Next.js App Router appends a deployment-specific `_rsc=<token>` query
 *   parameter to server component fetch URLs during client-side navigation.
 *   Without explicit cache headers, Netlify treats each of these as a unique
 *   uncached URL and invokes the server function every time — resulting in
 *   100% cache miss rate for client-side navigation requests.
 *
 * Why robots.txt alone is not enough:
 *   The robots.txt disallow rule stops compliant crawlers from hitting these
 *   URLs, but real users' browsers also fire `?_rsc=` requests on every
 *   client-side page transition. This middleware handles those.
 *
 * Cache invalidation strategy (deployment-only):
 *   The `_rsc` token is generated fresh on every Netlify deployment.
 *   Old tokens are never requested again after a redeploy, so cached entries
 *   are naturally orphaned. Netlify also purges `durable` cache on new
 *   deployments. There is no need for stale-while-revalidate or short TTLs —
 *   a long s-maxage is safe because the token itself acts as the cache key.
 */
export function middleware(request: NextRequest) {
  const isRscRequest = request.nextUrl.searchParams.has('_rsc')

  if (!isRscRequest) {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  // Cache at Netlify's persistent edge (durable) for the lifetime of the
  // deployment. No stale-while-revalidate needed — new deployments issue new
  // _rsc tokens, which automatically bust this cache entry.
  response.headers.set(
    'Netlify-CDN-Cache-Control',
    'public, s-maxage=31536000, durable'
  )
  response.headers.set(
    'Cache-Control',
    'public, s-maxage=31536000'
  )

  return response
}

export const config = {
  matcher: [
    // Match all routes except static assets, image optimisation, and API routes.
    '/((?!_next/static|_next/image|favicon\\.ico|site\\.webmanifest|robots\\.txt|sitemap\\.xml|api/).*)',
  ],
}
