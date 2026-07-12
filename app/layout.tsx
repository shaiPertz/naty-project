import type { Metadata, Viewport } from "next";
import { Rubik, Assistant } from "next/font/google";
import { site } from "@/lib/site";
import ScrollProgress from "@/components/ScrollProgress";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

const title = `${site.name} | שירותי ניקיון מקצועיים לבית, משרד וחדרי מדרגות`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ניקיון בתים",
    "ניקיון משרדים",
    "ניקיון חדרי מדרגות",
    "ניקיון לאחר שיפוץ",
    "חברת ניקיון",
    "שירותי ניקיון",
    "נתי ניקיון",
    ...site.areasServed.map((c) => `ניקיון ${c}`),
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — שירותי ניקיון מקצועיים`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "cleaning service",
  ...(site.googleSiteVerification
    ? { verification: { google: site.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#1a83e0",
  width: "device-width",
  initialScale: 1,
};

// ── נתונים מובנים (JSON-LD) ──────────────────────────────────────────────────
function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${site.url}/#business`,
    name: site.name,
    slogan: site.slogan,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/images/og-image.jpg`,
    priceRange: "₪₪",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.areasServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותי ניקיון",
      itemListElement: [
        "ניקיון בתים",
        "ניקיון משרדים",
        "ניקיון חדרי מדרגות",
        "ניקיון לאחר שיפוץ",
      ].map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
    sameAs: [site.social.facebook, site.social.instagram].filter(Boolean),
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    sameAs: [site.social.facebook, site.social.instagram].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "he-IL",
    publisher: { "@id": `${site.url}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${assistant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* מסמן שה-JS פעיל (לפני צביעה) — כדי שהאנימציות יסתירו תוכן רק כשיש JS,
            ומשחזר העדפות נגישות שנשמרו כדי למנוע הבהוב */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;d.classList.add('js');var p=JSON.parse(localStorage.getItem('a11y')||'{}');if(p.classes)p.classes.forEach(function(c){d.classList.add(c)});if(p.fontScale)d.style.setProperty('--a11y-zoom',p.fontScale);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          דלג לתוכן הראשי
        </a>
        <ScrollProgress />
        <div id="a11y-zoom">{children}</div>
        <FloatingWhatsApp />
        <AccessibilityMenu />
        <StructuredData />
      </body>
    </html>
  );
}
