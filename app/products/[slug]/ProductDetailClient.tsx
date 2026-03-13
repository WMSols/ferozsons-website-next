"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import type { Product } from "@/data/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <>
      <PageHero
        title={product.name}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
            <div className="bg-secondary rounded-lg flex items-center justify-center aspect-square">
              <span className="text-8xl font-bold text-primary/10">{product.name.charAt(0)}</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{product.category}</p>
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-lg text-muted-foreground mb-6">{product.dosage}</p>

              {product.sizes.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Available Sizes</p>
                  <div className="flex gap-2">
                    {product.sizes.map((size, i) => (
                      <Button
                        key={size}
                        variant={selectedSize === i ? "default" : "outline"}
                        size="sm"
                        className="rounded-full"
                        onClick={() => setSelectedSize(i)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Button size="lg" className="rounded-full px-10 mb-6 w-full md:w-auto">
                <ShoppingCart className="mr-2 h-4 w-4" /> Order Online
              </Button>

              <div className="space-y-3 border-t border-border pt-6">
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <HelpCircle className="h-4 w-4" /> FAQs
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <FileText className="h-4 w-4" /> Instructions for Use
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <FileText className="h-4 w-4" /> Patient Pamphlet
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mt-12">
            <h3 className="text-xl font-bold mb-4">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products"><ArrowLeft className="mr-2 h-4 w-4" /> Return To Product List</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
