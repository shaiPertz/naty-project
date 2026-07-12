"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./AccessibilityMenu.module.css";

type Toggle = { key: string; label: string; icon: React.ReactNode };

const svg = (d: string) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {d.split("|").map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

const TOGGLES: Toggle[] = [
  { key: "a11y-contrast", label: "ניגודיות גבוהה", icon: svg("M12 3a9 9 0 0 0 0 18Z|M12 3a9 9 0 0 1 0 18") },
  { key: "a11y-grayscale", label: "גווני אפור", icon: svg("M12 3v18|M12 3a9 9 0 0 1 0 18|M12 3a9 9 0 0 0 0 18") },
  { key: "a11y-links", label: "הדגשת קישורים", icon: svg("M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1|M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1") },
  { key: "a11y-readable", label: "גופן קריא", icon: svg("M4 7V5h16v2|M9 5v14|M15 5v14|M7 19h4|M13 19h4") },
  { key: "a11y-no-motion", label: "עצירת אנימציות", icon: svg("M10 4v16|M14 4v16") },
  { key: "a11y-big-cursor", label: "סמן גדול", icon: svg("M6 3l14 8-6 2-2 6z") },
];

const MANAGED = TOGGLES.map((t) => t.key);
const FS_MIN = 0.9;
const FS_MAX = 1.6;
const FS_STEP = 0.1;

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string[]>([]);
  const [fontScale, setFontScale] = useState(1);
  const [ready, setReady] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // טעינת העדפות שמורות
  useEffect(() => {
    try {
      const p = JSON.parse(localStorage.getItem("a11y") || "{}");
      if (Array.isArray(p.classes))
        setActive(p.classes.filter((c: string) => MANAGED.includes(c)));
      if (typeof p.fontScale === "number") setFontScale(p.fontScale);
    } catch {}
    setReady(true);
  }, []);

  // החלת המצב על ה-DOM ושמירה
  useEffect(() => {
    if (!ready) return;
    const d = document.documentElement;
    MANAGED.forEach((c) => d.classList.toggle(c, active.includes(c)));
    if (Math.abs(fontScale - 1) < 0.001) d.style.removeProperty("--a11y-zoom");
    else d.style.setProperty("--a11y-zoom", String(fontScale));
    try {
      localStorage.setItem(
        "a11y",
        JSON.stringify({ classes: active, fontScale })
      );
    } catch {}
  }, [active, fontScale, ready]);

  // ניהול פוקוס, Esc וקליק מחוץ לתפריט
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        !triggerRef.current?.contains(t)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  const toggle = (key: string) =>
    setActive((prev) =>
      prev.includes(key) ? prev.filter((c) => c !== key) : [...prev, key]
    );

  const changeFont = (dir: number) =>
    setFontScale((s) =>
      Math.min(FS_MAX, Math.max(FS_MIN, Math.round((s + dir * FS_STEP) * 10) / 10))
    );

  const resetAll = () => {
    setActive([]);
    setFontScale(1);
  };

  return (
    <div className={styles.wrap}>
      {open && (
        <div
          ref={panelRef}
          className={styles.panel}
          role="dialog"
          aria-modal="false"
          aria-label="תפריט נגישות"
        >
          <div className={styles.head}>
            <h2 className={styles.title}>תפריט נגישות</h2>
            <button
              className={styles.close}
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="סגירת תפריט הנגישות"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          <div className={styles.fontRow}>
            <span className={styles.fontLabel}>גודל טקסט</span>
            <div className={styles.fontControls}>
              <button onClick={() => changeFont(-1)} aria-label="הקטנת טקסט" disabled={fontScale <= FS_MIN + 0.001}>
                A-
              </button>
              <span className={styles.fontVal} aria-live="polite">
                {Math.round(fontScale * 100)}%
              </span>
              <button onClick={() => changeFont(1)} aria-label="הגדלת טקסט" disabled={fontScale >= FS_MAX - 0.001}>
                A+
              </button>
            </div>
          </div>

          <div className={styles.grid}>
            {TOGGLES.map((t) => {
              const on = active.includes(t.key);
              return (
                <button
                  key={t.key}
                  className={`${styles.toggle} ${on ? styles.on : ""}`}
                  aria-pressed={on}
                  onClick={() => toggle(t.key)}
                >
                  <span className={styles.tIcon}>{t.icon}</span>
                  <span className={styles.tLabel}>{t.label}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.footer}>
            <button className={styles.reset} onClick={resetAll}>
              איפוס הגדרות
            </button>
            <Link href="/accessibility" className={styles.statement} onClick={() => setOpen(false)}>
              הצהרת נגישות
            </Link>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="פתיחת תפריט נגישות"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="3.8" r="1.9" />
          <path d="M4.5 7.2c2.4.9 4.9 1.3 7.5 1.3s5.1-.4 7.5-1.3a1 1 0 0 1 .7 1.9c-1.9.7-3.9 1.1-5.9 1.3l.6 3.1 1.8 5.6a1.1 1.1 0 0 1-2.1.7L12 15.6l-2.9 5.2a1.1 1.1 0 0 1-2.1-.7l1.8-5.6.6-3.1c-2-.2-4-.6-5.9-1.3a1 1 0 0 1 .7-1.9Z" />
        </svg>
      </button>
    </div>
  );
}
