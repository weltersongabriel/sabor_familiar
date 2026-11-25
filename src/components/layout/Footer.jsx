// Sabor Familiar - Footer Component
import { motion } from 'framer-motion';
import { FiHeart, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaGlobe, FaInstagram } from 'react-icons/fa';
import { CONFIG } from '../../config';
import FloatingWhatsApp from '../ui/FloatingWhatsApp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#historia', label: 'Nossa História' },
    { href: '#cardapio', label: 'Cardápio' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      <FloatingWhatsApp />

      <footer className="bg-chocolate-800 text-cream-100 relative overflow-hidden" role="contentinfo">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-red-500 rounded-full blur-3xl" />
        </div>

        <div className="container relative py-12 lg:py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#inicio" className="flex items-center gap-3 mb-6" ariaLabel={`${CONFIG.business.name} - Início`}>
                <img
                  src="/sabor-logo.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <span className="font-cursive text-2xl text-cream-100 block">{CONFIG.business.name}</span>
                  <p className="text-gold-400 text-sm font-sans leading-none -mt-1">{CONFIG.business.slogan}</p>
                </div>
              </a>
              <p className="text-chocolate-200 text-sm leading-relaxed mb-6 max-w-xs">
                Salgados artesanais feitos com receitas de família, ingredientes frescos e muito carinho.
                Atendemos encomendas e eventos em São Paulo.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={`https://instagram.com/${CONFIG.business.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-chocolate-700 text-chocolate-200 hover:bg-gold-500 hover:text-chocolate-900 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-chocolate-700 text-chocolate-200 hover:bg-green-500 hover:text-chocolate-900 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FiPhone className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.nav
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              aria-label="Links rápidos"
            >
              <h3 className="font-serif text-lg text-gold-400 mb-4">Navegação</h3>
              <ul className="space-y-3" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-chocolate-200 hover:text-gold-400 transition-colors text-sm flex items-center gap-2"
                    >
                      <FiHeart className="w-3 h-3 text-gold-400" aria-hidden="true" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-serif text-lg text-gold-400 mb-4">Contato</h3>
              <address className="not-italic space-y-3 text-sm text-chocolate-200">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">{CONFIG.business.address}</p>
                    <p>{CONFIG.business.city}</p>
                  </div>
                </div>
                <a
                  href={`tel:${CONFIG.business.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 hover:text-gold-400 transition-colors"
                >
                  <FiPhone className="w-5 h-5 text-gold-400 flex-shrink-0" aria-hidden="true" />
                  <span>{CONFIG.business.phone}</span>
                </a>
                <a
                  href={`mailto:${CONFIG.business.email}`}
                  className="flex items-center gap-3 hover:text-gold-400 transition-colors"
                >
                  <FiMail className="w-5 h-5 text-gold-400 flex-shrink-0" aria-hidden="true" />
                  <span>{CONFIG.business.email}</span>
                </a>
                <a
                  href={`https://instagram.com/${CONFIG.business.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-gold-400 transition-colors"
                >
                  <FaInstagram className="w-5 h-5 text-gold-400 flex-shrink-0" aria-hidden="true" />
                  <span>{CONFIG.business.instagram}</span>
                </a>
              </address>
            </motion.div>

            {/* Hours & Developer */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-serif text-lg text-gold-400 mb-4">Horário de Atendimento</h3>
              <dl className="space-y-2 text-sm text-chocolate-200 mb-8">
                <div className="flex justify-between">
                  <dt>Segunda a Sexta</dt>
                  <dd className="font-medium text-cream-100">{CONFIG.business.hours.weekdays}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sábado</dt>
                  <dd className="font-medium text-cream-100">{CONFIG.business.hours.saturday}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Domingo</dt>
                  <dd className="font-medium text-cream-100">{CONFIG.business.hours.sunday}</dd>
                </div>
              </dl>

              <div className="border-t border-chocolate-600 pt-6">
                <p className="text-chocolate-300 text-xs mb-3">Desenvolvido com carinho por</p>
                <a
                  href={CONFIG.developer.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-medium"
                >
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                  <span>{CONFIG.developer.name}</span>
                </a>
                <div className="flex items-center gap-2 mt-2 text-xs text-chocolate-300">
                  <a href={CONFIG.developer.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                    <FaGithub className="w-3 h-3" aria-hidden="true" />
                    GitHub
                  </a>
                  <a href={CONFIG.developer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                    <FaLinkedin className="w-3 h-3" aria-hidden="true" />
                    LinkedIn
                  </a>
                  <a href={CONFIG.developer.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors flex items-center gap-1">
                    <FaGlobe className="w-3 h-3" aria-hidden="true" />
                    Portfólio
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-8 pt-8 border-t border-chocolate-600 flex flex-col md:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-chocolate-400 text-sm text-center md:text-left">
              © {currentYear} {CONFIG.business.name}. Todos os direitos reservados.
            </p>
            <p className="text-chocolate-500 text-xs text-center md:text-right">
              Feito com <FiHeart className="w-3 h-3 text-warm-red-500 inline-block align-middle" aria-hidden="true" /> para famílias
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}