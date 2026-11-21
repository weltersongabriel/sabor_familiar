// Sabor Familiar - How It Works Component
// Inspired by FoodWagon's "How does it work" 4-step process
import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../../data/promos';

export default function HowItWorks() {
  return (
    <section className="section bg-white" aria-labelledby="how-it-works-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 id="how-it-works-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            Encomendar nunca foi tão fácil
          </h2>
          <p className="text-chocolate-600 text-lg">
            Em 4 passos simples, seus salgados favoritos chegam fresquinhos na sua mesa.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.article
                key={step.step}
                className="relative text-center p-6 lg:p-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step Number Circle */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className={`absolute inset-0 rounded-full ${step.color} flex items-center justify-center`}>
                    <span className="font-cursive text-3xl text-cream-100">{step.step}</span>
                  </div>
                  {/* Connecting line */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="absolute top-10 left-1/2 w-full h-1 bg-gold-200" aria-hidden="true" />
                  )}
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-gold-400/30"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    aria-hidden="true"
                  />
                </div>

                {/* Icon */}
                <div className="relative mb-4">
                  <span className="text-4xl sm:text-5xl block" aria-hidden="true">{step.icon}</span>
                  {/* Decorative glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r rounded-full opacity-20 blur-xl"
                    style={{ background: step.color.replace('from-', 'from-').replace('to-', 'to-') }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-chocolate-800 mb-3 group-hover:text-warm-red-500 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-chocolate-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-chocolate-600 mb-4">Pronto para fazer seu pedido?</p>
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium transition-colors"
          >
            Ver Cardápio
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}