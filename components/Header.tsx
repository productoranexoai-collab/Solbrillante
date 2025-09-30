import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Menu as MenuIcon,
  X as CloseIcon,
  ShoppingCart,
  Search,
  BookOpen,
} from 'lucide-react';
import { CartDrawer } from './CartDrawer';
import { SearchModal } from './SearchModal';
import { useCart } from '../hooks/useCart';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-700 mr-2" />
            <span className="text-xl font-serif font-bold text-indigo-900">
              Sol Brillante
            </span>
          </Link>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/categorias"
            className="text-slate-700 hover:text-indigo-700 transition-colors font-medium"
          >
            Categorías
          </Link>
          <Link
            to="/nuevos-lanzamientos"
            className="text-slate-700 hover:text-indigo-700 transition-colors font-medium"
          >
            Nuevos Lanzamientos
          </Link>
          <Link
            to="/ofertas"
            className="text-slate-700 hover:text-indigo-700 transition-colors font-medium"
          >
            Ofertas
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="text-slate-700 hover:text-indigo-700 transition-colors"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="text-slate-700 hover:text-indigo-700 transition-colors relative"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 p-4"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-700 mr-2" />
              <span className="text-xl font-serif font-bold text-indigo-900">
                Sol Brillante
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700"
              aria-label="Close menu"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link
              to="/categorias"
              className="text-xl text-slate-700 hover:text-indigo-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorías
            </Link>
            <Link
              to="/nuevos-lanzamientos"
              className="text-xl text-slate-700 hover:text-indigo-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nuevos Lanzamientos
            </Link>
            <Link
              to="/ofertas"
              className="text-xl text-slate-700 hover:text-indigo-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Ofertas
            </Link>
          </nav>
        </motion.div>
      )}
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
};
