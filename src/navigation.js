import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

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
          href: getPermalink('/subteams/nasa'),
        },
        {
          text: 'Spaceport',
          href: getPermalink('/subteams/sac'),
        },
        {
          text: 'Liquids',
          href: getPermalink('/subteams/liquids'),
        },
      ],
    },
    {
      text: 'Leadership',
      href: getPermalink('/leadership'),
    },
    {
      text: 'Sponsors',
      href: getPermalink('/sponsors'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ variant: 'primary', text: 'JOIN', href: getPermalink('/#get-involved') }],
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
    Buckeye Space Launch Initiative</a> · All rights reserved.
  `,
};
