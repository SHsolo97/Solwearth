# Google Analytics Implementation Guide

## ✅ Implementation Complete

Google Analytics 4 (GA4) has been successfully implemented throughout the Solwearth application.

---

## 📋 What Was Implemented

### 1. **Google Analytics Component** (`components/google-analytics.tsx`)
   - Created a reusable client-side component
   - Uses Next.js `Script` component for optimized loading
   - Implements Google Tag (gtag.js) with proper configuration
   - Strategy: `afterInteractive` for better performance

### 2. **Layout Integration** (`app/layout.tsx`)
   - Added Google Analytics to the root layout
   - Ensures tracking across all pages
   - Conditional rendering based on environment variable

### 3. **Environment Configuration** (`.env.local.example`)
   - Created template for environment variables
   - Secure configuration management

---

## 🚀 Setup Instructions

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (gear icon)
3. Create a new **Property** (or use existing)
4. Select **"Web"** as platform
5. Enter your website details:
   - Website URL: `https://www.solwearth.com`
   - Stream name: `Solwearth Website`

### Step 2: Get Your Measurement ID

1. In Google Analytics, go to **Admin** (bottom left)
2. Under **Property**, click **Data Streams**
3. Click on your web stream
4. Copy the **Measurement ID** (Format: `G-XXXXXXXXXX`)

### Step 3: Configure Environment Variable

1. Create a `.env.local` file in the root directory:
   ```bash
   touch .env.local
   ```

2. Add your Measurement ID:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   
   Replace `G-XXXXXXXXXX` with your actual Measurement ID from Step 2.

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
# or
pnpm dev
# or
yarn dev
```

---

## 🧪 Testing & Verification

### 1. **Real-Time Reports**
   1. Open your website: `http://localhost:3000`
   2. Go to Google Analytics: **Reports** > **Realtime**
   3. You should see yourself as an active user
   4. Navigate between pages to see page views

### 2. **Browser Developer Tools**
   1. Open DevTools (F12)
   2. Go to **Network** tab
   3. Filter by `google-analytics` or `gtag`
   4. Navigate pages and verify requests are sent

### 3. **Google Tag Assistant**
   1. Install [Tag Assistant extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
   2. Visit your site
   3. Click the extension icon
   4. Verify Google Analytics tag is detected and firing

---

## 📊 What's Being Tracked

### Automatic Events (Out of the Box):
- ✅ **Page Views** - Every page navigation
- ✅ **Sessions** - User sessions
- ✅ **User Demographics** - Location, device, browser
- ✅ **Engagement Time** - How long users stay
- ✅ **Scroll Depth** - How far users scroll
- ✅ **Outbound Clicks** - External link clicks
- ✅ **File Downloads** - PDF downloads (like brochure)
- ✅ **Video Engagement** - If you add videos

### Enhanced Events (Can Be Added):
If you want to track specific actions, you can add custom events:

```typescript
// Example: Track form submissions
gtag('event', 'form_submit', {
  'event_category': 'engagement',
  'event_label': 'lead_form'
});

// Example: Track product views
gtag('event', 'view_item', {
  'item_name': 'SE-5001',
  'item_category': 'Products'
});
```

---

## 🔧 Advanced Configuration (Optional)

### Track Custom Events

Create a utility file `lib/analytics.ts`:

```typescript
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Usage example:
// trackEvent('button_click', { button_name: 'request_quote' })
```

### Track Form Submissions

In your lead form component:

```typescript
import { trackEvent } from '@/lib/analytics'

// In form submit handler:
trackEvent('lead_form_submit', {
  capacity: formData.capacity,
  city: formData.city
})
```

### Track Product Page Views

In product pages:

```typescript
useEffect(() => {
  trackEvent('view_product', {
    product_name: 'SE-5001',
    product_capacity: '450-500 KG'
  })
}, [])
```

---

## 🔒 Privacy & GDPR Compliance

### Cookie Consent (Optional)

If you need GDPR compliance, add cookie consent:

1. Install a consent library:
   ```bash
   npm install react-cookie-consent
   ```

2. Add consent banner to `layout.tsx`:
   ```tsx
   import CookieConsent from "react-cookie-consent"
   
   <CookieConsent>
     This website uses cookies to enhance user experience.
   </CookieConsent>
   ```

3. Update analytics to respect consent:
   ```javascript
   gtag('consent', 'update', {
     'analytics_storage': 'granted'
   });
   ```

---

## 📈 Viewing Analytics Data

### Important Dashboards:

1. **Real-Time Reports**
   - See active users right now
   - Current page views

2. **Acquisition Reports**
   - Where traffic comes from
   - Google, Direct, Social Media, etc.

3. **Engagement Reports**
   - Most visited pages
   - Time on page
   - Bounce rate

4. **User Reports**
   - Demographics
   - Technology (devices, browsers)
   - Location

---

## 🎯 Key Metrics to Monitor

For Solwearth, focus on:

- 📊 **Total Page Views** - Overall traffic
- 👥 **New vs Returning Users** - User retention
- 📍 **Geographic Data** - Which regions show interest
- 🛍️ **Product Page Views** - Which products are popular
- 📞 **Form Submissions** - Lead generation success
- ⏱️ **Session Duration** - User engagement
- 📱 **Device Type** - Mobile vs Desktop usage

---

## 🚨 Troubleshooting

### Analytics Not Working?

**Check 1:** Environment Variable
```bash
# Verify .env.local exists and has correct format
cat .env.local
# Should show: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Check 2:** Restart Server
```bash
# After adding .env.local, always restart
npm run dev
```

**Check 3:** Browser Console
```javascript
// Open console (F12) and type:
window.gtag
// Should show: function gtag(){...}
```

**Check 4:** Network Requests
- Open DevTools > Network tab
- Filter: `google-analytics`
- Should see requests when navigating

### Common Issues:

**Issue:** "gtag is not defined"
- **Solution:** Server wasn't restarted after adding env variable

**Issue:** Not seeing data in GA
- **Solution:** Wait 24-48 hours for initial data processing

**Issue:** Localhost traffic showing up
- **Solution:** Add filter in GA to exclude localhost

---

## 📝 Production Deployment Checklist

Before deploying to production:

- [ ] Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to production environment variables
- [ ] Test analytics on staging/production URL
- [ ] Verify real-time tracking works
- [ ] Set up custom events if needed
- [ ] Configure goals and conversions in GA
- [ ] Add team members to GA property
- [ ] Set up email reports (optional)

### Vercel Deployment:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** > **Environment Variables**
4. Add:
   - Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
   - Environment: **Production** (and Preview if needed)
5. Redeploy the site

---

## 🎓 Learning Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/9304153)
- [Next.js Analytics Guide](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)

---

## ✅ Summary

**You now have:**
- ✅ Google Analytics 4 fully implemented
- ✅ Automatic page view tracking
- ✅ Real-time analytics
- ✅ Secure environment configuration
- ✅ Production-ready setup

**Next Steps:**
1. Get your GA Measurement ID
2. Add it to `.env.local`
3. Restart your dev server
4. Verify tracking in GA Real-Time reports
5. Deploy to production with env variable

**Need Help?** Check the troubleshooting section or Google Analytics support!
