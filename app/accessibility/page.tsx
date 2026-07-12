import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import styles from "./accessibility.module.css";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description:
    "הצהרת הנגישות של נתי ניקיון — מחויבות לנגישות לפי תקן ישראלי 5568 ותקן WCAG 2.1 ברמה AA.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <header className={styles.topbar}>
        <div className={`container ${styles.topInner}`}>
          <Link href="/" className={styles.brand} aria-label={`${site.name} — דף הבית`}>
            <span className={styles.logo} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11.5 12 4l9 7.5" />
                <path d="M5 10v9h14v-9" />
                <path d="M10 19v-5h4v5" />
              </svg>
            </span>
            <span className={styles.brandName}>{site.name}</span>
          </Link>
          <Link href="/" className={styles.back}>
            ← חזרה לדף הבית
          </Link>
        </div>
      </header>

      <main id="main" className={`container ${styles.page}`}>
        <h1 className={styles.h1}>הצהרת נגישות</h1>
        <p className={styles.lead}>
          חברת {site.name} רואה חשיבות רבה במתן שירות שוויוני לכלל הלקוחות, ופועלת
          כדי שהאתר יהיה נגיש לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם
          מוגבלות ולתקנות הנלוות לו.
        </p>

        <section className={styles.block}>
          <h2 className={styles.h2}>רמת הנגישות באתר</h2>
          <p>
            האתר הונגש בהתאם להנחיות מסמך WCAG 2.1 ברמת התאמה AA, ובהתאם לתקן הישראלי
            (ת"י 5568). ההנגשה נבדקה ומיושמת ברחבי האתר.
          </p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h2}>מה נעשה כדי להנגיש את האתר</h2>
          <ul className={styles.list}>
            <li>מבנה סמנטי תקין (landmarks) והיררכיית כותרות ברורה.</li>
            <li>ניווט מלא באמצעות מקלדת, כולל קישור "דלג לתוכן" וסימון פוקוס ברור.</li>
            <li>תיאורי טקסט חלופי (alt) לתמונות משמעותיות.</li>
            <li>ניגודיות צבעים תקינה וטקסט הניתן להגדלה ללא אובדן תוכן.</li>
            <li>תמיכה בקוראי מסך ובתגי ARIA במקומות הנדרשים.</li>
            <li>כיבוד העדפת המשתמש להפחתת אנימציות (prefers-reduced-motion).</li>
            <li>תפריט נגישות ייעודי הזמין בכל עמוד.</li>
          </ul>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h2}>תפריט הנגישות</h2>
          <p>
            בפינת המסך קיים כפתור נגישות הפותח תפריט המאפשר להתאים את האתר לצרכים
            אישיים: הגדלה והקטנה של הטקסט, מצב ניגודיות גבוהה, גווני אפור, הדגשת
            קישורים, גופן קריא, עצירת אנימציות והגדלת הסמן. ההעדפות נשמרות בדפדפן
            לביקורים הבאים.
          </p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h2}>מגבלות ידועות</h2>
          <p>
            אנו משקיעים מאמצים מתמשכים לשפר את נגישות האתר. ייתכן שחלקים מסוימים טרם
            הונגשו במלואם. אם נתקלתם בקושי או בתקלת נגישות, נשמח שתעדכנו אותנו ונפעל
            לתקן בהקדם.
          </p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.h2}>פנייה בנושא נגישות — רכז/ת נגישות</h2>
          <p>לכל בקשה, שאלה או משוב בנושא נגישות ניתן לפנות אלינו:</p>
          <ul className={styles.contactList}>
            <li>
              <strong>איש קשר:</strong> {site.a11y.coordinatorName}
            </li>
            <li>
              <strong>טלפון:</strong>{" "}
              <a href={`tel:${site.phoneTel}`} dir="ltr">{site.a11y.coordinatorPhone}</a>
            </li>
            <li>
              <strong>אימייל:</strong>{" "}
              <a href={`mailto:${site.a11y.coordinatorEmail}`} dir="ltr">{site.a11y.coordinatorEmail}</a>
            </li>
          </ul>
        </section>

        <p className={styles.updated}>עודכן לאחרונה: {site.a11y.lastUpdated}</p>
      </main>

      <Footer />
    </>
  );
}
