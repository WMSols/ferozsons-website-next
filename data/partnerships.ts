export interface Partnership {
  name: string;
  logo?: string;
  description: string;
  since: string;
}

export const partnerships: Partnership[] = [
  {
    name: "Bagó",
    description:
      "Strategic partnership for innovative pharmaceutical solutions across multiple therapeutic areas in Pakistan.",
    since: "1990",
    logo: "/partnerships/bago.png",
  },
  {
    name: "Gilead Sciences",
    description:
      "Strategic partnership for hepatitis C treatments including Sovaldi, Harvoni, and Epclusa. Together, we are transforming the treatment landscape for hepatitis C in Pakistan.",
    since: "2015",
    logo: "/partnerships/gilead.png",
  },
  {
    name: "Boston Scientific",
    description:
      "Collaboration bringing cutting-edge medical devices and technologies for cardiovascular and other interventional procedures.",
    since: "2018",
    logo: "/partnerships/boston-scientific.png",
  },
  {
    name: "BioGaia",
    description:
      "Partnership focused on probiotic healthcare products, bringing Swedish innovation to improve gut health across Pakistan.",
    since: "2016",
    logo: "/partnerships/biogaia.png",
  },
  {
    name: "Nihon Kohden",
    description:
      "Alliance for advanced medical monitoring equipment, expanding diagnostic capabilities throughout Pakistani healthcare facilities.",
    since: "2014",
    logo: "/partnerships/nihon-kohden.png",
  },
  {
    name: "Butterfly Network",
    description:
      "Bringing revolutionary handheld ultrasound technology to make point-of-care imaging accessible and affordable.",
    since: "2020",
    logo: "/partnerships/butterfly-network.png",
  },
  // {
  //   name: "Abbott Laboratories",
  //   description:
  //     "Long-standing partnership bringing a diverse range of pharmaceutical products to Pakistan, spanning multiple therapeutic areas.",
  //   since: "1960",
  // },
  // {
  //   name: "Roche",
  //   description:
  //     "Partnership focused on oncology treatments, bringing innovative cancer therapies to patients across Pakistan.",
  //   since: "2005",
  // },
];

export const timelineEvents = [
  {
    year: "1954",
    title: "Founded",
    description:
      "Ferozsons Laboratories Limited established in Nowshera, Pakistan.",
  },
  {
    year: "1960",
    title: "KSE Listing",
    description:
      "The first Pakistani pharmaceutical company listed on Karachi Stock Exchange (KSE).",
  },
  {
    year: "2002",
    title: "Strategic Global Partnerships",
    description:
      "Partnered with Curatis Pharma GmbH (Germany) and Bagó Group S.A. (Argentina) to introduce advanced biological therapies in oncology and liver disease.",
  },
  {
    year: "2006",
    title: "First Biopharma Company",
    description:
      "Entered a joint venture with Bagó Group (Argentina) to establish BF Biosciences, Pakistan’s first biopharmaceutical company.",
  },
  {
    year: "2008",
    title: "Boston Scientific Partnership",
    description:
      "Secured distribution rights for advanced interventional medical devices from Boston Scientific Inc., a global industry leader.",
  },
  {
    year: "2014",
    title: "Breakthrough Therapies",
    description:
      "Partnered with Gilead Sciences Inc. to introduce Sovaldi for Hepatitis C, with Pakistan becoming the first country to implement the access program.",
  },
];

export const boardMembers = [
  { name: "Osman Khalid Waheed", title: "Chairman & CEO" },
  { name: "Aamir Ibrahim", title: "Independent Director" },
  { name: "Farooq Rahmatullah Qureshi", title: "Independent Director" },
  { name: "Zulfiqar Khalid Waheed", title: "Non-Executive Director" },
  { name: "Rabia Waheed", title: "Non-Executive Director" },
  { name: "Naved A. Khan", title: "Independent Director" },
  { name: "Ayesha Aziz", title: "Independent Director" },
];

export const csrInitiatives = [
  {
    title: "NOP Scholarships at LUMS",
    description:
      "Ferozsons sponsors students through the National Outreach Programme at LUMS, providing full scholarships to deserving students from across Pakistan to pursue undergraduate studies.",
  },
  {
    title: "Young Writers Workshop",
    description:
      "Annual creative writing workshops for young Pakistanis, nurturing literary talent and promoting reading culture across the country.",
  },
  {
    title: "Khalid Waheed Campus",
    description:
      "State-of-the-art educational facilities named after the late founder, providing quality education to communities in Nowshera.",
  },
  {
    title: "UMANG – Community Health",
    description:
      "Community healthcare initiatives providing free medical camps, health screenings, and medicine distribution to underserved communities.",
  },
];

export const openPositions = [
  {
    title: "Product Manager – Hepatology",
    department: "Marketing",
    location: "Rawalpindi",
    type: "Full-time",
  },
  {
    title: "Quality Assurance Analyst",
    department: "Quality Control",
    location: "Nowshera",
    type: "Full-time",
  },
  {
    title: "Medical Representative",
    department: "Sales",
    location: "Multiple Cities",
    type: "Full-time",
  },
  {
    title: "Supply Chain Coordinator",
    department: "Operations",
    location: "Rawalpindi",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Rawalpindi",
    type: "Full-time",
  },
];
