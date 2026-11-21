// Sabor Familiar - Features Strip Component
// Inspired by FoodWagon's 3-column feature strip (Daily Discounts, Live Tracking, Quick Delivery)
import { motion } from 'framer-motion';
import { FEATURES } from '../../data/promos';

export default function FeaturesStrip() {
  return (
    <section className="bg-gradient-to-r from-chocolate-900 via-chocolate-800 to-chocolate-900 py-12 lg:py-16" aria-labelledby="features-title">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, index) => (
            <motion.article
              key={feature.id}
              className="relative text-center p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className={`absolute inset-0 rounded-2xl ${feature.color} flex items-center justify-center`} aria-hidden="true">
                  <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
                </div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
                  style={{ background: feature.color.replace('from-', 'from-').replace('to-', 'to-') }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-cream-100 mb-2 group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-chocolate-200 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Divider (except last) */}
              {index < FEATURES.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-6%] w-px h-3/4 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" aria-hidden="true" />
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}