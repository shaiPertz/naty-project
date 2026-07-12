"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "#services", label: "שירותים" },
  { href: "#why", label: "למה אנחנו" },
  { href: "#pricing", label: "מחירים" },
  { href: "#reviews", label: "המלצות" },
  { href: "#process", label: "תהליך" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="ניווט ראשי">
        <a href="#hero" className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11.5 12 4l9 7.5" />
              <path d="M5 10v9h14v-9" />
              <path d="M10 19v-5h4v5" />
            </svg>
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{site.name}</span>
            <span className={styles.brandSlogan}>{site.slogan}</span>
          </span>
        </a>

        <ul className={styles.links}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href={`tel:${site.phoneTel}`} className={styles.phone} aria-label={`חייגו אלינו ${site.phoneDisplay}`}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
            </svg>
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>

          <button
            className={styles.burger}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.burgerBar} ${open ? styles.b1 : ""}`} />
            <span className={`${styles.burgerBar} ${open ? styles.b2 : ""}`} />
            <span className={`${styles.burgerBar} ${open ? styles.b3 : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className={styles.mobileMenu} id="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileLink} onClick={() => setOpen(false)}>
            צור קשר
          </a>
        </div>
      )}
    </header>
  );
}
