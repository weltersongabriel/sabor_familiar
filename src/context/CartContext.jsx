// Sabor Familiar - Cart Context with useReducer
// Gerencia estado do carrinho com persistência no localStorage

import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { CONFIG } from '../config';

// Initial state
const initialState = {
  items: [],
  isOpen: false,
  customerInfo: {
    name: '',
    date: '',
    time: '',
    type: 'retirada', // 'retirada' ou 'entrega'
    address: '',
    notes: '',
  },
};

// Action types
const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
  SET_CUSTOMER_INFO: 'SET_CUSTOMER_INFO',
  RESET_CUSTOMER_INFO: 'RESET_CUSTOMER_INFO',
  LOAD_FROM_STORAGE: 'LOAD_FROM_STORAGE',
};

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const { product, quantity = 1, notes = '' } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.id === product.id && item.notes === notes
      );

      let newItems;
      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            unit: product.unit,
            image: product.image,
            quantity,
            notes,
          },
        ];
      }

      return { ...state, items: newItems };
    }

    case ACTIONS.REMOVE_ITEM: {
      const { id, notes } = action.payload;
      const newItems = state.items.filter(
        item => !(item.id === id && item.notes === notes)
      );
      return { ...state, items: newItems };
    }

    case ACTIONS.UPDATE_QUANTITY: {
      const { id, notes, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(
          item => !(item.id === id && item.notes === notes)
        );
        return { ...state, items: newItems };
      }
      const newItems = state.items.map(item =>
        item.id === id && item.notes === notes
          ? { ...item, quantity }
          : item
      );
      return { ...state, items: newItems };
    }

    case ACTIONS.CLEAR_CART:
      return { ...state, items: [] };

    case ACTIONS.TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };

    case ACTIONS.OPEN_CART:
      return { ...state, isOpen: true };

    case ACTIONS.CLOSE_CART:
      return { ...state, isOpen: false };

    case ACTIONS.SET_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: { ...state.customerInfo, ...action.payload },
      };

    case ACTIONS.RESET_CUSTOMER_INFO:
      return { ...state, customerInfo: initialState.customerInfo };

    case ACTIONS.LOAD_FROM_STORAGE:
      return { ...state, ...action.payload, isOpen: false };

    default:
      return state;
  }
}

// Context
const CartContext = createContext(null);

// Provider
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sabor-familiar-cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate structure
        if (parsed.items && Array.isArray(parsed.items)) {
          dispatch({ type: ACTIONS.LOAD_FROM_STORAGE, payload: parsed });
        }
      }
    } catch (e) {
      console.warn('Erro ao carregar carrinho do localStorage:', e);
      localStorage.removeItem('sabor-familiar-cart');
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    try {
      const toSave = {
        items: state.items,
        customerInfo: state.customerInfo,
      };
      localStorage.setItem('sabor-familiar-cart', JSON.stringify(toSave));
    } catch (e) {
      console.warn('Erro ao salvar carrinho no localStorage:', e);
    }
  }, [state.items, state.customerInfo]);

  // Action creators
  const addItem = useCallback((product, quantity = 1, notes = '') => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: { product, quantity, notes } });
    // Não abre mais o drawer automaticamente - componentes decidem quando abrir
  }, []);

  const removeItem = useCallback((id, notes = '') => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id, notes } });
  }, []);

  const updateQuantity = useCallback((id, notes, quantity) => {
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id, notes, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLEAR_CART });
    dispatch({ type: ACTIONS.RESET_CUSTOMER_INFO });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_CART });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: ACTIONS.OPEN_CART });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: ACTIONS.CLOSE_CART });
  }, []);

  const setCustomerInfo = useCallback((info) => {
    dispatch({ type: ACTIONS.SET_CUSTOMER_INFO, payload: info });
  }, []);

  // Computed values
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = state.customerInfo.type === 'entrega' && subtotal < CONFIG.order.freeDeliveryThreshold
    ? CONFIG.order.deliveryFee
    : 0;
  const total = subtotal + deliveryFee;
  const isEmpty = state.items.length === 0;

  // Format currency
  const formatPrice = useCallback((price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }, []);

  // Generate WhatsApp message
  const generateWhatsAppMessage = useCallback(() => {
    const { name, date, time, type, address, notes } = state.customerInfo;
    const itemsText = state.items
      .map(item => `• ${item.quantity}x ${item.name} — ${formatPrice(item.price * item.quantity)}`)
      .join('\n');

    const typeLabel = type === 'entrega' ? 'Entrega' : 'Retirada';
    const addressText = type === 'entrega' && address ? `\n*Endereço:* ${address}` : '';

    return `Olá! Gostaria de fazer uma encomenda 😊
*Nome:* ${name}
*Data:* ${date} às ${time}
*Tipo:* ${typeLabel}${addressText}
*Pedido:*
${itemsText}
*Subtotal:* ${formatPrice(subtotal)}
${deliveryFee > 0 ? `*Taxa de entrega:* ${formatPrice(deliveryFee)}` : ''}
*Total:* ${formatPrice(total)}
${notes ? `*Obs:* ${notes}` : ''}`;
  }, [state.customerInfo, state.items, subtotal, deliveryFee, total, formatPrice]);

  // Open WhatsApp
  const sendToWhatsApp = useCallback(() => {
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, [generateWhatsAppMessage]);

  const value = {
    // State
    items: state.items,
    isOpen: state.isOpen,
    customerInfo: state.customerInfo,
    itemCount,
    subtotal,
    deliveryFee,
    total,
    isEmpty,
    // Actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    setCustomerInfo,
    // Helpers
    formatPrice,
    generateWhatsAppMessage,
    sendToWhatsApp,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
}

export default CartContext;