import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos los géneros' },
    { id: 'fiction', name: 'Ficción' },
    { id: 'nonfiction', name: 'No ficción' },
    { id: 'fantasy', name: 'Fantasía' },
    { id: 'scifi', name: 'Ciencia ficción' },
    { id: 'mystery', name: 'Misterio' },
    { id: 'romance', name: 'Romance' },
    { id: 'biography', name: 'Biografías' },
    { id: 'history', name: 'Historia' },
  ];

  const books = [
    { id: 1, title: 'El nombre del viento', author: 'Patrick Rothfuss', price: 24.99, category: 'fantasy', coverImage: 'https://picsum.photos/800/1200?random=1' },
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', price: 19.99, category: 'nonfiction', coverImage: 'https://picsum.photos/800/1200?random=2' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', price: 22.99, category: 'scifi', coverImage: 'https://picsum.photos/800/1200?random=3' },
    { id: 4, title: 'Crimen y castigo', author: 'Fyodor Dostoevsky', price: 18.5, category: 'fiction', coverImage: 'https://picsum.photos/800/1200?random=4' },
    { id: 5, title: 'El código Da Vinci', author: 'Dan Brown', price: 15.99, category: 'mystery', coverImage: 'https://picsum.photos/800/1200?random=5' },
    { id: 6, title: 'Orgullo y prejuicio', author: 'Jane Austen', price: 12.99, category: 'romance', coverImage: 'https://picsum.photos/800/1200?random=6' },
    { id: 7, title: 'Steve Jobs', author: 'Walter Isaacson', price: 23.99, category: 'biography', coverImage: 'https://picsum.photos/800/1200?random=7' },
    { id: 8, title: 'Historia del tiempo', author: 'Stephen Hawking', price: 21.5, category: 'nonfiction', coverImage: 'https://picsum.photos/800/1200?random=8' },
  ];

  const filteredBooks =
    selectedCategory === 'all'
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="pb-16">
      <div className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Categorías</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explora nuestra colección de libros por categoría y encuentra tu
            próxima lectura favorita
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'} transition-colors`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {filteredBooks.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/libro/${book.id}`} className="block group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-medium text-lg mb-1 line-clamp-1 text-slate-800">
                        {book.title}
                      </h3>
                      <p className="text-slate-500 text-sm mb-2 flex-grow">
                        {book.author}
                      </p>
                      <p className="text-indigo-600 font-bold mt-2">
                        ${book.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-700 mb-2">
              No se encontraron libros
            </h3>
            <p className="text-slate-500">Intenta seleccionar otra categoría</p>
          </div>
        )}
      </div>
    </div>
  );
};