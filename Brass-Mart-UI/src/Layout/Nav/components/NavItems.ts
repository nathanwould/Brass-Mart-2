export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Shop',
    children: [
      {
        label: 'Instruments',
        subLabel: "Find that unique vintage horn.",
        href: '/instruments',
      },
      {
        label: 'Accessories',
        subLabel: 'Shop cases and maintenance products.',
        href: '/accessories',
      },
    ],
  },
  {
    label: 'About',
    href: 'https://www.nathanwould.com/'
  },
];

export const MOBILE_ONLY_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
];

export const SIGNED_IN_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Account',
    href: '/account'
  },
];