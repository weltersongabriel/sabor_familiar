// Sabor Familiar - Nossa História Section
import { motion } from 'framer-motion';
import { FiHeart, FiSun, FiPackage, FiClock, FiUsers, FiAward } from 'react-icons/fi';
import HISTORIA_TEXTO from '../../data/historia';

export default function Historia() {
  const { titulo, subtitulo, intro, paragrafos, valores, linhaDoTempo, depoimento } = HISTORIA_TEXTO;

  const valorIcons = {
    'Fé e Família': FiHeart,
    'Tempero Caseiro': FiAward,
    'Ingredientes Frescos': FiSun,
    'Feito Sob Encomenda': FiPackage,
    'Carinho nos Detalhes': FiHeart,
    'Compromisso com Você': FiUsers,
  };

  return (
    <section id="historia" className="section bg-white" aria-labelledby="historia-title">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-sm font-medium mb-4">
            Nossa História
          </span>
          <h2 id="historia-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-chocolate-800 mb-4">
            {titulo}
          </h2>
          <p className="text-gold-500 text-lg font-medium">{subtitulo}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="prose prose-chocolate max-w-none text-chocolate-700 leading-relaxed">
              <p className="text-lg text-chocolate-600 mb-6">{intro}</p>
              {paragrafos.map((paragrafo, index) => (
                <p key={index} className="mb-6">{paragrafo}</p>
              ))}
            </div>

            {/* Valores */}
            <div className="mt-8">
              <h3 className="font-serif text-2xl text-chocolate-800 mb-6">Nossos Valores</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {valores.map((valor, index) => {
                  const Icon = valorIcons[valor.titulo] || Heart;
                  return (
                    <motion.div
                      key={valor.titulo}
                      className="p-4 bg-chocolate-50 rounded-2xl border border-chocolate-100 hover:border-gold-300 hover:shadow-soft transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gold-600" aria-hidden="true" />
                        </div>
                        <h4 className="font-semibold text-chocolate-800">{valor.titulo}</h4>
                      </div>
                      <p className="text-sm text-chocolate-600">{valor.descricao}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Depoimento */}
            <motion.blockquote
              className="mt-10 p-6 bg-gradient-to-r from-chocolate-800 to-chocolate-700 rounded-2xl text-cream-100 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-4 right-4 text-gold-400/20" aria-hidden="true">
                <FiAward className="w-16 h-16" />
              </div>
              <p className="font-serif text-lg sm:text-xl leading-relaxed mb-4 relative z-10">
                &ldquo;{depoimento.texto}&rdquo;
              </p>
              <cite className="text-gold-300 text-sm not-italic relative z-10">
                {depoimento.autor}
              </cite>
            </motion.blockquote>
          </motion.div>

          {/* Right Column - Timeline & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Timeline */}
            <div className="hidden lg:block mb-8">
              <h3 className="font-serif text-2xl text-chocolate-800 mb-6">Nossa Jornada</h3>
              <div className="relative pl-6 border-l-2 border-gold-300">
                {linhaDoTempo.map((item, index) => (
                  <motion.div
                    key={item.ano}
                    className="relative pb-8 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="absolute left-[-22px] top-0 w-4 h-4 bg-gold-400 rounded-full border-4 border-white shadow-soft" aria-hidden="true" />
                    <div className="bg-white p-5 rounded-2xl shadow-soft border border-chocolate-100">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-cursive text-gold-500 text-xl">{item.ano}</span>
                        <h4 className="font-semibold text-chocolate-800">{item.titulo}</h4>
                      </div>
                      <p className="text-sm text-chocolate-600">{item.descricao}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image placeholder - family kitchen */}
            <div className="relative rounded-3xl overflow-hidden shadow-warm-lg">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=700&fit=crop"
                alt="Família Sabor Familiar na cozinha preparando salgados com amor"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream-100">
                <p className="font-cursive text-2xl mb-1">Três gerações, um sabor</p>
                <p className="text-chocolate-100 text-sm">Da cozinha da vó Maria para sua mesa</p>
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="lg:hidden mt-8">
              <h3 className="font-serif text-2xl text-chocolate-800 mb-6">Nossa Jornada</h3>
              <div className="space-y-4">
                {linhaDoTempo.map((item, index) => (
                  <motion.div
                    key={item.ano}
                    className="flex gap-4 p-4 bg-chocolate-50 rounded-2xl border border-chocolate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-16 text-center">
                      <span className="font-cursive text-gold-500 text-xl block">{item.ano}</span>
                      <span className="text-xs text-chocolate-400">{item.titulo}</span>
                    </div>
                    <div>
                      <p className="text-sm text-chocolate-700 font-medium">{item.titulo}</p>
                      <p className="text-sm text-chocolate-600">{item.descricao}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}