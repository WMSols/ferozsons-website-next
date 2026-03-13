"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Product } from "@/data/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const selectedSizeLabel = product.sizes[selectedSize] ?? product.sizes[0];

  return (
    <>
      {/* Compact top: breadcrumbs only */}
      <section className="bg-secondary py-6 md:py-8">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/products">Products List</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Main title on light grey background, above white container */}
      

      <section className="py-8 md:py-12 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Main container: 2-column layout, 60% image / 40% cards */}
          <div className="bg-background rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 p-6 md:p-8 lg:p-10">
              {/* Left column (~60%): product image in soft light gray container */}
              <div className="relative w-full min-h-[280px] lg:min-h-0 aspect-square flex items-center justify-center rounded-2xl lg:rounded-3xl bg-[#eef0f4] p-8 md:p-10">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={700}
                    height={700}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <span className="text-8xl font-bold text-primary/10">
                    {product.name.charAt(0)}
                  </span>
                )}
              </div>

              {/* Right column (~40%): two cards stacked */}
              <div className="flex flex-col gap-4 lg:gap-6">
                {/* Top card – Product info (white, large radius, shadow) */}
                <div className="bg-white rounded-3xl p-8 shadow-md">
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                    {product.name} - {selectedSizeLabel}
                  </h2>
                  <p className="font-sans text-sm text-gray-500 uppercase mb-1 md:mb-2">
                    {product.category}
                  </p>
                  <p className="font-sans text-sm text-foreground mb-6 md:mb-8">
                    {product.dosage}
                  </p>
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-2 w-full rounded-full py-3 bg-[#3b6a9e] hover:bg-[#345d8a] text-white font-medium transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4" /> Order Online
                  </Link>
                </div>

                {/* Bottom card – Resources (solid blue, three button variants) */}
                <div className="rounded-3xl p-8 bg-[#3b6a9e] flex flex-col gap-4">
                  <Link
                    href="#"
                    className="w-full rounded-full py-3 px-4 text-center text-white font-medium border border-white bg-transparent hover:bg-white/10 transition-colors"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="#"
                    className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
                  >
                    Instructions For Use
                  </Link>
                  <Link
                    href="#"
                    className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
                  >
                    Product Information Pamphlet
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section: heading + size pills + description (outside white container) */}
          <div className="max-w-6xl mt-12">
            
            <p className="text-sm text-muted-foreground mb-4">{product.dosage}</p>
            {product.sizes.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-6">
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
            )}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return To Product List
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
