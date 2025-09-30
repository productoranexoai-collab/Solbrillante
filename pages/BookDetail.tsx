import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from '../hooks/useCart';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [format, setFormat] = useState('physical');
  const navigate = useNavigate();

  // Mock book data - in a real app, this would come from an API
  const book = {
    id: parseInt(id || '0', 10),
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    price: 24.99,
    coverImage: `https://picsum.photos/800/1200?random=${id || '1'}`,
    description:
      'En una posada en tierra de nadie, un hombre se dispone a relatar, por primera vez, la auténtica historia de su vida. Una historia que únicamente él conoce y que ha quedado diluida tras los rumores, las conjeturas y los cuentos de taberna que le han convertido en un personaje legendario a quien todos daban ya por muerto: Kvothe... músico, mendigo, ladrón, estudiante, mago, héroe y asesino.',
    pages: 662,
    language: 'Español',
    publisher: 'Plaza & Janes',
    publicationDate: '2007-03-27',
    isbn: '9788401352836',
    categories: ['Fantasía', 'Aventura', 'Ficción'],
  };

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      coverImage: book.coverImage,
    }, quantity);
    // Optionally: Add user feedback, e.g., show a toast notification
  };

  return (
    <div className="pb-16">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver atrás
        </button>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 lg:w-2/5 bg-slate-100 p-6 flex items-center justify-center">
              <motion.img
                src={book.coverImage}
                alt={book.title}
                className="w-full max-w-xs rounded-md shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="p-6 md:p-8 md:w-2/3 lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {book.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl font-serif font-bold text-indigo-900 mb-2">
                  {book.title}
                </h1>
                <p className="text-lg text-slate-600 mb-4">por {book.author}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-indigo-600">
                    ${book.price.toFixed(2)}
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-slate-800 mb-2">
                    Descripción
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{book.description}</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-medium text-slate-800 mb-2">Formato</h3>
                  <div className="flex space-x-4">
                    <button
                      className={`px-4 py-2 rounded-md transition-colors ${format === 'physical' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                      onClick={() => setFormat('physical')}
                    >
                      Libro Físico
                    </button>
                    <button
                      className={`px-4 py-2 rounded-md transition-colors ${format === 'digital' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                      onClick={() => setFormat('digital')}
                    >
                      PDF Digital
                    </button>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="font-medium text-slate-800 mb-2">Cantidad</h3>
                  <div className="flex items-center">
                    <button
                      className="border rounded-l px-3 py-1 hover:bg-slate-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="border-t border-b px-6 py-1 font-medium">
                      {quantity}
                    </span>
                    <button
                      className="border rounded-r px-3 py-1 hover:bg-slate-100"
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center font-medium"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Añadir al carrito
                  </button>
                  <button className="bg-white border border-slate-300 text-slate-700 p-3 rounded-md hover:bg-slate-50 transition-colors" aria-label="Add to wishlist">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="bg-white border border-slate-300 text-slate-700 p-3 rounded-md hover:bg-slate-50 transition-colors" aria-label="Share">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="border-t border-slate-200 p-6 md:p-8">
            <h3 className="font-medium text-lg mb-4 text-slate-800">Detalles del libro</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
              <div>
                <p className="text-sm"><span className="font-medium text-slate-700">Páginas:</span> {book.pages}</p>
                <p className="text-sm"><span className="font-medium text-slate-700">Idioma:</span> {book.language}</p>
                <p className="text-sm"><span className="font-medium text-slate-700">Editorial:</span> {book.publisher}</p>
              </div>
              <div>
                <p className="text-sm"><span className="font-medium text-slate-700">Fecha de publicación:</span> {new Date(book.publicationDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-sm"><span className="font-medium text-slate-700">ISBN:</span> {book.isbn}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};