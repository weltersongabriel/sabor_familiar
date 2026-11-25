// Sabor Familiar - Nossa História Section
// Texto reduzido + duas imagens
import { motion } from 'framer-motion';
import { FiHeart, FiSun, FiPackage, FiClock, FiUsers, FiAward } from 'react-icons/fi';
import HISTORIA_TEXTO from '../../data/historia';

export default function Historia() {
  const { titulo, subtitulo, intro, valores } = HISTORIA_TEXTO;

  const valorIcons = {
    'Fé e Família': FiHeart,
    'Tempero Caseiro': FiAward,
    'Ingredientes Frescos': FiSun,
    'Feito Sob Encomenda': FiPackage,
    'Carinho nos Detalhes': FiHeart,
    'Compromisso com Você': FiUsers,
  };

  return (
    <section id="historia" className="section bg-cream-50" aria-labelledby="historia-title">
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
          {/* Left Column - Texto reduzido */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="prose prose-chocolate max-w-none text-chocolate-700 leading-relaxed">
              <p className="text-lg text-chocolate-600 mb-6">{intro}</p>
              <p className="mb-6">
                Em 2010, depois de anos fazendo encomendas para vizinhos e amigos, a família
                transformou o amor em negócio. Nasceu o "Sabor Familiar" — nome escolhido pela vó
                Maria: "nosso tempero não é segredo, é família". Hoje temos nossa cozinha industrial,
                mas o jeito de fazer continua o mesmo: artesanal, caseiro, com carinho.
              </p>
              <p className="mb-6">
                Já servimos centenas de casamentos, aniversários e eventos corporativos. Nosso maior
                orgulho é ver o sorriso de quem prova nossos salgados — o tempero que atravessa gerações.
              </p>
            </div>

            {/* Valores - apenas 4 essenciais */}
            <div className="mt-4">
              <h3 className="font-serif text-2xl text-chocolate-800 mb-6">Nossos Valores</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {valores.slice(0, 4).map((valor, index) => {
                  const Icon = valorIcons[valor.titulo] || FiHeart;
                  return (
                    <motion.div
                      key={valor.titulo}
                      className="p-4 bg-white rounded-2xl border border-chocolate-100 hover:border-gold-300 hover:shadow-soft transition-all"
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
          </motion.div>

          {/* Right Column - Duas imagens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Imagem 1 - Cozinha da família */}
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg aspect-square sm:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                  alt="Família Sabor Familiar na cozinha preparando salgados com amor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-100">
                  <p className="font-cursive text-xl mb-1">Três gerações</p>
                  <p className="text-chocolate-100 text-sm">Da cozinha da vó Maria para sua mesa</p>
                </div>
              </div>

              {/* Imagem 2 - Salgados prontos */}
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg aspect-square sm:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&h=500&fit=crop"
                  alt="Coxinha e salgados artesanais recém preparados"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream-100">
                  <p className="font-cursive text-xl mb-1">Feito no dia</p>
                  <p className="text-chocolate-100 text-sm">Ingredientes frescos da feira</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}