export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

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
      { label: "Hepatology", href: "/products?category=Hepatology" },
      { label: "Cardiovascular", href: "/products?category=Cardiovascular" },
      { label: "Anti-Infectives", href: "/products?category=Anti-Infectives" },
      {
        label: "Gastroenterology",
        href: "/products?category=Gastroenterology",
      },
      { label: "Neurology", href: "/products?category=Neurology" },
      { label: "Oncology", href: "/products?category=Oncology" },
      { label: "Pain Management", href: "/products?category=Pain+Management" },
      { label: "Respiratory", href: "/products?category=Respiratory" },
      { label: "View All Products", href: "/products" },
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
    label: "Stories",
    href: "/stories",
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
    { label: "Patients", href: "/patients" },
  ],
  column3: [
    { label: "Physicians", href: "/physicians" },
    { label: "CSR", href: "/csr" },
    { label: "Press & Media", href: "/press-media" },
    { label: "Board of Directors", href: "/board-of-directors" },
  ],
};
