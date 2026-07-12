"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  const [value, setValue] = useState(50);

  return (
    <section className={`container ${styles.section}`}>
      <SectionHead
        eyebrow="לפני / אחרי"
        title="התוצאה מדברת בעד עצמה"
        subtitle="גררו את הסליידר כדי לראות את ההבדל"
      />
      <div className={styles.wrap} data-reveal data-delay={120}>
        <div className={styles.frame}>
          <Image
            src="/images/after.jpg"
            alt="חדר מגורים נקי ומסודר לאחר ניקיון מקצועי"
            fill
            sizes="(max-width: 1100px) 100vw, 1100px"
            className={styles.img}
          />
          <div
            className={styles.clip}
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          >
            <Image
              src="/images/before.jpg"
              alt="אותו חדר לפני הניקיון — מאובק ולא מסודר"
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              className={styles.img}
            />
            <span className={`${styles.tag} ${styles.tagBefore}`}>לפני</span>
          </div>
          <span className={`${styles.tag} ${styles.tagAfter}`}>אחרי</span>

          <div className={styles.handle} style={{ left: `${value}%` }} aria-hidden="true">
            <span className={styles.knob}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6-4 6 4 6M15 6l4 6-4 6" />
              </svg>
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className={styles.range}
            aria-label="השוואת לפני ואחרי"
          />
        </div>
      </div>
    </section>
  );
}
