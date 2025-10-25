import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/en') },
    {
      text: 'Products',
      href: getPermalink('/en/products'),
      links: [
        { text: 'Play', href: getPermalink('/en/products/play') },
        { text: 'Studio', href: getPermalink('/en/products/studio') },
      ],
    },
    { text: 'About', href: getPermalink('/en/about') },
    { text: 'Join Us', href: getPermalink('/en/join') },
    { text: 'Contact', href: getPermalink('/en/contact') },
    // { text: 'Blog', href: getPermalink('/en/blog') },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'Lilivi Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Training', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        // { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Use', href: getPermalink('/en/terms') },
    { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
    { text: 'Refund Policy', href: getPermalink('/en/refund') },
    { text: 'Cookie Policy', href: getPermalink('/en/cookies') },
    { text: 'Cookie Settings', href: getPermalink('/en/cookies-settings') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:support@lilivi.com' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © 2025 Xiamen Lilivi Technology Co., Ltd.
  `,
};
