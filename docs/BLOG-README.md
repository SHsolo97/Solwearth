# Blog Section - WordPress GraphQL Integration

This blog section integrates with your WordPress backend using WPGraphQL API.

## 🔗 API Endpoint
```
https://wpapi.hstechnopreneur.in/graphql
```

## 📁 Files Created

### Core Files
1. **`lib/wordpress.ts`** - WordPress GraphQL API utilities
   - `getAllPosts()` - Fetch all blog posts with pagination
   - `getPostBySlug()` - Fetch single post by slug
   - `getPostsByCategory()` - Fetch posts by category
   - `getAllCategories()` - Fetch all categories
   - `getRecentPosts()` - Fetch recent posts

2. **`components/blog-card.tsx`** - Reusable blog post card component
   - Displays featured image, title, excerpt, author, date
   - Category badges
   - Hover effects and transitions

3. **`components/blogs-section.tsx`** - Homepage blog section (optional)
   - Shows 3 most recent posts
   - "View All" button

4. **`app/blog/page.tsx`** - Main blog listing page
   - Grid layout with all posts
   - Error handling
   - CTA section

5. **`app/blog/[slug]/page.tsx`** - Individual blog post page
   - Full post content with HTML rendering
   - Featured image
   - Author info with avatar
   - Categories and tags
   - Related posts section
   - Prose styling for content

## 🎨 Features

### Blog Listing Page (`/blog`)
✅ Responsive grid layout (1/2/3 columns)
✅ Featured images with fallback
✅ Post excerpts (auto-truncated)
✅ Author name and date
✅ Category badges
✅ Hover effects
✅ Error handling
✅ Empty state

### Individual Post Page (`/blog/[slug]`)
✅ Full post content with HTML
✅ Large featured image
✅ Author info with avatar
✅ Categories and tags
✅ Formatted content with Tailwind Prose
✅ Related posts section
✅ Back to blog button
✅ 404 handling

### Navigation
✅ "Blog" link added to header (desktop)
✅ "Blog" link added to mobile menu
✅ Positioned between Locations and FAQ

## 🚀 Usage

### Adding Blog Section to Homepage (Optional)

If you want to show recent blog posts on the homepage, edit `app/page.tsx`:

```tsx
import { getRecentPosts } from "@/lib/wordpress"
import { BlogsSection } from "@/components/blogs-section"

export default async function HomePage() {
  // Fetch recent posts
  let recentPosts = []
  try {
    recentPosts = await getRecentPosts(3)
  } catch (err) {
    console.error("Error fetching blog posts:", err)
  }

  return (
    <main>
      {/* ... existing sections ... */}
      
      {/* Add blog section before footer */}
      {recentPosts.length > 0 && <BlogsSection posts={recentPosts} />}
      
      {/* ... rest of page ... */}
    </main>
  )
}
```

## 📡 WordPress Setup Requirements

Your WordPress backend must have:

1. **WPGraphQL Plugin** installed and activated
2. **Posts** published with:
   - Title
   - Content
   - Featured Image (recommended)
   - Excerpt (auto-generated if not provided)
   - Categories
   - Tags (optional)
   - Author info

## 🎨 Styling

The blog uses:
- **Tailwind CSS** for layout and components
- **Tailwind Typography (@tailwindcss/typography)** for post content
- **Green theme** (#16a34a) matching the site
- **Lucide React** icons

### Post Content Styling

The individual post page uses Tailwind's prose classes:
```tsx
className="prose prose-lg max-w-none 
  prose-headings:text-gray-900 
  prose-p:text-gray-700 
  prose-a:text-green-600 
  prose-img:rounded-lg"
```

## 🔧 Customization

### Change Number of Posts

**Blog listing page:**
```tsx
// In app/blog/page.tsx
const data = await getAllPosts(12) // Change 12 to your desired number
```

**Homepage section:**
```tsx
// In app/page.tsx
recentPosts = await getRecentPosts(3) // Change 3 to show more/less
```

### Modify Card Layout

Edit `components/blog-card.tsx` to change:
- Image height (currently `h-48`)
- Excerpt length (currently 150 characters)
- Card styling and hover effects

### Change Cache Duration

Edit `lib/wordpress.ts`:
```tsx
next: { revalidate: 60 } // Revalidate every 60 seconds
```

## 🌐 Routes Created

- `/blog` - Main blog listing page
- `/blog/[slug]` - Individual post pages (dynamic)

## 📱 Responsive Design

- **Mobile:** Single column grid
- **Tablet (768px+):** 2 column grid
- **Desktop (1024px+):** 3 column grid
- **Mobile menu:** Blog link included with toggle behavior

## 🔍 SEO Considerations

Add metadata to blog pages for better SEO:

```tsx
// In app/blog/page.tsx
export const metadata = {
  title: 'Blog | Solwearth',
  description: 'Latest insights on waste management and sustainability'
}

// In app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  return {
    title: post?.title || 'Post',
    description: post?.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160)
  }
}
```

## 🐛 Error Handling

The blog includes comprehensive error handling:
- API failures show user-friendly error messages
- Missing posts trigger 404 pages
- Empty states for no posts
- Console logging for debugging

## 🚀 Testing

1. Navigate to http://localhost:3000/blog
2. Verify posts are loading from WordPress
3. Click on a post to view full content
4. Test category badges and author info
5. Check related posts section
6. Test mobile responsive design
7. Verify navigation links in header

## 📊 Performance

- Server-side rendering (SSR) for SEO
- Revalidation every 60 seconds (ISR)
- Optimized images (use Next.js Image component for better performance)
- Lazy loading for images

## 🔄 Future Enhancements

Possible improvements:
- [ ] Pagination or infinite scroll
- [ ] Search functionality
- [ ] Filter by category
- [ ] Share buttons
- [ ] Comments section
- [ ] Reading time estimate
- [ ] Table of contents for long posts
- [ ] Newsletter signup
- [ ] Related posts by category/tags

---

**Status:** ✅ Complete and ready to use!
