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
import { NoiseOverlay } from './components/NoiseOverlay';

// Lazy loaded pages for performance
const HomePage = React.lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const PropertiesPage = React.lazy(() => import('./pages/PropertiesPage').then(module => ({ default: module.PropertiesPage })));
const AmenitiesPage = React.lazy(() => import('./pages/AmenitiesPage').then(module => ({ default: module.AmenitiesPage })));
const InvestPage = React.lazy(() => import('./pages/InvestPage').then(module => ({ default: module.InvestPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

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
        <NoiseOverlay />
        {/* Header */}
        <Header onOpenBrochureModal={() => setIsBrochureModalOpen(true)} />

        {/* Main View Area */}
        <main className="flex-grow">
          <React.Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div></div>}>
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
          </React.Suspense>
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
