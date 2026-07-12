import SectionHead from "./SectionHead";
import styles from "./WhyUs.module.css";

const FEATURES = [
  {
    title: "צוות מקצועי ומנוסה",
    desc: "אנשי צוות מיומנים שעברו הכשרה קפדנית ובדיקת רקע מלאה.",
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21c0-3 3-5 7-5s7 2 7 5" />
        <circle cx="17" cy="11" r="3" />
        <path d="M15 20c0-2 2-3.5 5-3.5" />
      </>
    ),
  },
  {
    title: "זמינות וגמישות",
    desc: "מתאמים את הביקור לזמן שנוח לכם — כולל ערבים וסופי שבוע.",
    icon: (
      <>
        <path d="M2 3h6l2 4-3 2a12 12 0 0 0 6 6l2-3 4 2v6a2 2 0 0 1-2 2A18 18 0 0 1 2 5a2 2 0 0 1 0-2Z" />
      </>
    ),
  },
  {
    title: "אחריות מלאה",
    desc: "‏100% שביעות רצון — לא מרוצים? נחזור לנקות ללא עלות נוספת.",
    icon: (
      <>
        <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "חומרים ידידותיים",
    desc: "חומרי ניקוי אקולוגיים, בטוחים לילדים, לחיות מחמד ולסביבה.",
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why" className={`container ${styles.section}`}>
      <SectionHead eyebrow="למה לבחור בנו" title="למה אלפי לקוחות בוחרים בנו?" />
      <div className={styles.grid}>
        {FEATURES.map((f, i) => (
          <div className={styles.item} key={f.title} data-reveal data-delay={i * 100}>
            <span className={styles.iconBox}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {f.icon}
              </svg>
            </span>
            <h3 className={styles.title}>{f.title}</h3>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
