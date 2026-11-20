// Sabor Familiar - Textarea Component
import { forwardRef, useId } from 'react';

const Textarea = forwardRef(
  (
    {
      label,
      error,
      hint,
      required = false,
      disabled = false,
      className = '',
      id: providedId,
      rows = 3,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const hintId = `${id}-hint`;
    const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="label">
            {label} {required && <span className="text-warm-red-500" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          aria-required={required}
          rows={rows}
          className={`input resize-y min-h-[80px] ${error ? 'input-error' : ''} ${disabled ? 'bg-chocolate-50 cursor-not-allowed' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-warm-red-600 flex items-center gap-1" role="alert">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-sm text-chocolate-400">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;