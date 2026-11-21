// Sabor Familiar - Cart Drawer Component
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiX, FiTrash2, FiTruck, FiPackage, FiMapPin, FiClock } from 'react-icons/fi';
import { CONFIG } from '../../config';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import QuantityControl from './QuantityControl';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    customerInfo,
    setCustomerInfo,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    isEmpty,
    formatPrice,
    sendToWhatsApp,
  } = useCart();

  const drawerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event) => setIsDesktop(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      drawerRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  const handleTypeChange = (type) => {
    setCustomerInfo({ type });
    if (type === 'retirada') {
      setCustomerInfo({ address: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name.trim()) return;
    if (!customerInfo.date) return;
    if (!customerInfo.time) return;
    if (customerInfo.type === 'entrega' && !customerInfo.address.trim()) return;
    sendToWhatsApp();
  };

  // Format date for input[type="date"] - min is tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  // Default time: next hour rounded up
  const defaultTime = new Date();
  defaultTime.setHours(defaultTime.getHours() + 1);
  defaultTime.setMinutes(0);
  const defaultTimeStr = defaultTime.toTimeString().slice(0, 5);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeCart}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
      >
        <motion.div
          className="absolute inset-0 bg-chocolate-900/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden="true"
        />

        <motion.div
          ref={drawerRef}
          tabIndex={-1}
          className="w-full h-[90vh] max-h-[90vh] bg-white rounded-t-3xl shadow-warm-lg flex flex-col overflow-hidden md:absolute md:right-0 md:top-0 md:w-[460px] md:h-full md:max-h-full md:rounded-none md:rounded-l-3xl"
          initial={isDesktop ? { x: '100%' } : { y: '100%' }}
          animate={{ x: 0, y: 0 }}
          exit={isDesktop ? { x: '100%' } : { y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-chocolate-100 sticky top-0 bg-white z-10">
            <h2 className="text-xl font-serif font-medium text-chocolate-800">
              Seu Pedido
            </h2>
            <motion.button
              onClick={closeCart}
              className="p-2 rounded-xl text-chocolate-400 hover:bg-chocolate-100 hover:text-chocolate-700 transition-colors"
              aria-label="Fechar carrinho"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX className="w-5 h-5" aria-hidden="true" />
            </motion.button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4">
            {isEmpty ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center">
                <motion.div
                  className="w-20 h-20 rounded-2xl bg-chocolate-100 flex items-center justify-center mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiPackage className="w-10 h-10 text-chocolate-400" aria-hidden="true" />
                </motion.div>
                <h3 className="text-lg font-medium text-chocolate-700 mb-1">Carrinho vazio</h3>
                <p className="text-chocolate-400 text-sm mb-6">Adicione salgados deliciosos ao seu pedido</p>
                <Button variant="primary" onClick={closeCart} className="w-full max-w-xs">
                  Ir ao Cardápio
                </Button>
              </div>
            ) : (
              <>
                <ul className="space-y-3" role="list" aria-label="Itens do pedido">
                  {items.map((item, index) => (
                    <motion.li
                      key={`${item.id}-${item.notes || 'default'}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 p-3 bg-chocolate-50 rounded-2xl"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-chocolate-100">
                        <img
                          src={item.image}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-medium text-chocolate-800 truncate">{item.name}</h4>
                            {item.notes && (
                              <p className="text-xs text-chocolate-500 mt-0.5">
                                {item.notes}
                              </p>
                            )}
                            <p className="text-sm font-semibold text-chocolate-700 mt-1">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                          <motion.button
                            onClick={() => removeItem(item.id, item.notes)}
                            className="p-1.5 rounded-lg text-chocolate-400 hover:bg-chocolate-200 hover:text-warm-red-500 transition-colors flex-shrink-0"
                            aria-label={`Remover ${item.name}`}
                            whileTap={{ scale: 0.8 }}
                          >
                            <FiTrash2 className="w-4 h-4" aria-hidden="true" />
                          </motion.button>
                        </div>
                        <QuantityControl
                          quantity={item.quantity}
                          onIncrement={() => updateQuantity(item.id, item.notes, item.quantity + 1)}
                          onDecrement={() => updateQuantity(item.id, item.notes, item.quantity - 1)}
                          min={1}
                          max={999}
                          size="sm"
                          aria-label={`Quantidade de ${item.name}`}
                        />
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Order Form */}
          {!isEmpty && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-chocolate-100 bg-white space-y-4">
              <h3 className="text-lg font-serif font-medium text-chocolate-800 flex items-center gap-2">
                <FiPackage className="w-5 h-5 text-gold-500" aria-hidden="true" />
                Dados da Encomenda
              </h3>

              <Input
                label="Seu nome *"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ name: e.target.value })}
                placeholder="João Silva"
                required
                autoComplete="name"
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Data de retirada/entrega *"
                  type="date"
                  value={customerInfo.date}
                  onChange={(e) => setCustomerInfo({ date: e.target.value })}
                  min={minDateStr}
                  required
                />
                <Input
                  label="Horário *"
                  type="time"
                  value={customerInfo.time}
                  onChange={(e) => setCustomerInfo({ time: e.target.value })}
                  min="08:00"
                  max="18:00"
                  required
                />
              </div>

              <fieldset className="space-y-2">
                <legend className="label">Tipo de entrega *</legend>
                <div className="grid grid-cols-2 gap-3">
                  <label className="relative">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="retirada"
                      checked={customerInfo.type === 'retirada'}
                      onChange={() => handleTypeChange('retirada')}
                      className="sr-only peer"
                    />
                    <div className={`p-3 rounded-xl border-2 text-center cursor-pointer transition-all ${
                      customerInfo.type === 'retirada'
                        ? 'border-gold-400 bg-gold-50 text-chocolate-800'
                        : 'border-chocolate-200 hover:border-chocolate-300 text-chocolate-600'
                    }`}>
                      <FiPackage className="w-6 h-6 mx-auto mb-1" aria-hidden="true" />
                      <span className="text-sm font-medium">Retirada</span>
                    </div>
                  </label>
                  <label className="relative">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="entrega"
                      checked={customerInfo.type === 'entrega'}
                      onChange={() => handleTypeChange('entrega')}
                      className="sr-only peer"
                    />
                    <div className={`p-3 rounded-xl border-2 text-center cursor-pointer transition-all ${
                      customerInfo.type === 'entrega'
                        ? 'border-gold-400 bg-gold-50 text-chocolate-800'
                        : 'border-chocolate-200 hover:border-chocolate-300 text-chocolate-600'
                    }`}>
                      <FiTruck className="w-6 h-6 mx-auto mb-1" aria-hidden="true" />
                      <span className="text-sm font-medium">Entrega</span>
                    </div>
                  </label>
                </div>
              </fieldset>

              {customerInfo.type === 'entrega' && (
                <div className="space-y-3 animate-fade-in-up">
                  <Input
                    label="Endereço completo *"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ address: e.target.value })}
                    placeholder="Rua, número, bairro, ponto de referência"
                    required
                    autoComplete="street-address"
                  />
                  <p className="text-xs text-chocolate-500 flex items-center gap-1">
                    <FiMapPin className="w-3 h-3" aria-hidden="true" />
                    Taxa de entrega: {formatPrice(CONFIG.order.deliveryFee)}
                    {subtotal >= CONFIG.order.freeDeliveryThreshold && (
                      <span className="text-green-600 font-medium"> (Grátis acima de {formatPrice(CONFIG.order.freeDeliveryThreshold)})</span>
                    )}
                  </p>
                </div>
              )}

              <Textarea
                label="Observações gerais"
                value={customerInfo.notes}
                onChange={(e) => setCustomerInfo({ notes: e.target.value })}
                placeholder="Ex: sem cebola, bem passados, entregar na portaria..."
                rows={2}
              />

              {/* Summary */}
              <div className="bg-chocolate-50 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between text-chocolate-700">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-chocolate-700">
                    <span className="flex items-center gap-1">
                      <FiTruck className="w-4 h-4" aria-hidden="true" />
                      Taxa de entrega
                    </span>
                    <span className="font-medium">{formatPrice(deliveryFee)}</span>
                  </div>
                )}
                {subtotal >= CONFIG.order.freeDeliveryThreshold && deliveryFee === 0 && customerInfo.type === 'entrega' && (
                  <div className="flex justify-between text-green-600 text-sm">
                    <span className="flex items-center gap-1">
                      <FiTruck className="w-4 h-4" aria-hidden="true" />
                      Entrega grátis!
                    </span>
                  </div>
                )}
                <div className="border-t border-chocolate-200 pt-2 flex justify-between">
                  <span className="text-lg font-semibold text-chocolate-800">Total</span>
                  <span className="text-lg font-bold text-warm-red-500">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (window.confirm('Tem certeza que deseja limpar o carrinho?')) {
                      clearCart();
                    }
                  }}
                  className="flex-1"
                  disabled={isEmpty}
                >
                  Limpar
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  size="lg"
                  rightIcon={<FiTruck className="w-5 h-5" aria-hidden="true" />}
                >
                  Finalizar no WhatsApp
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

