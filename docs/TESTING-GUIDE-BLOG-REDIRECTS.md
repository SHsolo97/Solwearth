# Quick Testing Guide - Blog Redirects

## 🧪 How to Test the Blog Redirects

### Option 1: Browser Testing (Easiest)

After deployment, open these URLs in your browser. They should automatically redirect:

**Test URLs:**
```
1. https://www.solwearth.com/5-reasons-why-you-need-a-food-waste-converter
   → Should redirect to: /blog/5-reasons-why-you-need-a-food-waste-converter

2. https://www.solwearth.com/food-waste-management-in-hotels-and-restaurants
   → Should redirect to: /blog/food-waste-management-in-hotels-and-restaurants

3. https://www.solwearth.com/benefits-of-organic-waste
   → Should redirect to: /blog/benefits-of-organic-waste

4. https://www.solwearth.com/business-case-for-organic-waste-converters
   → Should redirect to: /blog/business-case-for-organic-waste-converters

5. https://www.solwearth.com/impact-of-food-waste-on-climate-change
   → Should redirect to: /blog/impact-of-food-waste-on-climate-change
```

### Option 2: Command Line Testing (Developer)

Use PowerShell to check redirect status:

```powershell
# Test a single redirect
curl -I https://www.solwearth.com/5-reasons-why-you-need-a-food-waste-converter

# Expected output should include:
# HTTP/1.1 301 Moved Permanently
# Location: /blog/5-reasons-why-you-need-a-food-waste-converter
```

### Option 3: Browser Developer Tools

1. Open browser Developer Tools (F12)
2. Go to **Network** tab
3. Visit old URL: `https://www.solwearth.com/benefits-of-organic-waste`
4. Look for:
   - **Status Code:** 301 (Moved Permanently)
   - **Location Header:** Points to new URL

---

## ✅ What Success Looks Like

### Correct Redirect:
```
Request:  GET /benefits-of-organic-waste
Response: 301 Moved Permanently
Location: /blog/benefits-of-organic-waste
Final URL: /blog/benefits-of-organic-waste
```

### What You'll See:
- ✅ Browser URL changes from `/{slug}` to `/blog/{slug}`
- ✅ Page loads normally
- ✅ No error messages
- ✅ Content displays correctly

---

## ❌ What Failure Looks Like

### Failed Redirect:
```
Request:  GET /benefits-of-organic-waste
Response: 404 Not Found
```

### What You'll See:
- ❌ 404 error page
- ❌ "Page not found" message
- ❌ URL doesn't change

---

## 📊 Batch Testing Script

Save this as `test-blog-redirects.ps1`:

```powershell
# PowerShell script to test all blog redirects
$baseUrl = "https://www.solwearth.com"
$testSlugs = @(
    "5-reasons-why-you-need-a-food-waste-converter",
    "food-waste-management-in-hotels-and-restaurants",
    "benefits-of-organic-waste",
    "business-case-for-organic-waste-converters",
    "impact-of-food-waste-on-climate-change",
    "organic-waste-converters-a-step-towards-achieving-indias-swachh-bharat-goals",
    "how-organic-waste-management-drives-a-greener-tomorrow",
    "the-roi-of-installing-an-organic-waste-converter-in-commercial-kitchens"
)

Write-Host "`n=== Testing Blog Redirects ===" -ForegroundColor Cyan
Write-Host "Testing $($testSlugs.Count) sample redirects...`n" -ForegroundColor Yellow

$passCount = 0
$failCount = 0

foreach ($slug in $testSlugs) {
    $oldUrl = "$baseUrl/$slug"
    $expectedNewPath = "/blog/$slug"
    
    try {
        $response = Invoke-WebRequest -Uri $oldUrl -MaximumRedirection 0 -ErrorAction SilentlyContinue
        
        if ($response.StatusCode -eq 301) {
            $location = $response.Headers.Location
            if ($location -like "*$expectedNewPath*") {
                Write-Host "✅ PASS: $slug" -ForegroundColor Green
                Write-Host "   Redirects to: $location`n" -ForegroundColor Gray
                $passCount++
            } else {
                Write-Host "❌ FAIL: $slug" -ForegroundColor Red
                Write-Host "   Wrong destination: $location`n" -ForegroundColor Gray
                $failCount++
            }
        } else {
            Write-Host "❌ FAIL: $slug" -ForegroundColor Red
            Write-Host "   Status: $($response.StatusCode) (Expected 301)`n" -ForegroundColor Gray
            $failCount++
        }
    } catch {
        Write-Host "❌ ERROR: $slug" -ForegroundColor Red
        Write-Host "   $($_.Exception.Message)`n" -ForegroundColor Gray
        $failCount++
    }
}

Write-Host "`n=== Test Results ===" -ForegroundColor Cyan
Write-Host "Passed: $passCount / $($testSlugs.Count)" -ForegroundColor Green
Write-Host "Failed: $failCount / $($testSlugs.Count)" -ForegroundColor Red
```

Run with:
```powershell
.\test-blog-redirects.ps1
```

---

## 🔍 Google Search Console Verification

### After Deployment (Day 1-7):

1. **Go to Google Search Console**
   - URL: https://search.google.com/search-console

2. **Check Coverage Report**
   - Look for "Redirected" status on old URLs
   - Should show 301 redirects being processed

3. **Check URL Inspection**
   - Test any old blog URL
   - Should show "URL is a redirect" with new location

4. **Monitor Crawl Errors**
   - Should NOT see 404 errors for old blog URLs
   - Any 404s indicate missing redirects

---

## 📈 Analytics Verification

### Check Google Analytics (After 1 week):

1. **Behavior > Site Content > All Pages**
   - Should see traffic moving to `/blog/*` URLs
   - Old URLs should show declining traffic

2. **Acquisition > All Traffic > Referrals**
   - Backlinks should flow to new URLs
   - Check if old URLs still receiving traffic

---

## 🚀 Pre-Deployment Checklist

Before deploying to production:

- [ ] Build completed successfully (`pnpm run build`)
- [ ] No errors in console
- [ ] Test 5-10 redirects locally
- [ ] Deploy to preview/staging first
- [ ] Test redirects on staging
- [ ] Monitor for 24 hours
- [ ] Deploy to production
- [ ] Test live redirects
- [ ] Submit updated sitemap to Google

---

## 📞 Troubleshooting

### Issue: Redirects not working

**Possible causes:**
1. Changes not deployed
2. Cache not cleared
3. Syntax error in config

**Solutions:**
```powershell
# Clear Next.js cache
pnpm run clean
rm -rf .next

# Rebuild
pnpm run build

# Redeploy
```

### Issue: Wrong destination URL

**Fix:**
Edit `next.config.mjs` and update the specific redirect's `destination` field.

### Issue: 404 errors still appearing

**Check:**
1. Verify slug spelling matches exactly
2. Check for trailing slashes
3. Verify redirect is in config file
4. Clear CDN/browser cache

---

## ✨ Expected Timeline

| Time | What Happens |
|------|-------------|
| **Deployment** | Redirects active immediately |
| **Day 1-2** | Users can access old URLs via redirect |
| **Week 1** | Google starts processing redirects |
| **Week 2-4** | Google indexes new URLs |
| **Month 2-3** | Old URLs replaced in search results |
| **Month 3+** | Full SEO value transferred |

---

## 📝 Sample Test Results

After testing, results should look like:

```
=== Testing Blog Redirects ===
Testing 8 sample redirects...

✅ PASS: 5-reasons-why-you-need-a-food-waste-converter
   Redirects to: /blog/5-reasons-why-you-need-a-food-waste-converter

✅ PASS: food-waste-management-in-hotels-and-restaurants
   Redirects to: /blog/food-waste-management-in-hotels-and-restaurants

✅ PASS: benefits-of-organic-waste
   Redirects to: /blog/benefits-of-organic-waste

[... more results ...]

=== Test Results ===
Passed: 8 / 8
Failed: 0 / 8
```

---

**Ready to Deploy:** ✅  
**All Tests Passing:** Build successful  
**Redirects Configured:** 44 blog posts  
**Next Step:** Deploy and test live
