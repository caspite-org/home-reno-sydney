export interface Service {
  id: string;
  orderId: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'structural',
    orderId: '01',
    title: 'Structural Renovation',
    shortDescription: 'Complete structural transformations, from open-plan living configurations to complex extensions and additions.',
    fullDescription: 'We specialize in transformative structural changes that redefine the flow and function of your home. From opening up living spaces to complex extensions, our architectural approach ensures seamless integration.',
    features: [
      'Open-plan living configurations',
      'Load-bearing wall removal',
      'Second-story additions',
      'Ground-floor extensions',
      'Structural remediation'
    ],
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'kitchen',
    orderId: '02',
    title: 'Bespoke Kitchens',
    shortDescription: 'Bespoke kitchen spaces that blend functionality with high-end aesthetic principles and premium materials.',
    fullDescription: 'The heart of the home, reimagined. Our kitchen designs blend high-performance functionality with breathable, minimalist aesthetics using premium natural materials.',
    features: [
      'Custom joinery design',
      'Natural stone benchtops',
      'Smart appliance integration',
      'Butler’s pantry layout',
      'Lighting plans'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'bathroom',
    orderId: '03',
    title: 'Luxury Bathrooms',
    shortDescription: 'Spa-like sanctuaries created within your home using natural stone, minimalist fixtures, and intelligent lighting.',
    fullDescription: 'Create a sanctuary within your home. We design spa-inspired bathrooms that focus on material texture, light, and relaxation.',
    features: [
      'Walk-in rain showers',
      'Freestanding baths',
      'Custom vanity units',
      'Underfloor heating',
      'Natural light optimization'
    ],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'joinery',
    orderId: '04',
    title: 'Joinery & Upgrades',
    shortDescription: 'Custom cabinetry and high-end interior refinements that elevate the architectural character of your home.',
    fullDescription: 'Precision-crafted joinery and interior upgrades. We create bespoke storage solutions and architectural details that maximize space and refine your interior aesthetic.',
    features: [
      'Custom entertainment units',
      'Architectural wall paneling',
      'Walk-in wardrobes',
      'Wine cellar design',
      'Home office integration'
    ],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop'
  }
];
