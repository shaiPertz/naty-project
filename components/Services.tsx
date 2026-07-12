import SpotlightCard from "./SpotlightCard";
import SectionHead from "./SectionHead";
import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "ניקיון בתים",
    desc: "ניקיון יסודי או תחזוקתי לדירה או בית פרטי — מטבח, חדרי אמבטיה, רצפות וחלונות עד הפרט האחרון.",
    icon: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v9h14v-9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
  },
  {
    title: "ניקיון משרדים",
    desc: "חוזי ניקיון קבועים למשרדים ועסקים — שירות דיסקרטי, גמיש בשעות ומותאם לגודל המשרד שלכם.",
    icon: (
      <>
        <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
        <path d="M15 9h4a1 1 0 0 1 1 1v11" />
        <path d="M2 21h20" />
        <path d="M8 8h.01M8 12h.01M8 16h.01M11 8h.01M11 12h.01M11 16h.01" />
      </>
    ),
  },
  {
    title: "חדרי מדרגות",
    desc: "ניקיון וחיטוי חדרי מדרגות בבניינים משותפים — שטיפה, מעקות, מעליות ותחזוקה שבועית קבועה לוועד הבית.",
    icon: (
      <>
        <path d="M4 20h4v-4" />
        <path d="M8 16h4v-4" />
        <path d="M12 12h4V8" />
        <path d="M16 8h4V4" />
        <path d="M4 20 20 4" />
      </>
    ),
  },
  {
    title: "לאחר שיפוץ",
    desc: "הסרת אבק בטון, שאריות צבע וגבס — הופכים אתר בנייה מאובק לבית מבריק ומוכן למגורים.",
    dark: true,
    icon: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className={`container ${styles.section}`}>
      <SectionHead
        eyebrow="השירותים שלנו"
        title="פתרונות ניקיון לכל צורך"
        subtitle="בחרו את השירות שמתאים לכם — אנחנו נדאג לכל השאר"
      />
      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <SpotlightCard
            key={s.title}
            className={`${styles.card} ${s.dark ? styles.dark : ""}`}
            reveal
            delay={i * 100}
          >
            {s.dark && <span className={styles.darkGlow} aria-hidden="true" />}
            <span className={styles.iconBox}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {s.icon}
              </svg>
            </span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <a href="#contact" className={styles.more}>
              לפרטים נוספים
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
            </a>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
