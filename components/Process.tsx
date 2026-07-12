import SectionHead from "./SectionHead";
import styles from "./Process.module.css";

const STEPS = [
  {
    title: "יצירת קשר",
    desc: "מתקשרים או שולחים הודעה בוואטסאפ",
    icon: <path d="M2 3h6l2 4-3 2a12 12 0 0 0 6 6l2-3 4 2v6a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 0-2Z" />,
  },
  {
    title: "הצעת מחיר",
    desc: "מקבלים הצעה מדויקת ושקופה ומתאמים מועד",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 15l3 2 4-4" />
      </>
    ),
  },
  {
    title: "מבצעים ניקיון",
    desc: "הצוות מגיע מצויד ועובד ביסודיות ובזריזות",
    icon: (
      <>
        <path d="m3 21 3-1 11-11-2-2L4 18l-1 3Z" />
        <path d="m14 6 2-2a2 2 0 0 1 3 3l-2 2" />
        <path d="M19 14v3M20.5 15.5h-3M6 4v2M7 5H5" />
      </>
    ),
  },
  {
    title: "בית מבריק",
    desc: "נהנים מבית נקי ומבריק — עם אחריות מלאה",
    icon: <path d="M20.8 5.6a5 5 0 0 0-7 0L12 7.3l-1.8-1.7a5 5 0 1 0-7 7L12 21l8.8-8.4a5 5 0 0 0 0-7Z" />,
  },
];

export default function Process() {
  return (
    <section id="process" className={`container ${styles.section}`}>
      <SectionHead eyebrow="איך זה עובד" title="תהליך פשוט, תוצאה מושלמת" />
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li className={styles.step} key={s.title} data-reveal data-delay={i * 120}>
            <span className={styles.iconWrap}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {s.icon}
              </svg>
              <span className={styles.num}>{i + 1}</span>
            </span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
