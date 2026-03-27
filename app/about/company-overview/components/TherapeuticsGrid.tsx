import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TherapeuticItem {
  label: string;
  image: string;
}

interface TherapeuticsGridProps {
  items: TherapeuticItem[];
}

export default function TherapeuticsGrid({ items }: TherapeuticsGridProps) {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          A broad range of pharmaceutical solutions
        </h2>
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
        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-md px-4 py-2">
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-gray-900"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span
              className="w-2 h-2 rounded-full bg-blue-600"
              aria-hidden
            />
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
    </section>
  );
}
