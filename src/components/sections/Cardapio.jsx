// Sabor Familiar - Cardápio/Encomendas Section (iFood style)
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiChevronRight, FiStar, FiTag } from 'react-icons/fi';
import { CATEGORIES, SALGADOS, getSalgadosByCategory, searchSalgados } from '../../data/salgados';
import { CONFIG } from '../../config';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Modal from '../ui/Modal';
import QuantityControl from '../ui/QuantityControl';
import Textarea from '../ui/Textarea';

export default function Cardapio() {
  const { addItem, itemCount } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [productNotes, setProductNotes] = useState('');

  // Filter products
  const filteredProducts = useMemo(() => {
    let products = getSalgadosByCategory(activeCategory);
    if (searchQuery.trim()) {
      products = searchSalgados(searchQuery);
    }
    return products;
  }, [activeCategory, searchQuery]);

  // Handle adding to cart
  const handleAddToCart = (product) => {
    addItem(product, productQuantity, productNotes);
    setProductQuantity(1);
    setProductNotes('');
    setSelectedProduct(null);
  };

  // Handle quick add from card
  const handleQuickAdd = (product) => {
    addItem(product, 1, '');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getUnitLabel = (unit) => {
    if (unit.includes('cento')) return '/ cento';
    if (unit.includes('garrafa')) return '/ garrafa';
    if (unit.includes('lata')) return '/ lata';
    if (unit.includes('combo')) return '/ combo';
    return `/ ${unit}`;
  };

  return (
    <section id="cardapio" className="section bg-cream-50" aria-labelledby="cardapio-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Nosso Cardápio
          </span>
          <h2 id="cardapio-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            Feito fresquinho para sua encomenda
          </h2>
          <p className="text-chocolate-600 text-lg">
            Escolha seus favoritos, ajuste as quantidades e finalize pelo WhatsApp.
            Tudo preparado no dia com ingredientes da feira.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-chocolate-400" aria-hidden="true" />
            <Input
              type="search"
              placeholder="Buscar salgados, doces, bebidas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
              aria-label="Buscar no cardápio"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-chocolate-400 hover:text-chocolate-600"
                aria-label="Limpar busca"
              >
                <FiX className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Chips */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide"
            role="tablist"
            aria-label="Categorias do cardápio"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-chocolate-800 text-cream-100 shadow-gold'
                    : 'bg-white text-chocolate-600 hover:bg-chocolate-50 border border-chocolate-200'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">{category.icon}</span>
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-label={`${CATEGORIES.find(c => c.id === activeCategory)?.label || 'Todos'} produtos`}
        >
          {filteredProducts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FiTag className="w-16 h-16 text-chocolate-200 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-chocolate-700 text-lg font-medium mb-2">Nenhum item encontrado</h3>
              <p className="text-chocolate-400">Tente outra busca ou categoria</p>
            </motion.div>
          ) : (
            <motion.ul
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
              role="list"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {filteredProducts.map((product, index) => (
                <motion.li
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <ProductCard
                    product={product}
                    onQuickAdd={handleQuickAdd}
                    onDetailClick={() => {
                      setSelectedProduct(product);
                      setProductQuantity(1);
                      setProductNotes('');
                    }}
                    formatPrice={formatPrice}
                    getUnitLabel={getUnitLabel}
                  />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>

        {/* Cart Summary Bar - Mobile */}
        <motion.div
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-chocolate-100 p-4 shadow-warm-lg z-40 safe-area-bottom"
          initial={{ y: 100 }}
          animate={{ y: itemCount > 0 ? 0 : 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-chocolate-600">
                {itemCount} {itemCount === 1 ? 'item' : 'itens'} no carrinho
              </p>
            </div>
            <Button variant="primary" size="lg" onClick={() => document.getElementById('cart-drawer')?.focus()} className="w-full sm:w-auto">
              Ver Carrinho
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedProduct(null)}
            title={selectedProduct.name}
            size="lg"
            aria-labelledby="product-modal-title"
          >
            <div className="space-y-6">
              {/* Product Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {selectedProduct.popular && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-warm-red-500 text-white text-xs font-medium">
                      <FiStar className="w-3 h-3" aria-hidden="true" />
                      Mais pedido
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <p className="text-chocolate-600 leading-relaxed">{selectedProduct.description}</p>
                {selectedProduct.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProduct.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price & Quantity */}
              <div className="flex items-center justify-between gap-4 p-4 bg-chocolate-50 rounded-2xl">
                <div>
                  <p className="text-2xl font-bold text-chocolate-800">{formatPrice(selectedProduct.price)}</p>
                  <p className="text-sm text-chocolate-500">{getUnitLabel(selectedProduct.unit)}</p>
                </div>
                <QuantityControl
                  quantity={productQuantity}
                  onIncrement={() => setProductQuantity(productQuantity + 1)}
                  onDecrement={() => setProductQuantity(productQuantity - 1)}
                  min={1}
                  max={999}
                  size="lg"
                  showLabel
                  label="Quantidade"
                />
              </div>

              {/* Notes */}
              <Textarea
                label="Observações (opcional)"
                value={productNotes}
                onChange={(e) => setProductNotes(e.target.value)}
                placeholder="Ex: sem cebola, bem passados, sem pimenta..."
                rows={2}
              />

              {/* Add Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handleAddToCart(selectedProduct)}
                rightIcon={<FiChevronRight className="w-5 h-5" aria-hidden="true" />}
              >
                Adicionar ao pedido
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}

// Product Card Component
function ProductCard({ product, onQuickAdd, onDetailClick, formatPrice, getUnitLabel }) {
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Check if item is in cart (simplified - would need cart context)
  // For now, we'll use local state for demo

  const handleAdd = (e) => {
    e.stopPropagation();
    setShowQuantity(true);
    setQuantity(1);
  };

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(q => q - 1);
    else {
      setShowQuantity(false);
      onQuickAdd(product);
    }
  };

  return (
    <article className="card-interactive group">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.popular && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-warm-red-500 text-white text-xs font-medium">
              <FiStar className="w-3 h-3" aria-hidden="true" />
              Top
            </span>
          </div>
        )}
        {/* Quick add button overlay */}
        {!showQuantity && (
          <div className="absolute inset-0 bg-chocolate-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              onClick={handleAdd}
              className="w-14 h-14 rounded-full bg-white text-chocolate-800 font-bold text-2xl shadow-warm-lg hover:bg-cream-100 transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label={`Adicionar ${product.name} ao pedido`}
            >
              +
            </motion.button>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-semibold text-chocolate-800 truncate">{product.name}</h3>
            <p className="text-sm text-chocolate-500 line-clamp-2 mt-1">{product.description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-chocolate-800">{formatPrice(product.price)}</span>
            <span className="text-sm text-chocolate-400">{getUnitLabel(product.unit)}</span>
          </div>

          {/* Quantity control when added */}
          <AnimatePresence>
            {showQuantity && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-2 bg-white border border-chocolate-200 rounded-xl px-3 py-1"
              >
                <button
                  onClick={handleDecrement}
                  className="p-1.5 rounded-lg text-chocolate-600 hover:bg-chocolate-100 transition-colors"
                  aria-label="Diminuir"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
                <span className="w-8 text-center font-semibold text-chocolate-800">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="p-1.5 rounded-lg text-chocolate-600 hover:bg-chocolate-100 transition-colors"
                  aria-label="Aumentar"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detail button */}
        <button
          onClick={onDetailClick}
          className="w-full py-2 text-sm font-medium text-chocolate-600 hover:text-warm-red-500 transition-colors flex items-center justify-center gap-1"
        >
          Ver detalhes
          <FiChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

