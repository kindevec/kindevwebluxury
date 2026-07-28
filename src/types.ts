export type TypologyType = 'all' | 'suite' | 'apartment' | 'penthouse' | 'house';

export interface Property {
  id: string;
  title: string;
  typology: TypologyType;
  typologyLabel: string;
  priceFrom: number;
  areaSqM: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  status: 'available' | 'last_units' | 'sold_out';
  statusLabel: string;
  location: string;
  heroImage: string;
  gallery: string[];
  floorPlanImage: string;
  description: string;
  features: string[];
  deliveryDate: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  propertyPurchased: string;
  quote: string;
  rating: number;
}

export interface InvestmentCalculatorState {
  propertyPrice: number;
  downPaymentPercent: number;
  termYears: number;
  interestRate: number;
  expectedAppreciationRate: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interestedTypology: string;
  message: string;
  preferredTime: string;
  requestBrochure: boolean;
}
