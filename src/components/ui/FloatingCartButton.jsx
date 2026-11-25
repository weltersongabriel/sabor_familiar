// Sabor Familiar - Floating Cart Button (Desktop)
// Botão flutuante que mostra itens e total, abre a página do carrinho
import { motion } from 'framer-motion';
import { FiShoppingBag, FiX } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const ORANGE = '#E07020';
const ORANGE_HOVER = '#d0651a';

export default function FloatingCartButton({ onClick }) {
  const { itemCount, total, formatPrice } = useCart();

  if (itemCount === 0) return null;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 lg:block hidden"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.3 }}
    >
      <motion.button
        onClick={onClick}
        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-warm-lg shadow-[#E07020]/40 transition-all duration-300"
        style={{ backgroundColor: ORANGE }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = ORANGE_HOVER; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ORANGE; }}
        whileHover={{ scale: 1.03, boxShadow: '0 12px 40px -8px rgba(224, 112, 32, 0.5)' }}
        whileTap={{ scale: 0.97 }}
        aria-label={`Ver pedido: ${itemCount} itens, total ${formatPrice(total)}`}
      >
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <FiShoppingBag className="w-5 h-5 text-white" aria-hidden="true" />
        </div>
        <div className="text-left min-w-[180px]">
          <p className="text-white text-sm font-medium leading-tight">
            {itemCount} {itemCount === 1 ? 'item' : 'itens'} no pedido
          </p>
          <p className="text-white font-bold text-lg">{formatPrice(total)}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.button>

      {/* Pulse ring quando tem itens */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ backgroundColor: ORANGE }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </motion.div>
  );
}