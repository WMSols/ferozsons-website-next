"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TherapeuticItem {
  label: string;
  image: string;
}

interface TherapeuticsGridProps {
  items: TherapeuticItem[];
  backgroundImage?: string;
}

export default function TherapeuticsGrid({
  items,
  backgroundImage = "/mission-bg.png",
}: TherapeuticsGridProps) {
  return (
    <section className="mx-4 my-8 lg:mx-6 lg:my-12 border border-border rounded-[2rem] overflow-hidden shadow-sm bg-background">
      <div className="relative px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
        {/* Background Image */}
        {backgroundImage && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-no-repeat bg-right bg-cover md:bg-contain opacity-40 md:opacity-100"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"
              aria-hidden
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            A broad range of pharmaceutical solutions
          </h2>

          <p className="font-sans text-base md:text-lg text-gray-900 mb-10 max-w-3xl">
            Through continuous development and strategic partnerships, we offer
            medicines across several therapeutic areas to support modern
            healthcare.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {items.map(({ label, image }) => (
              <div
                key={label}
                className="bg-[#3b6a9e] rounded-3xl aspect-square flex flex-col p-6 md:p-8"
              >
                <h3 className="font-kaisei text-white text-2xl md:text-3xl font-bold text-left w-full">
                  {label}
                </h3>

                <div className="flex-1 w-full flex items-center justify-center mt-2">
                  <div className="relative w-[85%] h-[85%] md:w-[90%] md:h-[90%]">
                    <Image
                      src={image}
                      alt={`${label} illustration`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-md px-4 py-2">
              <button
                type="button"
                className="p-1 text-gray-600 hover:text-gray-900"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="w-2 h-2 rounded-full bg-blue-600" aria-hidden />

              <button
                type="button"
                className="p-1 text-gray-600 hover:text-gray-900"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
