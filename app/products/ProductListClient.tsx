"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageHero from "@/components/layout/PageHero";
import {
  buildProductsUrl,
  getCategoriesUrl,
  getStrapiImageUrl,
  strapiFetch,
  type ProductsFilterMode,
} from "@/lib/strapi";
import type {
  StrapiCategoriesResponse,
  StrapiProduct,
  StrapiProductCategory,
  StrapiProductsResponse,
} from "@/types/strapi";

export default function ProductListClient() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") ?? "";
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filterMode, setFilterMode] = useState<ProductsFilterMode>(
    categoryFromUrl ? "category" : "prescribed"
  );
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);

  useEffect(() => {
    if (categoryFromUrl) {
      setFilterMode("category");
      setSelectedCategory(categoryFromUrl);
      setPage(1);
    }
  }, [categoryFromUrl]);

  const resetPage = () => setPage(1);

  const effectiveCategory = categoryFromUrl || selectedCategory;
  const effectiveFilterMode = categoryFromUrl ? "category" : filterMode;

  const categoriesQuery = useQuery({
    queryKey: ["product-categories"],
    queryFn: async (): Promise<StrapiCategoriesResponse> => {
      const res = await strapiFetch(getCategoriesUrl());
      return res.json();
    },
  });

  const productsQuery = useQuery({
    queryKey: ["products", effectiveCategory, effectiveFilterMode, page],
    queryFn: async (): Promise<StrapiProductsResponse> => {
      const url = buildProductsUrl({
        page,
        pageSize: 25,
        filterMode: effectiveFilterMode,
        selectedCategory: effectiveCategory,
      });
      const res = await strapiFetch(url);
      return res.json();
    },
  });

  const categories = categoriesQuery.data?.data ?? [];
  const products = productsQuery.data?.data ?? [];
  const pagination = productsQuery.data?.meta?.pagination;
  const pageCount = Math.max(0, pagination?.pageCount ?? 0);
  const currentPageFromMeta = pagination?.page ?? 1;
  const total = pagination?.total ?? 0;

  // Keep local page in bounds when meta says we have fewer pages (e.g. after filter change or empty result)
  useEffect(() => {
    if (pageCount === 0) {
      setPage(1);
    } else if (page > pageCount) {
      setPage(pageCount);
    }
  }, [pageCount, page]);

  const filteredBySearch = useMemo(() => {
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.product_category?.name ?? "").toLowerCase().includes(q)
    );
  }, [products, search]);

  const setFilterModePrescribed = () => {
    setFilterMode("prescribed");
    setSelectedCategory("");
    resetPage();
  };

  const setFilterModeCategory = () => {
    setFilterMode("category");
    resetPage();
  };

  const setFilterModeAz = () => {
    setFilterMode("az");
    setSelectedCategory("");
    resetPage();
  };

  const setCategory = (slug: string) => {
    setSelectedCategory((prev) => (prev === slug ? "" : slug));
    resetPage();
  };

  const isLoading = productsQuery.isLoading;
  const isError = productsQuery.isError;
  const isCategoriesLoading = categoriesQuery.isLoading;

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Explore our comprehensive range of pharmaceutical products."
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="py-12">
        <div className="container">
          <div className="relative max-w-md mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={effectiveFilterMode === "prescribed" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={setFilterModePrescribed}
            >
              Commonly Prescribed
            </Button>
            <Button
              variant={effectiveFilterMode === "category" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={setFilterModeCategory}
            >
              By Category
            </Button>
            <Button
              variant={effectiveFilterMode === "az" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={setFilterModeAz}
            >
              A–Z All
            </Button>
          </div>

          {effectiveFilterMode === "category" && (
            <div className="flex flex-wrap gap-2 mb-8">
              {isCategoriesLoading ? (
                <span className="text-sm text-muted-foreground">
                  Loading categories…
                </span>
              ) : (
                categories.map((cat) => (
                  <Button
                    key={cat.documentId ?? cat.id}
                    variant={effectiveCategory === cat.slug ? "default" : "outline"}
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => setCategory(cat.slug)}
                  >
                    {cat.name}
                  </Button>
                ))
              )}
            </div>
          )}

          {isError && (
            <p className="text-center text-destructive py-8">
              Failed to load products. Please try again.
            </p>
          )}

          {!isError && isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="h-40 bg-secondary animate-pulse" />
                  <CardContent className="pt-4 space-y-2">
                    <div className="h-3 w-1/4 bg-secondary rounded animate-pulse" />
                    <div className="h-5 w-2/3 bg-secondary rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-secondary rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!isError && !isLoading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBySearch.map((product) => (
                  <ProductCard key={product.documentId ?? product.id} product={product} />
                ))}
              </div>

              {filteredBySearch.length === 0 && (
                <p className="text-center text-muted-foreground py-12">
                  No products found matching your criteria.
                </p>
              )}

              {pagination && pageCount > 1 && (
                <div className="flex items-center justify-center gap-4 mt-10">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    disabled={currentPageFromMeta <= 1}
                    onClick={() => setPage(Math.max(1, currentPageFromMeta - 1))}
                    aria-disabled={currentPageFromMeta <= 1}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPageFromMeta} of {pageCount}
                    {total > 0 && ` (${total} total)`}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    disabled={currentPageFromMeta >= pageCount}
                    onClick={() => setPage(Math.min(pageCount, currentPageFromMeta + 1))}
                    aria-disabled={currentPageFromMeta >= pageCount}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: StrapiProduct }) {
  const imageUrl = getStrapiImageUrl(product.image?.url);
  const categoryName = product.product_category?.name ?? "";

  return (
    <Card className="hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20 bg-secondary">
            {product.name.charAt(0)}
          </span>
        )}
      </div>
      <CardContent className="pt-4">
        {categoryName && (
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            {categoryName}
          </p>
        )}
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          {product.dosage ?? product.concentration ?? product.formulation ?? ""}
        </p>
        <Link href={`/products/${product.slug}`}>
          <Button variant="outline" size="sm" className="mt-4 rounded-full w-full">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
