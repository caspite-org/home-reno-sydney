export interface Post {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

export const POSTS: Post[] = [
  {
    id: '1',
    slug: 'renovation-roi-guide',
    title: 'Where to Spend vs. Save: A Guide to Renovation ROI',
    category: 'Budgeting',
    date: 'Oct 12, 2025',
    excerpt: 'Not all upgrades are created equal. We break down which areas of your home yield the highest return on investment, and where you can pull back without compromising quality.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '2',
    slug: 'understanding-hbcf',
    title: 'Why HBCF Insurance Matters for Your Reno',
    category: 'Trust & Compliance',
    date: 'Sep 28, 2025',
    excerpt: 'Home Building Compensation Fund insurance is your safety net. Learn exactly what it covers and why you should never build without it.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '3',
    slug: 'kitchen-layout-trends-2026',
    title: 'Kitchen Layout Trends Defining 2026',
    category: 'Design',
    date: 'Sep 15, 2025',
    excerpt: 'From the return of the butler\'s pantry to the social island bench, we explore the structural trends that are reshaping how we cook and live.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop'
  }
];
