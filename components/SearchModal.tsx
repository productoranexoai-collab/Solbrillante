import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X as CloseIcon, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookSearch } from '../hooks/useBookSearch';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { results, isSearching } = useBookSearch(query);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Delay focus to allow for animation
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-16 px-4" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <motion.div
        className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4 border-b flex items-center">
          <SearchIcon className="h-5 w-5 text-slate-400 mr-2 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar por título, autor o ISBN..."
            className="flex-1 outline-none text-lg bg-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="ml-2 p-1 text-slate-500 hover:text-slate-800" aria-label="Close search">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {isSearching ? (
            <div className="p-4 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
              <p className="mt-2 text-slate-500">Buscando...</p>
            </div>
          ) : results.length > 0 ? (
            <ul>
              {results.map((book) => (
                <li key={book.id}>
                  <Link
                    to={`/libro/${book.id}`}
                    className="flex items-center p-3 hover:bg-slate-50 rounded-lg"
                    onClick={onClose}
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-12 h-16 object-cover rounded mr-4 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-medium text-slate-800">{book.title}</h3>
                      <p className="text-sm text-slate-500">{book.author}</p>
                      <p className="text-indigo-600 font-medium">
                        ${book.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : query.length > 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p>No se encontraron resultados para "{query}"</p>
              <p className="mt-2 text-sm">Intenta con otra búsqueda</p>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">
              <p>Comienza a escribir para buscar</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
