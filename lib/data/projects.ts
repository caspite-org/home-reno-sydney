export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  description: string;
  coverImage: string;
  images: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'bondi-coastal-villas',
    title: 'Bondi Coastal Villa',
    location: 'Bondi Beach, NSW',
    category: 'Full Home Renovation',
    year: '2024',
    description: 'A complete structural transformation of a 1920s bungalow into a modern, light-filled coastal home. Detailed joinery, polished concrete floors, and a seamless connection to the outdoors.',
    coverImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2000&auto=format&fit=crop'
    ],
    stats: [
      { label: 'Timeline', value: '16 Weeks' },
      { label: 'Key Feature', value: 'Custom Joinery' }
    ]
  },
  {
    id: '2',
    slug: 'paddington-terrace',
    title: 'Paddington Terrace',
    location: 'Paddington, NSW',
    category: 'Kitchen & Bathroom',
    year: '2023',
    description: 'Restoring the soul of a Victorian terrace while introducing contemporary amenities. A focus on natural stone, brass fixtures, and heritage preservation.',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556909190-eccf4c8ba7ef?q=80&w=2000&auto=format&fit=crop'
    ],
    stats: [
      { label: 'Timeline', value: '8 Weeks' },
      { label: 'Key Feature', value: 'Marble Island' }
    ]
  },
  {
    id: '3',
    slug: 'mosman-residence',
    title: 'Mosman Residence',
    location: 'Mosman, NSW',
    category: 'Structural Extension',
    year: '2023',
    description: 'An architectural rear extension opening up the home to harbour views. Featuring large format glazing, a new entertainer’s kitchen, and alfresco dining.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600566776438-5f712a1bd916?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607686267-6f886090705f?q=80&w=2000&auto=format&fit=crop'
    ],
    stats: [
      { label: 'Timeline', value: '24 Weeks' },
      { label: 'Key Feature', value: 'Open Plan' }
    ]
  }
];
