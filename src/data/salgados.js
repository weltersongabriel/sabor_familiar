// Sabor Familiar - Dados dos Salgados
// Edite este arquivo para adicionar/remover/modificar produtos
// Imagens: use URLs do Unsplash ou coloque imagens em public/images/

export const CATEGORIES = [
  { id: 'all', label: 'Todos', icon: '🍽️' },
  { id: 'fritos', label: 'Salgados Fritos', icon: '🍟' },
  { id: 'assados', label: 'Salgados Assados', icon: '🥧' },
  { id: 'mini', label: 'Mini Salgados', icon: '🥟' },
  { id: 'doces', label: 'Doces', icon: '🍰' },
  { id: 'bebidas', label: 'Bebidas', icon: '🥤' },
  { id: 'combos', label: 'Combos/Cento', icon: '📦' },
];

export const SALGADOS = [
  // Salgados Fritos
  {
    id: 'coxinha-frango',
    name: 'Coxinha de Frango',
    category: 'fritos',
    description: 'Massa crocante recheada com frango desfiado temperado, catupiry e toque de salsa. A clássica favorita da família!',
    price: 8.00,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop&crop=center',
    popular: true,
    tags: ['tradicional', 'mais vendida'],
  },
  {
    id: 'risole-presunto',
    name: 'Risole de Presunto e Queijo',
    category: 'fritos',
    description: 'Massa leve e crocante com generoso recheio de presunto fatiado e queijo muçarela derretido.',
    price: 7.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1631105730110-4d9a9e5c4c4c?w=400&h=300&fit=crop&crop=center',
    popular: true,
    tags: ['clássico'],
  },
  {
    id: 'kibe',
    name: 'Quibe Frito',
    category: 'fritos',
    description: 'Trigo para quibe, carne bovina temperada com hortelã, cebola e especiarias. Frito na hora, sequinho por fora e suculento por dentro.',
    price: 7.00,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center',
    tags: ['tempero caseiro'],
  },
  {
    id: 'bolinha-queijo',
    name: 'Bolinha de Queijo',
    category: 'fritos',
    description: 'Massa de batata com recheio cremoso de queijo muçarela e requeijão. Derrete na boca!',
    price: 6.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1639024471283-035188835308?w=400&h=300&fit=crop&crop=center',
    tags: ['vegetariano'],
  },
  {
    id: 'pastel-carne',
    name: 'Pastel de Carne',
    category: 'fritos',
    description: 'Massa fina e crocante recheada com carne moída refogada, tomate, cebola e azeitonas.',
    price: 8.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1626799629272-22f3d3c3e5a0?w=400&h=300&fit=crop&crop=center',
    tags: ['generoso'],
  },

  // Salgados Assados
  {
    id: 'empada-frango',
    name: 'Empada de Frango',
    category: 'assados',
    description: 'Massa podre artesanal recheada com frango cremoso, milho, ervilha e azeitonas. Assada douradinha.',
    price: 9.00,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1631320893745-f2f0a2e2c9b6?w=400&h=300&fit=crop&crop=center',
    popular: true,
    tags: ['massa podre', 'caseira'],
  },
  {
    id: 'empada-palma',
    name: 'Empada de Palmito',
    category: 'assados',
    description: 'Delicada massa podre com recheio cremoso de palmito pupunha, catupiry e toque de noz-moscada.',
    price: 9.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1631320893745-f2f0a2e2c9b6?w=400&h=300&fit=crop&crop=center',
    tags: ['vegetariano', 'especial'],
  },
  {
    id: 'esfiha-carne',
    name: 'Esfiha de Carne',
    category: 'assados',
    description: 'Massa macia de fermentação natural com recheio de carne bovina, tomate, cebola, hortelã e limão.',
    price: 7.00,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&crop=center',
    tags: ['fermentação natural'],
  },
  {
    id: 'esfiha-frango',
    name: 'Esfiha de Frango com Catupiry',
    category: 'assados',
    description: 'Massa fofinha recheada com frango desfiado cremoso e catupiry. Um clássico irresistível.',
    price: 7.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&crop=center',
    tags: ['cremoso'],
  },
  {
    id: 'folhado-frango',
    name: 'Folhado de Frango',
    category: 'assados',
    description: 'Massa folhada artesanal, leve e crocante, recheada com frango cremoso e queijo. Assada na hora.',
    price: 10.00,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1631320893745-f2f0a2e2c9b6?w=400&h=300&fit=crop&crop=center',
    tags: ['massa folhada', 'premium'],
  },

  // Mini Salgados (para festas)
  {
    id: 'mini-coxinha',
    name: 'Mini Coxinha de Frango',
    category: 'mini',
    description: 'Versão miniatura da nossa coxinha clássica. Perfeita para festas e coffee breaks. Vendida por cento.',
    price: 180.00,
    unit: 'cento (100 unid.)',
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop&crop=center',
    popular: true,
    tags: ['festa', 'cento'],
  },
  {
    id: 'mini-risole',
    name: 'Mini Risole de Presunto e Queijo',
    category: 'mini',
    description: 'Mini risoles crocantes com recheio generoso. Ideal para buffets e eventos. Vendido por cento.',
    price: 170.00,
    unit: 'cento (100 unid.)',
    image: 'https://images.unsplash.com/photo-1631105730110-4d9a9e5c4c4c?w=400&h=300&fit=crop&crop=center',
    tags: ['festa', 'cento'],
  },
  {
    id: 'mini-kibe',
    name: 'Mini Quibe',
    category: 'mini',
    description: 'Mini quibes fritos na hora, sequinhos e saborosos. Tempero caseiro da vovó. Vendido por cento.',
    price: 160.00,
    unit: 'cento (100 unid.)',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center',
    tags: ['festa', 'cento', 'tempero caseiro'],
  },
  {
    id: 'mini-empada',
    name: 'Mini Empada de Frango',
    category: 'mini',
    description: 'Mini empadas com massa podre artesanal e recheio cremoso de frango. Vendida por cento.',
    price: 200.00,
    unit: 'cento (100 unid.)',
    image: 'https://images.unsplash.com/photo-1631320893745-f2f0a2e2c9b6?w=400&h=300&fit=crop&crop=center',
    tags: ['festa', 'cento', 'massa podre'],
  },
  {
    id: 'mini-esfiha',
    name: 'Mini Esfiha de Carne',
    category: 'mini',
    description: 'Mini esfihas abertas com massa macia e recheio suculento de carne. Perfeitas para eventos. Vendida por cento.',
    price: 180.00,
    unit: 'cento (100 unid.)',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop&crop=center',
    tags: ['festa', 'cento'],
  },

  // Doces
  {
    id: 'brigadeiro',
    name: 'Brigadeiro Tradicional',
    category: 'doces',
    description: 'O verdadeiro brigadeiro brasileiro: leite condensado, chocolate em pó, manteiga e granulado. Feito no tacho de cobre.',
    price: 3.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center',
    popular: true,
    tags: ['tradicional', 'tacho de cobre'],
  },
  {
    id: 'beijinho',
    name: 'Beijinho de Coco',
    category: 'doces',
    description: 'Leite condensado, coco ralado fresco, manteiga e cravo. Enrolado no coco e com cravo na ponta.',
    price: 3.50,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1623406373188-7b8b5e3e8b8c?w=400&h=300&fit=crop&crop=center',
    tags: ['coco fresco'],
  },
  {
    id: 'brigadeiro-gourmet',
    name: 'Brigadeiro Gourmet (Belga/Ninho/Nutella)',
    category: 'doces',
    description: 'Versões premium: Chocolate Belga 70%, Leite Ninho com Nutella, ou Doce de Leite Argentino. Vendido por unidade.',
    price: 5.00,
    unit: 'unidade',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center',
    tags: ['premium', 'gourmet'],
  },
  {
    id: 'minibrigadeiro',
    name: 'Mini Brigadeiro (Cento)',
    category: 'doces',
    description: 'Brigadeiros tradicionais tamanho mini para festas. Vendido por cento (100 unidades).',
    price: 220.00,
    unit: 'cento (100 unid.)',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center',
    tags: ['festa', 'cento'],
  },

  // Bebidas
  {
    id: 'refri-lata',
    name: 'Refrigerante Lata (350ml)',
    category: 'bebidas',
    description: 'Coca-Cola, Guaraná Antarctica, Sprite, Fanta Laranja ou Uva. Sempre geladinhos.',
    price: 6.00,
    unit: 'lata',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop&crop=center',
    tags: ['gelado'],
  },
  {
    id: 'suco-natural',
    name: 'Suco Natural (500ml)',
    category: 'bebidas',
    description: 'Laranja, Maracujá, Abacaxi com Hortelã, ou Melancia. Feito na hora, sem açúcar.',
    price: 12.00,
    unit: 'garrafa 500ml',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&crop=center',
    tags: ['natural', 'sem açúcar'],
  },
  {
    id: 'agua',
    name: 'Água Mineral (500ml)',
    category: 'bebidas',
    description: 'Água mineral natural, gelada.',
    price: 4.00,
    unit: 'garrafa',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=center',
    tags: [],
  },

  // Combos
  {
    id: 'combo-festa-pequeno',
    name: 'Combo Festa Pequena (50 pessoas)',
    category: 'combos',
    description: '100 Mini Coxinhas + 100 Mini Risoles + 50 Mini Quibes + 50 Mini Empadas + 50 Brigadeiros + 20 Refrigerantes. Ideal para até 50 pessoas.',
    price: 650.00,
    unit: 'combo completo',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=center',
    popular: true,
    tags: ['até 50 pessoas', 'economia', 'entrega grátis'],
  },
  {
    id: 'combo-festa-medio',
    name: 'Combo Festa Média (100 pessoas)',
    category: 'combos',
    description: '200 Mini Coxinhas + 200 Mini Risoles + 100 Mini Quibes + 100 Mini Empadas + 100 Brigadeiros + 40 Refrigerantes. Ideal para até 100 pessoas.',
    price: 1200.00,
    unit: 'combo completo',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=center',
    tags: ['até 100 pessoas', 'economia', 'entrega grátis'],
  },
  {
    id: 'combo-cafe-manha',
    name: 'Combo Café da Manhã/ Tarde',
    category: 'combos',
    description: '50 Mini Empadas (frango/palmito) + 50 Mini Esfihas + 30 Pães de Queijo + 20 Sucos Naturais (500ml) + 20 Cafés. Para 20-30 pessoas.',
    price: 480.00,
    unit: 'combo completo',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=center',
    tags: ['café da manhã', 'corporativo'],
  },
];

// Helper functions
export const getSalgadoById = (id) => SALGADOS.find(s => s.id === id);

export const getSalgadosByCategory = (categoryId) => {
  if (categoryId === 'all') return SALGADOS;
  return SALGADOS.filter(s => s.category === categoryId);
};

export const getPopularSalgados = () => SALGADOS.filter(s => s.popular);

export const searchSalgados = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return SALGADOS;
  return SALGADOS.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.description.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q) ||
    s.tags.some(tag => tag.toLowerCase().includes(q))
  );
};

export default { CATEGORIES, SALGADOS, getSalgadoById, getSalgadosByCategory, getPopularSalgados, searchSalgados };