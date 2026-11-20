// Sabor Familiar - Floating WhatsApp Button
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import { CONFIG } from '../../config';

export default function FloatingWhatsApp({
  className = '',
  message = 'Olá! Gostaria de saber mais sobre os salgados e eventos da Sabor Familiar 😊',
}) {
  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 ${className}`}
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.5 }}
      whileHover={{ scale: 1.1, rotate: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center shadow-warm-lg shadow-green-500/40">
        <FiMessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      </div>
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-green-500"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </motion.a>
  );
}