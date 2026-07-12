"use client";

import { useEffect } from "react";

/**
 * צופה על כל האלמנטים עם data-reveal ומוסיף להם is-visible כשהם נכנסים לתצוגה.
 * data-delay (ms) יוצר אפקט מדורג (stagger). מונע כפילות עם unobserve.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const el = en.target as HTMLElement;
            const d = parseInt(el.dataset.delay || "0", 10);
            el.style.transitionDelay = `${d / 1000}s`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
