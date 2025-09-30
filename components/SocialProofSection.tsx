import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const SocialProofSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const testimonials = [
    {
      name: 'María Rodríguez',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote:
        'La selección de libros es excelente. He descubierto autores que nunca hubiera encontrado por mi cuenta. ¡Y poder elegir entre formato físico o PDF es perfecto!',
      rating: 5,
    },
    {
      name: 'Carlos Mendoza',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote:
        'El servicio de entrega es increíblemente rápido. Pedí un libro físico el lunes y lo tenía en mis manos el miércoles. La calidad de las ediciones es excelente.',
      rating: 5,
    },
    {
      name: 'Laura Sánchez',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote:
        'Me encanta poder descargar los PDF al instante. Perfecto para cuando estoy de viaje y quiero empezar una nueva lectura sin esperar.',
      rating: 4,
    },
    {
      name: 'Javier Morales',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      quote:
        'Las recomendaciones personalizadas son sorprendentemente acertadas. Cada libro que he comprado basado en sus sugerencias ha sido un acierto.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
      quote:
        'La interfaz es intuitiva y hace que encontrar mi próxima lectura sea un placer. La atención al cliente es excelente también.',
      rating: 5,
    },
  ];

  const partners = [
    'Penguin Random House',
    'HarperCollins',
    'Planeta',
    'Anagrama',
    'Alfaguara',
    'Tusquets',
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
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
            Lo que dicen nuestros lectores
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Miles de personas ya han encontrado su próxima gran historia con
            nosotros
          </p>
        </motion.div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-indigo-50 transition-colors md:-left-4"
            aria-label="Desplazar a la izquierda"
          >
            <ChevronLeft className="h-6 w-6 text-indigo-700" />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] sm:min-w-[350px] p-6 bg-white rounded-xl shadow-md mx-3 snap-center flex-shrink-0"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-indigo-900">
                      {testimonial.name}
                    </h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-indigo-50 transition-colors md:-right-4"
            aria-label="Desplazar a la derecha"
          >
            <ChevronRight className="h-6 w-6 text-indigo-700" />
          </button>
        </div>
        <motion.div
          className="mt-16 pt-12 border-t border-slate-200"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-center text-slate-500 mb-6">
            Nuestros socios editoriales
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <span
                key={index}
                className="text-slate-400 font-serif text-lg md:text-xl font-medium"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
