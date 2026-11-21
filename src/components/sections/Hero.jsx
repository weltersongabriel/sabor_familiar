// Sabor Familiar - Hero Section (Enhanced with FoodWagon-style search)
// Inspired by FoodWagon's hero with tabbed Delivery/Pickup search
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiTruck, FiShield, FiAward } from 'react-icons/fi';

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    scrollToSection('#cardapio');
  };

  const features = [
    { icon: FiHeart, label: 'Feito com amor', color: 'text-warm-red-500' },
    { icon: FiAward, label: 'Receitas de família', color: 'text-gold-500' },
    { icon: FiTruck, label: 'Entrega em SP', color: 'text-chocolate-600' },
    { icon: FiShield, label: 'Ingredientes frescos', color: 'text-green-600' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-title">
      {/* Background */}
      <div className="absolute inset-0 bg-chocolate-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate-800 via-chocolate-900 to-chocolate-900" aria-hidden="true" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Food collage background */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64">
          <img
            src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="absolute top-1/3 right-20 w-56 h-56">
          <img
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-20 left-20 w-72 h-72">
          <img
            src="https://images.unsplash.com/photo-1631320893745-f2f0a2e2c9b6?w=400&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gold-400/30 rounded-full"
            style={{
              top: `${15 + i * 15}%`,
              left: `${5 + i * 18}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative py-20 lg:py-32 z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-cream-100 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            Encomendas abertas para festas e eventos
          </motion.div>

          {/* Main Title */}
          <motion.h1
            id="hero-title"
            className="font-cursive text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream-100 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Feito com amor{' '}
            <span className="text-gradient-gold">para sua família</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-chocolate-100 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Salgados artesanais, doces caseiros e buffet completo para seus momentos especiais.
            Três gerações de receitas da vó Maria, ingredientes frescos da feira e o tempero que abraça.
          </motion.p>

          {/* Search Box - FoodWagon Style */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Search Button */}
            <button
              type="submit"
              onClick={handleSearch}
              className="w-full py-4 rounded-2xl bg-warm-red-500 text-white font-semibold text-lg hover:bg-warm-red-600 transition-colors flex items-center justify-center gap-3 shadow-warm"
            >
              <span>Buscar Salgados</span>
              <FiArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </motion.div>

          {/* Trust Features */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-chocolate-100 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <feature.icon className={`w-5 h-5 ${feature.color}`} aria-hidden="true" />
                <span className="font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-chocolate-200 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          aria-hidden="true"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Role para descobrir</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}