# תוכנית: דף נחיתה SEO ל"נתי ניקיון" — Next.js

## Context (רקע)
דף נחיתה מושקע, מודרני ומהיר לחברת ניקיון "נתי ניקיון", בנוי לפי כללי SEO אורגני של גוגל (תגיות סמנטיות, מטא, נתונים מובנים), עם נראות יוקרתית ומזמינה ואנימציות תופסות-עין, רספונסיבי מלא (מובייל+דסקטופ), נגיש (ת"י 5568), ומפורסם ב-Vercel דרך GitHub. העיצוב נשאב מהמוקאפ שב-`ui-naty/נתי ניקיון.dc.html`.

## החלטות שסוכמו
- **שם מותג**: נתי ניקיון (סלוגן: "בית נקי, ראש שקט").
- **סטאק**: Next.js (App Router, TypeScript), פריסה ל-Vercel דרך GitHub.
- **פרטי קשר/דומיין**: placeholders מרוכזים ב-`lib/site.ts` — יוחלפו בקלות.
- **ערכת צבע**: כחול (ocean) כברנד; ללא מחליף-צבעים ב-production.
- **תמונות**: סטוק חינמי מהאינטרנט (Unsplash/Pexels), מקומי דרך next/image.
- **המלצות**: מוצגות כתוכן, ללא Schema של Review/AggregateRating מזויף.
- **נגישות**: WCAG 2.1 AA / ת"י 5568 — בנייה נגישה + תפריט נגישות + הצהרת נגישות.

## סטאק וארכיטקטורה
- Next.js App Router + TypeScript, SSG. הדף Server Component; אינטראקציות כ-Client Components קטנים.
- עיצוב: `globals.css` עם design tokens (`:root`), reset, keyframes; CSS Modules לכל רכיב.
- פונטים: `next/font/google` ל-Rubik + Assistant (subset עברית), self-hosted.
- קונפיג מרכזי `lib/site.ts`.

## מבנה קבצים
```
app/          layout.tsx, page.tsx, globals.css, accessibility/page.tsx, sitemap.ts, robots.ts
components/   Nav, Hero, Services, WhyUs, BeforeAfter, Pricing, Process, Testimonials,
              Stats, Faq, Contact, Footer, Reveal, ScrollProgress, SpotlightCard,
              FloatingWhatsApp, AccessibilityMenu (+ *.module.css)
lib/site.ts   קונפיג placeholders
public/images התמונות
```

## סקשנים
Hero · שירותים (4) · למה אנחנו (4) · לפני/אחרי · מחירים (3) · תהליך (4) · המלצות (3) · מונים · שאלות נפוצות (FAQ) · צור-קשר · פוטר.

## אנימציות ומראה יוקרתי (transform/opacity, GPU, prefers-reduced-motion)
Hero aurora + בועות + parallax; פס התקדמות גלילה; spotlight/tilt לכרטיסים; shimmer לכפתורים; underline מונפש בניווט; scroll-reveal מדורג; מונים מונפשים; כפתור וואטסאפ צף; סרגל אמון.

## רספונסיביות (mobile-first)
נקודות שבירה: מובייל `<640`, טאבלט `640–1024`, דסקטופ `>1024`; המבורגר מתחת `900`. clamp() לטיפוגרפיה; Grid `auto-fit/minmax`; next/image עם `sizes`; ללא גלישה אופקית. בדיקה ברוחבים 360/390/768/1024/1280/1440.

## SEO (דרישות גוגל)
1. זחילה/אינדוקס: נגיש לגוגלבוט, SSG, robots.ts + sitemap.ts, canonical + metadataBase.
2. תוכן people-first/E-E-A-T, מילות-מפתח במקומות בולטים, FAQ ל"זנב ארוך".
3. On-page: title (~50-60), description (~150), H1 יחיד + היררכיה, HTML סמנטי, alt, aria, lang=he dir=rtl.
4. Structured Data (JSON-LD): LocalBusiness/ProfessionalService (name/telephone/address/areaServed/priceRange/openingHours/geo/sameAs), hasOfferCatalog, Organization, WebSite, BreadcrumbList, FAQPage. ללא Review/AggregateRating מזויף.
5. Core Web Vitals: LCP ≤ 2.5s (hero priority), INP ≤ 200ms (JS מינימלי), CLS < 0.1 (מידות מפורשות).
6. מובייל ונגישות. 7. OG + Twitter + theme-color + favicon + manifest. 8. אחרי השקה: Rich Results Test, PSI, Search Console, sitemap, GBP.

## נגישות (WCAG 2.1 AA / ת"י 5568)
1. מובנה: landmarks, skip-link, ניווט מקלדת מלא + focus נראה, ARIA, ניגודיות ≥4.5:1, alt, הגדלת טקסט 200%, prefers-reduced-motion, יעדי מגע ≥44px.
2. תפריט נגישות (`AccessibilityMenu`): גופן +/‏-, ניגודיות גבוהה, גווני אפור, הדגשת קישורים, גופן קריא, עצירת אנימציות, סמן גדול, איפוס; נשמר ב-localStorage.
3. הצהרת נגישות (`/accessibility`): רמת התאמה, מה בוצע, מגבלות, רכז נגישות (placeholder), תאריך; מקושר מהפוטר.

## ביצועים
SSG; JS מינימלי; next/image (WebP/AVIF, מידות, priority ל-hero); next/font self-hosted; יעד Lighthouse 95+.

## פריסה ל-Vercel (דרך GitHub)
1. build+dev לוקלי לאימות. 2. git init + commit (.gitignore). 3. יצירת ריפו GitHub (gh או ידני) + push. 4. Vercel Import Project. 5. עדכון metadataBase/canonical/OG/sitemap לכתובת הסופית.
*כניסה ל-GitHub/Vercel דורשת אימות אינטראקטיבי של המשתמש.*

## אימות
dev + build ללא שגיאות; בדיקה ויזואלית מובייל+דסקטופ; אינטראקציות; Lighthouse; נגישות (מקלדת/skip-link/focus/ניגודיות/axe); JSON-LD ב-Rich Results Test; אחרי פריסה — בדיקת הכתובת החיה.

## מקורות
- Google Search Essentials — https://developers.google.com/search/docs/essentials
- SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Core Web Vitals — https://developers.google.com/search/docs/appearance/core-web-vitals
- LocalBusiness structured data — https://developers.google.com/search/docs/appearance/structured-data/local-business
- Structured Data Guidelines — https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- WCAG 2.1 — https://www.w3.org/TR/WCAG21/
