# Website Placeholders - Action Required 🚨

This document lists all placeholder content currently used in the Solwearth Ecotech website that needs to be replaced with actual business information.

---

## 📸 Images & Visuals

### Product Images
**Location:** All product pages and sections  
**Current State:** Gray placeholder boxes with text labels  
**Files Affected:**
- `components/hero-section.tsx` - Main hero product image
- `components/products-section.tsx` - Product grid thumbnails
- `app/products/page.tsx` - All product cards
- `app/products/se-501/page.tsx` - Product detail image
- `app/products/se-1001/page.tsx` - Product detail image
- `app/products/se-2001/page.tsx` - Product detail image
- `app/products/se-3501/page.tsx` - Product detail image
- `app/products/se-5001/page.tsx` - Product detail image
- `app/products/se-1h/page.tsx` - Product detail image


**Action Required:**
- [ ] High-quality product photos for all 6 models (SE-501, SE-1001, SE-2001, SE-3501, SE-5001, SE-1H)
- [ ] Multiple angles for each product (front, side, interior if possible)
- [ ] Product in use/installation photos
- [ ] Recommended dimensions: 1200x900px minimum, square format preferred

Actions:
Product images provided in the support-docs\images\machine path.
hero image in the folder.
big for images in the product pages.
small images for display on cards.

certifications images in support-docs\images\certifications

---

### Achievement/Award Images
**Location:** `components/achievements-section.tsx`  
**Current State:** Gray placeholder boxes showing award titles  
**Number of Placeholders:** 3 awards


**Action Required:**
- [ ] Award certificate/trophy image for "Market Leaders of the Year – 2020"
- [ ] Award certificate/trophy image for "Environmental Products Manufacturer of the Year - 2022"
- [ ] Official empanelment certificate for "Swachhta Mission Empanelment - 2021"
- [ ] Recommended format: High-resolution JPG or PNG, 800x600px

Actions:
achievements and recognitions in support-docs\images\achievements.
Implement this as a carousel in a very elegant way that blends well with our overall website theme.


---

### Certification Logos
**Location:** `components/certifications-section.tsx`  
**Current State:** Gray boxes with text labels (CE, RoHS, AQSR, MSME, ISO, Swachh Bharat)

**Action Required:**
- [ ] Official CE Marking logo
- [ ] RoHS Compliance certificate/logo
- [ ] AQSR Certification logo
- [ ] MSME Registration certificate
- [ ] ISO Certification logo and number
- [ ] Swachh Bharat Mission empanelment logo
- [ ] Recommended format: PNG with transparent background, 300x300px

Actions:
All certification images provided in support-docs\images\certifications

Also in the locations section in the home page insert the image from support-docs\images\locations,
instead of the generic div we now have.

---

### Technology Section Video
**Location:** `components/technology-section.tsx`  
**Current State:** Black placeholder with play button icon

**Action Required:**
- [ ] Product demonstration video showing machine operation
- [ ] Manufacturing process video
- [ ] Customer testimonial video
- [ ] Installation/setup guide video
- [ ] Recommended format: MP4, 1920x1080, 2-5 minutes duration
- [ ] Alternative: YouTube embed link

The video to be shown in the home page is the following:
video url: https://youtu.be/a5wJfYbmTbE
---

## 📧 Contact Information

### Email Addresses
**Location:** `components/footer.tsx`, `app/contact/page.tsx`  
**Current:** `info@solwearth.com`  
**Status:** ⚠️ Needs verification

**Action Required:**
- [ ] Verify if `info@solwearth.com` is the correct email
- [ ] Add sales email if different: `sales@solwearth.com`
- [ ] Add support email: `support@solwearth.com`
- [ ] Add separate emails for different departments if applicable

---

### Phone Numbers
**Location:** Multiple files  
**Current:** `+91 98950 44004` (appears in footer and contact page)

**Action Required:**
- [ ] Verify phone number is correct
- [ ] Add alternative phone numbers for different offices
- [ ] Add toll-free number if available
- [ ] Add WhatsApp Business number if different
- [ ] Add international contact numbers for overseas offices

---

### Physical Addresses
**Location:** `components/footer.tsx`, `app/contact/page.tsx`

**Current Addresses Listed:**
1. **Head Office (Cochin):**
   ```
   46/2861-A, 1st Floor, Chakkaraparambu,
   Puthiya Road, Vennala P.O.,
   Cochin - 682028, Kerala
   ```

2. **Factory Address (Bengaluru):**
   ```
   Sy No. 123-A, Heelalige Village,
   Chandapura Post, Anekal Taluk,
   Bengaluru (Bangalore) Urban,
   Karnataka, 560099
   ```

3. **Footer Generic Location:** "Pune, Maharashtra, India"

**Action Required:**
- [ ] Verify all addresses are accurate and current
- [ ] Update or remove Pune address in footer (inconsistent with other addresses)
- [ ] Add Google Maps embedded links for each location
- [ ] Add landmark information for easier navigation
- [ ] Confirm office hours for each location.

Actions:
Update the address in the footer with the one from the about us page. 
---

## 🌐 Social Media Links

**Location:** `components/footer.tsx`, `app/contact/page.tsx`  
**Current State:** All social media links point to "#" (placeholder)

**Action Required:**
- [ ] Facebook page URL
- [ ] Twitter/X profile URL
- [ ] LinkedIn company page URL
- [ ] Instagram profile URL
- [ ] YouTube channel URL (especially important for product videos)
- [ ] Any other social platforms (WhatsApp Business, etc.)

---

## 📄 Downloadable Documents

### Product Brochures
**Location:** All product detail pages  
**Current State:** "Download Brochure" button present but not functional

**Action Required:**
- [ ] Create/upload PDF brochure for SE-501
- [ ] Create/upload PDF brochure for SE-1001
- [ ] Create/upload PDF brochure for SE-2001
- [ ] Create/upload PDF brochure for SE-3501
- [ ] Create/upload PDF brochure for SE-5001
- [ ] Create/upload PDF brochure for SE-1H
- [ ] General company brochure
- [ ] Store PDFs in `public/brochures/` directory
- [ ] Update button links in all product pages

---

### Technical Documentation
**Action Required:**
- [ ] Installation manuals for each model
- [ ] User operation guides
- [ ] Maintenance schedules
- [ ] Troubleshooting guides
- [ ] Warranty information documents
- [ ] Compliance certificates (CE, RoHS, etc.)

---

## 📝 Content That Needs Enhancement

### Testimonials
**Location:** `app/clients/page.tsx`  
**Current State:** Generic testimonial without specific name

**Current Testimonial:**
```
"Solwearth's organic waste converters have revolutionized our waste management system. 
The technology is reliable, efficient, and has significantly reduced our environmental footprint. 
Their support team is exceptional."
— Leading Hospitality Group, Operations Manager
```

**Action Required:**
- [ ] Get real testimonial with actual client name and company (with permission)
- [ ] Add 3-5 more diverse testimonials from different industries
- [ ] Include client photos if possible
- [ ] Add specific metrics/results achieved
- [ ] Get video testimonials for more credibility

---

### About Us - Company History
**Location:** `app/about/page.tsx`, `components/about-section.tsx`  
**Current State:** General mission statement, lacks specific company history

**Action Required:**
- [ ] Add founding year and founder information
- [ ] Company growth milestones timeline
- [ ] Number of employees
- [ ] Total installations/deployments to date
- [ ] Specific project success stories with metrics
- [ ] R&D and innovation highlights

---

### Statistics & Metrics
**Location:** `components/clients-section.tsx`  
**Current Numbers:**
- 500+ Projects Completed
- 60+ Happy Clients
- 10+ Countries Served
- 15+ Years Experience

**Action Required:**
- [ ] Verify all statistics are accurate and current
- [ ] Update with most recent numbers
- [ ] Add more specific metrics:
  - Total waste processed (in tons)
  - CO2 emissions reduced
  - Trees equivalent saved
  - Landfill space saved

---

## 🔧 Functional Components

### Lead Form Submission
**Location:** `components/lead-form-modal.tsx`  
**Current State:** Form submits but uses simulated endpoint

**Code Comment:**
```javascript
// Simulate form submission - replace with actual endpoint
await new Promise((resolve) => setTimeout(resolve, 1000))
```

**Action Required:**
- [ ] Set up actual backend endpoint for form submissions
- [ ] Configure email notifications for new leads
- [ ] Set up CRM integration (if applicable)
- [ ] Add Google Sheets integration or database storage
- [ ] Update form action URL in the component
- [ ] Test form submission thoroughly

**Reference File:** `support-docs/leadFrom.html` contains Apps Script URL setup instructions

---

### Contact Form
**Location:** `app/contact/page.tsx`  
**Current State:** Similar to lead form - simulated submission

**Action Required:**
- [ ] Connect to actual backend/email service
- [ ] Set up auto-reply emails
- [ ] Configure form data storage
- [ ] Add CAPTCHA/spam protection
- [ ] Test all validation rules

---

### Quote Request Buttons
**Location:** Multiple pages  
**Current State:** Opens lead form modal but need backend integration

**Action Required:**
- [ ] Ensure all "Request Quote" buttons trigger lead form
- [ ] Pre-fill capacity field based on product page
- [ ] Track which product generated the lead
- [ ] Set up notification system for sales team

---

## 🎬 Interactive Elements

### Technology Video
**Location:** `components/technology-section.tsx`  
**Current:** Play button present but no video configured

**Action Required:**
- [ ] Upload product demo video
- [ ] Implement video player (YouTube embed or native HTML5)
- [ ] Add video thumbnail image
- [ ] Consider adding multiple videos (installation, operation, maintenance)

---

### Product Demos
**Action Required:**
- [ ] Create interactive product demos
- [ ] Add 360° product view if possible
- [ ] Virtual showroom tour
- [ ] AR/VR experience for product visualization (future enhancement)

---

## 📊 Analytics & Tracking

**Action Required:**
- [ ] Set up Google Analytics
- [ ] Configure conversion tracking for leads
- [ ] Set up Facebook Pixel (if running ads)
- [ ] Implement heatmap tracking (Hotjar, etc.)
- [ ] Configure goal tracking for:
  - Form submissions
  - Brochure downloads
  - Phone number clicks
  - Email clicks

---

## 🔍 SEO & Meta Information

**Action Required:**
- [ ] Add unique meta descriptions for all pages
- [ ] Add Open Graph images for social sharing
- [ ] Create and upload favicon (currently using default)
- [ ] Add schema.org structured data for:
  - Organization
  - Products
  - Local Business
  - Reviews
- [ ] Generate and submit sitemap.xml
- [ ] Create robots.txt
- [ ] Optimize all images with alt text

---

## 🌍 Location Pages

**Files:** `app/locations/` directory - 21 location pages total  
**Current State:** All location pages use template content with generic descriptions

**Action Required:**
For each location page, add:
- [ ] Actual local office address (if exists)
- [ ] Local contact person/representative
- [ ] Region-specific case studies
- [ ] Local regulations/compliance information
- [ ] Area-specific benefits and use cases
- [ ] Local client success stories
- [ ] Regional pricing information (if applicable)

**Specific Locations:**
- India (main page)
- Cities: Bengaluru, Chennai, Cochin, Delhi, Hyderabad, Kolkata, Mumbai, Pune, Indore, Ahmedabad, Gurugram
- International: Maldives, Saudi Arabia, Oman, UAE, Bahrain, Qatar, Kuwait, Malaysia, Bangladesh

---

## 📱 Mobile App / PWA

**Action Required:**
- [ ] Configure Progressive Web App manifest
- [ ] Add app icons (various sizes)
- [ ] Set up service worker for offline functionality
- [ ] Enable "Add to Home Screen" prompt

---

## 🔐 Legal & Compliance

**Action Required:**
- [ ] Create Privacy Policy page
- [ ] Create Terms & Conditions page
- [ ] Create Cookie Policy
- [ ] Add GDPR compliance notice (for EU visitors)
- [ ] Add Cookie consent banner
- [ ] Create Refund/Return Policy
- [ ] Create Warranty Policy page

---

## 🎨 Branding Assets

**Action Required:**
- [ ] High-resolution company logo (SVG preferred)
- [ ] Logo variations (light/dark backgrounds)
- [ ] Brand color codes verification
- [ ] Official typography/fonts
- [ ] Brand guidelines document
- [ ] Email signature templates
- [ ] Presentation templates

---

## 💼 Additional Business Information

### Company Registration Details
**Action Required:**
- [ ] CIN (Corporate Identification Number)
- [ ] GST Number
- [ ] PAN Number (if publicly shareable)
- [ ] Company registration year
- [ ] Legal entity type

### Financial Information
**Action Required:**
- [ ] Payment methods accepted
- [ ] Bank details for direct transfers (if applicable)
- [ ] Credit terms for corporate clients
- [ ] Financing options available

---

## 🚀 Priority Order (Recommended)

### High Priority (Complete First):
1. ✅ Product images - Essential for credibility
2. ✅ Contact information verification - Critical for leads
3. ✅ Form submission backend - Convert visitors to leads
4. ✅ Social media links - Build online presence
5. ✅ Product brochures - Support sales process

### Medium Priority:
6. Award/certification images
7. Technology video
8. Real testimonials with names
9. Updated statistics
10. Legal pages (Privacy, Terms)

### Low Priority (Nice to Have):
11. Advanced analytics setup
12. PWA configuration
13. Interactive product demos
14. Multiple language support
15. Live chat integration

---

## 📋 Checklist Summary

**Total Items:** 150+

**By Category:**
- 🖼️ Images & Media: 35+ items
- 📞 Contact Info: 15+ items
- 📄 Documents: 20+ items
- 💻 Functionality: 10+ items
- 📝 Content: 30+ items
- 🔧 Technical: 25+ items
- 📊 Marketing: 15+ items

---

## 📝 Notes for Implementation

1. **Image Optimization:** All images should be optimized for web (compressed, appropriate format)
2. **Responsive Design:** Ensure all new content works on mobile, tablet, and desktop
3. **Accessibility:** Add alt text, proper headings, ARIA labels where needed
4. **Performance:** Monitor page load times after adding real images/videos
5. **Testing:** Test all forms, links, and interactive elements after updates
6. **Backup:** Keep backup of placeholder content for reference

---

## 🤝 Getting Help

If you need assistance with:
- Professional product photography
- Content writing/copywriting
- Video production
- Form backend setup
- SEO optimization
- Design improvements

Consider hiring specialists or agencies for quality results.

---

**Last Updated:** January 2025  
**Document Version:** 1.0  
**Website Status:** Development/Staging  
**Target Launch:** TBD

---

*This is a living document. Update as placeholders are replaced with actual content.*
