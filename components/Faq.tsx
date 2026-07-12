import SectionHead from "./SectionHead";
import { faqItems } from "@/lib/faq";
import styles from "./Faq.module.css";

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className={`container ${styles.section}`}>
      <SectionHead
        eyebrow="שאלות נפוצות"
        title="כל מה שרציתם לדעת"
        subtitle="לא מצאתם תשובה? צרו קשר ונשמח לעזור"
      />
      <div className={styles.list}>
        {faqItems.map((f, i) => (
          <details className={styles.item} key={f.q} data-reveal data-delay={i * 60}>
            <summary className={styles.q}>
              <span>{f.q}</span>
              <span className={styles.chevron} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className={styles.a}>{f.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
