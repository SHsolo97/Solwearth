export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="h-16 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="hidden lg:flex items-center gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              ))}
              <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Back Button Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Article Content Skeleton */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image Skeleton */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Categories Skeleton */}
          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-7 w-24 bg-gray-200 rounded-full animate-pulse" />
            ))}
          </div>

          {/* Title Skeleton */}
          <div className="space-y-4 mb-6">
            <div className="h-10 bg-gray-200 rounded animate-pulse w-full" />
            <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>

          {/* Meta Info Skeleton */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Content Skeleton */}
          <div className="space-y-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`h-4 bg-gray-200 rounded animate-pulse ${
                  i % 4 === 3 ? "w-2/3" : "w-full"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>

          {/* Tags Skeleton */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-7 w-20 bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-9 w-48 bg-gray-200 rounded animate-pulse mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-4/5" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loading Spinner Overlay */}
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 pointer-events-none">
        <div className="relative">
          {/* Animated Blobs Background */}
          <div className="absolute inset-0 -m-20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-300/30 rounded-full blur-xl animate-blob" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/30 rounded-full blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-teal-300/30 rounded-full blur-xl animate-blob animation-delay-4000" />
          </div>
          
          {/* Main Spinner */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-6 border border-gray-100">
            {/* Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 rounded-full p-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
            </div>

            {/* Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-4 border-green-100 border-t-green-600 rounded-full animate-spin" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-emerald-600 rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }} />
            </div>

            {/* Loading Text */}
            <div className="text-center space-y-2">
              <p className="text-lg font-bold text-gray-900">Loading Article</p>
              <p className="text-sm text-gray-600">Please wait a moment...</p>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-full animate-pulse" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
