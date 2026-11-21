// Sabor Familiar - Main App Component
// Enhanced with FoodWagon-inspired sections + Novo Cardápio Carrossel
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Historia from './components/sections/Historia';
import Eventos from './components/sections/Eventos';
import Contato from './components/sections/Contato';
import HowItWorks from './components/sections/HowItWorks';
import FoodCategoryGrid from './components/sections/FoodCategoryGrid';
import PromoBanners from './components/sections/PromoBanners';
import FeaturesStrip from './components/sections/FeaturesStrip';
import ProdutoCarousel from './components/sections/ProdutoCarousel';
import CartDrawer from './components/ui/CartDrawer';
import FloatingCartButton from './components/ui/FloatingCartButton';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pt-16 lg:pt-20" id="main-content">
          {/* Hero with Search - FoodWagon Style */}
          <Hero />

          {/* How It Works - 4 Step Process */}
          <HowItWorks />

          {/* Food Category Grid - Search by Food */}
          <FoodCategoryGrid />

          {/* Our Story */}
          <Historia />

          {/* Novo Cardápio / Encomendas - Carrossel Horizontal */}
          <ProdutoCarousel />

          {/* Promo Banners - Event Highlights */}
          <PromoBanners />

          {/* Events */}
          <Eventos />

          {/* Features Strip */}
          <FeaturesStrip />

          {/* Contact */}
          <Contato />
        </main>

        {/* Footer with City Directory */}
        <Footer />

        {/* Cart Drawer - Fixed at end for z-index */}
        <CartDrawer />

        {/* Floating Cart Button (Desktop) */}
        <FloatingCartButton />
      </div>
    </CartProvider>
  );
}

export default App;