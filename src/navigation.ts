import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: '首页', href: getPermalink('/') },
    {
      text: '产品',
      href: getPermalink('/products'),
      links: [
        { text: 'Play', href: getPermalink('/products/play') },
        { text: 'Studio', href: getPermalink('/products/studio') },
      ],
    },
    { text: '关于我们', href: getPermalink('/about') },
    { text: '加入我们', href: getPermalink('/join') },
    { text: '联系', href: getPermalink('/contact') },
    { text: '博客', href: getBlogPermalink() },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '产品',
      links: [
        { text: '功能', href: '#' },
        { text: '安全', href: '#' },
        { text: '团队', href: '#' },
        { text: '企业', href: '#' },
        { text: '客户案例', href: '#' },
        { text: '定价', href: '#' },
        { text: '资源', href: '#' },
      ],
    },
    {
      title: '平台',
      links: [
        { text: '开发者 API', href: '#' },
        { text: '合作伙伴', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'Lilivi 桌面版', href: '#' },
      ],
    },
    {
      title: '支持',
      links: [
        { text: '文档', href: '#' },
        { text: '社区论坛', href: '#' },
        { text: '专业服务', href: '#' },
        { text: '培训', href: '#' },
        { text: '服务状态', href: '#' },
      ],
    },
    {
      title: '公司',
      links: [
        { text: '关于', href: '#' },
        { text: '博客', href: '#' },
        { text: '加入我们', href: '#' },
        { text: '媒体', href: '#' },
        { text: '多元与包容', href: '#' },
        { text: '社会影响', href: '#' },
        { text: '商店', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: '使用条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
    { text: 'Cookie 政策', href: getPermalink('/cookies') },
    { text: 'Cookie 设定', href: getPermalink('/cookies-settings') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:support@lilivi.com' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © 2025 Xiamen Lilivi Technology Co., Ltd.
  `,
};
