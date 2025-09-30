import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const NewReleases = () => {
  const { addToCart } = useCart();

  const newBooks = [
    {
      id: 101,
      title: 'La sombra del viento',
      author: 'Carlos Ruiz Zafón',
      price: 21.99,
      releaseDate: '2023-10-15',
      coverImage: 'https://picsum.photos/800/1200?random=101',
      description:
        'Un amanecer de 1945, un muchacho es conducido por su padre a un misterioso lugar oculto en el corazón de la ciudad vieja: El Cementerio de los Libros Olvidados.',
    },
    {
      id: 102,
      title: 'Proyecto Hail Mary',
      author: 'Andy Weir',
      price: 23.5,
      releaseDate: '2023-10-10',
      coverImage: 'https://picsum.photos/800/1200?random=102',
      description:
        'Ryland Grace es el único superviviente en una misión desesperada. Si fracasa, la humanidad y la Tierra misma perecerán.',
    },
    {
      id: 103,
      title: 'Klara y el Sol',
      author: 'Kazuo Ishiguro',
      price: 19.99,
      releaseDate: '2023-09-28',
      coverImage: 'https://picsum.photos/800/1200?random=103',
      description:
        'Klara es una AA (Amiga Artificial) que espera desde el escaparate de una tienda a que alguien la adquiera y la lleve a un hogar.',
    },
    {
      id: 104,
      title: 'El problema final',
      author: 'Arturo Pérez-Reverte',
      price: 22.9,
      releaseDate: '2023-09-20',
      coverImage: 'https://picsum.photos/800/1200?random=104',
      description:
        'Un grupo de personas recibe una misteriosa invitación para pasar un fin de semana en una mansión aislada. Lo que parecía un retiro agradable se convierte en una trampa mortal.',
    },
  ];

  const handleAddToCart = (book: Omit<typeof newBooks[0], 'releaseDate' | 'description'>) => {
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
            Nuevos Lanzamientos
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Descubre las últimas novedades literarias que han llegado a nuestra
            tienda
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {newBooks.map((book, index) => (
            <motion.div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 lg:w-1/4">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 lg:w-3/4 flex flex-col">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-indigo-900 mb-2">
                        {book.title}
                      </h2>
                      <p className="text-slate-600 mb-1">{book.author}</p>
                      <p className="text-sm text-slate-500">
                        Publicado:{' '}
                        {new Date(book.releaseDate).toLocaleDateString(
                          'es-ES',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                        )}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex-shrink-0">
                      <span className="text-2xl font-bold text-indigo-600">
                        ${book.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-6 flex-grow">{book.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <Link
                      to={`/libro/${book.id}`}
                      className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-50 transition-colors text-center font-medium"
                    >
                      Ver detalles
                    </Link>
                    <button
                      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                      onClick={() => handleAddToCart(book)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};