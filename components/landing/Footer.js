import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo variant="dark" />
            <p className={styles.brandDesc}>
              Documentos profissionais gerados por IA,
              personalizados para o seu negócio.
            </p>
          </div>

          <div className={styles.linksGroup}>
            <div className={styles.linkCol}>
              <h4 className={styles.linkTitle}>Produto</h4>
              <a href="#recursos" className={styles.link}>Recursos</a>
              <a href="#planos" className={styles.link}>Planos</a>
              <a href="#segmentos" className={styles.link}>Segmentos</a>
              <Link href="/dashboard" className={styles.link}>Dashboard</Link>
            </div>
            <div className={styles.linkCol}>
              <h4 className={styles.linkTitle}>Legal</h4>
              <Link href="/termos" className={styles.link}>Termos de Uso</Link>
              <Link href="/privacidade" className={styles.link}>Privacidade</Link>
              <Link href="/lgpd" className={styles.link}>LGPD</Link>
            </div>
            <div className={styles.linkCol}>
              <h4 className={styles.linkTitle}>Contato</h4>
              <span className={styles.link}>contato@docflow.com.br</span>
              <span className={styles.link}>São Paulo, SP</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 DocFlow. Todos os direitos reservados.
          </p>
          <p className={styles.disclaimer}>
            Este produto é um apoio à gestão documental. Não substitui consultoria jurídica profissional.
          </p>
        </div>
      </div>
    </footer>
  );
}
