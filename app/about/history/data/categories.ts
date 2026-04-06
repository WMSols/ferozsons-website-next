export type Category =
  | "product"
  | "community"
  | "recognition"
  | "research"
  | "acquisition"
  | "brand"
  | "collaboration";

export interface CategoryMeta {
  label: string;
  color: string;
  bg: string;
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  product: { label: "Product Launch", color: "#0057b8", bg: "#e6f0fb" },
  community: { label: "Community Strength", color: "#1a7a55", bg: "#e3f5ee" },
  recognition: {
    label: "Ratings & Recognition",
    color: "#0057b8",
    bg: "#e6f0fb",
  },
  research: { label: "Investment in Science", color: "#0057b8", bg: "#e6f0fb" },
  acquisition: {
    label: "Acquisition & Mergers",
    color: "#0057b8",
    bg: "#e6f0fb",
  },
  brand: { label: "Brand Launch", color: "#0057b8", bg: "#e6f0fb" },
  collaboration: { label: "Collaborations", color: "#0057b8", bg: "#e6f0fb" },
  foundation: { bg: "#F5F5F5", color: "#424242" },
  expansion: { bg: "#E8F5E9", color: "#2E7D32" },
  manufacturing: { bg: "#FFF8E1", color: "#F57F17" },
};
