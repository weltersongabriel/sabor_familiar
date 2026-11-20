// Sabor Familiar - Dados de Eventos
// Edite este arquivo para personalizar os tipos de eventos atendidos

export const EVENT_TYPES = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    subtitle: 'O dia mais especial merece o melhor sabor',
    description: 'Buffet completo para casamentos: jantar empratado, ilhas gastronômicas, mesa de frios, sobremesas artesanais e café da manhã para os noivos. Atendemos desde mini-weddings até grandes celebrações.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1537633225280-2e371f09e4d6?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop&crop=center',
    ],
    features: [
      'Cardápio personalizado com degustação prévia',
      'Equipe uniformizada e treinada',
      'Louças, talheres e toalhas inclusos',
      'Bolo de noiva artesanal opcional',
      'Café da manhã para noivos no dia seguinte',
    ],
    capacity: '50 a 500+ convidados',
    duration: '6 a 8 horas de evento',
  },
  {
    id: 'aniversarios',
    title: 'Aniversários',
    subtitle: 'Comemore com quem você ama',
    description: 'De festas infantis a comemorações de 15 anos e aniversários adultos. Salgados, doces, bolo personalizado, bebidas e decoração temática. Tudo feito com carinho para sua festa ser inesquecível.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&h=400&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1529673243841-535a4d34b40c?w=800&h=600&fit=crop&crop=center',
    ],
    features: [
      'Temas personalizados (infantil, 15 anos, adulto)',
      'Bolo decorado artesanal incluso',
      'Mesa de doces e salgados variados',
      'Decoração com balões e painel',
      'Recreação infantil opcional',
    ],
    capacity: '20 a 200 convidados',
    duration: '4 a 6 horas de evento',
  },
  {
    id: 'batizados',
    title: 'Batizados & Primeiras Comunhões',
    subtitle: 'Fé e família celebradas com carinho',
    description: 'Eventos religiosos íntimos e acolhedores. Buffet leve e elegante com salgados assados, doces finos, bolo decorado com tema religioso e bebidas. Ambiente familiar e respeitoso.',
    image: 'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=600&h=400&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1519183071298-a2962be90b8e?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1465310271245-fc2f24b1d1b2?w=800&h=600&fit=crop&crop=center',
    ],
    features: [
      'Cardápio leve: salgados assados e doces finos',
      'Bolo com decoração religiosa personalizada',
      'Ambiente acolhedor e familiar',
      'Opção de café colonial completo',
      'Lembrancinhas personalizadas opcionais',
    ],
    capacity: '30 a 150 convidados',
    duration: '3 a 5 horas de evento',
  },
  {
    id: 'formaturas',
    title: 'Formaturas',
    subtitle: 'A conquista merece celebração à altura',
    description: 'Baile de formatura, colação de grau ou festa de conclusão. Buffet premium com ilhas gastronômicas, open bar, mesa de sobremesas, café da madrugada e toda estrutura para sua turma comemorar.',
    image: 'https://images.unsplash.com/photo-1523037111586-9fde7d8b4b4e?w=600&h=400&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1523037111586-9fde7d8b4b4e?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1497449624340-55c860a3155e?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&crop=center',
    ],
    features: [
      'Buffet premium com ilhas gastronômicas',
      'Open bar completo (bebidas nacionais/importadas)',
      'Café da madrugada com pães e doces',
      'Mesa de sobremesas artesanais',
      'Estrutura completa: som, luz, DJ',
    ],
    capacity: '100 a 1000+ formandos',
    duration: '8 a 12 horas de evento',
  },
  {
    id: 'confraternizacoes',
    title: 'Confraternizações',
    subtitle: 'Una a equipe com sabor caseiro',
    description: 'Festas de fim de ano, aniversário da empresa, conquistas de metas. Coffee breaks, almoços, jantares ou coquetéis. Cardápios flexíveis para todos os orçamentos e tamanhos de equipe.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1531482615713-2afd69de8c3e?w=800&h=600&fit=crop&crop=center',
    ],
    features: [
      'Coffee break completo (salgados, doces, bebidas)',
      'Almoço ou jantar empratado ou buffet',
      'Coquetel volante com ilhas gastronômicas',
      'Opções vegetarianas/veganas/sem glúten',
      'Entrega e montagem no local da empresa',
    ],
    capacity: '10 a 500+ colaboradores',
    duration: '2 a 6 horas de evento',
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos',
    subtitle: 'Profissionalismo com toque familiar',
    description: 'Workshops, treinamentos, lançamentos de produto, reuniões de diretoria. Coffee breaks executivos, almoços executivos, coquetéis de networking. Pontualidade, discrição e qualidade impecável.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop&crop=center',
    gallery: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1531482615713-2afd69de8c3e?w=800&h=600&fit=crop&crop=center',
    ],
    features: [
      'Coffee break executivo (premium)',
      'Almoço executivo empratado',
      'Coquetel de networking',
      'Equipe discreta e uniforme social',
      'Montagem em salas de reunião/auditório',
      'Cardápios personalizados por evento',
    ],
    capacity: '10 a 300 participantes',
    duration: 'Conforme agenda do evento',
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Contato Inicial',
    description: 'Entre em contato pelo WhatsApp, telefone ou formulário. Conte-nos a data, tipo de evento, número de convidados e suas preferências.',
    icon: '📞',
  },
  {
    step: 2,
    title: 'Orçamento Personalizado',
    description: 'Enviamos uma proposta detalhada com cardápio sugerido, valores, forma de pagamento e cronograma. Ajustamos até ficar perfeito para você.',
    icon: '📋',
  },
  {
    step: 3,
    title: 'Degustação & Aprovação',
    description: 'Agendamos uma degustação sem compromisso para você provar e aprovar o cardápio. Definimos juntos os últimos detalhes.',
    icon: '🍽️',
  },
  {
    step: 4,
    title: 'Seu Evento Perfeito',
    description: 'No dia do evento, nossa equipe cuida de tudo: montagem, serviço, reposição e desmontagem. Você só aproveita com seus convidados.',
    icon: '✨',
  },
];

export const WHATSAPP_EVENT_MESSAGE = (eventType, eventData) => {
  const { name, date, guests, phone, message } = eventData;
  const event = EVENT_TYPES.find(e => e.id === eventType) || { title: 'Evento' };

  return `Olá! Gostaria de solicitar orçamento para *${event.title}* 😊

*Nome:* ${name}
*Data do evento:* ${date}
*Convidados:* ${guests}
*Telefone:* ${phone}
*Tipo:* ${event.title}

${message ? `*Observações:* ${message}` : ''}

Aguardo retorno para conversarmos!`;
};

export default { EVENT_TYPES, PROCESS_STEPS, WHATSAPP_EVENT_MESSAGE };