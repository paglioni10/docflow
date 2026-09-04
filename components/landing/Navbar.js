'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Logo variant="light" />
        </a>

        <div className={`${styles.links} ${mobileOpen ? styles.mobileOpen : ''}`}>
          <a href="#recursos" className={styles.link}>Recursos</a>
          <a href="#segmentos" className={styles.link}>Segmentos</a>
          <a href="#planos" className={styles.link}>Planos</a>
          <Link href="/login" className={styles.link}>Entrar</Link>
          <Link href="/cadastro" className={styles.cta}>Começar grátis</Link>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
