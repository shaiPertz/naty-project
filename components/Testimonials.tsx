import SpotlightCard from "./SpotlightCard";
import SectionHead from "./SectionHead";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    text: "הזמנתי ניקיון לאחר שיפוץ והתוצאה פשוט הדהימה אותי. הבית נראה כמו חדש. צוות אדיב, מקצועי ודייקן בזמנים. ממליצה בחום!",
    name: "משפחת כהן",
    city: "פתח תקווה",
    initial: "מ",
  },
  {
    text: "אנחנו עובדים עם נתי ניקיון כבר שנתיים בניקיון קבוע של המשרד. תמיד מגיעים בזמן, יסודיים ואמינים. שירות מעולה שאפשר לסמוך עליו.",
    name: "יואב ג.",
    city: "חולון",
    initial: "י",
  },
  {
    text: "הזמנתי ניקיון יסודי לפני כניסה לדירה חדשה. קיבלתי מחיר הוגן, הצוות היה נחמד ומקצועי והדירה נצצה. בהחלט אזמין שוב.",
    name: "דנה ל.",
    city: "תל אביב",
    initial: "ד",
  },
];

const Stars = () => (
  <div className={styles.stars} aria-label="דירוג 5 מתוך 5 כוכבים">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f5a623" aria-hidden="true">
        <path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1Z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="reviews" className={`container ${styles.section}`}>
      <SectionHead eyebrow="המלצות" title="מה הלקוחות שלנו אומרים" />
      <div className={styles.grid}>
        {REVIEWS.map((r, i) => (
          <SpotlightCard
            key={r.name}
            className={styles.card}
            reveal
            delay={i * 120}
          >
            <Stars />
            <blockquote className={styles.quote}>{r.text}</blockquote>
            <figcaption className={styles.person}>
              <span className={styles.avatar} aria-hidden="true">
                {r.initial}
              </span>
              <span>
                <span className={styles.name}>{r.name}</span>
                <span className={styles.city}>{r.city}</span>
              </span>
            </figcaption>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
