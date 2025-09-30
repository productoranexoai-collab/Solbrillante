import React from 'react';
import { motion } from 'framer-motion';
import { X as CloseIcon, Trash2 as Trash2Icon, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <motion.div
        className="absolute top-0 right-0 w-full sm:w-96 h-full bg-white shadow-xl"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-slate-800">Carrito de Compras</h2>
            <button onClick={onClose} className="p-1 text-slate-600 hover:text-slate-900" aria-label="Close cart">
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-500">
                <ShoppingCart className="h-16 w-16 mb-4" />
                <p className="text-lg">Tu carrito está vacío</p>
                <button
                  className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                  onClick={onClose}
                >
                  Seguir comprando
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-4 py-4 border-b">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="h-24 w-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.author}</p>
                      <div className="flex items-center mt-2">
                        <button
                          className="border rounded-l px-2 py-1 hover:bg-slate-100"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="border-t border-b px-4 py-1">
                          {item.quantity}
                        </span>
                        <button
                          className="border rounded-r px-2 py-1 hover:bg-slate-100"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-medium text-slate-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        className="text-red-500 hover:text-red-700 mt-2"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <Trash2Icon className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {cart.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-slate-700">Subtotal:</span>
                <span className="font-bold text-slate-900">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
                Proceder al pago
              </button>
              <button
                className="w-full text-slate-600 py-2 mt-2 hover:text-slate-800 transition-colors"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
