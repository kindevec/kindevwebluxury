import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Calendar
} from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from '../components/SocialLogos';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestedTypology: 'Suites 1D',
    preferredTime: 'Mañana (09:00 - 12:00)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hola Valenza Real Estate, me llamo ${formData.fullName || 'Cliente'}. Estoy interesado/a en ${formData.interestedTypology}. Quisiera agendar una cita en la Sala de Ventas.`
    );
    window.open(`https://wa.me/593991952889?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
          Atención Exclusiva VIP
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Contacto & Sala de Ventas
        </h1>
        <p className="text-slate-400 text-sm font-light leading-relaxed">
          Agende un recorrido privado en nuestro Showroom o solicite el dossier digital completo con atención personalizada de un Asesor Senior.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Information & Sales Room */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#C5A880]/30 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <Building2 className="w-6 h-6 text-[#D4AF37]" />
              <div>
                <h2 className="font-serif text-xl font-bold text-white">Showroom & Sala de Ventas</h2>
                <span className="text-xs text-[#C5A880]">Atención de Lunes a Domingo</span>
              </div>
            </div>

            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Dirección Principal</span>
                  <p className="text-slate-400">Av. República del Salvador N35-126 y Portugal, Torre Valenza Showroom, Piso 1</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Atención Telefónica Directa</span>
                  <a href="https://wa.me/593991952889" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                    +593 99 195 2889
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Correo Electrónico Corporativo</span>
                  <p className="text-slate-400">ventas@valenzaluxury.com</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Horario de Atención</span>
                  <p className="text-slate-400">Lunes a Domingo: 09:00 - 19:00 (Previa Cita)</p>
                </div>
              </li>
            </ul>

            {/* Official Social Links Box */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-bold text-slate-300 block">Redes Sociales Oficiales</span>
              <div className="flex items-center gap-3">
                <a
                  id="contact-wa-official-link"
                  href="https://wa.me/593991952889?text=Hola,%20deseo%20agendar%20una%20visita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 flex items-center justify-center transition-all"
                  aria-label="WhatsApp Oficial"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>

                <a
                  id="contact-fb-official-link"
                  href="https://www.facebook.com/kindevec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 flex items-center justify-center transition-all"
                  aria-label="Facebook Kindev"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <a
                  id="contact-ig-official-link"
                  href="https://www.instagram.com/kindevx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-pink-600/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-pink-400 hover:text-white border border-pink-500/30 flex items-center justify-center transition-all"
                  aria-label="Instagram Kindev"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed Mockup */}
          <div className="glass-card p-4 rounded-2xl border border-slate-800 relative overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
              alt="Ubicación Mapa Valenza"
              className="w-full h-full object-cover rounded-xl opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Sector Financiero & Parque La Carolina</span>
              </div>
              <span className="text-[10px] text-[#C5A880] uppercase tracking-wider font-bold">Ubicación VIP</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-2xl border border-[#C5A880]/40 bg-slate-900/90">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-widest block">Formulario Directo</span>
                <h2 className="font-serif text-2xl font-bold text-white">Agendar Cita o Solicitar Información</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nombre Completo *</label>
                  <input
                    id="contact-fullname-input"
                    type="text"
                    required
                    placeholder="Ej. Ing. Roberto Mendoza"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono / WhatsApp *</label>
                  <input
                    id="contact-phone-input"
                    type="tel"
                    required
                    placeholder="+593 99 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Correo Electrónico *</label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    placeholder="ejemplo@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tipología de Preferencia</label>
                  <select
                    id="contact-typology-select"
                    value={formData.interestedTypology}
                    onChange={(e) => setFormData({ ...formData, interestedTypology: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Suites 1D">Suites 1D ($138,000+)</option>
                    <option value="Departamentos 2D/3D">Departamentos 2D/3D ($210,000+)</option>
                    <option value="Penthouses Sky View">Penthouses Sky View ($485,000+)</option>
                    <option value="Casas / Mansiones">Casas Valenza Estates ($790,000+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Mensaje o Requerimiento Especial</label>
                <textarea
                  id="contact-message-textarea"
                  rows={4}
                  placeholder="Escriba sus dudas, horarios requeridos o detalles específicos para su inversión..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="pt-2 space-y-3">
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full gold-gradient-bg hover:opacity-95 text-[#0F172A] font-extrabold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Formulario a Ventas</span>
                </button>

                <button
                  id="contact-wa-direct-btn"
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Agendar Directamente por WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">¡Gracias por Contactarnos!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Su mensaje ha sido asignado a un Asesor Senior de Valenza Real Estate. Le contactaremos a la brevedad.
              </p>

              <div className="pt-6 flex flex-col gap-3">
                <button
                  id="contact-open-wa-submitted"
                  onClick={handleWhatsAppContact}
                  className="w-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Abrir WhatsApp para Confirmación Inmediata</span>
                </button>
                <button
                  id="contact-reset-form-btn"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 underline hover:text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
