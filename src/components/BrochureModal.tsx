import React, { useState } from 'react';
import { X, FileText, CheckCircle, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './SocialLogos';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    typologyInterest: 'Todas las Tipologías',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hola, soy ${formData.fullName || 'un cliente interesado'}. Deseo recibir inmediatamente el Brochure Digital y Lista de Precios de Valenza Real Estate.`
    );
    window.open(`https://wa.me/593991952889?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#0F172A] border border-[#C5A880]/40 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          <button
            id="close-brochure-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Brochure Digital VIP</h3>
                  <p className="text-xs text-slate-400">Descargue la ficha técnica y lista de precios exclusiva 2026</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo *</label>
                  <input
                    id="brochure-fullname-input"
                    type="text"
                    required
                    placeholder="Ej. Sra. Patricia Mendoza"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Correo Electrónico *</label>
                  <input
                    id="brochure-email-input"
                    type="email"
                    required
                    placeholder="ejemplo@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono / WhatsApp *</label>
                  <input
                    id="brochure-phone-input"
                    type="tel"
                    required
                    placeholder="+593 99 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tipología de Interés</label>
                  <select
                    id="brochure-typology-select"
                    value={formData.typologyInterest}
                    onChange={(e) => setFormData({ ...formData, typologyInterest: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Todas las Tipologías">Todas las Tipologías</option>
                    <option value="Suites 1D">Suites 1D (Desde $138,000)</option>
                    <option value="Departamentos 2D/3D">Departamentos 2D/3D (Desde $210,000)</option>
                    <option value="Penthouses">Penthouses Sky View (Desde $485,000)</option>
                    <option value="Casas / Mansiones">Casas Valenza Estates (Desde $790,000)</option>
                  </select>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    id="submit-brochure-form-btn"
                    type="submit"
                    className="w-full gold-gradient-bg hover:opacity-95 text-[#0F172A] font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Solicitar Descarga de Brochure</span>
                  </button>

                  <button
                    id="brochure-whatsapp-direct-btn"
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Recibir por WhatsApp en 1 Minuto</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">¡Solicitud Registrada!</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Gracias <span className="font-semibold text-[#C5A880]">{formData.fullName}</span>. Hemos procesado su solicitud. Un asesor senior le enviará el dossier en PDF y lista de precios.
              </p>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  id="brochure-open-wa-after-submit"
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Abrir Chat de WhatsApp Directo</span>
                </button>
                <button
                  id="brochure-close-after-submit"
                  onClick={onClose}
                  className="text-xs text-slate-400 underline hover:text-white"
                >
                  Cerrar esta ventana
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
