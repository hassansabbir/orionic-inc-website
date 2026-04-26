import { NavItem, SocialLink, FooterSection } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About', href: '/about' },
];

export const socialLinks: SocialLink[] = [
  { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Impact', href: '/about#impact' },
      { label: 'Brands', href: '/about#brands' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Luxury Car Rental', href: '#' },
      { label: 'Rapid Delivery', href: '#' },
      { label: 'Luxury Apartments', href: '#' },
      { label: 'Event Management', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];