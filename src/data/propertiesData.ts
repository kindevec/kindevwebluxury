import { Property } from '../types';

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'penthouse-royal-sky',
    title: 'Penthouse Royal Sky View',
    typology: 'penthouse',
    typologyLabel: 'Penthouse de Lujo',
    priceFrom: 485000,
    areaSqM: 320,
    bedrooms: 4,
    bathrooms: 4.5,
    parkingSpaces: 3,
    status: 'last_units',
    statusLabel: 'Última Unidad',
    location: 'Torre Valenza, Piso 28 - Sector Exclusivo',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'El pináculo del lujo urbano. Penthouse dúplex con terraza privada panorámica de 360°, jacuzzi climatizado al aire libre, finos acabados en mármol calacatta italiano y automatización Domótica Integral Smart Home.',
    features: [
      'Terraza privada de 90 m² con Jacuzzi',
      'Ascensor privado directo al departamento',
      'Cava de vinos climatizada',
      'Cocina italiana de diseñador con isla en granito',
      'Sistema integrado de sonido Sonos & Iluminación Lutron',
      'Suite Master con Walk-in Closet doble'
    ],
    deliveryDate: 'Inmediata / Listo para Habitar'
  },
  {
    id: 'depto-horizonte-3d',
    title: 'Residencia Horizonte Premium',
    typology: 'apartment',
    typologyLabel: 'Departamento 3 Dormitorios',
    priceFrom: 295000,
    areaSqM: 185,
    bedrooms: 3,
    bathrooms: 3.5,
    parkingSpaces: 2,
    status: 'available',
    statusLabel: 'Disponible',
    location: 'Torre Valenza, Pisos 12 al 22',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Espacios fluidos donde la luz natural cobra protagonismo. Salón principal integrado con ventanales de piso a techo, balcón tipo lounge y acabados de ingeniería contemporánea.',
    features: [
      'Balcón cubierto con vista a la cordillera',
      '3 dormitorios en suite con baño independiente',
      'Área de servicio con baño privado',
      'Aislamiento termo-acústico de doble vidrio',
      'Pisos en madera de ingeniería de roble europeo'
    ],
    deliveryDate: 'Diciembre 2026'
  },
  {
    id: 'suite-executive-luxe',
    title: 'Suite Executive Valenza',
    typology: 'suite',
    typologyLabel: 'Suite 1 Dormitorio',
    priceFrom: 138000,
    areaSqM: 68,
    bedrooms: 1,
    bathrooms: 1.5,
    parkingSpaces: 1,
    status: 'available',
    statusLabel: 'Alta Plusvalía',
    location: 'Torre Valenza, Pisos 4 al 11',
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Diseñada estratégicamente para ejecutivos exigentes e inversionistas de renta corta VIP. Máxima eficiencia espacial con elegancia atemporal y rentabilidad garantizada.',
    features: [
      'Optimizado para modelo Airbnb Luxe / Renta Ejecutiva',
      'Cocina equipada con electrodomésticos empotrados',
      'Mobiliario a medida opcional',
      'Cerradura inteligente con código / tarjeta',
      'Bodega privada de almacenamiento incluida'
    ],
    deliveryDate: 'Junio 2026'
  },
  {
    id: 'villa-imperial-valenza',
    title: 'Mansión Villa Imperial',
    typology: 'house',
    typologyLabel: 'Casa de Alta Gama',
    priceFrom: 790000,
    areaSqM: 520,
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 4,
    status: 'last_units',
    statusLabel: 'Edición Limitada',
    location: 'Conjunto Privado Valenza Estates',
    heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Residencia unifamiliar de arquitectura vanguardista con jardín privado de 200 m², piscina infinta individual, cine en casa privado y máxima privacidad con garaje subterráneo de 4 plazas.',
    features: [
      'Piscina infinita y fire-pit en jardín privado',
      'Sala de cine privada / Home Theater con sonido Atmos',
      'Paneles solares de alta eficiencia incluidos',
      'Master Suite con spa privado, sauna y vapor',
      'Sistema de seguridad perimeter láser de última generación'
    ],
    deliveryDate: 'Entrega Inmediata'
  },
  {
    id: 'depto-urban-loft',
    title: 'Urban Loft Panorama 2D',
    typology: 'apartment',
    typologyLabel: 'Departamento 2 Dormitorios',
    priceFrom: 210000,
    areaSqM: 115,
    bedrooms: 2,
    bathrooms: 2.5,
    parkingSpaces: 2,
    status: 'available',
    statusLabel: 'Disponible',
    location: 'Torre Valenza, Pisos 15 al 25',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'Estilo contemporáneo con doble altura en zona social. Vistas espectaculares a la ciudad, acabados en tonos neutros cálidos y automatización inteligente.',
    features: [
      'Doble altura de 4.8 metros en sala de estar',
      'Balcón lounge panorámico',
      'Master Suite con vestidor y baño doble lavabo',
      'Cocina abierta con mesón desayunador en cuarzo'
    ],
    deliveryDate: 'Septiembre 2026'
  },
  {
    id: 'penthouse-gold-edition',
    title: 'Penthouse Imperial Gold',
    typology: 'penthouse',
    typologyLabel: 'Penthouse Exclusivo',
    priceFrom: 620000,
    areaSqM: 410,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 4,
    status: 'last_units',
    statusLabel: 'Última Unidad',
    location: 'Torre Valenza, Piso 29 - Roof Level',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80',
    description: 'La máxima expresión del concepto Luxury Living. Terraza privativa de 130m² con infinity pool suspendida en altura y salón de eventos privado integrado.',
    features: [
      'Piscina infinita privada suspendida a 100m de altura',
      'Área BBQ BBQ & Bar profesional en terraza',
      'Cuarto de pánico y caja fuerte biométrica de alta seguridad',
      'Climatización central VRF de zonificación independiente'
    ],
    deliveryDate: 'Entrega Inmediata'
  }
];
