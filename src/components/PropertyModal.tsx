import React, { useState } from 'react';
import { Property } from '../types';
import { X, Bed, Bath, Car, Maximize2, MapPin, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Layers, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './SocialLogos';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenBrochureModal: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onOpenBrochureModal }) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'floorplan'>('gallery');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };

  const waMessage = encodeURIComponent(
    `Hola, estoy muy interesado/a en solicitar información de la propiedad: ${property.title} (${property.typologyLabel}) con precio desde $${property.priceFrom.toLocaleString()}.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#0F172A] border border-[#C5A880]/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            id="close-property-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Column: Media Gallery / Floor Plan */}
            <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Media Toggle Switch */}
                <div className="flex items-center gap-2 mb-4 bg-slate-900/90 p-1 rounded-xl border border-slate-800 w-fit">
                  <button
                    id="property-modal-tab-gallery"
                    onClick={() => setActiveTab('gallery')}
                    className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                      activeTab === 'gallery'
                        ? 'gold-gradient-bg text-[#0F172A] shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Galería de Fotos ({property.gallery.length})</span>
                  </button>
                  <button
                    id="property-modal-tab-floorplan"
                    onClick={() => setActiveTab('floorplan')}
                    className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg transition-all ${
                      activeTab === 'floorplan'
                        ? 'gold-gradient-bg text-[#0F172A] shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Planta Arquitectónica</span>
                  </button>
                </div>

                {/* Media Container */}
                {activeTab === 'gallery' ? (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 group bg-slate-900">
                    <img
                      src={property.gallery[activeImageIndex]}
                      alt={`${property.title} - Vista ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />

                    {/* Prev/Next overlay controls */}
                    <button
                      id="property-gallery-prev-btn"
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white opacity-80 hover:opacity-100 hover:bg-black/90 transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      id="property-gallery-next-btn"
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white opacity-80 hover:opacity-100 hover:bg-black/90 transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-slate-700">
                      {activeImageIndex + 1} / {property.gallery.length}
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 bg-slate-900 p-4 flex flex-col items-center justify-center">
                    <img
                      src={property.floorPlanImage}
                      alt={`Planta ${property.title}`}
                      className="max-h-full object-contain rounded-lg"
                    />
                    <span className="text-xs text-slate-400 mt-2">Esquema distribución m² sugerida</span>
                  </div>
                )}

                {/* Image Thumbnails Strip */}
                {activeTab === 'gallery' && (
                  <div className="flex gap-2.5 mt-4 overflow-x-auto pb-2 no-scrollbar">
                    {property.gallery.map((imgUrl, idx) => (
                      <button
                        id={`property-modal-thumb-${idx}`}
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                          activeImageIndex === idx
                            ? 'border-[#D4AF37] scale-105 shadow-md'
                            : 'border-slate-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Status Badge & Location */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  {property.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  {property.deliveryDate}
                </span>
              </div>
            </div>

            {/* Right Column: Specs & Contact Actions */}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Typology & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#C5A880] px-2.5 py-1 rounded-md bg-[#C5A880]/10 border border-[#C5A880]/30">
                    {property.typologyLabel}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    {property.statusLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-slate-100">
                  {property.title}
                </h3>

                {/* Price Display */}
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Precio Desde</span>
                    <span className="font-serif text-3xl font-extrabold gold-gradient-text">
                      ${property.priceFrom.toLocaleString()} USD
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    ~${Math.round(property.priceFrom / property.areaSqM).toLocaleString()}/m²
                  </span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Maximize2 className="w-5 h-5 text-[#C5A880]" />
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Área Total</span>
                      <span className="text-sm font-bold text-slate-200">{property.areaSqM} m²</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Bed className="w-5 h-5 text-[#C5A880]" />
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Dormitorios</span>
                      <span className="text-sm font-bold text-slate-200">{property.bedrooms}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Bath className="w-5 h-5 text-[#C5A880]" />
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Baños</span>
                      <span className="text-sm font-bold text-slate-200">{property.bathrooms}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Car className="w-5 h-5 text-[#C5A880]" />
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">Parqueaderos</span>
                      <span className="text-sm font-bold text-slate-200">{property.parkingSpaces}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Descripción Exclusiva</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{property.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Características Destacadas</h4>
                  <ul className="space-y-1.5">
                    {property.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  id="modal-whatsapp-contact-btn"
                  href={`https://wa.me/593991952889?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 transition-all transform active:scale-98"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Consultar esta Unidad por WhatsApp</span>
                </a>

                <button
                  id="modal-request-brochure-btn"
                  onClick={() => {
                    onClose();
                    onOpenBrochureModal();
                  }}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#C5A880]" />
                  <span>Solicitar Planos & Brochure en PDF</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
