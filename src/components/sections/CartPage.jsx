// Sabor Familiar - Cart Page (Página "Seu Pedido" estilo iFood)
import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FiX, FiTrash2, FiTruck, FiPackage, FiMapPin, FiClock, FiCheck, FiCreditCard, FiMessageSquare } from 'react-icons/fi';
import { CONFIG } from '../../config';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import QuantityControl from '../ui/QuantityControl';

export default function CartPage({ onBack }) {
  const {
    items,
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

  const [activeStep, setActiveStep] = useState(1); // 1 = carrinho, 2 = dados, 3 = confirmação
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format date for input[type="date"] - min is tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  // Default time: next hour rounded up
  const defaultTime = new Date();
  defaultTime.setHours(defaultTime.getHours() + 1);
  defaultTime.setMinutes(0);
  const defaultTimeStr = defaultTime.toTimeString().slice(0, 5);

  const handleTypeChange = (type) => {
    setCustomerInfo({ type });
    if (type === 'retirada') {
      setCustomerInfo({ address: '' });
    }
  };

  const handleNextStep = () => {
    if (activeStep === 1) {
      if (isEmpty) return;
      setActiveStep(2);
    } else if (activeStep === 2) {
      if (!customerInfo.name.trim()) return;
      if (!customerInfo.date) return;
      if (!customerInfo.time) return;
      if (customerInfo.type === 'entrega' && !customerInfo.address.trim()) return;
      setActiveStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name.trim()) return;
    if (!customerInfo.date) return;
    if (!customerInfo.time) return;
    if (customerInfo.type === 'entrega' && !customerInfo.address.trim()) return;

    setIsSubmitting(true);
    sendToWhatsApp();
    setIsSubmitting(false);
    // O carrinho permanece aberto para o usuário ver a confirmação
    // clearCart(); // Não limpar automaticamente
  };

  const handleBackStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    } else if (onBack) {
      onBack();
    }
  };

  if (isEmpty) {
    return (
      <section className="min-h-screen bg-cream-50 flex items-center justify-center py-20 px-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="w-24 h-24 rounded-2xl bg-chocolate-100 flex items-center justify-center mx-auto mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiPackage className="w-12 h-12 text-chocolate-400" aria-hidden="true" />
          </motion.div>
          <h2 className="font-serif text-2xl text-chocolate-800 mb-2">Seu carrinho está vazio</h2>
          <p className="text-chocolate-500 mb-8">Adicione salgados deliciosos ao seu pedido</p>
          <Button variant="primary" onClick={onBack} className="w-full max-w-xs">
            Ir ao Cardápio
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-cream-50" id="cart-page">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-chocolate-100 shadow-sm">
        <div className="container px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleBackStep}
            className="p-2 rounded-xl text-chocolate-500 hover:bg-chocolate-100 transition-colors lg:hidden"
            aria-label="Voltar"
          >
            <FiX className="w-6 h-6" aria-hidden="true" />
          </button>

          <div className="flex-1 lg:flex-none text-center">
            <h1 className="font-serif text-xl text-chocolate-800">Seu Pedido</h1>
          </div>

          {/* Progress indicator */}
          <div className="hidden lg:flex items-center gap-1 ml-4">
            {[
              { step: 1, label: 'Carrinho' },
              { step: 2, label: 'Dados' },
              { step: 3, label: 'Confirmar' },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  activeStep >= s.step
                    ? 'bg-gold-500 text-white'
                    : 'bg-chocolate-100 text-chocolate-400'
                }`}>
                  {activeStep > s.step ? <FiCheck className="w-4 h-4" /> : s.step}
                </div>
                {s.step < 3 && (
                  <div className={`w-16 h-0.5 rounded transition-all ${
                    activeStep > s.step ? 'bg-gold-500' : 'bg-chocolate-100'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="container px-4 py-6 lg:py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Items list (2/3 width on lg) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Step 1: Cart Items */}
            {(activeStep === 1 || activeStep === 2) && (
              <motion.div
                key="cart-items"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-soft border border-chocolate-100 overflow-hidden">
                  <div className="px-4 py-4 border-b border-chocolate-100 flex items-center justify-between">
                    <h2 className="font-semibold text-chocolate-800">
                      {items.length} {items.length === 1 ? 'item' : 'itens'} no pedido
                    </h2>
                    <button
                      onClick={() => {
                        if (window.confirm('Tem certeza que deseja limpar o carrinho?')) {
                          clearCart();
                        }
                      }}
                      className="text-sm text-chocolate-500 hover:text-warm-red-500 transition-colors"
                    >
                      Limpar tudo
                    </button>
                  </div>

                  <div className="divide-y divide-chocolate-100">
                    {items.map((item, index) => (
                      <motion.div
                        key={`${item.id}-${item.notes || 'default'}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 flex gap-4"
                      >
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-chocolate-100">
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
                              <h3 className="font-medium text-chocolate-800 truncate">{item.name}</h3>
                              {item.notes && (
                                <p className="text-xs text-chocolate-500 mt-0.5">{item.notes}</p>
                              )}
                              <p className="text-sm font-semibold text-chocolate-700 mt-1">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id, item.notes)}
                              className="p-2 rounded-lg text-chocolate-400 hover:bg-chocolate-100 hover:text-warm-red-500 transition-colors flex-shrink-0"
                              aria-label={`Remover ${item.name}`}
                            >
                              <FiTrash2 className="w-5 h-5" aria-hidden="true" />
                            </button>
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Customer Info Form */}
            {activeStep >= 2 && (
              <motion.form
                key="customer-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="bg-white rounded-2xl shadow-soft border border-chocolate-100 p-6 space-y-5">
                  <h2 className="font-serif text-xl text-chocolate-800 flex items-center gap-2">
                    <FiPackage className="w-6 h-6 text-gold-500" aria-hidden="true" />
                    Dados da Encomenda
                  </h2>

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
                        <div className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                          customerInfo.type === 'retirada'
                            ? 'border-gold-400 bg-gold-50 text-chocolate-800'
                            : 'border-chocolate-200 hover:border-chocolate-300 text-chocolate-600'
                        }`}>
                          <FiPackage className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                          <span className="text-sm font-medium">Retirada na loja</span>
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
                        <div className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                          customerInfo.type === 'entrega'
                            ? 'border-gold-400 bg-gold-50 text-chocolate-800'
                            : 'border-chocolate-200 hover:border-chocolate-300 text-chocolate-600'
                        }`}>
                          <FiTruck className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
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
                </div>

                {/* Step 3: Confirmation Summary */}
                {activeStep === 3 && (
                  <motion.div
                    key="confirmation"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-soft border border-chocolate-100 p-6 space-y-4"
                  >
                    <h2 className="font-serif text-xl text-chocolate-800 flex items-center gap-2">
                      <FiCheck className="w-6 h-6 text-green-500" aria-hidden="true" />
                      Confirme seu Pedido
                    </h2>

                    <div className="bg-cream-50 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                          <FiPackage className="w-5 h-5 text-gold-600" />
                        </div>
                        <div>
                          <p className="font-medium text-chocolate-800">{customerInfo.name}</p>
                          <p className="text-sm text-chocolate-600">
                            {customerInfo.date} às {customerInfo.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                          {customerInfo.type === 'entrega' ? (
                            <FiTruck className="w-5 h-5 text-gold-600" />
                          ) : (
                            <FiPackage className="w-5 h-5 text-gold-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-chocolate-800">
                            {customerInfo.type === 'entrega' ? 'Entrega' : 'Retirada na loja'}
                          </p>
                          {customerInfo.type === 'entrega' && customerInfo.address && (
                            <p className="text-sm text-chocolate-600 truncate">{customerInfo.address}</p>
                          )}
                        </div>
                      </div>

                      {customerInfo.notes && (
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                          <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                            <FiMessageSquare className="w-5 h-5 text-gold-600" />
                          </div>
                          <p className="text-sm text-chocolate-600">{customerInfo.notes}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-chocolate-50 rounded-xl p-4 space-y-2">
                      <div className="flex justify-between text-chocolate-700">
                        <span>Subtotal ({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
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

                    <p className="text-xs text-chocolate-500 text-center">
                      Ao confirmar, você será redirecionado para o WhatsApp para finalizar o pedido.
                    </p>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-4">
                  {(activeStep === 2 || activeStep === 3) && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBackStep}
                      className="flex-1"
                    >
                      <FiX className="w-4 h-4" aria-hidden="true" />
                      Voltar
                    </Button>
                  )}
                  {activeStep === 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onBack}
                      className="flex-1"
                    >
                      <FiX className="w-4 h-4" aria-hidden="true" />
                      Continuar Comprando
                    </Button>
                  )}
                  {activeStep === 1 && (
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleNextStep}
                      className="flex-1"
                      size="lg"
                      rightIcon={<FiTruck className="w-5 h-5" aria-hidden="true" />}
                    >
                      Continuar para Dados
                    </Button>
                  )}
                  {activeStep === 2 && (
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleNextStep}
                      className="flex-1"
                      size="lg"
                      rightIcon={<FiCheck className="w-5 h-5" aria-hidden="true" />}
                    >
                      Revisar Pedido
                    </Button>
                  )}
                  {activeStep === 3 && (
                    <Button
                      type="submit"
                      variant="primary"
                      className="flex-1"
                      size="lg"
                      rightIcon={<FiMessageSquare className="w-5 h-5" aria-hidden="true" />}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Finalizar no WhatsApp'}
                    </Button>
                  )}
                </div>
              </motion.form>
            )}
          </div>

          {/* Right: Order Summary (sticky on lg) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl shadow-soft border border-chocolate-100 p-5 space-y-3">
                <h3 className="font-semibold text-chocolate-800 flex items-center gap-2">
                  <FiPackage className="w-5 h-5 text-gold-500" aria-hidden="true" />
                  Resumo do Pedido
                </h3>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.notes || 'default'}`} className="flex items-center justify-between gap-2 text-sm">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-chocolate-800 truncate">{item.name}</p>
                        <p className="text-chocolate-500">{item.quantity}x {formatPrice(item.price)}</p>
                      </div>
                      <span className="font-semibold text-chocolate-700 whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-chocolate-200 pt-3 space-y-2">
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

                {/* Quick actions when on step 1 */}
                {activeStep === 1 && (
                  <div className="border-t border-chocolate-200 pt-3 space-y-2">
                    <Button
                      variant="primary"
                      onClick={handleNextStep}
                      className="w-full"
                      size="lg"
                      rightIcon={<FiTruck className="w-5 h-5" aria-hidden="true" />}
                    >
                      Finalizar Pedido
                    </Button>
                    <Button
                      variant="outline"
                      onClick={onBack}
                      className="w-full"
                    >
                      Continuar Comprando
                    </Button>
                  </div>
                )}
              </div>

              {/* Payment info */}
              <div className="bg-white rounded-2xl shadow-soft border border-chocolate-100 p-5">
                <h4 className="font-medium text-chocolate-800 mb-3 flex items-center gap-2">
                  <FiCreditCard className="w-5 h-5 text-gold-500" aria-hidden="true" />
                  Pagamento
                </h4>
                <div className="space-y-2 text-sm text-chocolate-600">
                  <p className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">PIX</span>
                    Pagamento na entrega/retirada
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">💳</span>
                    Cartão na maquininha
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">💰</span>
                    Dinheiro (troco disponível)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}