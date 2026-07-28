import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Property } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppFab } from './components/WhatsAppFab';
import { PropertyModal } from './components/PropertyModal';
import { BrochureModal } from './components/BrochureModal';
import { Preloader } from './components/Preloader';
import { SmoothScroll } from './components/SmoothScroll';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { InvestPage } from './pages/InvestPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  return (
    <SmoothScroll>
    <HashRouter>
      <ScrollToTop />
      <Preloader>
      <div className="min-h-screen flex flex-col bg-[#0F172A] text-[#F1F5F9] font-sans relative selection:bg-[#C5A880] selection:text-[#0F172A] overflow-x-hidden">
        {/* Header */}
        <Header onOpenBrochureModal={() => setIsBrochureModalOpen(true)} />

        {/* Main View Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onSelectProperty={(prop) => setSelectedProperty(prop)}
                  onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
                />
              }
            />
            <Route
              path="/propiedades"
              element={
                <PropertiesPage
                  onSelectProperty={(prop) => setSelectedProperty(prop)}
                />
              }
            />
            <Route path="/amenidades" element={<AmenitiesPage />} />
            <Route path="/invierte" element={<InvestPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenBrochureModal={() => setIsBrochureModalOpen(true)} />

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFab />

        {/* Property Detail Modal */}
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenBrochureModal={() => {
            setSelectedProperty(null);
            setIsBrochureModalOpen(true);
          }}
        />

        {/* Digital Brochure Modal */}
        <BrochureModal
          isOpen={isBrochureModalOpen}
          onClose={() => setIsBrochureModalOpen(false)}
        />
      </div>
      </Preloader>
    </HashRouter>
    </SmoothScroll>
  );
}
