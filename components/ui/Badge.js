import styles from './Badge.module.css';

export default function Badge({ children, color = '#94A3B8', dot = true }) {
  return (
    <span
      className={styles.badge}
      style={{
        background: `${color}15`,
        color: color,
      }}
    >
      {dot && (
        <span className={styles.dot} style={{ background: color }} />
      )}
      {children}
    </span>
  );
}
