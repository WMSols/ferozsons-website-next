"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingCart, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getStrapiImageUrl, getStrapiMediaUrl } from "@/lib/strapi";
import { strapiBlocksToHtml } from "@/lib/strapi-blocks";
import type { StrapiProductDetail } from "@/types/strapi";

export default function ProductDetailClient({
  product,
}: {
  product: StrapiProductDetail;
}) {
  const [selectedSize, setSelectedSize] = useState(0);
  const volumeOptions = product.volumeOptions ?? [];
  const selectedSizeLabel = volumeOptions[selectedSize] ?? volumeOptions[0] ?? product.dosage ?? "";

  const imageUrl = getStrapiImageUrl(product.image?.url);
  const categoryName = product.product_category?.name ?? "";
  const descriptionHtml = strapiBlocksToHtml(product.description);
  const instructionsPdfUrl = getStrapiMediaUrl(product.instructionsPdf?.url);
  const pamphletPdfUrl = getStrapiMediaUrl(product.pamphletPdf?.url);

  return (
    <>
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

      <section className="py-8 md:py-12 bg-secondary">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-background rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 p-6 md:p-8 lg:p-10">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl lg:rounded-3xl bg-[#eef0f4] shadow-lg">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    unoptimized
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-primary/10">
                    {product.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="bg-white rounded-3xl p-8 shadow-md">
                  <h2 className="font-sans text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                    {product.name}
                    {selectedSizeLabel && ` - ${selectedSizeLabel}`}
                  </h2>
                  {categoryName && (
                    <p className="font-sans text-sm text-gray-500 uppercase mb-1 md:mb-2">
                      {categoryName}
                    </p>
                  )}
                  <p className="font-sans text-sm text-foreground mb-6 md:mb-8">
                    {product.dosage ?? product.concentration ?? product.formulation ?? ""}
                  </p>
                  {product?.availableOnline === true &&
                    typeof product?.buyLink === "string" &&
                    product.buyLink.trim() !== "" && (
                      <a
                        href={product.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-full py-3 bg-[#3b6a9e] hover:bg-[#345d8a] text-white font-medium transition-colors"
                      >
                        <ShoppingCart className="h-4 w-4" /> Order Online
                      </a>
                    )}
                </div>

                <div className="rounded-3xl p-8 bg-[#3b6a9e] flex flex-col gap-4">
                  <Link
                    href="#"
                    className="w-full rounded-full py-3 px-4 text-center text-white font-medium border border-white bg-transparent hover:bg-white/10 transition-colors"
                  >
                    FAQs
                  </Link>
                  {instructionsPdfUrl ? (
                    <a
                      href={instructionsPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      Instructions For Use
                      <Download className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href="#"
                      className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
                    >
                      Instructions For Use
                    </Link>
                  )}
                  {pamphletPdfUrl ? (
                    <a
                      href={pamphletPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      Product Information Pamphlet
                      <Download className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href="#"
                      className="w-full rounded-full py-3 px-4 text-center font-medium bg-white text-foreground hover:bg-gray-100 transition-colors"
                    >
                      Product Information Pamphlet
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              {product.dosage ?? product.concentration ?? product.formulation ?? ""}
            </p>
            {volumeOptions.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {volumeOptions.map((size, i) => (
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
            {descriptionHtml ? (
              <div
                className="text-muted-foreground leading-relaxed prose prose-sm max-w-none prose-p:mb-3"
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
              />
            ) : (
              product.keyFeatures && (
                <p className="text-muted-foreground leading-relaxed">
                  {product.keyFeatures}
                </p>
              )
            )}
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
