export interface Partnership {
  name: string;
  logo?: string;
  description: string;
  since: string;
}

export const partnerships: Partnership[] = [
  {
    name: "Gilead Sciences",
    description: "Strategic partnership for hepatitis C treatments including Sovaldi, Harvoni, and Epclusa. Together, we are transforming the treatment landscape for hepatitis C in Pakistan.",
    since: "2015",
  },
  {
    name: "Abbott Laboratories",
    description: "Long-standing partnership bringing a diverse range of pharmaceutical products to Pakistan, spanning multiple therapeutic areas.",
    since: "1960",
  },
  {
    name: "Pfizer Inc.",
    description: "Collaboration for the manufacturing and distribution of key pharmaceutical products in cardiovascular, anti-infective, and pain management categories.",
    since: "1970",
  },
  {
    name: "Roche",
    description: "Partnership focused on oncology treatments, bringing innovative cancer therapies to patients across Pakistan.",
    since: "2005",
  },
  {
    name: "Bristol-Myers Squibb",
    description: "Alliance for cardiovascular and metabolic disease treatments, expanding treatment access throughout Pakistan.",
    since: "1990",
  },
];

export const timelineEvents = [
  { year: "1956", title: "Founded", description: "Ferozsons Laboratories established in Nowshera, Pakistan." },
  { year: "1960", title: "Abbott Partnership", description: "Began long-standing relationship with Abbott Laboratories." },
  { year: "1970", title: "Pfizer Alliance", description: "Partnered with Pfizer for manufacturing and distribution." },
  { year: "1990", title: "BMS Collaboration", description: "Entered alliance with Bristol-Myers Squibb." },
  { year: "2005", title: "Roche Partnership", description: "Expanded into oncology with Roche collaboration." },
  { year: "2015", title: "Gilead Sciences", description: "Landmark partnership for hepatitis C treatment access." },
  { year: "2020", title: "New Horizons", description: "Continued innovation and expanded portfolio across therapeutic areas." },
];

export const boardMembers = [
  { name: "Osman Khalid Waheed", title: "Chairman & CEO", },
  { name: "Aamir Ibrahim", title: "Independent Director", },
  { name: "Farooq Rahmatullah Qureshi", title: "Independent Director", },
  { name: "Zulfiqar Khalid Waheed", title: "Non-Executive Director", },
  { name: "Rabia Waheed", title: "Non-Executive Director", },
  { name: "Naved A. Khan", title: "Independent Director", },
  { name: "Ayesha Aziz", title: "Independent Director", },
];

export const csrInitiatives = [
  {
    title: "NOP Scholarships at LUMS",
    description: "Ferozsons sponsors students through the National Outreach Programme at LUMS, providing full scholarships to deserving students from across Pakistan to pursue undergraduate studies.",
  },
  {
    title: "Young Writers Workshop",
    description: "Annual creative writing workshops for young Pakistanis, nurturing literary talent and promoting reading culture across the country.",
  },
  {
    title: "Khalid Waheed Campus",
    description: "State-of-the-art educational facilities named after the late founder, providing quality education to communities in Nowshera.",
  },
  {
    title: "UMANG – Community Health",
    description: "Community healthcare initiatives providing free medical camps, health screenings, and medicine distribution to underserved communities.",
  },
];

export const openPositions = [
  { title: "Product Manager – Hepatology", department: "Marketing", location: "Rawalpindi", type: "Full-time" },
  { title: "Quality Assurance Analyst", department: "Quality Control", location: "Nowshera", type: "Full-time" },
  { title: "Medical Representative", department: "Sales", location: "Multiple Cities", type: "Full-time" },
  { title: "Supply Chain Coordinator", department: "Operations", location: "Rawalpindi", type: "Full-time" },
  { title: "Digital Marketing Specialist", department: "Marketing", location: "Rawalpindi", type: "Full-time" },
];
