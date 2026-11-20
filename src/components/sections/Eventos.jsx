// Sabor Familiar - Eventos Section
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiCheck, FiCoffee, FiMusic, FiUsers, FiBriefcase, FiHeart, FiAward, FiZap } from 'react-icons/fi';
import { FaUtensils, FaAward } from 'react-icons/fa';
import { EVENT_TYPES, PROCESS_STEPS, WHATSAPP_EVENT_MESSAGE } from '../../data/eventos';
import { CONFIG } from '../../config';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Modal from '../ui/Modal';

const EVENT_ICONS = {
  casamentos: FiZap,
  aniversarios: FaAward,
  batizados: FiHeart,
  formaturas: FaAward,
  confraternizacoes: FiUsers,
  corporativos: FiBriefcase,
};

export default function Eventos() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    eventType: '',
    name: '',
    date: '',
    guests: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!quoteForm.name.trim()) errors.name = 'Nome é obrigatório';
    if (!quoteForm.date) errors.date = 'Data é obrigatória';
    if (!quoteForm.guests) errors.guests = 'Número de convidados é obrigatório';
    if (!quoteForm.phone.trim()) errors.phone = 'Telefone é obrigatório';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const message = WHATSAPP_EVENT_MESSAGE(quoteForm.eventType, quoteForm);
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowQuoteModal(false);
    setQuoteForm({ eventType: '', name: '', date: '', guests: '', phone: '', message: '' });
    setFormErrors({});
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 30); // Minimum 30 days for events
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <section id="eventos" className="section bg-white" aria-labelledby="eventos-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Buffet & Eventos
          </span>
          <h2 id="eventos-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            Seu evento com sabor de família
          </h2>
          <p className="text-chocolate-600 text-lg">
            Casamentos, aniversários, formaturas e eventos corporativos.
            Buffet completo com jantar, ilhas gastronômicas, doces artesanais e equipe dedicada.
          </p>
        </motion.div>

        {/* Event Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {EVENT_TYPES.map((event, index) => (
              <motion.article
                key={event.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all duration-300 border border-chocolate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-cream-100">
                    <div className="flex items-center gap-2 mb-1">
                      {(() => {
                        const Icon = EVENT_ICONS[event.id];
                        return <Icon className="w-5 h-5 text-gold-400" aria-hidden="true" />;
                      })()}
                      <span className="text-sm font-medium text-gold-300">{event.title}</span>
                    </div>
                    <h3 className="font-serif text-xl font-medium">{event.title}</h3>
                    <p className="text-sm text-chocolate-100 mt-1 line-clamp-1">{event.subtitle}</p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-chocolate-600 text-sm leading-relaxed">{event.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {event.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full bg-chocolate-50 text-chocolate-600 text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveEvent(event)}
                    className="w-full mt-2 py-2 px-4 rounded-xl bg-chocolate-800 text-cream-100 font-medium text-sm hover:bg-chocolate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Ver detalhes</span>
                    <FiChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-chocolate-800 mb-3">Como funciona</h3>
            <p className="text-chocolate-600">Simples, transparente e sem surpresas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gold-100 rounded-full flex items-center justify-center">
                    <span className="font-cursive text-2xl text-gold-600">{step.step}</span>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gold-200" aria-hidden="true" />
                  )}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl" aria-hidden="true">{step.icon}</span>
                  <h4 className="font-semibold text-chocolate-800">{step.title}</h4>
                </div>
                <p className="text-sm text-chocolate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-chocolate-800 to-chocolate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <FiAward className="w-12 h-12 text-gold-400 mx-auto mb-4" aria-hidden="true" />
            <h3 className="font-serif text-2xl sm:text-3xl text-cream-100 mb-3">
              Vamos planejar seu evento?
            </h3>
            <p className="text-chocolate-200 mb-8">
              Entre em contato e vamos criar juntos o cardápio perfeito para sua celebração.
              Degustação sem compromisso!
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                setQuoteForm(prev => ({ ...prev, eventType: '' }));
                setShowQuoteModal(true);
              }}
              rightIcon={<FiAward className="w-5 h-5" aria-hidden="true" />}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {activeEvent && (
          <Modal
            isOpen={true}
            onClose={() => setActiveEvent(null)}
            title={activeEvent.title}
            size="xl"
            aria-labelledby="event-detail-title"
          >
            <div className="space-y-8">
              {/* Gallery */}
              <div>
                <h4 className="font-serif text-lg text-chocolate-800 mb-4">Galeria</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeEvent.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${activeEvent.title} - Foto ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-chocolate-600 leading-relaxed mb-4">{activeEvent.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-chocolate-50 rounded-xl">
                    <p className="font-medium text-chocolate-800 mb-1">Capacidade</p>
                    <p className="text-chocolate-600">{activeEvent.capacity}</p>
                  </div>
                  <div className="p-4 bg-chocolate-50 rounded-xl">
                    <p className="font-medium text-chocolate-800 mb-1">Duração</p>
                    <p className="text-chocolate-600">{activeEvent.duration}</p>
                  </div>
                </div>

                <h4 className="font-serif text-lg text-chocolate-800 mb-3">O que está incluso</h4>
                <ul className="space-y-2" role="list">
                  {activeEvent.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-chocolate-600">
                      <FiCheck className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => {
                  setActiveEvent(null);
                  setQuoteForm(prev => ({ ...prev, eventType: activeEvent.id }));
                  setShowQuoteModal(true);
                }}
                rightIcon={<FiAward className="w-5 h-5" aria-hidden="true" />}
              >
                Solicitar Orçamento para {activeEvent.title}
              </Button>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <Modal
            isOpen={true}
            onClose={() => setShowQuoteModal(false)}
            title="Solicitar Orçamento"
            size="lg"
            aria-labelledby="quote-modal-title"
          >
            <form onSubmit={handleQuoteSubmit} className="space-y-5">
              <Input
                label="Tipo de evento *"
                value={quoteForm.eventType}
                onChange={(e) => setQuoteForm({ ...quoteForm, eventType: e.target.value })}
                error={formErrors.eventType}
                // We'll use a select for this
              >
                <Select
                  value={quoteForm.eventType}
                  onChange={(e) => setQuoteForm({ ...quoteForm, eventType: e.target.value })}
                  error={formErrors.eventType}
                  options={EVENT_TYPES.map(e => ({ value: e.id, label: e.title }))}
                  placeholder="Selecione o tipo de evento"
                />
              </Input>

              <Input
                label="Seu nome *"
                value={quoteForm.name}
                onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                error={formErrors.name}
                placeholder="João Silva"
                required
                autoComplete="name"
              />

              <Input
                label="Telefone/WhatsApp *"
                type="tel"
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                error={formErrors.phone}
                placeholder="(11) 99999-9999"
                required
                autoComplete="tel"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Data do evento *"
                  type="date"
                  value={quoteForm.date}
                  onChange={(e) => setQuoteForm({ ...quoteForm, date: e.target.value })}
                  error={formErrors.date}
                  min={minDateStr}
                  required
                />
                <Input
                  label="Nº de convidados *"
                  type="number"
                  value={quoteForm.guests}
                  onChange={(e) => setQuoteForm({ ...quoteForm, guests: e.target.value })}
                  error={formErrors.guests}
                  placeholder="Ex: 100"
                  required
                  min="10"
                  max="1000"
                />
              </div>

              <Textarea
                label="Observações"
                value={quoteForm.message}
                onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                placeholder="Detalhes sobre o evento, preferências alimentares, tema, etc."
                rows={3}
              />

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowQuoteModal(false)} className="flex-1">
                  Cancelar
                </Button>
                <Button type="submit" variant="primary" className="flex-1" rightIcon={<FiAward className="w-5 h-5" aria-hidden="true" />}>
                  Enviar pelo WhatsApp
                </Button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}