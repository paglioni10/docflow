import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          IA para pequenos negócios
        </div>

        <h1 className={styles.title}>
          Documentos profissionais
          <br />
          <span className={styles.highlight}>gerados em minutos.</span>
        </h1>

        <p className={styles.subtitle}>
          Contratos, propostas, termos e mais — criados por IA,
          personalizados para o seu negócio.
        </p>

        <div className={styles.ctas}>
          <Link href="/cadastro" className={styles.ctaPrimary}>
            Começar grátis <ArrowRight size={18} />
          </Link>
          <Link href="/dashboard" className={styles.ctaSecondary}>
            Ver demonstração
          </Link>
        </div>

        <div className={styles.segments}>
          {['Clínicas', 'Academias', 'Pet Shops', 'Consultorias', 'Reformas'].map((seg) => (
            <span key={seg} className={styles.segmentTag}>
              <span className={styles.segmentDot} />
              {seg}
            </span>
          ))}
          <span className={styles.segmentTag}>+30 segmentos</span>
        </div>
      </div>
    </section>
  );
}
