import React, { useState } from 'react';
import { AMENITIES_DATA } from '../data/amenitiesData';
import { Amenity } from '../types';
import {
  Waves,
  Dumbbell,
  Wine,
  UtensilsCrossed,
  Car,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialLogos';

export const AmenitiesPage: React.FC = () => {
  const [activeAmenity, setActiveAmenity] = useState<Amenity | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-[#D4AF37]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#D4AF37]" />;
      case 'Wine':
        return <Wine className="w-6 h-6 text-[#D4AF37]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#D4AF37]" />;
      case 'Car':
        return <Car className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
          Estilo de Vida Resort 5★
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Amenidades de Clase Mundial
        </h1>
        <p className="text-slate-400 text-sm font-light leading-relaxed">
          Cada espacio ha sido concebido para complementar un ritmo de vida sofisticado, priorizando el descanso, el bienestar físico y los momentos memorables con familia y amigos.
        </p>
      </div>

      {/* Grid of Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AMENITIES_DATA.map((amenity) => (
          <div
            key={amenity.id}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={amenity.image}
                alt={amenity.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/20" />

              <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80">
                {getIcon(amenity.iconName)}
              </div>

              <div className="absolute bottom-3 left-4">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C5A880] bg-slate-950/80 px-2.5 py-1 rounded-md border border-[#C5A880]/30">
                  {amenity.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {amenity.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {amenity.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 pt-2 border-t border-slate-800">
                  {amenity.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  id={`amenity-wa-consult-${amenity.id}`}
                  href={`https://wa.me/593991952889?text=Hola,%20quisiera%20saber%20más%20detalles%20de%20las%20amenidades,%20en%20especial:%20${encodeURIComponent(amenity.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider py-3 rounded-xl border border-slate-700/80 flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Consultar Especificaciones VIP</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Teaser */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[#C5A880]/30 text-center space-y-4 bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900">
        <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto" />
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Recorrido Virtual & Experiencia In Situ
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
          Visite nuestro departamento modelo y conozca la maqueta física interactiva en la Sala de Ventas.
        </p>
        <a
          id="amenities-schedule-visit-btn"
          href="https://wa.me/593991952889?text=Hola,%20deseo%20agendar%20una%20visita%20para%20conocer%20las%20amenidades"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 gold-gradient-bg text-[#0F172A] font-extrabold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl shadow-lg hover:opacity-95"
        >
          <span>Agendar Cita en Sala de Ventas</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
