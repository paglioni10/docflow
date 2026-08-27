'use client';

import { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Bold, Italic, Heading1, Heading2, List,
  FileDown, Send, Save, ArrowLeft, CheckCircle2
} from 'lucide-react';
import { mockDocuments, mockGeneratedContract } from '@/data/mock';
import styles from './editor.module.css';

export default function EditorPage() {
  const { id } = useParams();
  const router = useRouter();
  const editorRef = useRef(null);
  const [saved, setSaved] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);
  const [signEmail, setSignEmail] = useState('');
  const [signSent, setSignSent] = useState(false);

  const doc = mockDocuments.find((d) => d.id === id) || {
    id: 'doc-new',
    title: 'Contrato de Prestação de Serviço',
    status: 'draft',
    client: '',
    createdAt: new Date().toISOString().split('T')[0],
  };

  const statusMap = {
    draft: { label: 'Rascunho', color: '#94A3B8' },
    pending: { label: 'Aguardando Assinatura', color: '#FBBF24' },
    signed: { label: 'Assinado', color: '#34D399' },
    expired: { label: 'Vencido', color: '#F87171' },
  };

  const st = statusMap[doc.status] || statusMap.draft;

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleExportPDF = () => {
    const printWindow = window.open('', '_blank');
    const content = editorRef.current?.innerHTML || '';
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${doc.title}</title>
        <style>
          body { font-family: 'Inter', -apple-system, sans-serif; padding: 48px; max-width: 800px; margin: 0 auto; color: #1E293B; line-height: 1.8; }
          h1 { font-size: 1.5rem; margin-bottom: 4px; }
          h2 { font-size: 1.15rem; margin: 24px 0 8px; color: #1E293B; }
          p { margin-bottom: 12px; }
          ul { margin-left: 24px; margin-bottom: 16px; }
          li { margin-bottom: 6px; }
          @media print { body { padding: 24px; } }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleSendSign = () => {
    setSignSent(true);
    setTimeout(() => {
      setShowSignModal(false);
      setSignSent(false);
      setSignEmail('');
    }, 2000);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => router.push('/dashboard/documentos')}>
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className={styles.docTitle}>{doc.title}</h1>
            <div className={styles.docMeta}>
              <span
                className={styles.statusBadge}
                style={{ background: `${st.color}15`, color: st.color }}
              >
                <span className={styles.dot} style={{ background: st.color }} />
                {st.label}
              </span>
              {doc.client && <span className={styles.metaItem}>{doc.client}</span>}
              <span className={styles.metaItem}>{doc.createdAt}</span>
            </div>
          </div>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.actionBtn} onClick={handleSave}>
            <Save size={16} />
            {saved ? 'Salvo!' : 'Salvar'}
          </button>
          <button className={styles.actionBtn} onClick={handleExportPDF}>
            <FileDown size={16} />
            Exportar PDF
          </button>
          <button className={styles.actionBtnPrimary} onClick={() => setShowSignModal(true)}>
            <Send size={16} />
            Enviar para assinatura
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className={styles.toolbar}>
        <button className={styles.toolBtn} onClick={() => execCommand('bold')} title="Negrito">
          <Bold size={16} />
        </button>
        <button className={styles.toolBtn} onClick={() => execCommand('italic')} title="Itálico">
          <Italic size={16} />
        </button>
        <div className={styles.toolDivider} />
        <button className={styles.toolBtn} onClick={() => execCommand('formatBlock', 'h1')} title="Título 1">
          <Heading1 size={16} />
        </button>
        <button className={styles.toolBtn} onClick={() => execCommand('formatBlock', 'h2')} title="Título 2">
          <Heading2 size={16} />
        </button>
        <div className={styles.toolDivider} />
        <button className={styles.toolBtn} onClick={() => execCommand('insertUnorderedList')} title="Lista">
          <List size={16} />
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className={styles.editor}
        contentEditable
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: mockGeneratedContract }}
      />

      {/* Sign Modal */}
      {showSignModal && (
        <div className={styles.modalOverlay} onClick={() => setShowSignModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {!signSent ? (
              <>
                <h3 className={styles.modalTitle}>Enviar para assinatura</h3>
                <p className={styles.modalDesc}>
                  O documento será enviado por e-mail para assinatura digital.
                </p>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>E-mail do signatário</label>
                  <input
                    type="email"
                    className={styles.modalInput}
                    placeholder="cliente@email.com"
                    value={signEmail}
                    onChange={(e) => setSignEmail(e.target.value)}
                  />
                </div>
                <div className={styles.modalActions}>
                  <button
                    className={styles.modalBtnCancel}
                    onClick={() => setShowSignModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className={styles.modalBtnSend}
                    onClick={handleSendSign}
                    disabled={!signEmail}
                  >
                    <Send size={16} /> Enviar
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.modalSuccess}>
                <CheckCircle2 size={48} style={{ color: 'var(--color-success)' }} />
                <h3 className={styles.modalTitle}>Enviado com sucesso!</h3>
                <p className={styles.modalDesc}>
                  O link de assinatura foi enviado para {signEmail}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
