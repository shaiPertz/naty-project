"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const STATS = [
  { target: 2500, suffix: "+", label: "לקוחות מרוצים" },
  { target: 15000, suffix: "+", label: "בתים ומשרדים נוקו" },
  { target: 7, suffix: "", label: "שנות ניסיון" },
  { target: 100, suffix: "%", label: "אחריות מלאה" },
];

const BUBBLES = [
  { left: "8%", size: 20, dur: "11s", delay: "0s", op: 0.3 },
  { left: "30%", size: 14, dur: "9s", delay: "1.5s", op: 0.35 },
  { left: "55%", size: 26, dur: "13s", delay: "0.7s", op: 0.25 },
  { left: "78%", size: 16, dur: "10s", delay: "2.4s", op: 0.3 },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !done.current) {
          done.current = true;
          const dur = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.num}>
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className={styles.band}>
      <div className={styles.bg} aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className={styles.bubble}
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: b.dur,
              animationDelay: b.delay,
              opacity: b.op,
            }}
          />
        ))}
      </div>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading} data-reveal>
          המספרים מדברים בעד עצמם
        </h2>
        <dl className={styles.grid}>
          {STATS.map((s, i) => (
            <div className={styles.stat} key={s.label} data-reveal data-delay={i * 120}>
              <dd className={styles.numWrap}>
                <Counter target={s.target} suffix={s.suffix} />
              </dd>
              <dt className={styles.label}>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
