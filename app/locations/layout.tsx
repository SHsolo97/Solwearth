// All location pages are fully static - no dynamic data fetching
// force-static ensures they are pre-rendered at build time and served from CDN
// This prevents the Next.js Server Handler from being invoked for every crawler/visitor request
export const dynamic = 'force-static'

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
