// Sabor Familiar - Food Category Grid Component
// Inspired by FoodWagon's "Search by Food" icon category grid
import { motion } from 'framer-motion';
import { FOOD_CATEGORIES } from '../../data/promos';

export default function FoodCategoryGrid() {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="section bg-cream-50" aria-labelledby="categories-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Buscar por Categoria
          </span>
          <h2 id="categories-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            Encontre exatamente o que procura
          </h2>
          <p className="text-chocolate-600 text-lg">
            Navegue pelas categorias e descubra todas as opções deliciosas.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {FOOD_CATEGORIES.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => scrollToSection(`#cardapio?categoria=${category.id}`)}
                className="group relative p-6 text-center rounded-2xl bg-white border border-chocolate-100 hover:border-gold-300 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: 'spring', stiffness: 260, damping: 20 }}
                aria-label={`${category.label} - ${category.count} opções`}
              >
                {/* Icon with gradient background */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className={`absolute inset-0 rounded-2xl ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`} aria-hidden="true" />
                  <div className="relative flex items-center justify-center w-full h-full">
                    <span className="text-3xl sm:text-4xl" aria-hidden="true">{category.icon}</span>
                    {/* Pulse ring on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-gold-400/30"
                      animate={{ scale: [1, 1.1, 1], opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Label */}
                <h3 className="font-semibold text-chocolate-800 mb-1 group-hover:text-warm-red-500 transition-colors">
                  {category.label}
                </h3>

                {/* Count */}
                <p className="text-chocolate-500 text-sm">
                  {category.count} {category.count === 1 ? 'item' : 'itens'}
                </p>

                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* View All */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-chocolate-800 text-cream-100 font-medium hover:bg-chocolate-700 transition-colors"
          >
            Ver todo o cardápio
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}