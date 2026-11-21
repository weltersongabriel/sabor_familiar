// Sabor Familiar - Produto Card
// Card de produto para o carrossel horizontal
// Com controle de quantidade que substitui o botão "Adicionar"
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const ORANGE = '#E07020';
const ORANGE_HOVER = '#d0651a';
const ORANGE_ACTIVE = '#c05a16';
const YELLOW = '#F5B400';

export default function ProdutoCard({ product, onAdd }) {
  const { items, updateQuantity, formatPrice } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showQtyControl, setShowQtyControl] = useState(false);

  // Verifica se o produto já está no carrinho
  const cartItem = items.find(item => item.id === product.id && item.notes === '');
  const currentQty = cartItem?.quantity || 0;

  // Sincroniza com carrinho
  const handleAdd = useCallback(() => {
    if (currentQty > 0) {
      // Já está no carrinho, mostra controle de quantidade
      setQuantity(currentQty);
      setShowQtyControl(true);
    } else {
      // Adiciona pela primeira vez
      onAdd(product, 1, '');
      setShowQtyControl(true);
      setQuantity(1);
    }
  }, [onAdd, product, currentQty]);

  const handleIncrement = useCallback(() => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    if (currentQty > 0) {
      updateQuantity(product.id, '', newQty);
    } else {
      onAdd(product, newQty, '');
    }
  }, [quantity, currentQty, product.id, onAdd, updateQuantity]);

  const handleDecrement = useCallback(() => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      if (currentQty > 0) {
        updateQuantity(product.id, '', newQty);
      }
    } else {
      // Volta para zero - remove do carrinho
      if (currentQty > 0) {
        updateQuantity(product.id, '', 0);
      }
      setShowQtyControl(false);
      setQuantity(1);
    }
  }, [quantity, currentQty, product.id, updateQuantity]);

  const handleQtyChange = useCallback((e) => {
    const val = parseInt(e.target.value) || 1;
    const clamped = Math.max(1, Math.min(999, val));
    setQuantity(clamped);
    if (currentQty > 0) {
      updateQuantity(product.id, '', clamped);
    } else {
      onAdd(product, clamped, '');
    }
  }, [currentQty, product.id, onAdd, updateQuantity]);

  // Formata preço com unidade
  const getPriceLabel = (price, unit) => {
    if (unit.includes('cento')) return `${formatPrice(price)} / cento`;
    if (unit.includes('garrafa')) return `${formatPrice(price)} / garrafa`;
    if (unit.includes('lata')) return `${formatPrice(price)} / lata`;
    if (unit.includes('combo')) return `${formatPrice(price)} / combo`;
    return `${formatPrice(price)} / ${unit}`;
  };

  // Label da categoria com pin amarelo
  const categoryLabels = {
    fritos: 'Salgados Fritos',
    assados: 'Salgados Assados',
    mini: 'Mini Salgados (Cento)',
    doces: 'Doces',
    bebidas: 'Bebidas',
    combos: 'Combos Especiais',
  };

  return (
    <article className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      {/* Imagem quadrada */}
      <div className="relative aspect-square overflow-hidden bg-chocolate-50">
        <img
          src={product.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
        {product.popular && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-warm-red-500 shadow-sm">
            Mais pedido
          </span>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="p-4 space-y-3">
        {/* Nome do produto */}
        <h3 className="font-bold text-[22px] text-[#222] leading-tight tracking-tight">
          {product.name}
        </h3>

        {/* Categoria com pin amarelo */}
        <div className="flex items-center gap-1.5 text-sm">
          <FiMapPin
            className="w-4 h-4 flex-shrink-0"
            style={{ color: YELLOW }}
            aria-hidden="true"
          />
          <span style={{ color: YELLOW }} className="font-medium">
            {categoryLabels[product.category] || product.category}
          </span>
        </div>

        {/* Preço */}
        <p className="font-semibold text-base text-[#222]">
          {getPriceLabel(product.price, product.unit)}
        </p>

        {/* Botão Adicionar OU Controle de Quantidade */}
        <AnimatePresence mode="wait">
          {!showQtyControl && currentQty === 0 ? (
            <motion.button
              onClick={handleAdd}
              key="add-btn"
              className="w-full h-[60px] rounded-xl font-bold text-base text-white transition-all duration-200 flex items-center justify-center"
              style={{ backgroundColor: ORANGE }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = ORANGE_HOVER}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ORANGE}
              onMouseDown={(e) => e.currentTarget.style.backgroundColor = ORANGE_ACTIVE}
              whileTap={{ scale: 0.98 }}
              aria-label={`Adicionar ${product.name} ao pedido`}
            >
              Adicionar
            </motion.button>
          ) : (
            <motion.div
              key="qty-control"
              initial={{ opacity: 0, scale: 0.95, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="w-full h-[60px] rounded-xl flex items-center justify-center gap-2"
              style={{ backgroundColor: ORANGE }}
            >
              {/* Botão - */}
              <motion.button
                onClick={handleDecrement}
                disabled={quantity <= 1 && currentQty === 0}
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-colors"
                style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.15)')}
                onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)')}
                aria-label="Diminuir quantidade"
                whileTap={{ scale: 0.9 }}
              >
                −
              </motion.button>

              {/* Input numérico editável */}
              <input
                type="number"
                value={quantity}
                onChange={handleQtyChange}
                onBlur={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  const clamped = Math.max(1, Math.min(999, val));
                  setQuantity(clamped);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') e.target.blur();
                }}
                min="1"
                max="999"
                className="w-20 h-12 text-center text-white font-bold text-lg bg-transparent border-0 outline-none focus:ring-0 caret-white"
                style={{ appearance: 'textfield' }}
                aria-label="Quantidade"
                inputMode="numeric"
              />

              {/* Botão + */}
              <motion.button
                onClick={handleIncrement}
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-colors"
                style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.1)'}
                aria-label="Aumentar quantidade"
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}