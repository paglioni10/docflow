import styles from './Input.module.css';

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  options = [],
  variant = 'dark',
  helperText,
  error,
  className = '',
  ...props
}) {
  const inputClasses = [
    styles.input,
    variant === 'light' ? styles.light : '',
    type === 'textarea' ? styles.textarea : '',
    type === 'select' ? styles.select : '',
  ].filter(Boolean).join(' ');

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      );
    }

    if (type === 'select') {
      return (
        <select
          className={inputClasses}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        >
          <option value="">Selecione...</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    );
  };

  return (
    <div className={`${styles.inputGroup} ${className}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {renderInput()}
      {helperText && <span className={styles.helperText}>{helperText}</span>}
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
