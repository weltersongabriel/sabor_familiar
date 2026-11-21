// Sabor Familiar - Promos & Discounts Data
// Inspired by FoodWagon's discount carousel

export const PROMOS = [
  {
    id: 'festa-junina',
    title: 'Festa Junina',
    discount: 25,
    description: 'Salgados típicos com 25% off',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop',
    cta: 'Ver promoção',
    href: '#cardapio?categoria=salgados',
    badge: 'Mais popular',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'casamento-verao',
    title: 'Casamentos de Verão',
    discount: 20,
    description: 'Buffet completo com desconto especial',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    cta: 'Solicitar orçamento',
    href: '#eventos',
    badge: 'Tempo limitado',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    id: 'aniversario-infantil',
    title: 'Aniversário Infantil',
    discount: 15,
    description: 'Combo kids + doces artesanais',
    image: 'https://images.unsplash.com/photo-1557317986-2f2b8b5e0b6e?w=400&h=300&fit=crop',
    cta: 'Ver detalhes',
    href: '#eventos?tipo=aniversarios',
    badge: 'Novo',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'corporativo',
    title: 'Eventos Corporativos',
    discount: 10,
    description: 'Coffee break e confraternizações',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    cta: 'Fazer pedido',
    href: '#eventos?tipo=corporativos',
    badge: 'Entrega grátis',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'batizado',
    title: 'Batizados e Chás',
    discount: 15,
    description: 'Doces finos e salgados delicados',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    cta: 'Ver cardápio',
    href: '#cardapio?categoria=doces',
    badge: '',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    id: 'formatura',
    title: 'Formaturas',
    discount: 20,
    description: 'Buffet premium para sua conquista',
    image: 'https://images.unsplash.com/photo-1529651952935-3b51662f8da3?w=400&h=300&fit=crop',
    cta: 'Solicitar orçamento',
    href: '#eventos?tipo=formaturas',
    badge: 'Top 2024',
    gradient: 'from-yellow-500 to-amber-600',
  },
];

// Category icons for "Search by Food" section - inspired by FoodWagon
export const FOOD_CATEGORIES = [
  { id: 'salgados', label: 'Salgados', icon: '🥟', count: 24, color: 'from-amber-400 to-orange-500' },
  { id: 'doces', label: 'Doces', icon: '🍮', count: 18, color: 'from-pink-400 to-rose-500' },
  { id: 'bebidas', label: 'Bebidas', icon: '🥤', count: 12, color: 'from-blue-400 to-cyan-500' },
  { id: 'combos', label: 'Combos', icon: '🎁', count: 8, color: 'from-purple-400 to-violet-500' },
  { id: 'buffet', label: 'Buffet', icon: '🍽️', count: 6, color: 'from-emerald-400 to-teal-500' },
  { id: 'cafe', label: 'Café da Manhã', icon: '☕', count: 10, color: 'from-amber-600 to-orange-700' },
  { id: 'vegano', label: 'Opções Veganas', icon: '🌱', count: 15, color: 'from-green-400 to-emerald-500' },
  { id: 'sem-gluten', label: 'Sem Glúten', icon: '🌾', count: 12, color: 'from-lime-400 to-green-500' },
];

// How It Works steps - inspired by FoodWagon
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Escolha',
    description: 'Navegue pelo cardápio e selecione seus favoritos',
    icon: '🛒',
    color: 'from-amber-400 to-orange-500',
  },
  {
    step: 2,
    title: 'Personalize',
    description: 'Ajuste quantidades, adicione observações',
    icon: '✏️',
    color: 'from-pink-400 to-rose-500',
  },
  {
    step: 3,
    title: 'Finalize',
    description: 'Revise o pedido e envie pelo WhatsApp',
    icon: '📱',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    step: 4,
    title: 'Receba',
    description: 'Entregamos fresquinho no seu endereço',
    icon: '🚚',
    color: 'from-emerald-400 to-teal-500',
  },
];

// Features strip - inspired by FoodWagon
export const FEATURES = [
  {
    id: 'descontos-diarios',
    title: 'Descontos Diários',
    description: 'Promoções especiais todos os dias da semana',
    icon: '🏷️',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'entrega-gratis',
    title: 'Entrega Grátis',
    description: 'Frete zero em pedidos acima de R$ 200',
    icon: '🚚',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'fresco-dia',
    title: 'Feito no Dia',
    description: 'Tudo preparado fresco na hora do seu pedido',
    icon: '🕐',
    color: 'from-blue-400 to-cyan-500',
  },
];

// Promo banners - inspired by FoodWagon
export const PROMO_BANNERS = [
  {
    id: 'casamentos',
    title: 'Casamentos dos Sonhos',
    subtitle: 'Buffet completo, decoração e equipe',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    cta: 'Ver pacotes',
    href: '#eventos?tipo=casamentos',
    gradient: 'from-rose-500 to-pink-600',
    badge: 'Mais procurado',
  },
  {
    id: 'aniversarios',
    title: 'Festas de Aniversário',
    subtitle: 'Temas personalizados para todas as idades',
    image: 'https://images.unsplash.com/photo-1557317986-2f2b8b5e0b6e?w=600&h=400&fit=crop',
    cta: 'Ver temas',
    href: '#eventos?tipo=aniversarios',
    gradient: 'from-blue-500 to-cyan-600',
    badge: 'Infantil & Adulto',
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos',
    subtitle: 'Coffee break, confraternizações, lançamentos',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
    cta: 'Solicitar orçamento',
    href: '#eventos?tipo=corporativos',
    gradient: 'from-emerald-500 to-teal-600',
    badge: 'Entrega SP',
  },
];

// Cities for footer directory - inspired by FoodWagon
export const CITIES = [
  'São Paulo', 'Campinas', 'Santos', 'Guarulhos', 'São Bernardo do Campo',
  'Santo André', 'Osasco', 'Ribeirão Preto', 'Sorocaba', 'São José dos Campos',
  'Jundiaí', 'Piracicaba', 'Bauru', 'São José do Rio Preto', 'Taubaté',
  'Franca', 'Limeira', 'Mogi das Cruzes', 'Carapicuíba', 'Diadema',
  'Itaquaquecetuba', 'Suzano', 'Taboão da Serra', 'Embu das Artes', 'Cotia',
  'Votorantim', 'Barueri', 'Indaiatuba', 'Valinhos', 'Vinhedo',
  'Atibaia', 'Bragança Paulista', 'Itu', 'Salto', 'Porto Feliz',
  'Tietê', 'Cerquilho', 'Jumirim', 'Capivari', 'Rafard',
  'Saltinho', 'Elias Fausto', 'Monte Mor', 'Hortolândia', 'Sumaré',
  'Americana', 'Nova Odessa', 'Santa Bárbara d\'Oeste', 'Cosmópolis', 'Paulínia',
];