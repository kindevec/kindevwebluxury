import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialLogos';

interface FooterProps {
  onOpenBrochureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochureModal }) => {
  return (
    <footer className="bg-[#0B1120] text-slate-300 border-t border-[#C5A880]/15 relative overflow-hidden pt-16 pb-24 md:pb-12">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#C5A880] flex items-center justify-center rotate-45 shadow-lg">
                <span className="-rotate-45 font-serif text-xl font-bold text-[#C5A880]">
                  V
                </span>
              </div>
              <div className="flex flex-col ml-1">
                <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
                  Valenza
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#C5A880] uppercase font-bold">
                  Real Estate & Luxury Living
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Desarrollos residenciales exclusivos y departamentos de alta gama diseñados para un estilo de vida superior e inversiones de alta rentabilidad.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-whatsapp-link"
                href="https://wa.me/593991952889?text=Hola,%20deseo%20recibir%20información%20sobre%20las%20propiedades"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="WhatsApp Oficial"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                id="footer-facebook-link"
                href="https://www.facebook.com/kindevec/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook Kindev"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                id="footer-instagram-link"
                href="https://www.instagram.com/kindevx/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-pink-600/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-pink-400 hover:text-white border border-pink-500/30 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram Kindev"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link id="footer-nav-inicio" to="/" className="text-slate-400 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link id="footer-nav-propiedades" to="/propiedades" className="text-slate-400 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Catálogo de Propiedades</span>
                </Link>
              </li>
              <li>
                <Link id="footer-nav-amenidades" to="/amenidades" className="text-slate-400 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Amenidades Resort 5★</span>
                </Link>
              </li>
              <li>
                <Link id="footer-nav-invierte" to="/invierte" className="text-slate-400 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Calculadora Financiera</span>
                </Link>
              </li>
              <li>
                <Link id="footer-nav-contacto" to="/contacto" className="text-slate-400 hover:text-[#C5A880] transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Sala de Ventas & Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Sales Room */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Sala de Ventas
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Av. República del Salvador N35-126 y Portugal, Torre Valenza Showroom</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                <a href="https://wa.me/593991952889" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880]">
                  +593 99 195 2889
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>ventas@valenzaluxury.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>Lun - Dom: 09:00 - 19:00</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Digital Brochure & VIP Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-slate-800 pb-2">
              Brochure Digital
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Descargue la ficha técnica interactiva con planos arquitectónicos, lista de precios en preventa y plusvalía estimada.
            </p>
            <button
              id="footer-download-brochure-btn"
              onClick={onOpenBrochureModal}
              className="w-full gold-gradient-bg gold-gradient-bg-hover text-[#0F172A] font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <span>Solicitar Dossier Informativo</span>
            </button>
          </div>
        </div>

        {/* Mandatory Copyright Footer Note */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="font-medium text-slate-300">
            © 2026 Todos los derechos reservados. Desarrollado por Kindev
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Términos de Exclusividad</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Aviso Legal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
