// Sabor Familiar - Main App Component
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Historia from './components/sections/Historia';
import Cardapio from './components/sections/Cardapio';
import Eventos from './components/sections/Eventos';
import Contato from './components/sections/Contato';
import CartDrawer from './components/ui/CartDrawer';
import './index.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 pt-16 lg:pt-20" id="main-content">
          <Hero />
          <Historia />
          <Cardapio />
          <Eventos />
          <Contato />
        </main>

        {/* Footer */}
        <Footer />

        {/* Cart Drawer - Fixed at end for z-index */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;