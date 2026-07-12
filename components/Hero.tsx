import Image from "next/image";
import styles from "./Hero.module.css";

const BUBBLES = [
  { left: "5%", size: 16, delay: "0s", dur: "9s", op: 0.5 },
  { left: "20%", size: 26, delay: "2s", dur: "12s", op: 0.4 },
  { left: "38%", size: 12, delay: "1s", dur: "8s", op: 0.5 },
  { left: "60%", size: 20, delay: "3s", dur: "11s", op: 0.35 },
  { left: "78%", size: 14, delay: "1.5s", dur: "10s", op: 0.45 },
  { left: "90%", size: 22, delay: "0.5s", dur: "13s", op: 0.35 },
];

export default function Hero() {
  return (
    <header id="hero" className={styles.hero}>
      {/* רקע דקורטיבי: aurora + בועות */}
      <div className={styles.bg} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blob1}`} />
        <span className={`${styles.blob} ${styles.blob2}`} />
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className={styles.bubble}
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
              animationDuration: b.dur,
              opacity: b.op,
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy} data-reveal>
          <p className={styles.badge}>
            <span className={styles.liveDot} aria-hidden="true" />
            זמינים עכשיו · שירות 24/7
          </p>
          <h1 className={styles.title}>
            מנקים.
            <br />
            נותנים לך
            <br />
            <span className={styles.grad}>בית חדש.</span>
          </h1>
          <p className={styles.sub}>
            שירותי ניקיון מקצועיים לבתים, משרדים, חדרי מדרגות וניקיון לאחר שיפוץ —
            צוות אמין, חומרים ידידותיים לסביבה ותוצאה מושלמת שמדברת בעד עצמה.
          </p>
          <div className={styles.ctas}>
            <a href="#contact" className={styles.primary}>
              קבלת הצעת מחיר
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
            </a>
            <a href="#services" className={styles.secondary}>
              השירותים שלנו
            </a>
          </div>
          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dd className={styles.statNum}>100%</dd>
              <dt className={styles.statLabel}>אחריות מלאה</dt>
            </div>
            <span className={styles.divider} aria-hidden="true" />
            <div className={styles.stat}>
              <dd className={styles.statNum}>2,500+</dd>
              <dt className={styles.statLabel}>לקוחות מרוצים</dt>
            </div>
            <span className={styles.divider} aria-hidden="true" />
            <div className={styles.stat}>
              <dd className={styles.statNum}>7 שנים</dd>
              <dt className={styles.statLabel}>של ניסיון</dt>
            </div>
          </dl>
        </div>

        <div className={styles.media} data-reveal data-delay="150">
          <div className={styles.imageFrame}>
            <Image
              src="/images/hero.jpg"
              alt="סלון מרווח, נקי ומבריק לאחר ניקיון מקצועי של נתי ניקיון"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />
          </div>
          <div className={styles.floatCard}>
            <span className={styles.floatIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span>
              <span className={styles.floatTitle}>ניקיון הושלם</span>
              <span className={styles.floatSub}>בדיוק בזמן, בכל פעם</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
