import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Download, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBrochureModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBrochureModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Propiedades', path: '/propiedades' },
    { name: 'Amenidades', path: '/amenidades' },
    { name: 'Invierte', path: '/invierte' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0F172A]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink id="brand-logo-link" to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#C5A880] flex items-center justify-center rotate-45 group-hover:bg-[#C5A880]/10 transition-colors shadow-lg">
              <span className="-rotate-45 font-serif text-xl font-bold text-[#C5A880] group-hover:scale-110 transition-transform">
                V
              </span>
            </div>
            <div className="flex flex-col ml-1">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-slate-100 group-hover:text-[#C5A880] transition-colors uppercase">
                Valenza
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase font-bold">
                Real Estate & Luxury Living
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                id={`nav-item-${item.name.toLowerCase()}`}
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-slate-300 hover:text-[#C5A880]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A880] to-[#D4AF37]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              id="header-phone-cta"
              href="https://wa.me/593991952889?text=Hola,%20deseo%20recibir%20información%20sobre%20las%20propiedades"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 hover:text-[#C5A880] transition-colors py-2 px-3 rounded-lg border border-slate-800 hover:border-[#C5A880]/30"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>+593 99 195 2889</span>
            </a>

            <button
              id="header-brochure-btn"
              onClick={onOpenBrochureModal}
              className="gold-gradient-bg gold-gradient-bg-hover text-[#0F172A] font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg shadow-md hover:shadow-gold flex items-center gap-2 transition-all transform active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Brochure Digital</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="mobile-brochure-icon-btn"
              onClick={onOpenBrochureModal}
              className="p-2 rounded-lg bg-[#C5A880]/10 text-[#C5A880] border border-[#C5A880]/30"
              aria-label="Brochure Digital"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/80 text-slate-200 border border-slate-700/60 focus:outline-none"
              aria-label="Abrir Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A880]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-slate-800/80 px-4 pt-4 pb-6 mt-3 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  id={`mobile-nav-${item.name.toLowerCase()}`}
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#C5A880]/15 text-[#D4AF37] border border-[#C5A880]/30 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
                <button
                  id="mobile-drawer-brochure-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochureModal();
                  }}
                  className="w-full gold-gradient-bg text-[#0F172A] font-bold text-sm uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Brochure Digital</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
