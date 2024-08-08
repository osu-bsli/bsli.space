import type { CallToAction } from './types';
import { getPermalink, getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

export interface ActionLink extends CallToAction { }

export interface MenuLink extends Link {
  text: string,
  href?: string,
  links?: Array<MenuLink>;
}

export interface HeaderData {
  links: MenuLink[];
  actions: ActionLink[]
}

export const headerData: HeaderData = {
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
  sponsors1: [
    {
      src: "~/assets/images/sponsors/SAS.webp",
      ariaLabel: "SAS Logo",
      href: "https://specialaerospaceservices.com/"
    },
    {
      src: "~/assets/images/sponsors/redwire.webp",
      ariaLabel: "Redwire Logo",
      href: "https://redwirespace.com/"
    },
    {
      src: "~/assets/images/sponsors/altium.webp",
      ariaLabel: "Altium Logo",
      href: "https://www.altium.com/"
    },
    {
      src: "~/assets/images/sponsors/ansys.webp",
      ariaLabel: "Ansys Logo",
      href: "https://www.ansys.com/"
    },
    {
      src: "~/assets/images/sponsors/OSGC.webp",
      ariaLabel: "Ohio Space Grant Consortium Logo",
      href: "https://osgc.org/"
    }
  ],
  sponsors2: [
    {
      src: "~/assets/images/sponsors/OSUCOE.webp",
      ariaLabel: "OSU College of Engineering Logo",
      href: "https://engineering.osu.edu/"
    },
    {
      src: "~/assets/images/sponsors/osu battelle center.webp",
      ariaLabel: "OSU Battelle Center Logo",
      href: "https://battellecenter.osu.edu/"
    }
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/the-buckeye-space-launch-initiative' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/spacelaunchinitiative/' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@buckeyesli1865/videos' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/buckeye_sli/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/osu-bsli' },
  ],
  footNote: `
    © 2024 Buckeye Space Launch Initiative</a> · All rights reserved.
  `,
};
