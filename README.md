# נתי ניקיון — אתר תדמית / דף נחיתה

דף נחיתה מודרני, מהיר ונגיש לחברת ניקיון, בנוי ב-**Next.js (App Router + TypeScript)** ומיועד לפריסה ב-**Vercel**.

## הפעלה מקומית

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # בנייה ל-production
npm start        # הרצת ה-build
```

## החלפת פרטים אמיתיים (placeholders)

כל פרטי העסק מרוכזים בקובץ אחד: **`lib/site.ts`**
- טלפון, וואטסאפ, אימייל, כתובת, ערי שירות, רשתות חברתיות
- `url` — הדומיין הסופי (לעדכן אחרי הפריסה; משמש ל-canonical / OG / sitemap)
- `googleSiteVerification` — טוקן האימות מ-Google Search Console
- `a11y` — פרטי רכז/ת הנגישות (מופיעים ב-`/accessibility`)

טקסטים נוספים: שאלות נפוצות ב-`lib/faq.ts`; תוכן הסקשנים בתוך `components/*`.

## תמונות

התמונות ב-`public/images/` (hero, before, after, og-image). להחלפה — פשוט להחליף את הקבצים באותם שמות. `next/image` דואג לאופטימיזציה (AVIF/WebP), מידות ו-lazy-loading.

## SEO ונגישות

- Metadata מלא, Open Graph, Twitter Card, canonical — ב-`app/layout.tsx`.
- נתונים מובנים (JSON-LD): LocalBusiness / Organization / WebSite ב-`layout.tsx`, ו-FAQPage ב-`components/Faq.tsx`.
- `app/robots.ts` + `app/sitemap.ts` — אוטומטיים.
- נגישות (ת"י 5568 / WCAG 2.1 AA): בנייה נגישה, תפריט נגישות (`components/AccessibilityMenu.tsx`), והצהרת נגישות (`/accessibility`).

## פריסה ל-Vercel (דרך GitHub)

1. ליצור repo ב-GitHub ולדחוף את הפרויקט.
2. ב-Vercel: **Add New → Project → Import** את ה-repo (זיהוי Next.js אוטומטי, ללא הגדרות).
3. אחרי הפריסה: לעדכן `url` ב-`lib/site.ts` לכתובת הסופית ולדחוף שוב.

## Google Search Console

1. להוסיף Property ב-[Search Console](https://search.google.com/search-console) עבור הדומיין.
2. לאמת בעלות: להעתיק את טוקן ה-HTML tag ל-`googleSiteVerification` ב-`lib/site.ts`, לפרוס מחדש, ולאשר.
3. לשלוח את `sitemap.xml` תחת Sitemaps.
4. לבדוק את הדף ב-[Rich Results Test](https://search.google.com/test/rich-results) וב-[PageSpeed Insights](https://pagespeed.web.dev/).
