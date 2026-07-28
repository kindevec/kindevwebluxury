import React, { useState, useMemo } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Percent,
  Calendar,
  Building2,
  CheckCircle2,
  PieChart,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialLogos';

export const InvestPage: React.FC = () => {
  // Slider states
  const [price, setPrice] = useState<number>(295000);
  const [downPercent, setDownPercent] = useState<number>(30);
  const [years, setYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // Financial calculations
  const downPaymentAmount = useMemo(() => (price * downPercent) / 100, [price, downPercent]);
  const loanAmount = useMemo(() => price - downPaymentAmount, [price, downPaymentAmount]);

  const monthlyPayment = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = years * 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
    const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;
    return (loanAmount * (numerator / denominator)) || 0;
  }, [loanAmount, interestRate, years]);

  // Projected 5-Year Capital Gain (+22% average)
  const projectedValue5Y = useMemo(() => price * 1.22, [price]);
  const capitalGain5Y = useMemo(() => projectedValue5Y - price, [projectedValue5Y, price]);

  // Projected Executive Rental Yield (~9.5% annual gross)
  const estimatedMonthlyRent = useMemo(() => Math.round((price * 0.095) / 12), [price]);

  // Direct WhatsApp message with calculation summary
  const waCalcMessage = encodeURIComponent(
    `Hola, he usado la Calculadora Financiera de Valenza para un inmueble de $${price.toLocaleString()} USD (Enganche: ${downPercent}% / $${downPaymentAmount.toLocaleString()}). Deseo una asesoría financiera personalizada.`
  );

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">
          Rendimiento & Plusvalía Inmobiliaria
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Calculadora Financiera de Inversión
        </h1>
        <p className="text-slate-400 text-sm font-light leading-relaxed">
          Simule las cuotas mensuales, el monto de enganche inicial y proyecte el retorno de inversión y plusvalía a 5 años en Valenza Real Estate.
        </p>
      </div>

      {/* CALCULATOR SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sliders Box */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-[#C5A880]/30 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Calculator className="w-6 h-6 text-[#D4AF37]" />
            <h2 className="font-serif text-2xl font-bold text-white">Parámetros del Crédito</h2>
          </div>

          {/* Slider 1: Valor Inmueble */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-300">Valor de la Propiedad</span>
              <span className="font-serif text-lg font-bold text-[#C5A880]">${price.toLocaleString()} USD</span>
            </div>
            <input
              id="calc-price-slider"
              type="range"
              min="138000"
              max="800000"
              step="5000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$138,000 (Suite)</span>
              <span>$800,000 (Mansion)</span>
            </div>
          </div>

          {/* Slider 2: Enganche Inicial (%) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-300">Cuota Inicial / Enganche ({downPercent}%)</span>
              <span className="font-serif text-lg font-bold text-emerald-400">${downPaymentAmount.toLocaleString()} USD</span>
            </div>
            <input
              id="calc-down-slider"
              type="range"
              min="10"
              max="50"
              step="5"
              value={downPercent}
              onChange={(e) => setDownPercent(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10% ($13.8k)</span>
              <span>50% ($400k)</span>
            </div>
          </div>

          {/* Slider 3: Plazo Financiamiento (Años) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-300">Plazo de Hipoteca</span>
              <span className="font-serif text-lg font-bold text-slate-200">{years} Años</span>
            </div>
            <input
              id="calc-years-slider"
              type="range"
              min="5"
              max="25"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
          </div>

          {/* Slider 4: Tasa de Interés (%) */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-slate-300">Tasa de Interés Estimada</span>
              <span className="font-serif text-lg font-bold text-slate-200">{interestRate}% Anual</span>
            </div>
            <input
              id="calc-interest-slider"
              type="range"
              min="6.5"
              max="12.0"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
          </div>
        </div>

        {/* Results Summary Box */}
        <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-[#C5A880]/40 space-y-6 bg-slate-900/90">
          <div className="border-b border-slate-800 pb-3">
            <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-widest block">Proyección Financiera</span>
            <h3 className="font-serif text-2xl font-bold text-white">Resultado en Tiempo Real</h3>
          </div>

          {/* Big Monthly Payment Card */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 text-center space-y-1">
            <span className="text-xs uppercase text-slate-400 tracking-wider">Cuota Mensual Estimada</span>
            <div className="font-serif text-4xl font-extrabold gold-gradient-text">
              ${Math.round(monthlyPayment).toLocaleString()} <span className="text-sm text-slate-400 font-sans font-normal">USD/mes</span>
            </div>
            <span className="text-[10px] text-slate-500 block">Financiamiento bancario a {years} años</span>
          </div>

          {/* Metrics Breakdown Grid */}
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400">Enganche Inicial ({downPercent}%):</span>
              <span className="font-bold text-emerald-400">${downPaymentAmount.toLocaleString()} USD</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400">Monto a Financiar:</span>
              <span className="font-bold text-slate-200">${loanAmount.toLocaleString()} USD</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400">Renta Ejecutiva Estimada:</span>
              <span className="font-bold text-[#D4AF37]">~${estimatedMonthlyRent.toLocaleString()} USD/mes</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
              <span className="text-slate-400">Plusvalía Estimada (5 Años +22%):</span>
              <span className="font-bold text-emerald-400">+${Math.round(capitalGain5Y).toLocaleString()} USD</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              id="calc-wa-consult-btn"
              href={`https://wa.me/593991952889?text=${waCalcMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-98"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Enviar esta Simulación a un Asesor VIP</span>
            </a>
          </div>
        </div>
      </div>

      {/* INVENTORY TRACKER WIDGET */}
      <div className="glass-card p-8 rounded-2xl border border-[#C5A880]/30 space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#C5A880] tracking-widest block">Inventario de Preventa</span>
            <h3 className="font-serif text-2xl font-bold text-white">Estado de Ventas del Proyecto</h3>
          </div>
          <div className="text-right">
            <span className="font-serif text-3xl font-extrabold text-[#D4AF37]">82% Vendido</span>
            <span className="text-xs text-slate-400 block">Solo 18% de Unidades Disponibles</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <div className="h-full gold-gradient-bg rounded-full w-[82%] transition-all duration-1000" />
        </div>

        <p className="text-xs text-slate-400 text-center">
          * A medida que avanza la fase de construcción, el valor del metro cuadrado se incrementará en la siguiente etapa de preventa.
        </p>
      </div>

      {/* WHY INVEST IN VALENZA */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C5A880]">Fundamentos de Inversión</span>
          <h2 className="font-serif text-3xl font-bold text-white">¿Por qué invertir en Valenza?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl space-y-3">
            <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Alta Rentabilidad</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rentabilidad estimada del 10% al 14% anual mediante el modelo de arrendamiento corto o corporativo VIP.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <Building2 className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Ubicación Estratégica</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ubicado en la zona financiera y gastronómica con mayor demanda y seguridad consolidada de la ciudad.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-3">
            <ShieldAlert className="w-8 h-8 text-[#D4AF37]" />
            <h3 className="font-serif text-lg font-bold text-white">Respaldo Inmobiliario</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desarrollado con fideicomiso mercantil transparente y los estándares de ingeniería sísmica más rigurosos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
