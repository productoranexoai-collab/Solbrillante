import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock } from 'lucide-react';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-indigo-600" />,
      title: 'Libros Físicos y Digitales',
      description:
        'Disfruta de la experiencia táctil de un libro físico o la conveniencia inmediata de un PDF. Tú eliges cómo quieres vivir tu próxima historia.',
      imageUrl:
        'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80',
      imageAlt: 'Libros físicos y tablet mostrando libro digital',
    },
    {
      icon: <Users className="h-10 w-10 text-indigo-600" />,
      title: 'Selección Curada por Expertos',
      description:
        'Cada libro en nuestro catálogo ha sido cuidadosamente seleccionado por nuestro equipo de expertos literarios, garantizando solo las mejores lecturas.',
      imageUrl:
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80',
      imageAlt: 'Expertos seleccionando libros en biblioteca',
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-600" />,
      title: 'Envío Rápido y Descarga Instantánea',
      description:
        'Recibe tus libros físicos en tiempo récord o comienza a leer al instante con nuestra opción de descarga inmediata en formato PDF.',
      imageUrl:
        'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80',
      imageAlt: 'Persona descargando libro en dispositivo',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Por qué elegir Sol Brillante
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ofrecemos una experiencia de lectura única, combinando lo mejor del
            mundo físico y digital
          </p>
        </motion.div>
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
                margin: '-100px',
              }}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={feature.imageUrl}
                  alt={feature.imageAlt}
                  className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-indigo-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
