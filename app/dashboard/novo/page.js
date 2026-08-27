'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { businessTypes, documentTypes, wizardForms } from '@/data/mock';
import styles from './novo.module.css';

export default function NovoDocumentoPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [formData, setFormData] = useState({});
  const [generating, setGenerating] = useState(false);

  const filteredDocuments = selectedBusiness
    ? documentTypes.filter((d) => d.businessTypes.includes(selectedBusiness))
    : documentTypes;

  const wizardForm = wizardForms['contrato-servico'];
  const formSteps = wizardForm?.steps || [];
  const totalSteps = 2 + formSteps.length + 1; // biz + doc + form steps + review

  const handleFieldChange = (fieldId, value) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const canAdvance = () => {
    if (currentStep === 0) return !!selectedBusiness;
    if (currentStep === 1) return !!selectedDocument;
    return true;
  };

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      router.push('/dashboard/editor/doc-new');
    }, 2500);
  };

  const stepLabels = [
    'Segmento',
    'Documento',
    ...formSteps.map((s) => s.title),
    'Revisão',
  ];

  return (
    <div className={styles.page}>
      {/* Progress bar */}
      <div className={styles.progress}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <div className={styles.stepLabels}>
          {stepLabels.map((label, i) => (
            <span
              key={i}
              className={`${styles.stepLabel} ${i === currentStep ? styles.stepLabelActive : ''} ${i < currentStep ? styles.stepLabelDone : ''}`}
            >
              {i < currentStep ? <Check size={14} /> : i + 1}
              <span className={styles.stepLabelText}>{label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className={styles.stepContent}>
        {/* Step 0: Business Type */}
        {currentStep === 0 && (
          <div className={styles.stepInner}>
            <h2 className={styles.stepTitle}>Qual é o seu segmento?</h2>
            <p className={styles.stepDesc}>Selecione o tipo do seu negócio para personalizar o documento.</p>
            <div className={styles.bizGrid}>
              {businessTypes.map((biz) => (
                <button
                  key={biz.id}
                  className={`${styles.bizCard} ${selectedBusiness === biz.id ? styles.bizCardActive : ''}`}
                  onClick={() => setSelectedBusiness(biz.id)}
                >
                  <span className={styles.bizEmoji}>{biz.icon}</span>
                  <span className={styles.bizName}>{biz.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Document Type */}
        {currentStep === 1 && (
          <div className={styles.stepInner}>
            <h2 className={styles.stepTitle}>Qual documento você precisa?</h2>
            <p className={styles.stepDesc}>Escolha o tipo de documento que deseja gerar.</p>
            <div className={styles.docGrid}>
              {filteredDocuments.map((doc) => (
                <button
                  key={doc.id}
                  className={`${styles.docCard} ${selectedDocument === doc.id ? styles.docCardActive : ''}`}
                  onClick={() => setSelectedDocument(doc.id)}
                >
                  <div className={styles.docCardIcon} style={{ background: doc.color }}>
                    <span style={{ fontSize: '1.2rem' }}>{doc.icon}</span>
                  </div>
                  <div>
                    <div className={styles.docCardName}>{doc.name}</div>
                    <div className={styles.docCardDesc}>{doc.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Form Steps */}
        {currentStep >= 2 && currentStep < 2 + formSteps.length && (
          <div className={styles.stepInner}>
            <h2 className={styles.stepTitle}>{formSteps[currentStep - 2].title}</h2>
            <div className={styles.formGrid}>
              {formSteps[currentStep - 2].fields.map((field) => (
                <div key={field.id} className={styles.formField}>
                  <label className={styles.formLabel}>
                    {field.label}
                    {field.required && <span className={styles.required}>*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      className={styles.formTextarea}
                      placeholder={field.placeholder}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className={styles.formSelect}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className={styles.formInput}
                      placeholder={field.placeholder}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Review Step */}
        {currentStep === totalSteps - 1 && !generating && (
          <div className={styles.stepInner}>
            <h2 className={styles.stepTitle}>Revisão</h2>
            <p className={styles.stepDesc}>Confirme as informações antes de gerar o documento.</p>

            <div className={styles.reviewCard}>
              <div className={styles.reviewRow}>
                <span className={styles.reviewLabel}>Segmento</span>
                <span className={styles.reviewValue}>
                  {businessTypes.find(b => b.id === selectedBusiness)?.name}
                </span>
              </div>
              <div className={styles.reviewRow}>
                <span className={styles.reviewLabel}>Documento</span>
                <span className={styles.reviewValue}>
                  {documentTypes.find(d => d.id === selectedDocument)?.name}
                </span>
              </div>
              {Object.entries(formData).filter(([, v]) => v).map(([key, value]) => {
                const allFields = formSteps.flatMap(s => s.fields);
                const field = allFields.find(f => f.id === key);
                return (
                  <div key={key} className={styles.reviewRow}>
                    <span className={styles.reviewLabel}>{field?.label || key}</span>
                    <span className={styles.reviewValue}>{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Generating animation */}
        {generating && (
          <div className={styles.generating}>
            <Loader2 size={48} className={styles.spinner} />
            <h2 className={styles.genTitle}>Gerando seu documento...</h2>
            <p className={styles.genDesc}>Nossa IA está criando o documento personalizado para o seu negócio.</p>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      {!generating && (
        <div className={styles.nav}>
          <button
            className={styles.navBtnBack}
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            <ArrowLeft size={18} /> Voltar
          </button>

          {currentStep < totalSteps - 1 ? (
            <button
              className={styles.navBtnNext}
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={!canAdvance()}
            >
              Próximo <ArrowRight size={18} />
            </button>
          ) : (
            <button
              className={styles.navBtnGenerate}
              onClick={handleGenerate}
            >
              <Wand2Icon /> Gerar documento
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function Wand2Icon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
      <path d="m14 7 3 3" />
      <path d="M5 6v4" /><path d="M19 14v4" />
      <path d="M10 2v2" /><path d="M7 8H3" />
      <path d="M21 16h-4" /><path d="M11 3H9" />
    </svg>
  );
}
