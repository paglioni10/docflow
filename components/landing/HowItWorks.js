'use client';

import { useEffect, useRef, useState } from 'react';
import { ClipboardList, Wand2, FileCheck } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Escolha e responda',
    description: 'Selecione o tipo de documento e responda perguntas simples sobre seu negócio. Sem linguagem técnica.',
  },
  {
    icon: Wand2,
    number: '02',
    title: 'IA gera o documento',
    description: 'Nossa IA cria o documento personalizado com cláusulas específicas para o seu tipo de negócio.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Edite e envie',
    description: 'Revise, edite se necessário e envie para o cliente assinar digitalmente. Tudo em um só lugar.',
  },
];

export default function HowItWorks() {
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
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <span className={styles.label}>Como funciona</span>
        <h2 className={styles.title}>Simples como deveria ser.</h2>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={styles.iconWrap}>
                <step.icon size={28} />
              </div>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
