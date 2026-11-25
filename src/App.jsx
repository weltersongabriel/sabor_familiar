// Sabor Familiar - Main App Component
// Atualizado: Hero mais claro, HowItWorks 3 passos, Cardápio só salgados, CartPage separada, Eventos com WhatsApp
import { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Historia from './components/sections/Historia';
import Eventos from './components/sections/Eventos';
import Contato from './components/sections/Contato';
import HowItWorks from './components/sections/HowItWorks';
import ProdutoCarousel from './components/sections/ProdutoCarousel';
import CartDrawer from './components/ui/CartDrawer';
import FloatingCartButton from './components/ui/FloatingCartButton';
import CartPage from './components/sections/CartPage';
import './index.css';

// Inner component to access cart context
function AppContent() {
  const { isOpen: cartDrawerOpen, closeCart } = useCart();
  const [showCartPage, setShowCartPage] = useState(false);

  // When user wants to see full cart page (from mobile bar or floating button)
  const handleOpenCartPage = () => {
    setShowCartPage(true);
    closeCart();
  };

  const handleBackFromCartPage = () => {
    setShowCartPage(false);
  };

  // Show CartPage as "separate page" when requested
  if (showCartPage) {
    return (
      <CartPage onBack={handleBackFromCartPage} />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header onOpenCartPage={handleOpenCartPage} />

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20" id="main-content">
        {/* Hero with Search - FoodWagon Style */}
        <Hero />

        {/* How It Works - 3 Step Process */}
        <HowItWorks />

        {/* Nossa História */}
        <Historia />

        {/* Cardápio - Carrossel Horizontal apenas salgados */}
        <ProdutoCarousel onOpenCartPage={handleOpenCartPage} />

        {/* Eventos */}
        <Eventos />

        {/* Contato */}
        <Contato />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer - Fixed at end for z-index (desktop quick view) */}
      <CartDrawer />

      {/* Floating Cart Button (Desktop) - opens CartPage */}
      <FloatingCartButton onClick={handleOpenCartPage} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;