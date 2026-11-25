// Sabor Familiar - Eventos Section
// "Seu evento com sabor de família" - botão "Entrar em contato" via WhatsApp
import { motion } from 'framer-motion';
import { FiChevronRight, FiZap, FiHeart, FiUsers, FiBriefcase, FiAward, FiMessageSquare, FiCheck } from 'react-icons/fi';
import { FaUtensils, FaAward } from 'react-icons/fa';
import { EVENT_TYPES, PROCESS_STEPS } from '../../data/eventos';
import { CONFIG } from '../../config';
import Button from '../ui/Button';

const EVENT_ICONS = {
  casamentos: FiZap,
  aniversarios: FaAward,
  batizados: FiHeart,
  formaturas: FaAward,
  confraternizacoes: FiUsers,
  corporativos: FiBriefcase,
};

export default function Eventos() {
  const openWhatsAppForEvent = (eventId, eventTitle) => {
    const message = `Olá! Gostaria de contratar o ${eventTitle} 😊

Podemos conversar sobre detalhes, datas e orçamento?

Aguardo retorno!`;
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
                    onClick={() => openWhatsAppForEvent(event.id, event.title)}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-warm-red-500 text-white font-medium text-sm hover:bg-warm-red-600 transition-colors flex items-center justify-center gap-2 shadow-warm"
                  >
                    <FiMessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>Entrar em contato</span>
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

        {/* CTA Final */}
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
              Entre em contato pelo WhatsApp e vamos criar juntos o cardápio perfeito para sua celebração.
              Degustação sem compromisso!
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                const message = `Olá! Gostaria de solicitar orçamento para um evento 😊

Podemos conversar sobre o tipo de evento, data, número de convidados e cardápio?

Aguardo retorno!`;
                const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              rightIcon={<FiMessageSquare className="w-5 h-5" aria-hidden="true" />}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}