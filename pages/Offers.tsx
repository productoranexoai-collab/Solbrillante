import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { useCart } from '../hooks/useCart';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const Offers = () => {
  const { addToCart } = useCart();
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const daysRemaining = Math.ceil((endOfMonth.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  const offerBooks = [
    { id: 201, title: 'Cien años de soledad', author: 'Gabriel García Márquez', originalPrice: 29.99, price: 19.99, discountPercentage: 33, coverImage: 'https://picsum.photos/800/1200?random=201' },
    { id: 202, title: '1984', author: 'George Orwell', originalPrice: 24.5, price: 16.99, discountPercentage: 31, coverImage: 'https://picsum.photos/800/1200?random=202' },
    { id: 203, title: 'El Hobbit', author: 'J.R.R. Tolkien', originalPrice: 26.99, price: 18.5, discountPercentage: 31, coverImage: 'https://picsum.photos/800/1200?random=203' },
    { id: 204, title: 'Matar a un ruiseñor', author: 'Harper Lee', originalPrice: 22.99, price: 15.99, discountPercentage: 30, coverImage: 'https://picsum.photos/800/1200?random=204' },
    { id: 205, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', originalPrice: 32.5, price: 22.99, discountPercentage: 29, coverImage: 'https://picsum.photos/800/1200?random=205' },
    { id: 206, title: 'El principito', author: 'Antoine de Saint-Exupéry', originalPrice: 19.99, price: 12.99, discountPercentage: 35, coverImage: 'https://picsum.photos/800/1200?random=206' },
  ];

  const handleAddToCart = (book: typeof offerBooks[0]) => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      coverImage: book.coverImage,
    });
  };

  return (
    <div className="pb-16">
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Ofertas Especiales
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Aprovecha estos descuentos exclusivos en títulos seleccionados
          </p>
          <div className="inline-flex items-center bg-white bg-opacity-20 px-6 py-3 rounded-full">
            <Clock className="h-5 w-5 mr-2" />
            <span className="font-medium">
              Ofertas terminan en {daysRemaining} {daysRemaining === 1 ? 'día' : 'días'}
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerBooks.map((book, index) => (
            <motion.div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full z-10">
                -{book.discountPercentage}%
              </div>
              <div className="overflow-hidden">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-indigo-900 mb-2 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-slate-600 mb-4">{book.author}</p>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-indigo-600 mr-3">
                    ${book.price.toFixed(2)}
                  </span>
                  <span className="text-slate-500 line-through">
                    ${book.originalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/libro/${book.id}`}
                    className="bg-white border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 transition-colors text-center font-medium"
                  >
                    Ver detalles
                  </Link>
                  <button 
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                    onClick={() => handleAddToCart(book)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};