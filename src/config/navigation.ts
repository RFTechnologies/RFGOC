export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
};

export const mainNavConfig: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Companies", href: "/companies" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  // Careers: to be added as single-line config addition when ready
];

export type FooterNavConfig = {
  group: NavItem[];
  subsidiaries: NavItem[];
  legal: NavItem[];
};

export const footerNavConfig: FooterNavConfig = {
  group: [
    { label: "About RF Group", href: "/about" },
    { label: "Our Companies", href: "/companies" },
    { label: "Group Portfolio", href: "/portfolio" },
    { label: "Contact & Inquiries", href: "/contact" },
  ],
  subsidiaries: [
    { label: "RF Technologies", href: "https://rftechnologies.com.pk", isExternal: true },
    { label: "RF Media Productions", href: "https://rfmediaproductions.com", isExternal: true },
    { label: "RF Architects", href: "https://rfarchitects.design/", isExternal: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
