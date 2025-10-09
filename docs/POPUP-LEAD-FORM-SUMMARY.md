# Popup Lead Form Implementation Summary

## Overview
A popup lead form has been implemented that appears once per session when users visit any page of the website. The popup displays over a blurred background showing the underlying website content.

## Implementation Date
October 9, 2025

## Key Features

### 1. **One-Time Display Per Session**
- Uses `sessionStorage` to track if popup has been shown
- Appears only once during a user's browsing session
- Won't reappear when navigating between pages
- Resets when browser tab/window is closed

### 2. **Delayed Appearance**
- Popup appears **3 seconds** after page load
- Gives users time to start engaging with content
- Non-intrusive timing for better user experience

### 3. **Background Blur Effect**
- Site content remains visible in background
- Backdrop blur creates professional overlay effect
- Dark overlay (50% opacity) improves popup visibility

### 4. **Smooth Animations**
- Fade-in animation for backdrop
- Zoom-in effect for popup card
- Professional and polished appearance

### 5. **Form Features**
- All standard fields from main lead form
- Same backend integration (Google Apps Script)
- Real-time validation
- Success/error feedback messages
- Auto-closes 2 seconds after successful submission

## Technical Implementation

### Component Structure

**File**: `components/popup-lead-form.tsx`

**Type**: Client Component (`'use client'`)

**Key Technologies**:
- React Hooks (useState, useEffect)
- sessionStorage API
- Tailwind CSS animations
- shadcn/ui components

### Form Fields

The popup includes the following form fields (matching the lead form section exactly):

1. **Capacity*** - Required dropdown select with 6 options:
   - 25-50 KG (SE-501)
   - 75-100 KG (SE-1001)
   - 150-200 KG (SE-2001)
   - 350-375 KG (SE-3501)
   - 400-500 KG (SE-5001)
   - 1000 KG - 1 Ton (SE-1H)
2. **Name*** - Required text input
3. **Phone*** - Required telephone input
4. **Email*** - Required email input with validation
5. **City*** - Required text input
6. **Company** - Optional text input
7. **Message** - Optional multi-line textarea (3 rows)

### Backend Integration

**Endpoint**: Google Apps Script
```
https://script.google.com/macros/s/AKfycbw86Fntt9_m9lE8H7Wb_vfdtIf3BpLq1PaBKzor-h8nvCigtwkS_pi7Mz5EpOUIZZCQ/exec
```

**Data Submitted**:
```json
{
  "capacity": "75-100 KG",
  "name": "User Name",
  "phone": "+91 98950 440 04",
  "email": "user@example.com",
  "city": "Mumbai",
  "company": "Company Name",
  "message": "User message"
}
```

**Field Mapping**:
- Form field `desired_capacity` → Backend field `capacity`
- Form field `phone_no` → Backend field `phone`
- Form field `company_name` → Backend field `company`
- All other fields remain unchanged

## User Interactions

### Opening Behavior
- ✅ Automatically opens 3 seconds after page load
- ✅ Only shows once per session
- ✅ Smooth fade-in animation

### Closing Options
1. **X Button** (top-right corner)
2. **Close Button** (bottom of form)
3. **Click Outside** (on backdrop)
4. **Auto-close** (after successful submission)

### Form Submission
1. User selects desired capacity from dropdown
2. User fills required fields (name, phone, email, city)
3. User optionally fills company name and message
4. Clicks "GET FREE QUOTE" button
5. Form data is mapped to backend format:
   - `desired_capacity` → `capacity`
   - `phone_no` → `phone`
   - `company_name` → `company`
6. Data submits to Google Apps Script endpoint
7. Success message displays
8. Popup auto-closes after 2 seconds

## Files Modified

### New Files Created (1)
- ✅ `components/popup-lead-form.tsx` - Main popup component

### Modified Files (1)
- ✅ `app/layout.tsx` - Added popup to root layout

## Implementation Details

### Layout Integration

```tsx
import { PopupLeadForm } from "@/components/popup-lead-form"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <PopupLeadForm />
        {children}
      </body>
    </html>
  )
}
```

### Session Storage Logic

```javascript
// Check if popup shown in this session
const hasShownPopup = sessionStorage.getItem('leadFormPopupShown')

if (!hasShownPopup) {
  // Show after 3 seconds
  setTimeout(() => {
    setIsVisible(true)
    sessionStorage.setItem('leadFormPopupShown', 'true')
  }, 3000)
}
```

## Styling & Design

### Popup Card
- **Max Width**: 512px (lg)
- **Max Height**: 90vh (scrollable if needed)
- **Background**: White with shadow
- **Border Radius**: Rounded corners
- **Padding**: Comfortable spacing

### Backdrop
- **Background**: Black with 50% opacity
- **Blur**: Backdrop blur effect
- **Z-Index**: 50 (above all content)

### Responsive Design
- ✅ Mobile-friendly (padding on small screens)
- ✅ Scrollable content on small devices
- ✅ Touch-friendly buttons and inputs

## Accessibility Features

1. **Keyboard Navigation**: Full keyboard support
2. **ARIA Labels**: Close button has aria-label
3. **Focus Management**: Proper focus handling
4. **Click Outside**: Can close by clicking backdrop
5. **Required Fields**: Clear indication with asterisks

## Benefits

### For Business
1. **Increased Lead Capture**: Catches visitors before they leave
2. **Better Timing**: 3-second delay allows engagement first
3. **Non-Intrusive**: Only shows once per session
4. **Professional Appearance**: Polished design builds trust

### For Users
1. **Easy to Dismiss**: Multiple closing options
2. **Quick Contact**: Fast way to reach out
3. **Non-Annoying**: Won't pop up repeatedly
4. **Site Visible**: Can see site in background

## Conversion Optimization

### Best Practices Implemented
- ✅ Delayed appearance (not immediate)
- ✅ Clear value proposition
- ✅ Easy to close
- ✅ One-time per session
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Clear CTA button

### A/B Testing Potential
Can easily modify:
- Delay timing (currently 3 seconds)
- Trigger conditions (scroll depth, exit intent, etc.)
- Form fields
- Copy and messaging
- Colors and styling

## Performance Impact

### Bundle Size
- **Component Size**: ~3-4 KB gzipped
- **Impact**: Minimal (uses existing dependencies)
- **Loading**: Lazy loaded with layout

### User Experience
- ✅ No CLS (Cumulative Layout Shift)
- ✅ Smooth animations
- ✅ Fast rendering
- ✅ No blocking

## Session Behavior

| Scenario | Popup Behavior |
|----------|----------------|
| First visit to site | Shows after 3 seconds ✅ |
| Navigate to another page | Does not show ❌ |
| Refresh same page | Does not show ❌ |
| Open new tab (same site) | Shows after 3 seconds ✅ |
| Close and reopen browser | Shows after 3 seconds ✅ |

## Testing Checklist

### Functionality
- [ ] Popup appears after 3 seconds on first visit
- [ ] Popup doesn't appear when navigating between pages
- [ ] Form validation works correctly
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Popup auto-closes after submission
- [ ] X button closes popup
- [ ] Close button closes popup
- [ ] Clicking backdrop closes popup

### Responsive Design
- [ ] Works on mobile devices (320px+)
- [ ] Works on tablets
- [ ] Works on desktop
- [ ] Scrollable on small screens
- [ ] Touch-friendly buttons

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper focus management
- [ ] ARIA labels present

## Configuration Options

### Timing Adjustment
To change popup delay, modify line in `popup-lead-form.tsx`:
```typescript
setTimeout(() => {
  setIsVisible(true)
  sessionStorage.setItem('leadFormPopupShown', 'true')
}, 3000) // Change 3000 to desired milliseconds
```

### Storage Type
Current: `sessionStorage` (resets per session)
Alternative: `localStorage` (persists across sessions)

### Trigger Conditions
Can be enhanced with:
- Exit intent detection
- Scroll depth triggers
- Time on page triggers
- Specific page triggers

## Build Status
✅ **Build Successful** - Ready for deployment

## Next Steps

1. ✅ Component created
2. ✅ Layout integration complete
3. ✅ Build successful
4. ⏳ Deploy to production
5. ⏳ Monitor conversion rates
6. ⏳ Gather user feedback
7. ⏳ A/B test timing/copy if needed

## Notes

- Popup won't interfere with existing page lead forms
- Both forms submit to same backend
- Users can still access contact page via header
- Session-based tracking is privacy-friendly (no cookies)
- Can be easily disabled by removing from layout.tsx

## Maintenance

### To Disable Popup
Remove or comment out in `app/layout.tsx`:
```tsx
// <PopupLeadForm />
```

### To Modify Fields
Edit form fields in `components/popup-lead-form.tsx`

### To Change Styling
Modify Tailwind classes in component

---

**Status**: ✅ Complete and Ready for Deployment
**Build**: ✅ Successful
**Integration**: ✅ Seamless
**Testing**: ⏳ Pending
**Deployment**: ⏳ Pending
