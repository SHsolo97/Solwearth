# Quick Guide: Adding Analytics Tracking to Components

## 📍 Where to Add Tracking

### 1. **Lead Form Submissions** (`components/lead-form-section.tsx`, `components/popup-lead-form.tsx`)

```typescript
import { trackFormSubmit } from '@/lib/analytics'

// In the form submit handler (after successful submission)
const handleSubmit = async (e: React.FormEvent) => {
  // ... form submission logic
  
  if (result.status === 'success') {
    // Track the form submission
    trackFormSubmit('lead_form', {
      capacity: formData.capacity,
      city: formData.city,
      source: 'popup' // or 'main_page'
    })
  }
}
```

### 2. **Product Page Views** (`app/products/[model]/page.tsx`)

```typescript
import { trackProductView } from '@/lib/analytics'
import { useEffect } from 'react'

export default function ProductPage() {
  useEffect(() => {
    // Track product view when component mounts
    trackProductView('SE-5001', 'Organic Waste Converter')
  }, [])
  
  return (...)
}
```

### 3. **Brochure Downloads** (All product pages)

```typescript
import { trackFileDownload } from '@/lib/analytics'

<a 
  href="https://drive.google.com/file/d/13In5rIl2FBqbW2m5DrODB7Wz0AGh3lVe/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
  onClick={() => trackFileDownload('Solwearth-Brochure.pdf', 'pdf')}
>
  <Button>Download Brochure</Button>
</a>
```

### 4. **Call-to-Action Buttons** (Throughout the site)

```typescript
import { trackButtonClick } from '@/lib/analytics'

<button
  onClick={() => {
    trackButtonClick('request_quote', 'hero_section')
    // ... other logic
  }}
>
  Request Quote
</button>
```

### 5. **Phone Number Clicks** (`components/header.tsx`, `components/footer.tsx`)

```typescript
import { trackPhoneClick } from '@/lib/analytics'

<a 
  href="tel:+919895044004"
  onClick={() => trackPhoneClick('+91-98950-44004', 'header')}
>
  +91-98950-44004
</a>
```

### 6. **Email Clicks** (`components/footer.tsx`)

```typescript
import { trackEmailClick } from '@/lib/analytics'

<a 
  href="mailto:info@solwearth.com"
  onClick={() => trackEmailClick('info@solwearth.com', 'footer')}
>
  info@solwearth.com
</a>
```

### 7. **Social Media Links** (`components/footer.tsx`)

```typescript
import { trackOutboundClick } from '@/lib/analytics'

<a 
  href="https://facebook.com/Solwearth"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackOutboundClick('https://facebook.com/Solwearth', 'Facebook')}
>
  <Facebook />
</a>
```

---

## 🎯 Priority Tracking Implementation

### High Priority (Implement First):
1. ✅ **Lead form submissions** - Main conversion metric
2. ✅ **Product page views** - Know which products are popular
3. ✅ **Brochure downloads** - Secondary conversion
4. ✅ **Phone clicks** - Direct lead generation

### Medium Priority:
5. ✅ **CTA button clicks** - User engagement
6. ✅ **Email clicks** - Contact engagement
7. ✅ **Navigation clicks** - User journey

### Low Priority:
8. ✅ **Social media clicks** - Brand awareness
9. ✅ **Outbound links** - External traffic

---

## 📝 Implementation Checklist

### Lead Form Section (`components/lead-form-section.tsx`)
- [ ] Import `trackFormSubmit` from `@/lib/analytics`
- [ ] Add tracking after successful form submission
- [ ] Include capacity and city in tracking data

### Popup Lead Form (`components/popup-lead-form.tsx`)
- [ ] Import `trackFormSubmit` from `@/lib/analytics`
- [ ] Add tracking after successful submission
- [ ] Include capacity and city in tracking data
- [ ] Add source: 'popup' to differentiate

### Product Pages (All 6 models)
- [ ] SE-501: Add product view tracking
- [ ] SE-1001: Add product view tracking
- [ ] SE-2001: Add product view tracking
- [ ] SE-3501: Add product view tracking
- [ ] SE-5001: Add product view tracking
- [ ] SE-1H: Add product view tracking
- [ ] Add download tracking to brochure buttons

### Header (`components/header.tsx`)
- [ ] Add phone click tracking
- [ ] Add navigation click tracking (optional)

### Footer (`components/footer.tsx`)
- [ ] Add phone click tracking
- [ ] Add email click tracking
- [ ] Add social media click tracking

### Why Choose Us Page (`app/why-choose-us/page.tsx`)
- [ ] Add CTA button click tracking

### Home Page (`app/page.tsx`)
- [ ] Add hero CTA button tracking
- [ ] Add product card click tracking

---

## 🧪 Testing Your Implementation

After adding tracking:

1. **Open browser console** (F12)
2. **Go to Network tab** and filter for 'google-analytics' or 'collect'
3. **Interact with tracked elements** (click buttons, submit forms)
4. **Verify requests are sent** to Google Analytics
5. **Check Real-Time reports** in Google Analytics dashboard

---

## 💡 Best Practices

### DO:
✅ Track meaningful user actions
✅ Use descriptive event names
✅ Include relevant context in parameters
✅ Test tracking before deploying

### DON'T:
❌ Track personal information (PII)
❌ Track every single click
❌ Use generic event names
❌ Forget to test in production

---

## 🚀 Quick Start

**Want to implement tracking right now?**

1. **Start with Lead Forms** (highest priority):
   ```bash
   # Edit these files:
   components/lead-form-section.tsx
   components/popup-lead-form.tsx
   ```

2. **Add this import at the top**:
   ```typescript
   import { trackFormSubmit } from '@/lib/analytics'
   ```

3. **Add tracking after successful submission**:
   ```typescript
   if (result.status === 'success') {
     trackFormSubmit('lead_form', {
       capacity: formData.capacity,
       city: formData.city
     })
   }
   ```

4. **Test it**:
   - Fill and submit the form
   - Check browser Network tab
   - Verify event in GA Real-Time reports

---

## 📊 Expected Results

Once implemented, you'll be able to see:

- **Form Submissions by Capacity** - Which models customers want
- **Form Submissions by City** - Geographic interest
- **Product Page Views** - Popular products
- **Brochure Downloads** - Content engagement
- **Phone Clicks** - Direct inquiries
- **Button Click Patterns** - User journey optimization

---

## ❓ Questions?

Check the main `GOOGLE-ANALYTICS-SETUP.md` for:
- Setup instructions
- Troubleshooting
- Advanced configurations
- GDPR compliance
