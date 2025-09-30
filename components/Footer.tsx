import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-indigo-400 mr-2" />
              <span className="text-lg font-serif font-bold text-white">
                Sol Brillante
              </span>
            </div>
            <p className="mb-4">
              Tu destino para descubrir historias extraordinarias en cualquier
              formato.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Explorar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/categorias"
                  className="hover:text-white transition-colors"
                >
                  Categorías
                </Link>
              </li>
              <li>
                <Link
                  to="/nuevos-lanzamientos"
                  className="hover:text-white transition-colors"
                >
                  Nuevos Lanzamientos
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Más Vendidos
                </Link>
              </li>
              <li>
                <Link
                  to="/ofertas"
                  className="hover:text-white transition-colors"
                >
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Prensa
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Trabaja con Nosotros
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Envíos
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Devoluciones
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-slate-400 flex flex-col md:flex-row justify-between">
          <p>© 2024 Sol Brillante. Todos los derechos reservados.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
