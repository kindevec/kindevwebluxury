import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROPERTIES_DATA } from '../data/propertiesData';
import { AMENITIES_DATA, TESTIMONIALS_DATA } from '../data/amenitiesData';
import { Property } from '../types';
import {
  ArrowRight,
  Download,
  Building2,
  Sparkles,
  Award,
  ShieldCheck,
  TrendingUp,
  Maximize2,
  Bed,
  Bath,
  Search,
  Star,
  Quote,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from '../components/SocialLogos';

interface HomePageProps {
  onSelectProperty: (property: Property) => void;
  onOpenBrochureModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProperty, onOpenBrochureModal }) => {
  const navigate = useNavigate();
  const [filterTypology, setFilterTypology] = useState<string>('all');
  const [filterPrice, setFilterPrice] = useState<number>(1000000);

  const featuredProperties = PROPERTIES_DATA.slice(0, 4);

  const handleSearchRedirect = () => {
    navigate(`/propiedades?typology=${filterTypology}&maxPrice=${filterPrice}`);
  };

  return (
    <div className="space-y-24 pb-16">
      {/* SECTION 1: HERO CINEMATOGRÁFICO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
            alt="Residencia de Lujo Valenza"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-[#0F172A]/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0F172A]/40 to-[#0F172A]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-[#C5A880]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Valenza Real Estate & Luxury Living</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Tu Nuevo <span className="gold-gradient-text italic">Estilo de Vida</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Proyectos residenciales exclusivos, suites, departamentos y casas de alta gama diseñados para el confort absoluto e inversión con rentabilidad garantizada.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              id="hero-download-brochure-btn"
              onClick={onOpenBrochureModal}
              className="w-full sm:w-auto gold-gradient-bg gold-gradient-bg-hover text-[#0F172A] font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-xl shadow-2xl flex items-center justify-center gap-2.5 transition-transform active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descarga el Brochure Digital</span>
            </button>

            <Link
              id="hero-explore-properties-btn"
              to="/propiedades"
              className="w-full sm:w-auto glass-card hover:bg-slate-800 text-slate-100 font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-xl border border-[#C5A880]/30 flex items-center justify-center gap-2 transition-all hover:border-[#D4AF37]"
            >
              <Building2 className="w-4 h-4 text-[#C5A880]" />
              <span>Explorar Catálogo VIP</span>
            </Link>
          </motion.div>

          {/* Quick Filter Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-4 sm:p-6 rounded-2xl max-w-4xl mx-auto shadow-2xl border border-[#C5A880]/30 mt-8 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Tipología de Inmueble
                </label>
                <select
                  id="hero-filter-typology"
                  value={filterTypology}
                  onChange={(e) => setFilterTypology(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                >
                  <option value="all">Todas las Tipologías</option>
                  <option value="suite">Suites 1D (Ejecutivas)</option>
                  <option value="apartment">Departamentos 2D / 3D</option>
                  <option value="penthouse">Penthouses Sky View</option>
                  <option value="house">Mansiones / Casas</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Presupuesto Máximo: ${filterPrice.toLocaleString()} USD
                </label>
                <input
                  id="hero-filter-price-slider"
                  type="range"
                  min="135000"
                  max="1000000"
                  step="25000"
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(Number(e.target.value))}
                  className="w-full accent-[#C5A880] cursor-pointer"
                />
              </div>

              <div>
                <button
                  id="hero-search-submit-btn"
                  onClick={handleSearchRedirect}
                  className="w-full gold-gradient-bg text-[#0F172A] font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-95 shadow-md cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Buscar Propiedades</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: NUMEROS & PLUSVALÍA (PROOF OF EXCLUSIVITY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center space-y-2 border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all">
            <TrendingUp className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">18%</div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Plusvalía Anual Promedio</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-2 border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all">
            <Building2 className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">+180</div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Unidades Entregadas VIP</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-2 border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all">
            <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">100%</div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Acabados Importados</p>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center space-y-2 border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-white">24/7</div>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Seguridad Biométrica Smart</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROPIEDADES DESTACADAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#C5A880]">
              Inversión Inteligente & Estilo
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Colección de Residencias Destacadas
            </h2>
          </div>

          <Link
            id="home-view-all-properties-link"
            to="/propiedades"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A880] hover:text-[#D4AF37] transition-colors"
          >
            <span>Ver Todo el Catálogo</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProperties.map((prop) => (
            <div
              key={prop.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-900 bg-[#C5A880] px-3 py-1 rounded-full">
                    {prop.typologyLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase tracking-wider block">Precio Desde</span>
                    <span className="font-serif text-2xl font-extrabold text-white">
                      ${prop.priceFrom.toLocaleString()} USD
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-emerald-500/30">
                    {prop.statusLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-100 group-hover:text-[#C5A880] transition-colors mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{prop.areaSqM} m²</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{prop.bedrooms} Dorm.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{prop.bathrooms} Baños</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    id={`home-prop-details-btn-${prop.id}`}
                    onClick={() => onSelectProperty(prop)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    Ver Detalles
                  </button>

                  <a
                    id={`home-prop-wa-btn-${prop.id}`}
                    href={`https://wa.me/593991952889?text=Hola,%20deseo%20más%20información%20de%20la%20propiedad:%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 transition-colors"
                    aria-label="Consultar por WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: AMENIDADES VIP TEASER */}
      <section className="bg-slate-900/60 py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
              Experiencia Resort 5 Estrellas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Amenidades Exclusivas para tu Bienestar
            </h2>
            <p className="text-slate-400 text-sm">
              Diseñadas para brindar confort absoluto sin salir de casa, con ambientes privados y servicio personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AMENITIES_DATA.slice(0, 3).map((amenity) => (
              <div key={amenity.id} className="glass-card rounded-2xl overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A880]">
                    {amenity.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">{amenity.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              id="home-view-all-amenities-btn"
              to="/amenidades"
              className="inline-flex items-center gap-2 gold-gradient-bg text-[#0F172A] font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow-lg hover:opacity-95"
            >
              <span>Ver las 6 Amenidades Resort</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRUEBA SOCIAL / TESTIMONIOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
            Prueba Social & Prestigio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Lo que dicen nuestros Propietarios e Inversionistas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="glass-card p-6 rounded-2xl space-y-4 relative flex flex-col justify-between">
              <Quote className="w-8 h-8 text-[#C5A880]/30 absolute top-4 right-4" />

              <div className="space-y-3">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#C5A880]/50"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-[#C5A880]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA IMPACTANTE FINAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-14 border border-[#C5A880]/40 text-center space-y-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C5A880]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
            Atención Personalizada VIP
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto">
            ¿Listo para asegurar tu unidad en el proyecto más exclusivo?
          </h2>

          <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light">
            Nuestros asesores senior están disponibles para brindarte un recorrido guiado en la Sala de Ventas o enviarte la lista de precios de preventa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              id="cta-home-whatsapp-direct"
              href="https://wa.me/593991952889?text=Hola,%20deseo%20agendar%20una%20cita%20VIP%20en%20la%20sala%20de%20ventas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-2xl flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Contactar por WhatsApp Ahora</span>
            </a>

            <button
              id="cta-home-open-brochure"
              onClick={onOpenBrochureModal}
              className="w-full sm:w-auto gold-gradient-bg text-[#0F172A] font-extrabold text-xs uppercase tracking-wider py-4 px-8 rounded-xl shadow-2xl flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Solicitar Dossier Digital</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
