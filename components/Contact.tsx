"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/lib/site";
import styles from "./Contact.module.css";

const SERVICES = [
  "ניקיון בתים",
  "ניקיון משרדים",
  "חדרי מדרגות",
  "ניקיון לאחר שיפוץ",
];

export default function Contact() {
  const [service, setService] = useState(SERVICES[0]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const text =
      `היי, שמי ${name}.\nמעוניין/ת בשירות: ${service}.\nטלפון: ${phone}.` +
      (msg ? `\n${msg}` : "");
    window.open(whatsappLink(text), "_blank", "noopener");
  };

  return (
    <section id="contact" className={`container ${styles.section}`}>
      <div className={styles.grid}>
        <div data-reveal>
          <p className={styles.eyebrow}>צור קשר</p>
          <h2 className={styles.title}>
            מוכנים לבית
            <br />
            נקי ומבריק?
          </h2>
          <p className={styles.lead}>
            השאירו פרטים או צרו קשר ישירות — נחזור אליכם עם הצעת מחיר תוך שעה.
            אנחנו כאן בשבילכם.
          </p>

          <div className={styles.methods}>
            <a
              href={whatsappLink("היי, אשמח לקבל הצעת מחיר לשירותי ניקיון")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.method}
            >
              <span className={`${styles.mIcon} ${styles.wa}`}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 1.6a7.4 7.4 0 1 1-3.9 13.7l-.3-.2-2.7.7.7-2.6-.2-.3A7.4 7.4 0 0 1 12 4.6Zm4.1 9.4c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.5-.2-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.4.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z" />
                </svg>
              </span>
              <span>
                <span className={styles.mLabel}>וואטסאפ</span>
                <span className={styles.mVal} dir="ltr">{site.phoneDisplay}</span>
              </span>
            </a>

            <a href={`tel:${site.phoneTel}`} className={styles.method}>
              <span className={`${styles.mIcon} ${styles.grad}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span>
                <span className={styles.mLabel}>טלפון</span>
                <span className={styles.mVal} dir="ltr">{site.phoneDisplay}</span>
              </span>
            </a>

            <a href={`mailto:${site.email}`} className={styles.method}>
              <span className={`${styles.mIcon} ${styles.grad}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 6 10 7L22 6" />
                </svg>
              </span>
              <span>
                <span className={styles.mLabel}>אימייל</span>
                <span className={styles.mVal} dir="ltr">{site.email}</span>
              </span>
            </a>
          </div>
        </div>

        <div data-reveal data-delay={120}>
          <form className={styles.form} onSubmit={onSubmit}>
            <h3 className={styles.formTitle}>קבלת הצעת מחיר</h3>
            <p className={styles.formSub}>מלאו את הפרטים ונחזור אליכם בהקדם</p>

            <div className={styles.field}>
              <label htmlFor="c-name" className={styles.label}>שם מלא</label>
              <input id="c-name" name="name" required placeholder="ישראל ישראלי" className={styles.input} autoComplete="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="c-phone" className={styles.label}>טלפון</label>
              <input id="c-phone" name="phone" type="tel" required placeholder="050-0000000" className={styles.input} autoComplete="tel" />
            </div>
            <div className={styles.field}>
              <label htmlFor="c-service" className={styles.label}>סוג השירות</label>
              <select
                id="c-service"
                name="service"
                className={styles.input}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="c-msg" className={styles.label}>הודעה (אופציונלי)</label>
              <textarea id="c-msg" name="message" rows={3} placeholder="ספרו לנו על הנכס והצרכים שלכם" className={styles.textarea} />
            </div>

            <button type="submit" className={styles.submit}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm4.1 11c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.5-.2-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.4.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z" />
              </svg>
              שליחה בוואטסאפ
            </button>
            <p className={styles.note}>שירות בכל הארץ · זמינות 24/7 · הצעת מחיר ללא התחייבות</p>
          </form>
        </div>
      </div>
    </section>
  );
}
