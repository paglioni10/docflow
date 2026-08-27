'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, Clock, Plus } from 'lucide-react';
import { mockDocuments, documentTypes } from '@/data/mock';
import styles from './page.module.css';

export default function DashboardPage() {
  const [user, setUser] = useState({ name: '' });

  useEffect(() => {
    const stored = localStorage.getItem('docflow_user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const totalDocs = mockDocuments.length;
  const signedDocs = mockDocuments.filter(d => d.status === 'signed').length;
  const pendingDocs = mockDocuments.filter(d => d.status === 'pending').length;

  const stats = [
    { label: 'Documentos', value: totalDocs, icon: FileText, color: '#3B82F6' },
    { label: 'Assinados', value: signedDocs, icon: CheckCircle2, color: '#34D399' },
    { label: 'Pendentes', value: pendingDocs, icon: Clock, color: '#FBBF24' },
  ];

  const quickActions = documentTypes.slice(0, 4);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.greeting}>
            Olá, {user.name?.split(' ')[0] || 'Usuário'}!
          </h1>
          <p className={styles.subgreeting}>
            Gere seu próximo documento em minutos.
          </p>
        </div>
        <Link href="/dashboard/novo" className={styles.newBtn}>
          <Plus size={18} />
          Novo documento
        </Link>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: `${stat.color}15`, color: stat.color }}>
              <stat.icon size={20} />
            </div>
            <div>
              <div className={styles.statValue} style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Criar documento</h2>
      <div className={styles.actionsGrid}>
        {quickActions.map((doc) => (
          <Link
            key={doc.id}
            href="/dashboard/novo"
            className={styles.actionCard}
          >
            <div
              className={styles.actionIcon}
              style={{ background: doc.color }}
            />
            <div>
              <div className={styles.actionName}>{doc.shortName}</div>
              <div className={styles.actionSub}>{doc.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.recentHeader}>
        <h2 className={styles.sectionTitle}>Documentos recentes</h2>
        <Link href="/dashboard/documentos" className={styles.viewAll}>
          Ver todos →
        </Link>
      </div>
      <div className={styles.recentList}>
        {mockDocuments.slice(0, 4).map((doc) => {
          const statusMap = {
            draft: { label: 'Rascunho', color: '#94A3B8' },
            pending: { label: 'Aguardando', color: '#FBBF24' },
            signed: { label: 'Assinado', color: '#34D399' },
            expired: { label: 'Vencido', color: '#F87171' },
          };
          const st = statusMap[doc.status];
          return (
            <Link
              key={doc.id}
              href={`/dashboard/editor/${doc.id}`}
              className={styles.recentItem}
            >
              <div className={styles.recentIcon}>
                <FileText size={18} />
              </div>
              <div className={styles.recentInfo}>
                <div className={styles.recentTitle}>{doc.title}</div>
                <div className={styles.recentMeta}>
                  {doc.client && `${doc.client} · `}{doc.createdAt}
                </div>
              </div>
              <span
                className={styles.statusBadge}
                style={{ background: `${st.color}15`, color: st.color }}
              >
                <span className={styles.statusDot} style={{ background: st.color }} />
                {st.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
