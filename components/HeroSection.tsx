import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './shared/Button';
import { Link } from 'react-router-dom';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-indigo-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4">
              Tu Próxima Gran Historia te Espera
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8">
              Explora nuestra curada selección de libros en formato físico y PDF
              instantáneo
            </p>
            <Link to="/categorias">
              <Button>Explorar el Catálogo</Button>
            </Link>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Persona disfrutando de la lectura"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <p className="font-serif italic text-indigo-700">
                  "Los libros son la puerta a mundos infinitos"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
