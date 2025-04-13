import ogImageSrc from "@images/social.png"; // Ensure this image exists or change path
import ceLogo from "@images/ce-mark.avif"; // CE logosunun yolu
import scaLogo from "@images/sca-logo.webp"; // SCA logosunun yolu

export const SITE = {
  title: "Kraffe Roasters | Industrial & Commercial Coffee Roasting Machines", // SEO Title
  tagline: "Premium Coffee Roasters & Equipment", // Short tagline
  description: "Kraffe Roasters offers expertly roasted coffee beans and high-quality roasting equipment for cafes and enthusiasts. Discover precision and durability in commercial & industrial coffee roasting machines.", // Main site description
  description_short: "Premium commercial coffee roasting machines and equipment by Kraffe Roasters.", // Short description
  url: "https://krafferoasters.com", // REPLACE WITH YOUR ACTUAL SITE URL
  author: "Kraffe Roasters Team", // Author or company name
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage", // Page type (WebPage is fine for homepage)
    inLanguage: "en-US", // Default language
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = { // Open Graph Meta Tags (for Facebook, LinkedIn, etc.)
  locale: "en_US", // English US
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Commercial & Industrial Coffee Roasting Solutions`, // Social media share title
  description: "Discover expertly crafted coffee and high-quality commercial/industrial roasters from Kraffe Roasters. Elevate your coffee experience.", // Social media share description
  image: ogImageSrc, // Image for social media sharing (1200x630px recommended)
};

// Partners data (Fill this with SVG code of your actual partner logos)
export const partnersData = [
    {
        logo: ceLogo, // Import edilen değişkeni kullanıyoruz
        alt: "CE Marking Certification Logo",
        name: "CE Marking", // Opsiyonel isim
  
    },
    {
        logo: scaLogo, // Import edilen değişkeni kullanıyoruz
        alt: "Specialty Coffee Association Member Logo",
        name: "Specialty Coffee Association Member", // Opsiyonel isim
        
    },
];
