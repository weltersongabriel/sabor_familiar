// Sabor Familiar - Button Component
import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      className = '',
      onClick,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-warm-red-500 text-white hover:bg-warm-red-600 active:bg-warm-red-700 focus-visible:ring-warm-red-500 shadow-lg shadow-warm-red-500/30',
      secondary: 'bg-chocolate-800 text-cream-100 hover:bg-chocolate-700 active:bg-chocolate-600 focus-visible:ring-chocolate-600 shadow-lg shadow-chocolate-800/30',
      gold: 'bg-gold-500 text-chocolate-900 hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-gold-400 shadow-lg shadow-gold',
      outline: 'border-2 border-chocolate-600 text-chocolate-700 hover:bg-chocolate-50 active:bg-chocolate-100 focus-visible:ring-chocolate-400',
      ghost: 'text-chocolate-700 hover:bg-chocolate-100 active:bg-chocolate-200 focus-visible:ring-chocolate-400',
      danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500 shadow-lg shadow-red-500/30',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-1.5',
      md: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-2.5',
      xl: 'px-10 py-5 text-xl gap-3',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Carregando...</span>
          </>
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;