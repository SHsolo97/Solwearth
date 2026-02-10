/** @type {import('next').NextConfig} */
const nextConfig = {
  // ==========================================
  // 301 REDIRECTS FOR SEO MIGRATION
  // ==========================================
  async redirects() {
    return [
      // ==========================================
      // BLOG POST REDIRECTS (301 Permanent)
      // All legacy blog posts from root to /blog/*
      // ==========================================
      {
        source: '/organic-waste-converters-a-step-towards-achieving-indias-swachh-bharat-goals',
        destination: '/blog/organic-waste-converters-a-step-towards-achieving-indias-swachh-bharat-goals',
        permanent: true,
      },
      {
        source: '/how-organic-waste-management-drives-a-greener-tomorrow',
        destination: '/blog/how-organic-waste-management-drives-a-greener-tomorrow',
        permanent: true,
      },
      {
        source: '/5-things-to-check-before-buying-an-organic-waste-converter-machine',
        destination: '/blog/5-things-to-check-before-buying-an-organic-waste-converter-machine',
        permanent: true,
      },
      {
        source: '/benefits-of-organic-waste',
        destination: '/blog/benefits-of-organic-waste',
        permanent: true,
      },
      {
        source: '/the-science-behind-biodegradable-materials',
        destination: '/blog/the-science-behind-biodegradable-materials',
        permanent: true,
      },
      {
        source: '/council-and-parliament-agree-to-reduce-food-waste',
        destination: '/blog/council-and-parliament-agree-to-reduce-food-waste',
        permanent: true,
      },
      {
        source: '/benefits-of-food-waste-processing-units-for-commercial-kitchens',
        destination: '/blog/benefits-of-food-waste-processing-units-for-commercial-kitchens',
        permanent: true,
      },
      {
        source: '/how-to-cut-waste-management-costs-with-business-composting',
        destination: '/blog/how-to-cut-waste-management-costs-with-business-composting',
        permanent: true,
      },
      {
        source: '/impact-of-food-waste-on-climate-change',
        destination: '/blog/impact-of-food-waste-on-climate-change',
        permanent: true,
      },
      {
        source: '/advanced-technology-for-organic-waste-management-in-the-uk',
        destination: '/blog/advanced-technology-for-organic-waste-management-in-the-uk',
        permanent: true,
      },
      {
        source: '/the-roi-of-installing-an-organic-waste-converter-in-commercial-kitchens',
        destination: '/blog/the-roi-of-installing-an-organic-waste-converter-in-commercial-kitchens',
        permanent: true,
      },
      {
        source: '/things-to-keep-in-mind-while-using-an-food-waste-converter-machine',
        destination: '/blog/things-to-keep-in-mind-while-using-an-food-waste-converter-machine',
        permanent: true,
      },
      {
        source: '/case-study-preventing-landslides-in-wayanad-with-organic-waste-converter-machines',
        destination: '/blog/case-study-preventing-landslides-in-wayanad-with-organic-waste-converter-machines',
        permanent: true,
      },
      {
        source: '/why-organic-waste-converter-machines-are-keralas-future',
        destination: '/blog/why-organic-waste-converter-machines-are-keralas-future',
        permanent: true,
      },
      {
        source: '/business-case-for-organic-waste-converters',
        destination: '/blog/business-case-for-organic-waste-converters',
        permanent: true,
      },
      {
        source: '/using-organic-waste-converters-in-shopping-malls-a-case-study-approach',
        destination: '/blog/using-organic-waste-converters-in-shopping-malls-a-case-study-approach',
        permanent: true,
      },
      {
        source: '/case-study-organic-waste-converter-machine-implementation-at-a-residential-society-in-mumbai',
        destination: '/blog/case-study-organic-waste-converter-machine-implementation-at-a-residential-society-in-mumbai',
        permanent: true,
      },
      {
        source: '/food-wastage-in-india-2024-from-farm-to-bin-the-hidden-truth',
        destination: '/blog/food-wastage-in-india-2024-from-farm-to-bin-the-hidden-truth',
        permanent: true,
      },
      {
        source: '/food-waste-disposer-buying-guide-how-to-choose-the-right-size',
        destination: '/blog/food-waste-disposer-buying-guide-how-to-choose-the-right-size',
        permanent: true,
      },
      {
        source: '/technopark-goes-green-turning-food-waste-into-a-valuable-resource',
        destination: '/blog/technopark-goes-green-turning-food-waste-into-a-valuable-resource',
        permanent: true,
      },
      {
        source: '/composting-for-gut-health-how-organic-waste-converters-can-contribute-to-a-microbiome-friendly-kitchen-in-2024',
        destination: '/blog/composting-for-gut-health-how-organic-waste-converters-can-contribute-to-a-microbiome-friendly-kitchen-in-2024',
        permanent: true,
      },
      {
        source: '/composting-made-easy-how-organic-waste-converters-help-schools-and-universities',
        destination: '/blog/composting-made-easy-how-organic-waste-converters-help-schools-and-universities',
        permanent: true,
      },
      {
        source: '/organic-waste-a-silent-threat-and-how-to-manage-it',
        destination: '/blog/organic-waste-a-silent-threat-and-how-to-manage-it',
        permanent: true,
      },
      {
        source: '/turning-trash-into-treasure-a-look-at-different-organic-wastes-and-their-uses',
        destination: '/blog/turning-trash-into-treasure-a-look-at-different-organic-wastes-and-their-uses',
        permanent: true,
      },
      {
        source: '/how-automatic-waste-converters-are-transforming-the-agricultural-industry-in-india',
        destination: '/blog/how-automatic-waste-converters-are-transforming-the-agricultural-industry-in-india',
        permanent: true,
      },
      {
        source: '/separating-organic-waste-sustainable-solutions-for-a-better-future',
        destination: '/blog/separating-organic-waste-sustainable-solutions-for-a-better-future',
        permanent: true,
      },
      {
        source: '/innovations-in-organic-waste-conversion-from-small-scale-systems-to-large-scale-industrial-applications-in-india',
        destination: '/blog/innovations-in-organic-waste-conversion-from-small-scale-systems-to-large-scale-industrial-applications-in-india',
        permanent: true,
      },
      {
        source: '/exploring-different-types-of-organic-waste-and-their-transformative-potential',
        destination: '/blog/exploring-different-types-of-organic-waste-and-their-transformative-potential',
        permanent: true,
      },
      {
        source: '/5-essential-waste-management-restaurant',
        destination: '/blog/5-essential-waste-management-restaurant',
        permanent: true,
      },
      {
        source: '/keeping-hospitals-clean-easy-steps-for-waste-management',
        destination: '/blog/keeping-hospitals-clean-easy-steps-for-waste-management',
        permanent: true,
      },
      {
        source: '/how-an-organic-waste-converter-machine-is-solving-bangalores-rubbish-problems',
        destination: '/blog/how-an-organic-waste-converter-machine-is-solving-bangalores-rubbish-problems',
        permanent: true,
      },
      {
        source: '/delhis-waste-disposal-problem-a-major-environmental-issue',
        destination: '/blog/delhis-waste-disposal-problem-a-major-environmental-issue',
        permanent: true,
      },
      {
        source: '/why-automatic-organic-food-waste-converter-needed-in-mumbai',
        destination: '/blog/why-automatic-organic-food-waste-converter-needed-in-mumbai',
        permanent: true,
      },
      {
        source: '/5-reasons-why-you-need-a-food-waste-converter',
        destination: '/blog/5-reasons-why-you-need-a-food-waste-converter',
        permanent: true,
      },
      {
        source: '/food-waste-management-in-hotels-and-restaurants',
        destination: '/blog/food-waste-management-in-hotels-and-restaurants',
        permanent: true,
      },
      {
        source: '/food-waste-converter-leads-to-a-healthier-option-than-traditional-composting',
        destination: '/blog/food-waste-converter-leads-to-a-healthier-option-than-traditional-composting',
        permanent: true,
      },
      {
        source: '/food-waste-how-to-reduce-reuse-recycle',
        destination: '/blog/food-waste-how-to-reduce-reuse-recycle',
        permanent: true,
      },
      {
        source: '/food-waste-converters-how-it-is-helping',
        destination: '/blog/food-waste-converters-how-it-is-helping',
        permanent: true,
      },
      {
        source: '/advantages-of-using-organic-waste-converter-machine-at-home',
        destination: '/blog/advantages-of-using-organic-waste-converter-machine-at-home',
        permanent: true,
      },
      {
        source: '/how-composting-is-good-for-the-environment',
        destination: '/blog/how-composting-is-good-for-the-environment',
        permanent: true,
      },
      {
        source: '/a-guide-to-properly-managing-household-waste',
        destination: '/blog/a-guide-to-properly-managing-household-waste',
        permanent: true,
      },
      {
        source: '/fully-automatic-organic-waste-converter',
        destination: '/blog/fully-automatic-organic-waste-converter',
        permanent: true,
      },
      {
        source: '/saving-the-planet-one-compost-pile-at-a-time-the-role-of-owc-machines-in-climate-change-mitigation',
        destination: '/blog/saving-the-planet-one-compost-pile-at-a-time-the-role-of-owc-machines-in-climate-change-mitigation',
        permanent: true,
      },
      {
        source: '/benefits-of-soil-supplements-from-organic-waste',
        destination: '/blog/benefits-of-soil-supplements-from-organic-waste',
        permanent: true,
      },

      // ==========================================
      // PRODUCT REDIRECTS (301 Permanent)
      // Legacy product pages to /products/*
      // ==========================================
      {
        source: '/se501',
        destination: '/products/se-501',
        permanent: true,
      },
      {
        source: '/se1001',
        destination: '/products/se-1001',
        permanent: true,
      },
      {
        source: '/se2501',
        destination: '/products/se-2001',
        permanent: true,
      },
      {
        source: '/se3501',
        destination: '/products/se-3501',
        permanent: true,
      },
      {
        source: '/se5001',
        destination: '/products/se-5001',
        permanent: true,
      },
      {
        source: '/se10001',
        destination: '/products/se-1h',
        permanent: true,
      },
      {
        source: '/automatic-food-waste-converter-machines',
        destination: '/products',
        permanent: true,
      },

      // ==========================================
      // INDIA LOCATION REDIRECTS (301 Permanent)
      // Legacy Indian location pages to /locations/india/*
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
        source: '/organic-waste-converter-machines-in-india',
        destination: '/locations/india',
        permanent: true,
      },

      // ==========================================
      // INTERNATIONAL LOCATION REDIRECTS (301 Permanent)
      // Legacy international location pages to /locations/*
      // ==========================================
      {
        source: '/maldives-organic-waste-converter-machines',
        destination: '/locations/maldives',
        permanent: true,
      },
      {
        source: '/saudi-arabia-organic-waste-converters',
        destination: '/locations/saudi-arabia',
        permanent: true,
      },
      {
        source: '/oman-waste-converter-machines',
        destination: '/locations/oman',
        permanent: true,
      },
      {
        source: '/organic-waste-converter-machines-in-uae',
        destination: '/locations/uae',
        permanent: true,
      },
      {
        source: '/organic-waste-converter-machines-in-bahrain',
        destination: '/locations/bahrain',
        permanent: true,
      },
      {
        source: '/organic-waste-converter-machines-in-qatar',
        destination: '/locations/qatar',
        permanent: true,
      },
      {
        source: '/organic-waste-converter-machines-in-kuwait',
        destination: '/locations/kuwait',
        permanent: true,
      },
      {
        source: '/organic-waste-converter-machines-in-malaysia',
        destination: '/locations/malaysia',
        permanent: true,
      },
      {
        source: '/organic-waste-converter-machines-in-bangladesh',
        destination: '/locations/bangladesh',
        permanent: true,
      },

      // ==========================================
      // CATEGORY REDIRECTS (301 Permanent)
      // Legacy WordPress category URLs to /blog/category/*
      // ==========================================
      {
        source: '/category/:slug*',
        destination: '/blog/category/:slug*',
        permanent: true,
      },
    ]
  },

  // Security headers for Best Practices score
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://script.google.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://script.google.com https://va.vercel-scripts.com",
              "frame-src 'self' https://www.youtube.com https://youtube.com",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://script.google.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimize image loading
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-slot', '@radix-ui/react-dialog'],
  },

  // Compress responses
  compress: true,
};

export default nextConfig;
