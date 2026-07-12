import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11.5 12 4l9 7.5" />
                <path d="M5 10v9h14v-9" />
                <path d="M10 19v-5h4v5" />
              </svg>
            </span>
            <span className={styles.brandName}>{site.name}</span>
          </div>
          <p className={styles.about}>
            שירותי ניקיון מקצועיים לבתים, משרדים וחדרי מדרגות — בכל רחבי הארץ, עם
            אחריות מלאה.
          </p>
        </div>

        <div>
          <h3 className={styles.colTitle}>שירותים</h3>
          <ul className={styles.list}>
            <li><a href="#services" className={styles.link}>ניקיון בתים</a></li>
            <li><a href="#services" className={styles.link}>ניקיון משרדים</a></li>
            <li><a href="#services" className={styles.link}>חדרי מדרגות</a></li>
            <li><a href="#services" className={styles.link}>ניקיון לאחר שיפוץ</a></li>
          </ul>
        </div>

        <div>
          <h3 className={styles.colTitle}>יצירת קשר</h3>
          <ul className={styles.list}>
            <li>
              <a href={`tel:${site.phoneTel}`} className={styles.contact}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--acc2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
                <span dir="ltr">{site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={styles.contact}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--acc2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 6 10 7L22 6" />
                </svg>
                <span dir="ltr">{site.email}</span>
              </a>
            </li>
            <li className={styles.contact}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--acc2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              {site.hoursText}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} {site.name} · כל הזכויות שמורות</span>
        <Link href="/accessibility" className={styles.a11yLink}>
          הצהרת נגישות
        </Link>
      </div>
    </footer>
  );
}
