export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL =
  "Products__DynamicCategories";

export const mainNavItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "History", href: "/about/history" },
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "Purpose", href: "/about/purpose" },
      { label: "Message from the CEO", href: "/about/ceo-message" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      // Replaced at runtime in `components/layout/Navbar.tsx` with categories from Strapi.
      { label: PRODUCTS_DROPDOWN_PLACEHOLDER_LABEL, href: "/products" },
      { label: "View All Products", href: "/products" },
      { label: "Pharmaceuticals", href: "/products/pharmaceuticals" },
      { label: "Medical Technologies", href: "/products/medical-technologies" },
    ],
  },
  {
    label: "Partnerships",
    href: "/partnerships",
  },
  {
    label: "Newsroom",
    href: "/newsroom",
  },
  {
    label: "Contract Manufacturing",
    href: "/contract-manufacturing",
  },
];

export const secondaryNavItems: NavItem[] = [
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "/careers" },
];

export const footerLinks = {
  column1: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Investors", href: "/investors" },
  ],
  column2: [
    { label: "Newsroom", href: "/newsroom" },
    { label: "Stories", href: "/stories" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    // { label: "Patients", href: "/patients" },
  ],
  column3: [
    { label: "Physicians", href: "/physicians" },
    { label: "CSR", href: "/csr" },
    { label: "Press & Media", href: "/press-media" },
    { label: "Board of Directors", href: "/board-of-directors" },
  ],
};
