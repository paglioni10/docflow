import { FileText } from 'lucide-react';

export default function Logo({ size = 'md', variant = 'dark' }) {
  const sizes = {
    sm: { icon: 18, text: '1.1rem' },
    md: { icon: 22, text: '1.35rem' },
    lg: { icon: 28, text: '1.75rem' },
    xl: { icon: 36, text: '2.25rem' },
  };

  const s = sizes[size] || sizes.md;
  const isDark = variant === 'dark';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FileText
          size={s.icon}
          style={{
            color: '#3B82F6',
            filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
          }}
        />
      </div>
      <span
        style={{
          fontSize: s.text,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: isDark ? '#F8FAFC' : '#1E293B',
        }}
      >
        Doc
        <span style={{ color: '#5EEAD4' }}>Flow</span>
      </span>
    </div>
  );
}
