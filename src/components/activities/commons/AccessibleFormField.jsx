import React from 'react';
import MarkdownToolbar from './MarkdownToolbar';
import './AccessibleFormField.css';

function AccessibleFormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
  rows,
  children,
  className = '',
  showMarkdownToolbar = false,
  ...props
}) {
  const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${fieldId}-error` : undefined;
  const helpId = helpText ? `${fieldId}-help` : undefined;

  const commonProps = {
    id: fieldId,
    value,
    onChange,
    placeholder,
    required,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': [errorId, helpId].filter(Boolean).join(' ') || undefined,
    className: `form-field__input ${error ? 'form-field__input--error' : ''} ${className}`,
    ...props
  };

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <div className="form-field__textarea-wrapper">
          {showMarkdownToolbar && (
            <MarkdownToolbar 
              targetId={fieldId}
              onInsert={(newValue) => {
                const event = { target: { value: newValue } };
                onChange(event);
              }}
            />
          )}
          <textarea 
            {...commonProps} 
            rows={rows || 4}
            className={`form-field__input ${showMarkdownToolbar ? 'form-field__input--with-toolbar' : ''} ${error ? 'form-field__input--error' : ''} ${className}`}
          />
        </div>
      );
    }
    return <input type={type} {...commonProps} />;
  };

  return (
    <div className="form-field">
      <label htmlFor={fieldId} className="form-field__label">
        {label}
        {required && <span className="form-field__required" aria-label="required">*</span>}
      </label>
      
      {helpText && (
        <div id={helpId} className="form-field__help">
          {helpText}
        </div>
      )}
      
      <div className="form-field__input-wrapper">
        {children || renderInput()}
      </div>
      
      {error && (
        <div id={errorId} className="form-field__error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default AccessibleFormField;
