import { site, whatsappLink } from "@/lib/site";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("היי, אשמח לקבל הצעת מחיר לשירותי ניקיון")}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label={`שליחת הודעת וואטסאפ ל${site.name}`}
    >
      <span className={styles.ring} aria-hidden="true" />
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 1.6a7.4 7.4 0 1 1-3.9 13.7l-.3-.2-2.7.7.7-2.6-.2-.3A7.4 7.4 0 0 1 12 4.6Zm4.1 9.4c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.5-.2-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 4 3.4.5.2 1 .3 1.3.4.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z" />
      </svg>
    </a>
  );
}
