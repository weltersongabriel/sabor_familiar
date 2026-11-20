// Sabor Familiar - Header/Navbar Component
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { CONFIG } from '../../config';
import Button from '../ui/Button';

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount, total, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-chocolate-100'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      <nav className="container" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 lg:gap-3 text-chocolate-800 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 rounded-xl"
            aria-label={`${CONFIG.business.name} - Início`}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-chocolate-800 flex items-center justify-center shadow-warm">
              <span className="font-cursive text-cream-100 text-xl lg:text-2xl font-bold">
                SF
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-cursive text-lg lg:text-xl text-chocolate-800">
                {CONFIG.business.name}
              </span>
              <p className="text-xs text-chocolate-500 font-sans leading-none -mt-1 hidden lg:block">
                {CONFIG.business.slogan}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-chocolate-700 hover:text-warm-red-500 font-medium text-sm transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-warm-red-500 hover:after:w-full after:transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}

            {/* Cart Button Desktop */}
            <button
              onClick={openCart}
              className="relative p-2 rounded-xl text-chocolate-600 hover:bg-chocolate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              aria-label={`Carrinho: ${itemCount} itens, total ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}`}
            >
              <FiShoppingBag className="w-6 h-6" aria-hidden="true" />
              {itemCount > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 w-5 h-5 bg-warm-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  {itemCount > 99 ? '99+' : itemCount}
                </motion.span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-chocolate-600 hover:bg-chocolate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" aria-hidden="true" />
            ) : (
              <FiMenu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden overflow-hidden bg-white border-t border-chocolate-100"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block px-4 py-3 rounded-xl text-chocolate-700 hover:bg-chocolate-50 font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Cart Button Mobile */}
                <button
                  onClick={openCart}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-chocolate-800 text-cream-100 font-medium hover:bg-chocolate-700 transition-colors"
                >
                  <FiShoppingCart className="w-5 h-5" aria-hidden="true" />
                  <span>Ver Carrinho</span>
                  {itemCount > 0 && (
                    <motion.span
                      className="w-6 h-6 bg-warm-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      {itemCount > 99 ? '99+' : itemCount}
                    </motion.span>
                  )}
                </button>

                {/* Contact Info Mobile */}
                <div className="pt-4 border-t border-chocolate-100 space-y-2 text-sm text-chocolate-600">
                  <p className="flex items-center gap-2">
                    <FiHeart className="w-4 h-4 text-warm-red-500" aria-hidden="true" />
                    {CONFIG.business.address}, {CONFIG.business.city}
                  </p>
                  <a
                    href={`tel:${CONFIG.business.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 hover:text-warm-red-500 transition-colors"
                  >
                    <span className="w-4 h-4" aria-hidden="true">📞</span>
                    {CONFIG.business.phone}
                  </a>
                  <a
                    href={`https://instagram.com/${CONFIG.business.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-warm-red-500 transition-colors"
                  >
                    <span className="w-4 h-4" aria-hidden="true">📷</span>
                    {CONFIG.business.instagram}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}