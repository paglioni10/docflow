'use client';

import { useEffect, useRef, useState } from 'react';
import { businessTypes } from '@/data/mock';
import styles from './Segments.module.css';

export default function Segments() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="segmentos" ref={ref}>
      <div className={styles.container}>
        <span className={styles.label}>Segmentos</span>
        <h2 className={styles.title}>Para todo tipo de negócio.</h2>
        <p className={styles.subtitle}>
          De clínicas a consultorias, nossa IA entende as particularidades de cada segmento.
        </p>

        <div className={styles.grid}>
          {businessTypes.map((biz, i) => (
            <div
              key={biz.id}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={styles.emoji}>{biz.icon}</span>
              <h3 className={styles.cardTitle}>{biz.name}</h3>
              <p className={styles.cardDesc}>{biz.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
