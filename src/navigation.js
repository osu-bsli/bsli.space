import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'NASA Student Launch',
          href: getPermalink('/projects/nasa'),
        },
        {
          text: 'Spaceport',
          href: getPermalink('/projects/sac'),
        },
        {
          text: 'Liquids',
          href: getPermalink('/projects/liquids'),
        },
      ],
    },
    {
      text: 'Leadership',
      href: getPermalink('/leadership'),
    },
    {
      text: 'Sponsor',
      href: getPermalink('/sponsor'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ variant: 'primary', text: 'JOIN', href: getHomePermalink() + '#get-involved' }],
};

export const footerData = {
  links: [

  ],
  secondaryLinks: [

  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    © 2024 Buckeye Space Launch Initiative</a> · All rights reserved.
  `,
};
