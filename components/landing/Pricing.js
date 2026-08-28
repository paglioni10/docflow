'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { pricingPlans } from '@/data/mock';
import styles from './Pricing.module.css';

export default function Pricing() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="planos" ref={ref}>
      <div className={styles.container}>
        <span className={styles.label}>Planos</span>
        <h2 className={styles.title}>Preço justo, sem surpresas.</h2>
        <p className={styles.subtitle}>
          Comece com um documento avulso ou escolha o plano ideal para o seu negócio.
        </p>

        <div className={styles.grid}>
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''} ${visible ? styles.visible : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <span className={styles.popular}>Mais popular</span>
              )}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.currency}>R$</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <p className={styles.planDesc}>{plan.description}</p>

              <ul className={styles.features}>
                {plan.features.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/cadastro"
                className={plan.highlighted ? styles.ctaPrimary : styles.ctaOutline}
              >
                {plan.id === 'avulso' ? 'Gerar documento' : 'Começar agora'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
