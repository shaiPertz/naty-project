// ─────────────────────────────────────────────────────────────────────────────
// קונפיג מרכזי — מקור האמת היחיד לכל פרטי העסק, יצירת הקשר וה-SEO.
// כל הערכים כאן הם placeholders — יש להחליף לפרטים האמיתיים לפני עלייה לאוויר.
// (טלפון, וואטסאפ, אימייל, כתובת, ערי שירות, דומיין, רשתות, רכז נגישות)
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "נתי ניקיון",
  slogan: "בית נקי, ראש שקט",
  // תיאור קצר לשימוש ב-SEO / Open Graph
  description:
    "נתי ניקיון — שירותי ניקיון מקצועיים לבתים, משרדים, חדרי מדרגות וניקיון לאחר שיפוץ. צוות אמין, חומרים ידידותיים לסביבה, אחריות מלאה ושירות בכל הארץ 24/7.",

  // דומיין סופי — משמש ל-canonical / OG / sitemap.
  // כרגע כתובת ה-Vercel החיה; כשיהיה דומיין מותאם (למשל nati-clean.co.il) — לעדכן כאן.
  url: "https://naty-clean.vercel.app",
  locale: "he_IL",

  // טוקן אימות ל-Google Search Console — להדביק כאן את הקוד שתקבלו מ-GSC
  // (Settings → Ownership verification → HTML tag) ואז לפרוס מחדש.
  googleSiteVerification: "",

  // ── יצירת קשר (placeholders) ──
  phoneDisplay: "050-123-4567",
  phoneTel: "+972501234567",
  whatsapp: "972501234567",
  email: "info@nati-clean.co.il",

  // ── כתובת (placeholder — לצורך LocalBusiness) ──
  address: {
    street: "רחוב הדוגמה 10",
    city: "פתח תקווה",
    region: "מחוז המרכז",
    postalCode: "4900000",
    country: "IL",
  },
  geo: { lat: 32.084, lng: 34.8878 },

  // ── אזורי שירות ──
  areasServed: [
    "פתח תקווה",
    "תל אביב",
    "רמת גן",
    "גבעתיים",
    "חולון",
    "בת ים",
    "ראשון לציון",
    "בני ברק",
    "הרצליה",
    "כפר סבא",
    "הוד השרון",
    "ראש העין",
  ],

  // ── שעות פעילות ──
  hoursText: "א׳–ש׳ · זמינות 24/7",

  // ── רשתות חברתיות (placeholders — להשלים) ──
  social: {
    facebook: "",
    instagram: "",
  },

  // ── נגישות (placeholders — לעדכן פרטי רכז/ת נגישות אמיתיים) ──
  a11y: {
    coordinatorName: "רכז/ת הנגישות",
    coordinatorPhone: "050-123-4567",
    coordinatorEmail: "access@nati-clean.co.il",
    lastUpdated: "13.07.2026",
  },
} as const;

// קישור וואטסאפ עם הודעה מוכנה מראש
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
