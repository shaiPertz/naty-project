import styles from "./SectionHead.module.css";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHead({ eyebrow, title, subtitle }: Props) {
  return (
    <div className={styles.head} data-reveal>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
