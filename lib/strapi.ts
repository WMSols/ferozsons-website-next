const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

export { STRAPI_BASE_URL };

const STRAPI_BEARER_TOKEN =
  process.env.NEXT_PUBLIC_STRAPI_BEARER_TOKEN ??
  "544812538e0ddbd713eecaa24c5feec779c17c8898e501e37d290f47d72e7fa8c80e0a8581470579e79b530813edcef140e8175885f3f5f513267c422ef0d0ae40963466b40e07a46837cbb6fbc27997a02ea684189ca392b46c45b9ebc8adb60d22098e05d7023690e18ceda1a949ced6151afbb79396e4c90c52f9d797fda9";

export async function strapiFetch(input: string, init?: RequestInit) {
  const headers = new Headers(init?.headers);
  headers.set("Authorization", `Bearer ${STRAPI_BEARER_TOKEN}`);
  if (!headers.has("Accept")) headers.set("Accept", "application/json");

  const res = await fetch(input, { ...init, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Strapi request failed (${res.status} ${res.statusText}) ${text}`.trim()
    );
  }
  return res;
}

export function getStrapiImageUrl(url: string | undefined): string {
  if (!url) return "";
  return url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;
}

/** Use for any Strapi media URL (images, PDFs, etc.). */
export function getStrapiMediaUrl(url: string | undefined): string {
  return getStrapiImageUrl(url);
}

export type ProductsFilterMode = "category" | "prescribed" | "az";

export interface BuildProductsUrlParams {
  page: number;
  pageSize?: number;
  filterMode: ProductsFilterMode;
  selectedCategory: string;
}

export function buildProductsUrl({
  page,
  pageSize = 25,
  filterMode,
  selectedCategory,
}: BuildProductsUrlParams): string {
  const params = new URLSearchParams();
  params.set("populate", "*");
  params.set("pagination[page]", String(page));
  params.set("pagination[pageSize]", String(pageSize));

  if (filterMode === "category" && selectedCategory) {
    params.set("filters[product_category][slug][$eq]", selectedCategory);
  }

  if (filterMode === "az") {
    params.set("sort", "name:asc");
  }

  // Requires a boolean `commonlyPrescribed` field on the Product content-type in Strapi.
  // Remove this block if the field does not exist to avoid 400 errors.
  if (filterMode === "prescribed") {
    params.set("filters[commonlyPrescribed][$eq]", "true");
  }

  return `${STRAPI_BASE_URL}/api/products?${params.toString()}`;
}

export function getCategoriesUrl(): string {
  return `${STRAPI_BASE_URL}/api/product-categories`;
}

export function getProductBySlugUrl(slug: string): string {
  const params = new URLSearchParams();
  params.set("filters[slug][$eq]", slug);
  params.set("populate", "*");
  return `${STRAPI_BASE_URL}/api/products?${params.toString()}`;
}
