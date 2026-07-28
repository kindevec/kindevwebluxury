import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Building2, Sparkles, Calculator, Mail } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const items = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Catálogo', path: '/propiedades', icon: Building2 },
    { name: 'Amenidades', path: '/amenidades', icon: Sparkles },
    { name: 'Invierte', path: '/invierte', icon: Calculator },
    { name: 'Contacto', path: '/contacto', icon: Mail },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-t border-[#C5A880]/20 px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              id={`mobile-bottom-nav-${item.name.toLowerCase()}`}
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-[#D4AF37] font-semibold bg-[#C5A880]/15 border border-[#C5A880]/30 scale-105'
                    : 'text-slate-400 hover:text-slate-200'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] tracking-tight">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
