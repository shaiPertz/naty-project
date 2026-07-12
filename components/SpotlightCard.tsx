"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import styles from "./SpotlightCard.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** מבטל את ההטיה התלת-ממדית (למשל בכרטיס הבולט) */
  noTilt?: boolean;
  /** הוספת אנימציית חשיפה בגלילה */
  reveal?: boolean;
  /** השהיית חשיפה (ms) לאפקט מדורג */
  delay?: number;
};

export default function SpotlightCard({
  children,
  className,
  noTilt,
  reveal,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const reduced = () =>
    document.documentElement.classList.contains("a11y-no-motion") ||
    (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (noTilt || reduced()) return;
    const rx = (0.5 - py) * 5;
    const ry = (px - 0.5) * 5;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`${styles.spot} ${className || ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...(reveal ? { "data-reveal": true } : {})}
      {...(reveal && delay ? { "data-delay": delay } : {})}
    >
      <span className={styles.glow} aria-hidden="true" />
      {children}
    </div>
  );
}
