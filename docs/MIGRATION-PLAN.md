# Solwearth Website Migration Plan

## 📋 Overview

This document outlines the complete migration strategy from the old WordPress-based Solwearth website to the new Next.js application while preserving SEO value, backlinks, and search engine rankings.

---

## 🎯 Migration Objectives

1. **Preserve SEO Rankings** - Maintain current search engine positions
2. **Maintain Backlinks** - Ensure all existing backlinks continue to work
3. **Improve URL Structure** - Move from flat structure to hierarchical structure
4. **Zero Downtime** - Seamless transition for users
5. **Prevent 404 Errors** - Proper redirects for all old URLs

---

## 📊 Current State Analysis

### Old URL Structure (Problems)
```
❌ /se-501                    → Products at root level
❌ /se-1001                   → No logical hierarchy
❌ /{blog-slug}               → Blog posts at root level
❌ /bangalore                 → Location pages at root level
```

### New URL Structure (Improved)
```
✅ /products/se-501           → Clear product hierarchy
✅ /products/se-1001          → SEO-friendly structure
✅ /blog/{blog-slug}          → Organized blog section
✅ /locations/india/bangalore → Logical location hierarchy
```

---

## 🛠️ Technical Implementation

### Step 1: Configure Next.js Redirects

Update `next.config.mjs` with 301 permanent redirects:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ==========================================
      // PRODUCT REDIRECTS (301 Permanent)
      // ==========================================
      {
        source: '/se-501',
        destination: '/products/se-501',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/se-1001',
        destination: '/products/se-1001',
        permanent: true,
      },
      {
        source: '/se-2001',
        destination: '/products/se-2001',
        permanent: true,
      },
      {
        source: '/se-3501',
        destination: '/products/se-3501',
        permanent: true,
      },
      {
        source: '/se-5001',
        destination: '/products/se-5001',
        permanent: true,
      },
      {
        source: '/se-1h',
        destination: '/products/se-1h',
        permanent: true,
      },
      
      // ==========================================
      // LOCATION REDIRECTS (301 Permanent)
      // ==========================================
      {
        source: '/bangalore',
        destination: '/locations/india/bangalore',
        permanent: true,
      },
      {
        source: '/mumbai',
        destination: '/locations/india/mumbai',
        permanent: true,
      },
      {
        source: '/chennai',
        destination: '/locations/india/chennai',
        permanent: true,
      },
      {
        source: '/delhi',
        destination: '/locations/india/delhi',
        permanent: true,
      },
      {
        source: '/hyderabad',
        destination: '/locations/india/hyderabad',
        permanent: true,
      },
      {
        source: '/pune',
        destination: '/locations/india/pune',
        permanent: true,
      },
      {
        source: '/gurgaon',
        destination: '/locations/india/gurgaon',
        permanent: true,
      },
      {
        source: '/noida',
        destination: '/locations/india/noida',
        permanent: true,
      },
      {
        source: '/kerala',
        destination: '/locations/india/kerala',
        permanent: true,
      },
      {
        source: '/goa',
        destination: '/locations/india/goa',
        permanent: true,
      },
      {
        source: '/andhra-pradesh',
        destination: '/locations/india/andhra-pradesh',
        permanent: true,
      },
      {
        source: '/maldives',
        destination: '/locations/maldives',
        permanent: true,
      },
      {
        source: '/saudi-arabia',
        destination: '/locations/saudi-arabia',
        permanent: true,
      },
      {
        source: '/oman',
        destination: '/locations/oman',
        permanent: true,
      },
      {
        source: '/uae',
        destination: '/locations/uae',
        permanent: true,
      },
      {
        source: '/bahrain',
        destination: '/locations/bahrain',
        permanent: true,
      },
      {
        source: '/qatar',
        destination: '/locations/qatar',
        permanent: true,
      },
      {
        source: '/kuwait',
        destination: '/locations/kuwait',
        permanent: true,
      },
      {
        source: '/malaysia',
        destination: '/locations/malaysia',
        permanent: true,
      },
      {
        source: '/bangladesh',
        destination: '/locations/bangladesh',
        permanent: true,
      },
    ]
  },
  
  images: {
    domains: ['wpapi.hstechnopreneur.in'], // Your WordPress API domain
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig
```

### Step 2: Handle Blog Post Redirects

#### Option A: Add Specific Blog Redirects (Recommended if you have < 100 posts)

Add each blog post manually to redirects:

```javascript
{
  source: '/old-blog-post-slug',
  destination: '/blog/old-blog-post-slug',
  permanent: true,
},
```

#### Option B: Create Catch-All Handler (Recommended if you have many posts)

Create `app/[slug]/page.tsx` to handle legacy blog URLs:

```typescript
import { notFound, redirect } from 'next/navigation'
import { getPostBySlug } from '@/lib/wordpress'

export default async function LegacyBlogPost({ 
  params 
}: { 
  params: { slug: string } 
}) {
  // List of known non-blog routes to exclude
  const excludedRoutes = [
    'products', 'locations', 'blog', 'about', 
    'faq', 'clients', 'contact', 'api', '_next',
    'favicon.ico', 'robots.txt', 'sitemap.xml'
  ]
  
  // If it's a protected route, return 404
  if (excludedRoutes.includes(params.slug)) {
    notFound()
  }
  
  // Check if this slug exists as a blog post in WordPress
  try {
    const post = await getPostBySlug(params.slug)
    
    if (post) {
      // Redirect to new blog structure (301 permanent)
      redirect(`/blog/${params.slug}`)
    }
  } catch (error) {
    console.error('Error checking legacy blog post:', error)
  }
  
  // If no blog post found, return 404
  notFound()
}
```

### Step 3: Update Sitemap

Ensure all new URLs are in the sitemap (`app/sitemap.ts`):

```typescript
import { getAllPosts } from '@/lib/wordpress'

export default async function sitemap() {
  const baseUrl = 'https://solwearth.com'
  
  // Fetch all blog posts
  const posts = await getAllPosts(1000)
  
  const blogUrls = posts.nodes.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modified || post.date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  const productUrls = [
    'se-501', 'se-1001', 'se-2001', 'se-3501', 'se-5001', 'se-1h'
  ].map(product => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  const locationUrls = [
    'india', 'india/bangalore', 'india/mumbai', 'india/chennai',
    'india/delhi', 'india/hyderabad', 'india/pune', 'india/gurgaon',
    'india/noida', 'india/kerala', 'india/goa', 'india/andhra-pradesh',
    'maldives', 'saudi-arabia', 'oman', 'uae', 'bahrain', 
    'qatar', 'kuwait', 'malaysia', 'bangladesh'
  ].map(location => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...productUrls,
    ...locationUrls,
    ...blogUrls,
  ]
}
```

### Step 4: Add Canonical URLs

Update metadata in blog posts to include canonical URLs:

```typescript
// In app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.excerpt,
    // IMPORTANT: Add canonical URL to prevent duplicate content
    alternates: {
      canonical: `https://solwearth.com/blog/${params.slug}`,
    },
    // Add OpenGraph for better social sharing
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://solwearth.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: [post.author?.name || 'Solwearth Team'],
      images: post.featuredImage?.node?.sourceUrl 
        ? [{
            url: post.featuredImage.node.sourceUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage?.node?.sourceUrl 
        ? [post.featuredImage.node.sourceUrl]
        : [],
    },
  }
}
```

---

## 📝 Pre-Migration Checklist

### 1. Audit Old Site
- [ ] Export list of all URLs from old site
- [ ] Document all product URLs
- [ ] Document all location URLs  
- [ ] Export complete blog post list from WordPress
- [ ] Identify top 100 most visited pages (from Google Analytics)
- [ ] Document any custom pages or special routes

### 2. Prepare Redirect List
- [ ] Create comprehensive redirect mapping (old URL → new URL)
- [ ] Test redirects locally
- [ ] Verify all product pages redirect correctly
- [ ] Verify all location pages redirect correctly
- [ ] Verify blog posts redirect correctly

### 3. Update Configuration
- [ ] Update `next.config.mjs` with all redirects
- [ ] Update `app/sitemap.ts` with new URL structure
- [ ] Update `app/robots.ts` 
- [ ] Add canonical URLs to all pages
- [ ] Configure proper metadata for all pages

### 4. Test Locally
- [ ] Build project: `npm run build`
- [ ] Test all redirect paths
- [ ] Verify sitemap generates correctly
- [ ] Check robots.txt is accessible
- [ ] Test major user flows

---

## 🚀 Migration Day Checklist

### Phase 1: Pre-Launch (1 Week Before)
- [ ] Backup old WordPress site completely
- [ ] Export WordPress database
- [ ] Download all WordPress media files
- [ ] Test new site on staging environment
- [ ] Set up Google Search Console for new structure
- [ ] Prepare Google Analytics property
- [ ] Schedule downtime notification (if any)

### Phase 2: Launch Day
- [ ] Deploy new Next.js site to production
- [ ] Verify DNS settings
- [ ] Test homepage loads correctly
- [ ] Test 5-10 major redirect paths
- [ ] Submit new sitemap to Google Search Console
- [ ] Request indexing for top 10 pages
- [ ] Monitor error logs in real-time

### Phase 3: Post-Launch (First 24 Hours)
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check for 404 errors in analytics
- [ ] Verify Google Analytics tracking works
- [ ] Test contact form submissions
- [ ] Monitor server response times
- [ ] Check all social media links
- [ ] Test from multiple devices/browsers

### Phase 4: First Week
- [ ] Daily check of Google Search Console
- [ ] Monitor organic traffic trends
- [ ] Track any unusual 404 patterns
- [ ] Add missing redirects as discovered
- [ ] Request crawling of important pages
- [ ] Monitor page load speeds

### Phase 5: First Month
- [ ] Weekly traffic analysis
- [ ] Compare pre/post migration metrics
- [ ] Identify any ranking drops
- [ ] Update high-value backlinks (if possible)
- [ ] Monitor bounce rates
- [ ] Track conversion rates

---

## 📊 Monitoring & Analytics

### Google Search Console Setup

1. **Add New Property**
   ```
   URL: https://solwearth.com
   Type: Domain property
   ```

2. **Submit Sitemap**
   ```
   URL: https://solwearth.com/sitemap.xml
   ```

3. **Monitor These Metrics**
   - Crawl errors (404s)
   - Index coverage
   - Core Web Vitals
   - Mobile usability
   - Security issues

### Google Analytics Tracking

Track these custom events:

```typescript
// Track successful redirects (optional)
gtag('event', 'redirect', {
  'event_category': 'migration',
  'event_label': 'old_to_new_url',
  'value': 1
})
```

### Key Metrics to Monitor

| Metric | Pre-Migration | Target | Monitor For |
|--------|---------------|--------|-------------|
| Organic Traffic | Baseline | 90-100% | 30 days |
| Page Load Time | Current | < 3s | 7 days |
| Bounce Rate | Current | Similar | 30 days |
| Conversion Rate | Current | Similar/Better | 30 days |
| 404 Errors | 0 | < 1% | 30 days |

---

## 🔍 SEO Preservation Strategy

### 1. Maintain Link Equity

**301 Redirects** (Permanent)
- ✅ Pass ~90-95% of link equity
- ✅ Tell search engines URL has permanently moved
- ✅ Update search engine indexes

**Why NOT 302 Redirects?**
- ❌ Temporary redirects
- ❌ Don't pass full link equity
- ❌ Don't update search indexes

### 2. Update Structured Data

Add JSON-LD structured data to pages:

```typescript
// For products
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "SE-501 Organic Waste Converter",
  "description": "25-50 KG capacity food waste converter",
  "url": "https://solwearth.com/products/se-501"
}

// For blog posts  
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "url": "https://solwearth.com/blog/post-slug",
  "datePublished": "2024-01-01",
  "author": {
    "@type": "Organization",
    "name": "Solwearth Ecotech"
  }
}
```

### 3. Backlink Management

#### High Priority Backlinks to Update
1. Industry directories
2. Partner websites
3. Press releases
4. Guest posts
5. Social media profiles

#### Outreach Template
```markdown
Subject: URL Update - Solwearth Website Migration

Hi [Name],

We recently improved our website structure for better user experience. 

Could you please update this link on [their page URL]:
OLD: https://solwearth.com/se-501
NEW: https://solwearth.com/products/se-501

We have 301 redirects in place, so the old link will still work, 
but direct links help with SEO.

Thank you!
Best regards,
Solwearth Team
```

---

## 🛟 Rollback Plan (Emergency)

If critical issues occur:

### Immediate Actions
1. Keep old WordPress site accessible as backup
2. Can point DNS back to old site within minutes
3. Have database backup ready

### When to Consider Rollback
- 404 error rate > 5%
- Organic traffic drops > 50% in first 48 hours
- Critical functionality broken
- Major crawl errors in Google Search Console

### Rollback Steps
```bash
# 1. Point DNS back to old server
# 2. Restore old site from backup
# 3. Analyze what went wrong
# 4. Fix issues in staging
# 5. Plan new migration attempt
```

---

## 📈 Success Criteria

### Week 1
- ✅ < 1% 404 error rate
- ✅ All major pages crawled by Google
- ✅ No critical console errors
- ✅ Contact forms working
- ✅ Analytics tracking correctly

### Month 1
- ✅ Organic traffic at 80-90% of baseline
- ✅ All redirects functioning
- ✅ No major ranking drops
- ✅ Core Web Vitals improved
- ✅ User engagement metrics stable

### Month 3
- ✅ Organic traffic at 100%+ of baseline
- ✅ Rankings improved for target keywords
- ✅ Zero 404 errors from old URLs
- ✅ All backlinks updated or redirecting
- ✅ Better conversion rates

---

## 📞 Support & Resources

### Tools Needed
- Google Search Console
- Google Analytics
- Screaming Frog (for crawling)
- Redirect testing tools
- PageSpeed Insights

### References
- [Google's Site Move Guide](https://developers.google.com/search/docs/advanced/crawling/site-move-with-url-changes)
- [Moz Migration Guide](https://moz.com/learn/seo/website-migrations)
- [Next.js Redirects Documentation](https://nextjs.org/docs/api-reference/next.config.js/redirects)

---

## 🎯 Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Pre-Migration Setup | 1-2 weeks | ⏳ Pending |
| Testing & QA | 3-5 days | ⏳ Pending |
| Migration Day | 1 day | ⏳ Pending |
| Monitoring Period | 30 days | ⏳ Pending |
| Full Stabilization | 90 days | ⏳ Pending |

---

## ✅ Final Checklist Before Go-Live

- [ ] All redirects configured in `next.config.mjs`
- [ ] Sitemap generated and tested
- [ ] Robots.txt configured correctly
- [ ] Canonical URLs added to all pages
- [ ] OpenGraph tags on all pages
- [ ] Google Search Console setup complete
- [ ] Google Analytics tracking code active
- [ ] All major redirect paths tested
- [ ] Backup of old site complete
- [ ] DNS settings ready to switch
- [ ] Team notified of migration schedule
- [ ] Monitoring tools configured
- [ ] Rollback plan documented and ready

---

## 📝 Notes

- Keep old WordPress site running for 90 days as safety net
- Monitor Google Search Console daily for first 2 weeks
- Be patient - full SEO recovery can take 2-3 months
- Small ranking fluctuations are normal during migration
- Focus on user experience - Google rewards that long-term

---

**Last Updated:** October 4, 2025  
**Document Version:** 1.0  
**Owner:** Solwearth Development Team
