// Sabor Familiar - Configuration
// Edite este arquivo para personalizar o site

export const CONFIG = {
  // WhatsApp number (formato: 55 + DDD + número, sem espaços ou caracteres especiais)
  whatsapp: '5511999999999',

  // Business info
  business: {
    name: 'Sabor Familiar',
    slogan: 'Feito com amor para sua família',
    address: 'Rua das Flores, 123 - Centro',
    city: 'São Paulo - SP',
    phone: '(11) 99999-9999',
    email: 'contato@saborfamiliar.com.br',
    instagram: '@saborfamiliar',
    hours: {
      weekdays: 'Seg a Sex: 8h às 18h',
      saturday: 'Sáb: 8h às 14h',
      sunday: 'Dom: Fechado',
    },
  },

  // SEO
  seo: {
    title: 'Sabor Familiar - Salgados por Encomenda e Buffet para Eventos',
    description: 'Salgados artesanais feitos com amor para sua família. Encomendas para festas, casamentos, aniversários e eventos corporativos. Entregamos em toda São Paulo.',
    ogImage: '/og-image.jpg',
  },

  // Developer credits
  developer: {
    name: 'Welterson Gabriel',
    github: 'https://github.com/weltersongabriel',
    linkedin: 'https://linkedin.com/in/weltersongabriel',
    portfolio: 'https://weltersongabriel.netlify.app/',
  },

  // Order settings
  order: {
    minAdvanceHours: 24, // Horas mínimas de antecedência para encomenda
    deliveryFee: 15.00, // Taxa de entrega padrão
    freeDeliveryThreshold: 200.00, // Pedido mínimo para entrega grátis
  },

  // Animation settings
  animations: {
    enabled: true,
    reducedMotion: false, // Será atualizado baseado na preferência do usuário
  },
};

export default CONFIG;