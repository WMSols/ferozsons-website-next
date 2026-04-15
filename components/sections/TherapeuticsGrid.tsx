"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TherapeuticItem {
  label: string;
  image: string;
}

interface TherapeuticsGridProps {
  items: TherapeuticItem[];
}

const ITEMS_PER_PAGE = 4;

export default function TherapeuticsGrid({ items }: TherapeuticsGridProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const visibleItems = items.slice(start, start + ITEMS_PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="mx-4 lg:mx-6">
        <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
          A broad range of pharmaceutical solutions
        </h2>

        <p className="font-sans text-sm md:text-base text-gray-600 mb-8 md:mb-10 max-w-xl leading-relaxed">
          Through continuous development and strategic partnerships, we offer
          medicines across several therapeutic areas to support modern
          healthcare.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 justify-between">
          {visibleItems.map(({ label, image }) => (
            <div
              key={label}
              className="bg-[#3b6a9e] rounded-2xl md:rounded-3xl w-72 h-72 flex flex-col p-5 md:p-7"
            >
              <h3 className="font-kaisei text-white text-lg md:text-2xl font-bold text-left leading-tight shrink-0">
                {label}
              </h3>

              <div className="flex-1 relative mt-2 min-h-0">
                <Image
                  src={image}
                  alt={`${label} illustration`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-md px-4 py-2">
              <button
                type="button"
                onClick={prev}
                disabled={page === 0}
                className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === page ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-hidden
                />
              ))}

              <button
                type="button"
                onClick={next}
                disabled={page === totalPages - 1}
                className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
