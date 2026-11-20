// Sabor Familiar - Quantity Control Component
import { motion } from 'framer-motion';

export default function QuantityControl({
  quantity = 0,
  onIncrement,
  onDecrement,
  min = 0,
  max = 999,
  size = 'md',
  showLabel = false,
  label = 'Quantidade',
  className = '',
  'aria-label': ariaLabel,
}) {
  const sizes = {
    sm: 'h-8 px-2 text-sm',
    md: 'h-10 px-3 text-base',
    lg: 'h-12 px-4 text-lg',
  };

  const btnSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const handleDecrement = () => {
    if (quantity > min) onDecrement();
  };

  const handleIncrement = () => {
    if (quantity < max) onIncrement();
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`} role="group" aria-label={ariaLabel || label}>
      {showLabel && (
        <span className="text-sm font-medium text-chocolate-700 hidden sm:block">
          {label}
        </span>
      )}
      <div className="flex items-center border border-chocolate-200 rounded-xl overflow-hidden bg-white shadow-sm">
        <motion.button
          type="button"
          onClick={handleDecrement}
          disabled={quantity <= min}
          className={`${btnSizes[size]} flex items-center justify-center text-chocolate-600 hover:bg-chocolate-50 active:bg-chocolate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
          aria-label="Diminuir quantidade"
          aria-controls="quantity-value"
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </motion.button>

        <div className="flex items-center justify-center min-w-[3rem]">
          <motion.span
            id="quantity-value"
            className={`font-semibold text-chocolate-800 ${sizes[size]}`}
            aria-live="polite"
            aria-atomic="true"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.15 }}
          >
            {quantity}
          </motion.span>
        </div>

        <motion.button
          type="button"
          onClick={handleIncrement}
          disabled={quantity >= max}
          className={`${btnSizes[size]} flex items-center justify-center text-chocolate-600 hover:bg-chocolate-50 active:bg:bg-chocolate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
          aria-label="Aumentar quantidade"
          aria-controls="quantity-value"
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}