// Sabor Familiar - Contato Section
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiHeart, FiTruck, FiPackage, FiChevronRight, FiAward } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { CONFIG } from '../../config';
import Button from '../ui/Button';

export default function Contato() {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Endereço',
      description: `${CONFIG.business.address}, ${CONFIG.business.city}`,
      color: 'text-gold-500',
      bgColor: 'bg-gold-100',
    },
    {
      icon: FiPhone,
      title: 'Telefone / WhatsApp',
      description: CONFIG.business.phone,
      color: 'text-green-500',
      bgColor: 'bg-green-100',
      href: `https://wa.me/${CONFIG.whatsapp}`,
      external: true,
    },
    {
      icon: FiMail,
      title: 'E-mail',
      description: CONFIG.business.email,
      color: 'text-warm-red-500',
      bgColor: 'bg-warm-red-100',
      href: `mailto:${CONFIG.business.email}`,
    },
    {
      icon: FaInstagram,
      title: 'Instagram',
      description: CONFIG.business.instagram,
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
      href: `https://instagram.com/${CONFIG.business.instagram.replace('@', '')}`,
      external: true,
    },
  ];

  const highlights = [
    {
      icon: FiHeart,
      title: 'Feito com amor',
      description: 'Receitas de família passadas de geração em geração',
      color: 'text-warm-red-500',
    },
    {
      icon: FiTruck,
      title: 'Entrega em SP',
      description: `Grátis acima de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(CONFIG.order.freeDeliveryThreshold)}`,
      color: 'text-chocolate-600',
    },
    {
      icon: FiPackage,
      title: 'Sob encomenda',
      description: 'Tudo fresquinho, preparado no dia do seu evento',
      color: 'text-gold-600',
    },
    {
      icon: FiAward,
      title: 'Personalizado',
      description: 'Cardápio adaptado ao seu gosto e necessidades',
      color: 'text-green-600',
    },
  ];

  return (
    <section id="contato" className="section bg-cream-50" aria-labelledby="contato-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Fale Conosco
          </span>
          <h2 id="contato-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            Estamos prontos para atender você
          </h2>
          <p className="text-chocolate-600 text-lg">
            Tem dúvidas? Quer fazer uma encomenda ou solicitar orçamento para seu evento?
            Escolha a melhor forma de contato abaixo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href || '#'}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-chocolate-100 hover:border-gold-300 hover:shadow-soft transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bgColor}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-chocolate-800">{item.title}</h3>
                    <p className="text-chocolate-600 mt-1">{item.description}</p>
                  </div>
                  {item.href && (
                    <FiChevronRight className="w-5 h-5 text-chocolate-300 group-hover:text-gold-500 transition-colors flex-shrink-0" aria-hidden="true" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <motion.div
              className="p-6 rounded-2xl bg-chocolate-800 text-cream-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-lg text-gold-400 mb-4 flex items-center gap-2">
                <FiClock className="w-5 h-5" aria-hidden="true" />
                Horário de Atendimento
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-chocolate-200">Segunda a Sexta</dt>
                  <dd className="font-medium">{CONFIG.business.hours.weekdays}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-chocolate-200">Sábado</dt>
                  <dd className="font-medium">{CONFIG.business.hours.saturday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-chocolate-200">Domingo</dt>
                  <dd className="font-medium">{CONFIG.business.hours.sunday}</dd>
                </div>
              </dl>
              <p className="text-chocolate-300 text-xs mt-4">
                * Encomendas devem ser feitas com pelo menos {CONFIG.order.minAdvanceHours}h de antecedência.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-soft border border-chocolate-100 h-full">
              <h3 className="font-serif text-2xl text-chocolate-800 mb-6">Por que escolher a Sabor Familiar?</h3>

              <ul className="space-y-4 mb-8" role="list">
                {highlights.map((item, index) => (
                  <motion.li
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-chocolate-50 hover:bg-gold-50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} bg-opacity-10`}>
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-medium text-chocolate-800">{item.title}</h4>
                      <p className="text-sm text-chocolate-600 mt-0.5">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Quick Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-chocolate-100">
                <p className="text-sm text-chocolate-500 text-center mb-4">Ações rápidas</p>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="primary"
                    onClick={() => document.querySelector('#cardapio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full"
                  >
                    Fazer Encomenda
                  </Button>
                  <Button
                    variant="gold"
                    onClick={() => document.querySelector('#eventos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full"
                  >
                    Orçamento Evento
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => window.open(`https://wa.me/${CONFIG.whatsapp}`, '_blank')}
                    className="w-full col-span-2"
                  >
                    Falar no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="mt-16 rounded-3xl overflow-hidden bg-chocolate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video relative">
            {/* In production, replace with actual Google Maps embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-chocolate-100">
              <div className="text-center p-8">
                <FiMapPin className="w-16 h-16 text-chocolate-300 mx-auto mb-4" aria-hidden="true" />
                <p className="text-chocolate-600 font-medium">Mapa de localização</p>
                <p className="text-chocolate-400 text-sm mt-1">
                  {CONFIG.business.address}, {CONFIG.business.city}
                </p>
                <p className="text-chocolate-400 text-sm">
                  (Substitua por embed do Google Maps em produção)
                </p>
              </div>
            </div>
            {/* Google Maps iframe would go here:
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sabor Familiar"
            />
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

