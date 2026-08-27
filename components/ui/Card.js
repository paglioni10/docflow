import styles from './Card.module.css';

export default function Card({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  onClick,
  ...props
}) {
  const classes = [
    styles.card,
    variant !== 'default' ? styles[variant] : '',
    hoverable ? styles.hoverable : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
