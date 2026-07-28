import { Amenity, Testimonial } from '../types';

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'infinity-pool',
    title: 'Piscina Infinita Sky Pool',
    category: 'Relax & Wellness',
    description: 'Ubicada en el nivel 28, nuestra piscina climatizada ofrece vistas panorámicas ininterrumpidas de 360° hacia la ciudad y el atardecer.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Waves',
    highlights: [
      'Climatización por energía solar térmica',
      'Servicio de toallas y cabañas privadas',
      'Bar acuático integrado',
      'Asoleadero húmedo y camastros VIP'
    ]
  },
  {
    id: 'fitness-center',
    title: 'Gimnasio Equipado Technogym',
    category: 'Salud & Deporte',
    description: 'Centro de entrenamiento de alto rendimiento equipado con maquinaria italiana de última generación Technogym®, sala de spinning y zona de pilates.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Dumbbell',
    highlights: [
      'Entrenadores personales bajo reserva',
      'Monitoreo biomecánico en pantallas táctiles',
      'Zona de cardio con vista a jardines',
      'Estudio privado para yoga y meditación'
    ]
  },
  {
    id: 'rooftop-cocktail-bar',
    title: 'Rooftop Bar & Wine Cellar',
    category: 'Social & Entretenimiento',
    description: 'Un elegante espacio de convivencia exclusivo para residentes y sus invitados. Disfrute de coctelería de autor y catas privadas con sommelier.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Wine',
    highlights: [
      'Cava con capacidad para +500 botellas',
      'Fire-pits y salas lounge climatizadas',
      'Música ambiental sonorizada por Bose®',
      'Reservas privadas para eventos exclusivos'
    ]
  },
  {
    id: 'bbq-gourmet-lounge',
    title: 'Área BBQ & Chef Kitchen',
    category: 'Gastronomía',
    description: 'Estaciones de asado gourmet totalmente equipadas con parrillas Kamado Joe®, hornos de pizza a la leña y comedores al aire libre.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    iconName: 'UtensilsCrossed',
    highlights: [
      'Parrillas industriales en acero inoxidable',
      'Horno artesanal para pizzas',
      'Pantry con refrigeración comercial',
      'Vajilla y cristalería fina a disposición'
    ]
  },
  {
    id: 'parking-ev-charging',
    title: 'Parqueaderos & EV Fast Charging',
    category: 'Movilidad Inteligente',
    description: 'Amplios garajes subterráneos iluminados con monitoreo de plazas libres, seguridad biométrica y cargadores ultra rápidos para vehículos eléctricos.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Car',
    highlights: [
      'Cargadores eléctricos inteligentes de 22kW',
      'Lector automático de placas matriculares',
      'Espacios holgados de 3.0m de ancho',
      'Servicio de car wash y detallado exprés'
    ]
  },
  {
    id: 'security-smart-cctv',
    title: 'Seguridad 24/7 & Smart Access',
    category: 'Protección Integral',
    description: 'Tranquilidad total para su familia. Control de acceso con reconocimiento facial biométrico, conserjería VIP 24 horas y vigilancia redundante.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    iconName: 'ShieldCheck',
    highlights: [
      'Centro de monitoreo CCTV HD con IA',
      'Control de visitantes vía App móvil',
      'Personal de seguridad altamente capacitado',
      'Buzón inteligente para paquetes y delivery'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Roberto & Patricia Mendoza',
    role: 'Compradores Penthouse Royal Sky',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    propertyPurchased: 'Penthouse Royal Sky View',
    quote: 'Valenza redefinió lo que esperábamos de un hogar de lujo. La atención al detalle en los acabados y la vista desde nuestro jacuzzi privado son sencillamente incomparables.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ing. Carlos Villacís',
    role: 'Inversionista Inmobiliario Internacional',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    propertyPurchased: '2 Suites Executive Luxe',
    quote: 'La rentabilidad de mis dos suites en Valenza supera el 14% anual gracias al flujo constante de ejecutivos. La plusvalía del sector superó mis proyecciones en solo 18 meses.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Dra. Elena Larrea',
    role: 'Propietaria Residencia Horizonte',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    propertyPurchased: 'Residencia Horizonte 3D',
    quote: 'La seguridad 24 horas y la calidad de las amenidades como el gimnasio Technogym y la piscina sky pool hacen que toda la familia disfrute una experiencia de resort diario.',
    rating: 5
  }
];
