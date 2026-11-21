// Sabor Familiar - Promo Banners Component
// Inspired by FoodWagon's 3-column promo banners
import { motion } from 'framer-motion';
import { PROMO_BANNERS } from '../../data/promos';
import { FiAward, FiUsers, FiCoffee, FiChevronRight } from 'react-icons/fi';

const BANNER_ICONS = {
  casamentos: FiAward,
  aniversarios: FiUsers,
  corporativos: FiCoffee,
};

export default function PromoBanners() {
  return (
    <section className="section bg-white" aria-labelledby="promo-banners-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Destaques
          </span>
          <h2 id="promo-banners-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            Eventos que amamos realizar
          </h2>
          <p className="text-chocolate-600 text-lg">
            Cada celebração é única. Conheça nossos pacotes mais procurados.
          </p>
        </motion.div>

        {/* Banners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROMO_BANNERS.map((banner, index) => (
              <motion.article
                key={banner.id}
                className="relative group rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Background Image */}
                <div className="relative aspect-[4/3]">
                  <img
                    src={banner.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 ${banner.gradient} opacity-90`} />
                  {/* Pattern overlay - using CSS instead of data URL */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:20px_20px] opacity-50" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-cream-100">
                  {/* Top: Badge + Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-2">
                      {banner.badge && (
                        <motion.span
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium w-fit"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <FiAward className="w-3 h-3 text-gold-300" aria-hidden="true" />
                          {banner.badge}
                        </motion.span>
                      )}
                      <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center ${banner.gradient}`}>
                        {(() => {
                          const Icon = BANNER_ICONS[banner.id];
                          return <Icon className="w-6 h-6 text-cream-100" aria-hidden="true" />;
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Title, Subtitle, CTA */}
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl lg:text-3xl font-medium mb-2">
                      {banner.title}
                    </h3>
                    <p className="text-chocolate-100 mb-6">{banner.subtitle}</p>
                    <button
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-chocolate-800 font-medium hover:bg-cream-100 transition-all group-hover:translate-x-1"
                      onClick={() => {
                        const element = document.querySelector(banner.href);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {banner.cta}
                      <FiChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}