"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageHero from "@/components/layout/PageHero";
import { products, productCategories } from "@/data/products";

type FilterMode = "category" | "prescribed" | "az";

export default function ProductListClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [filterMode, setFilterMode] = useState<FilterMode>(initialCategory ? "category" : "prescribed");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = useMemo(() => {
    let result = [...products];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (filterMode === "category" && selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (filterMode === "prescribed") {
      result = result.filter((p) => p.commonlyPrescribed);
    }
    if (filterMode === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [search, filterMode, selectedCategory]);

  return (
    <>
      <PageHero title="Our Products" subtitle="Explore our comprehensive range of pharmaceutical products." breadcrumbs={[{ label: "Products" }]} />

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
              variant={filterMode === "prescribed" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => { setFilterMode("prescribed"); setSelectedCategory(""); }}
            >
              Commonly Prescribed
            </Button>
            <Button
              variant={filterMode === "category" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setFilterMode("category")}
            >
              By Category
            </Button>
            <Button
              variant={filterMode === "az" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => { setFilterMode("az"); setSelectedCategory(""); }}
            >
              A–Z All
            </Button>
          </div>

          {filterMode === "category" && (
            <div className="flex flex-wrap gap-2 mb-8">
              {productCategories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, visibleCount).map((product) => (
              <Card key={product.slug} className="hover:shadow-md transition-shadow">
                <div className="h-40 bg-secondary flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/20">{product.name.charAt(0)}</span>
                </div>
                <CardContent className="pt-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{product.category}</p>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.dosage}</p>
                  <Link href={`/products/${product.slug}`}>
                    <Button variant="outline" size="sm" className="mt-4 rounded-full w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center mt-10">
              <Button variant="outline" className="rounded-full px-10" onClick={() => setVisibleCount((c) => c + 9)}>
                Load More
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products found matching your criteria.</p>
          )}
        </div>
      </section>
    </>
  );
}
