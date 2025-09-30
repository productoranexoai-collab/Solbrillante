import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Categories } from './pages/Categories';
import { NewReleases } from './pages/NewReleases';
import { Offers } from './pages/Offers';
import { BookDetail } from './pages/BookDetail';
import { CartProvider } from './hooks/useCart';
import { Layout } from './components/Layout';

// FIX: Removed explicit JSX.Element return type to fix 'Cannot find namespace JSX' error.
export function AppRouter() {
  return (
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/categorias" element={<Categories />} />
            <Route path="/nuevos-lanzamientos" element={<NewReleases />} />
            <Route path="/ofertas" element={<Offers />} />
            <Route path="/libro/:id" element={<BookDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}