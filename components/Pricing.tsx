import SpotlightCard from "./SpotlightCard";
import SectionHead from "./SectionHead";
import styles from "./Pricing.module.css";

const check = (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PLANS = [
  {
    name: "בסיסי",
    tagline: "ניקיון תחזוקתי לדירה קטנה",
    price: "₪290",
    features: ["עד 3 חדרים", "מטבח ואמבטיה", "שטיפת רצפות ואבק", "חומרים אקולוגיים"],
  },
  {
    name: "מקיף",
    tagline: "ניקיון יסודי לבית מלא",
    price: "₪540",
    popular: true,
    features: [
      "עד 5 חדרים",
      "ניקוי חלונות פנימי",
      "ניקוי בתוך ארונות",
      "חיטוי משטחים",
      "אחריות שירות מלאה",
    ],
  },
  {
    name: "פרימיום",
    tagline: "לאחר שיפוץ / דיפ-קלין",
    price: "₪890",
    features: [
      "כל מה שבחבילת מקיף",
      "הסרת אבק בטון וצבע",
      "פוליש וניקוי חלונות מלא",
      "צוות מוגדל",
      "מוכן למגורים ביום אחד",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className={`container ${styles.section}`}>
      <SectionHead
        eyebrow="חבילות ומחירים"
        title="מחיר הוגן, בלי הפתעות"
        subtitle="*המחירים הם להמחשה בלבד ומשתנים לפי גודל וסוג הנכס"
      />
      <div className={styles.grid}>
        {PLANS.map((p, i) => (
          <SpotlightCard
            key={p.name}
            className={`${styles.card} ${p.popular ? styles.popular : ""}`}
            noTilt={p.popular}
            reveal
            delay={i * 120}
          >
            {p.popular && <span className={styles.popGlow} aria-hidden="true" />}
            {p.popular && <span className={styles.badge}>הכי פופולרי</span>}
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.tagline}>{p.tagline}</p>
            <div className={styles.priceRow}>
              <span className={styles.price}>{p.price}</span>
              <span className={styles.per}>/ ביקור</span>
            </div>
            <div className={styles.rule} />
            <ul className={styles.features}>
              {p.features.map((f) => (
                <li key={f} className={styles.feature}>
                  {check}
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={p.popular ? styles.ctaPop : styles.cta}
            >
              בחירת חבילה
            </a>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
