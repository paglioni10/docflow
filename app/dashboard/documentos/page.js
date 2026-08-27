'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, FileText, Filter } from 'lucide-react';
import { mockDocuments, statusLabels } from '@/data/mock';
import styles from './documentos.module.css';

export default function DocumentosPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockDocuments.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.client.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || doc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Documentos</h1>
        <Link href="/dashboard/novo" className={styles.newBtn}>
          + Novo documento
        </Link>
      </div>

      <div className={styles.filters}>
        <div className={styles.searchWrap}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar por título ou cliente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.statusFilters}>
          {['all', 'draft', 'pending', 'signed', 'expired'].map((s) => (
            <button
              key={s}
              className={`${styles.filterBtn} ${statusFilter === s ? styles.filterActive : ''}`}
              onClick={() => setStatusFilter(s)}
            >
              {s === 'all' ? 'Todos' : statusLabels[s].label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.list}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <FileText size={48} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
            <p>Nenhum documento encontrado</p>
          </div>
        ) : (
          filtered.map((doc) => {
            const st = statusLabels[doc.status];
            return (
              <Link
                key={doc.id}
                href={`/dashboard/editor/${doc.id}`}
                className={styles.docRow}
              >
                <div className={styles.docIcon}>
                  <FileText size={18} />
                </div>
                <div className={styles.docInfo}>
                  <div className={styles.docTitle}>{doc.title}</div>
                  <div className={styles.docMeta}>
                    {doc.client && <span>{doc.client}</span>}
                    <span>Criado em {doc.createdAt}</span>
                    {doc.signedAt && <span>Assinado em {doc.signedAt}</span>}
                  </div>
                </div>
                <span
                  className={styles.badge}
                  style={{ background: `${st.color}15`, color: st.color }}
                >
                  <span className={styles.dot} style={{ background: st.color }} />
                  {st.label}
                </span>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
