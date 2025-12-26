/**
 * Google Analytics utility functions
 * Use these to track custom events throughout the application
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent',
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'form_submit', 'button_click')
 * @param eventParams - Additional parameters for the event
 * 
 * @example
 * trackEvent('form_submit', {
 *   form_name: 'lead_form',
 *   capacity: 'SE-5001'
 * })
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Track page views (automatically handled by Next.js router, but can be used manually)
 * @param url - The page URL
 * @param title - The page title
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
      page_title: title,
    })
  }
}

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param additionalData - Additional form data to track
 * 
 * @example
 * trackFormSubmit('lead_form', {
 *   capacity: 'SE-5001',
 *   city: 'Mumbai'
 * })
 */
export const trackFormSubmit = (
  formName: string,
  additionalData?: Record<string, any>
) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...additionalData,
  })
}

/**
 * Track button clicks
 * @param buttonName - Name/ID of the button
 * @param buttonLocation - Where the button is located
 * 
 * @example
 * trackButtonClick('request_quote', 'hero_section')
 */
export const trackButtonClick = (
  buttonName: string,
  buttonLocation?: string
) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  })
}

/**
 * Track product views
 * @param productName - Name of the product
 * @param productCategory - Category of the product
 * 
 * @example
 * trackProductView('SE-5001', 'Organic Waste Converter')
 */
export const trackProductView = (
  productName: string,
  productCategory?: string
) => {
  trackEvent('view_item', {
    item_name: productName,
    item_category: productCategory,
  })
}

/**
 * Track file downloads (e.g., brochure downloads)
 * @param fileName - Name of the downloaded file
 * @param fileType - Type of file (e.g., 'pdf', 'doc')
 * 
 * @example
 * trackFileDownload('Solwearth-Brochure.pdf', 'pdf')
 */
export const trackFileDownload = (fileName: string, fileType?: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  })
}

/**
 * Track outbound link clicks
 * @param url - The external URL
 * @param linkText - The text of the link
 * 
 * @example
 * trackOutboundClick('https://facebook.com/solwearth', 'Facebook')
 */
export const trackOutboundClick = (url: string, linkText?: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: linkText,
    value: url,
  })
}

/**
 * Track search queries
 * @param searchTerm - The search term entered
 * 
 * @example
 * trackSearch('organic waste converter')
 */
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm,
  })
}

/**
 * Track newsletter signups
 * @param email - Email address (hashed for privacy)
 * 
 * @example
 * trackNewsletterSignup('user@example.com')
 */
export const trackNewsletterSignup = (email?: string) => {
  trackEvent('newsletter_signup', {
    method: 'website',
  })
}

/**
 * Track phone clicks (Click-to-call)
 * @param phoneNumber - The phone number
 * @param location - Where the phone number was clicked
 * 
 * @example
 * trackPhoneClick('+91-98950-44004', 'header')
 */
export const trackPhoneClick = (phoneNumber: string, location?: string) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    click_location: location,
  })
}

/**
 * Track email clicks
 * @param emailAddress - The email address
 * @param location - Where the email was clicked
 * 
 * @example
 * trackEmailClick('info@solwearth.com', 'footer')
 */
export const trackEmailClick = (emailAddress: string, location?: string) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    click_location: location,
  })
}

export default {
  trackEvent,
  trackPageView,
  trackFormSubmit,
  trackButtonClick,
  trackProductView,
  trackFileDownload,
  trackOutboundClick,
  trackSearch,
  trackNewsletterSignup,
  trackPhoneClick,
  trackEmailClick,
}
