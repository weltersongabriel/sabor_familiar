// Sabor Familiar - Produto Carousel
// Carrossel horizontal de cards de produto - APENAS SALGADOS
// Visual moderno, melhor usabilidade
import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SALGADOS } from '../../data/salgados';
import { useCart } from '../../context/CartContext';
import ProdutoCard from './ProdutoCard';

const ARROW_COLOR = '#F5B400';
const ARROW_HOVER = '#e0a100';
const ARROW_DISABLED = '#e8d5a0';

// Filtrar apenas salgados (fritos, assados, mini) - sem doces, bebidas, combos
const SALGADOS_ONLY = SALGADOS.filter(s =>
  ['fritos', 'assados', 'mini'].includes(s.category)
);

export default function ProdutoCarousel({ onOpenCartPage }) {
  const { addItem } = useCart();
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(5);
  const [cardWidth, setCardWidth] = useState(280);

  // Scroll suave para o carrossel
  const scrollCarousel = useCallback((direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = cardWidth + 24; // card width + gap
    const newScroll = direction === 'left'
      ? Math.max(0, carousel.scrollLeft - scrollAmount * cardsPerView)
      : Math.min(maxScroll, carousel.scrollLeft + scrollAmount * cardsPerView);

    carousel.scrollTo({ left: newScroll, behavior: 'smooth' });
  }, [cardWidth, cardsPerView, maxScroll]);

  // Atualiza métricas do carrossel
  const updateMetrics = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector('[data-product-card]');
    if (firstCard) {
      const style = window.getComputedStyle(firstCard);
      const width = firstCard.offsetWidth + (parseInt(style.marginRight) || 24);
      setCardWidth(width);
    }

    setMaxScroll(carousel.scrollWidth - carousel.clientWidth);
    setScrollPosition(carousel.scrollLeft);

    // Calcula cards por view baseado na largura
    const containerWidth = carousel.clientWidth;
    const approxCardWidth = 280 + 24; // card + gap
    const visible = Math.max(1, Math.floor(containerWidth / approxCardWidth));
    setCardsPerView(Math.min(visible, 5));
  }, []);

  // Listener de scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      setScrollPosition(carousel.scrollLeft);
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    updateMetrics();

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
    };
  }, [updateMetrics]);

  // Verifica se setas devem estar desabilitadas
  const isAtStart = scrollPosition <= 10;
  const isAtEnd = scrollPosition >= maxScroll - 10;

  return (
    <section id="cardapio" className="section bg-cream-50" aria-labelledby="cardapio-title">
      <div className="container">
        {/* Header da seção */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Nosso Cardápio
          </span>
          <h2 id="cardapio-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4 font-bold">
            Salgados feitos fresquinho para sua encomenda
          </h2>
          <p className="text-chocolate-600 text-lg">
            Escolha seus favoritos, ajuste as quantidades e finalize pelo WhatsApp.
            Tudo preparado no dia com ingredientes da feira.
          </p>
        </motion.div>

        {/* Filtros rápidos por categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-8" role="group" aria-label="Filtrar por tipo de salgado">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'fritos', label: 'Fritos' },
            { id: 'assados', label: 'Assados' },
            { id: 'mini', label: 'Mini (Cento)' },
          ].map((cat) => (
            <button
              key={cat.id}
              className="px-4 py-2 rounded-full bg-white border border-chocolate-200 text-chocolate-700 text-sm font-medium hover:border-gold-400 hover:text-gold-600 hover:bg-gold-50 transition-all"
              onClick={() => filterByCategory(cat.id)}
              aria-pressed={false}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carrossel Horizontal */}
        <div role="list" aria-label="Salgados disponíveis">
          {SALGADOS_ONLY.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg className="w-16 h-16 text-chocolate-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-chocolate-700 text-lg font-medium mb-2">Nenhum salgado cadastrado</h3>
              <p className="text-chocolate-400">Adicione produtos em src/data/salgados.js</p>
            </motion.div>
          ) : (
            <>
              {/* Seta Esquerda */}
              <motion.button
                onClick={() => scrollCarousel('left')}
                disabled={isAtStart}
                className={`hidden lg:flex absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isAtStart
                    ? `bg-[${ARROW_DISABLED}] cursor-not-allowed opacity-50`
                    : `bg-[${ARROW_COLOR}] hover:bg-[${ARROW_HOVER}] text-white`
                }`}
                aria-label="Salgados anteriores"
                aria-disabled={isAtStart}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: isAtStart ? ARROW_DISABLED : ARROW_COLOR }}
              >
                <FiChevronLeft className="w-6 h-6 stroke-[3px]" aria-hidden="true" style={{ color: isAtStart ? '#999' : 'white' }} />
              </motion.button>

              {/* Carrossel Container */}
              <div
                ref={carouselRef}
                id="salgaos-carousel"
                className="relative flex gap-6 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 lg:px-[60px]"
                role="list"
                aria-label="Salgados disponíveis"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  scrollBehavior: 'smooth',
                }}
              >
                {SALGADOS_ONLY.map((product, index) => (
                  <motion.div
                    key={product.id}
                    data-product-card
                    data-category={product.category}
                    className="flex-shrink-0 snap-start"
                    style={{ minWidth: '280px', maxWidth: '300px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    role="listitem"
                  >
                    <ProdutoCard
                      product={product}
                      onAdd={addItem}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Seta Direita */}
              <motion.button
                onClick={() => scrollCarousel('right')}
                disabled={isAtEnd}
                className={`hidden lg:flex absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isAtEnd
                    ? `bg-[${ARROW_DISABLED}] cursor-not-allowed opacity-50`
                    : `bg-[${ARROW_COLOR}] hover:bg-[${ARROW_HOVER}] text-white`
                }`}
                aria-label="Próximos salgados"
                aria-disabled={isAtEnd}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: isAtEnd ? ARROW_DISABLED : ARROW_COLOR }}
              >
                <FiChevronRight className="w-6 h-6 stroke-[3px]" aria-hidden="true" style={{ color: isAtEnd ? '#999' : 'white' }} />
              </motion.button>

              {/* Indicador mobile de scroll */}
              <div className="lg:hidden flex justify-center gap-2 mt-4">
                {Array.from({ length: Math.max(1, Math.ceil(SALGADOS_ONLY.length / 1.5)) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const carousel = carouselRef.current;
                      if (carousel) {
                        const cardW = cardWidth || 280;
                        carousel.scrollTo({ left: i * cardW * 1.5, behavior: 'smooth' });
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.abs(scrollPosition - (i * cardWidth * 1.5)) < cardWidth
                        ? 'bg-gold-500 w-6'
                        : 'bg-chocolate-200 hover:bg-chocolate-300'
                    }`}
                    aria-label={`Grupo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Barra de carrinho mobile */}
        <CartBar onOpenCartPage={onOpenCartPage} />
      </div>
    </section>
  );
}

// Função para filtrar por categoria (simples scroll para a seção)
function filterByCategory(categoryId) {
  const carousel = document.getElementById('salgaos-carousel');
  if (!carousel) return;

  if (categoryId === 'all') {
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
    return;
  }

  // Encontrar primeiro item da categoria
  const firstItem = carousel.querySelector(`[data-category="${categoryId}"]`);
  if (firstItem) {
    firstItem.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }
}

// Barra fixa do carrinho no mobile
function CartBar({ onOpenCartPage }) {
  const { itemCount, total, formatPrice } = useCart();

  if (itemCount === 0) return null;

  return (
    <motion.div
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-chocolate-100 p-4 shadow-warm-lg z-40 safe-area-bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      role="region"
      aria-label="Resumo do carrinho"
    >
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-chocolate-600">
            {itemCount} {itemCount === 1 ? 'item' : 'itens'} no carrinho
          </p>
          <p className="text-lg font-bold text-chocolate-800">
            {formatPrice(total)}
          </p>
        </div>
        <button
          onClick={onOpenCartPage}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E07020] text-white font-semibold text-base hover:bg-[#d0651a] active:bg-[#c05a16] transition-colors shadow-lg shadow-[#E07020]/30 flex items-center justify-center gap-2 min-h-[48px]"
        >
          Ver Pedido
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}