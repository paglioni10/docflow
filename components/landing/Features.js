'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Sparkles, Edit3, PenTool, LayoutDashboard, FileDown, Shield
} from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: Sparkles,
    title: 'Geração por IA',
    description: 'Documentos gerados do zero por inteligência artificial, com cláusulas específicas para cada tipo de negócio.',
    color: '#5EEAD4',
  },
  {
    icon: Edit3,
    title: 'Editor Online',
    description: 'Revise e edite o documento direto na plataforma. Regenere seções específicas se necessário.',
    color: '#3B82F6',
  },
  {
    icon: PenTool,
    title: 'Assinatura Digital',
    description: 'Envie o documento para o cliente assinar digitalmente. Notificação automática quando assinar.',
    color: '#A78BFA',
  },
  {
    icon: LayoutDashboard,
    title: 'Painel de Controle',
    description: 'Todos os seus documentos em um só lugar. Acompanhe status, vencimentos e histórico.',
    color: '#FBBF24',
  },
  {
    icon: FileDown,
    title: 'Exportação PDF',
    description: 'Exporte qualquer documento em PDF com formatação profissional, pronto para imprimir.',
    color: '#F87171',
  },
  {
    icon: Shield,
    title: 'Conforme LGPD',
    description: 'Documentos com cláusulas de proteção de dados. Ficha de cadastro com consentimento incluso.',
    color: '#34D399',
  },
];

export default function Features() {
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
    <section className={styles.section} id="recursos" ref={ref}>
      <div className={styles.container}>
        <span className={styles.label}>Recursos</span>
        <h2 className={styles.title}>Tudo que seu negócio precisa.</h2>
        <p className={styles.subtitle}>
          Do formulário à assinatura, em uma única plataforma.
        </p>

        <div className={styles.grid}>
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`${styles.card} ${visible ? styles.visible : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className={styles.iconWrap}
                style={{ background: `${feat.color}15`, color: feat.color }}
              >
                <feat.icon size={24} />
              </div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
