# Sabor Familiar - Site de Salgados e Eventos

Site completo, mobile-first, para a "Sabor Familiar" - negócio familiar de salgados por encomenda e buffet para eventos.

## 🚀 Tecnologias

- **React 19** + **Vite 5** - Build rápido e moderno
- **Tailwind CSS v4** - Estilização utility-first com design system customizado
- **Framer Motion** - Animações suaves e performáticas
- **React Icons** - Ícones leves e acessíveis
- **Context API + useReducer** - Gerenciamento de estado do carrinho
- **localStorage** - Persistência do carrinho entre sessões

## 📁 Estrutura do Projeto

```
sabor-familiar/
├── public/
│   ├── favicon.svg           # Favicon personalizado
│   └── og-image.svg          # Imagem para compartilhamento social
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx    # Navbar com menu mobile e carrinho
│   │   │   └── Footer.jsx    # Rodapé com contatos e créditos
│   │   ├── sections/
│   │   │   ├── Hero.jsx      # Seção principal com CTA
│   │   │   ├── Historia.jsx  # Nossa história e valores
│   │   │   ├── Cardapio.jsx  # Cardápio estilo iFood
│   │   │   ├── Eventos.jsx   # Buffet para eventos
│   │   │   └── Contato.jsx   # Contato e mapa
│   │   └── ui/
│   │       ├── Button.jsx           # Botões com variantes
│   │       ├── Input.jsx            # Inputs acessíveis
│   │       ├── Textarea.jsx         # Textarea acessível
│   │       ├── Select.jsx           # Select customizado
│   │       ├── QuantityControl.jsx  # Controle -/+
│   │       ├── Modal.jsx            # Modal acessível
│   │       ├── CartDrawer.jsx       # Carrinho lateral/bottom-sheet
│   │       └── FloatingWhatsApp.jsx # Botão flutuante WhatsApp
│   ├── context/
│   │   └── CartContext.jsx   # Estado global do carrinho
│   ├── data/
│   │   ├── salgados.js       # 24 produtos em 7 categorias
│   │   ├── eventos.js        # 6 tipos de eventos + processo
│   │   └── historia.js       # Textos da história da família
│   ├── config.js             # Configurações centrais (WhatsApp, endereço, etc.)
│   ├── index.css             # Tailwind + design system customizado
│   ├── App.jsx               # Componente raiz
│   └── main.jsx              # Entry point
├── index.html                # HTML com SEO, OG, JSON-LD
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Paleta de Cores
```css
/* Chocolate (marca principal) */
--color-chocolate-900: #2a150d;
--color-chocolate-800: #3b1f14;  /* Principal */
--color-chocolate-600: #5a2e1b;
--color-chocolate-100: #e8b59e;

/* Creme (fundo) */
--color-cream-50: #fffefb;
--color-cream-100: #fff4e0;  /* Principal */

/* Dourado (destaque) */
--color-gold-400: #d9a441;  /* Principal */
--color-gold-500: #c49238;

/* Vermelho quente (ação) */
--color-warm-red-500: #c8442b;  /* Principal */
```

### Tipografia
- **Títulos decorativos**: Pacifico / Lobster Two (cursiva)
- **Subtítulos**: Playfair Display (serifada elegante)
- **Textos**: Poppins / Nunito (sans-serif legível)

### Componentes Base
- `.btn` / `.btn-primary` / `.btn-secondary` / `.btn-gold` / `.btn-outline`
- `.card` / `.card-interactive`
- `.input` / `.label`
- `.badge` / `.badge-gold` / `.badge-chocolate`
- `.container` / `.section` / `.divider-gold`

## ⚙️ Configuração

Edite `src/config.js` para personalizar:

```javascript
export const CONFIG = {
  whatsapp: '5511999999999',  // Seu número: 55 + DDD + número
  business: {
    name: 'Sabor Familiar',
    slogan: 'Feito com amor para sua família',
    address: 'Rua das Flores, 123 - Centro',
    city: 'São Paulo - SP',
    phone: '(11) 99999-9999',
    email: 'contato@saborfamiliar.com.br',
    instagram: '@saborfamiliar',
    hours: { ... }
  },
  order: {
    minAdvanceHours: 24,
    deliveryFee: 15.00,
    freeDeliveryThreshold: 200.00
  },
  developer: {
    name: 'Welterson Gabriel',
    github: 'https://github.com/weltersongabriel',
    linkedin: 'https://linkedin.com/in/weltersongabriel',
    portfolio: 'https://weltersongabriel.netlify.app/'
  }
};
```

## 📦 Cardápio (src/data/salgados.js)

Array `SALGADOS` com objetos:
```javascript
{
  id: 'coxinha-frango',
  name: 'Coxinha de Frango',
  category: 'fritos',      // fritos, assados, mini, doces, bebidas, combos
  description: '...',
  price: 8.00,
  unit: 'unidade',         // ou 'cento (100 unid.)', 'garrafa 500ml', 'combo completo'
  image: 'https://...',    // URL da imagem (Unsplash placeholder)
  popular: true,           // Badge "Mais pedido"
  tags: ['tradicional']    // Tags extras
}
```

Categorias em `CATEGORIES` array.

## 📝 História (src/data/historia.js)

Objeto `HISTORIA_TEXTO` com:
- `titulo`, `subtitulo`
- `intro`, `paragrafos[]`
- `valores[]` (6 valores com ícones)
- `linhaDoTempo[]` (6 marcos)
- `depoimento` (citação da família)

## 🎪 Eventos (src/data/eventos.js)

Array `EVENT_TYPES` com 6 tipos:
```javascript
{
  id: 'casamentos',
  title: 'Casamentos',
  subtitle: '...',
  description: '...',
  image: '...',
  gallery: ['...', '...', '...'],
  features: [...],
  capacity: '50 a 500+ convidados',
  duration: '6 a 8 horas de evento'
}
```

`PROCESS_STEPS` - 4 passos "Como funciona".

## 🛠️ Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte o repositório
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Deploy automático

### Docker (Opcional)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
```

## ♿ Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`, `article`)
- `alt` em todas as imagens
- Contraste WCAG AA em todos os elementos
- Foco visível (`focus-visible:ring-2 focus-visible:ring-gold-400`)
- Navegação por teclado completa
- `aria-label`, `aria-labelledby`, `aria-describedby` onde necessário
- `prefers-reduced-motion` respeitado
- Modais com trap de foco e `role="dialog"`

## ⚡ Performance

- Imagens com `loading="lazy"` e `width`/`height` explícitos
- Fontes com `font-display: swap`
- Code splitting automático do Vite
- Tailwind CSS purgado em produção
- Animações CSS nativas + Framer Motion otimizado

## 📱 Responsividade

Breakpoints testados:
- **360px** - Mobile pequeno
- **390px** - Mobile padrão (iPhone)
- **768px** - Tablet
- **1024px** - Desktop pequeno
- **1440px** - Desktop grande

Áreas de toque mínimas: **44×44px**

## 🔧 Personalização Avançada

### Adicionar nova categoria
1. Adicione em `src/data/salgados.js` no array `CATEGORIES`
2. Adicione produtos com `category` correspondente

### Mudar cores
Edite `@theme` em `src/index.css` nas variáveis `--color-*`

### Adicionar nova seção
1. Crie componente em `src/components/sections/`
2. Importe e adicione no `App.jsx`
3. Adicione link no `Header.jsx` (`NAV_LINKS`)

### Traduzir para outros idiomas
Crie `src/data/i18n.js` com objetos de tradução e use hook `useTranslation`

## 📄 Licença

Desenvolvido por **Welterson Gabriel** para a Sabor Familiar.

- GitHub: [weltersongabriel](https://github.com/weltersongabriel)
- LinkedIn: [weltersongabriel](https://linkedin.com/in/weltersongabriel)
- Portfólio: [weltersongabriel.netlify.app](https://weltersongabriel.netlify.app/)

---

**Feito com ☕ e ❤️ para famílias que amam bom comida.**