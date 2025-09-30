import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './shared/Button';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Únete a nuestra comunidad de lectores
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Recibe recomendaciones personalizadas y ofertas exclusivas. Sin
            spam.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <Button variant="secondary" type="submit">Suscribirme Ahora</Button>
          </form>
          <p className="text-indigo-300 text-sm mt-4">
            Al suscribirte, aceptas nuestra política de privacidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
