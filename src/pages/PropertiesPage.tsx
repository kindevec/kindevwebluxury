import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PROPERTIES_DATA } from '../data/propertiesData';
import { Property, TypologyType } from '../types';
import {
  Search,
  SlidersHorizontal,
  Maximize2,
  Bed,
  Bath,
  Car,
  Layers,
  ChevronDown
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialLogos';

interface PropertiesPageProps {
  onSelectProperty: (property: Property) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onSelectProperty }) => {
  const [searchParams] = useSearchParams();
  const initialTypology = (searchParams.get('typology') as TypologyType) || 'all';
  const initialMaxPrice = Number(searchParams.get('maxPrice')) || 1000000;

  const [selectedTypology, setSelectedTypology] = useState<TypologyType>(initialTypology);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | 'area_desc'>('price_asc');

  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      const matchTypology = selectedTypology === 'all' || prop.typology === selectedTypology;
      const matchPrice = prop.priceFrom <= maxPrice;
      const matchSearch =
        prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.description.toLowerCase().includes(searchTerm.toLowerCase());

      return matchTypology && matchPrice && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') return a.priceFrom - b.priceFrom;
      if (sortBy === 'price_desc') return b.priceFrom - a.priceFrom;
      if (sortBy === 'area_desc') return b.areaSqM - a.areaSqM;
      return 0;
    });
  }, [selectedTypology, maxPrice, searchTerm, sortBy]);

  const typologies = [
    { key: 'all', label: 'Todas las Tipologías' },
    { key: 'suite', label: 'Suites 1D' },
    { key: 'apartment', label: 'Departamentos 2D/3D' },
    { key: 'penthouse', label: 'Penthouses Sky View' },
    { key: 'house', label: 'Casas & Mansiones' },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
          Catálogo Residencial Exclusivo
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Nuestras Tipologías & Propiedades
        </h1>
        <p className="text-slate-400 text-sm font-light">
          Explore los planos, especificaciones y precios de preventa para seleccionar la unidad perfecta para su hogar o portafolio.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-card p-6 rounded-2xl border border-[#C5A880]/30 space-y-6">
        {/* Search & Sort Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="properties-search-input"
              type="text"
              placeholder="Buscar por nombre, sector o características..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880]"
            />
          </div>

          <div className="md:col-span-3">
            <div className="relative">
              <select
                id="properties-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A880] appearance-none"
              >
                <option value="price_asc">Ordenar: Menor a Mayor Precio</option>
                <option value="price_desc">Ordenar: Mayor a Menor Precio</option>
                <option value="area_desc">Ordenar: Mayor Superficie (m²)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Máx. ${maxPrice.toLocaleString()} USD
            </span>
            <input
              id="properties-max-price-slider"
              type="range"
              min="135000"
              max="1000000"
              step="25000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
          </div>
        </div>

        {/* Typology Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {typologies.map((t) => (
            <button
              id={`filter-tab-${t.key}`}
              key={t.key}
              onClick={() => setSelectedTypology(t.key as TypologyType)}
              className={`text-xs font-semibold px-4 py-2.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedTypology === t.key
                  ? 'gold-gradient-bg text-[#0F172A] font-bold shadow-md'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Property Cards Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30" />

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[10px] uppercase font-bold text-slate-900 bg-[#C5A880] px-2.5 py-1 rounded-md">
                    {prop.typologyLabel}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-semibold text-emerald-400 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/30">
                    {prop.statusLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] text-slate-300 uppercase tracking-wider block">Precio Desde</span>
                  <span className="font-serif text-2xl font-extrabold gold-gradient-text">
                    ${prop.priceFrom.toLocaleString()} USD
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors mb-1.5">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-4 gap-1.5 py-2.5 border-y border-slate-800 text-[11px] text-slate-300">
                  <div className="flex flex-col items-center p-1.5 rounded-lg bg-slate-900/60">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A880] mb-0.5" />
                    <span>{prop.areaSqM} m²</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 rounded-lg bg-slate-900/60">
                    <Bed className="w-3.5 h-3.5 text-[#C5A880] mb-0.5" />
                    <span>{prop.bedrooms} Dorm.</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 rounded-lg bg-slate-900/60">
                    <Bath className="w-3.5 h-3.5 text-[#C5A880] mb-0.5" />
                    <span>{prop.bathrooms} Baños</span>
                  </div>
                  <div className="flex flex-col items-center p-1.5 rounded-lg bg-slate-900/60">
                    <Car className="w-3.5 h-3.5 text-[#C5A880] mb-0.5" />
                    <span>{prop.parkingSpaces} Parq.</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    id={`catalog-view-details-btn-${prop.id}`}
                    onClick={() => onSelectProperty(prop)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-bold uppercase tracking-wider py-2.5 rounded-xl border border-slate-700 transition-colors cursor-pointer"
                  >
                    Ver Detalles
                  </button>

                  <a
                    id={`catalog-wa-btn-${prop.id}`}
                    href={`https://wa.me/593991952889?text=Hola,%20deseo%20consultar%20sobre%20la%20propiedad:%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 transition-colors"
                    aria-label="Contactar WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card p-12 rounded-2xl text-center space-y-4">
          <SlidersHorizontal className="w-12 h-12 text-[#C5A880] mx-auto opacity-50" />
          <h3 className="font-serif text-2xl font-bold text-white">No se encontraron propiedades</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Pruebe ajustando los filtros de precio o seleccione "Todas las Tipologías" para ver el inventario completo.
          </p>
          <button
            id="reset-filters-btn"
            onClick={() => {
              setSelectedTypology('all');
              setMaxPrice(1000000);
              setSearchTerm('');
            }}
            className="gold-gradient-bg text-[#0F172A] font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl"
          >
            Restablecer Filtros
          </button>
        </div>
      )}
    </div>
  );
};
