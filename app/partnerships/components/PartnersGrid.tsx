import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { Partnership } from "@/data/partnerships";

interface PartnersGridProps {
  partners: Partnership[];
  className?: string;
}

export default function PartnersGrid({
  partners,
  className,
}: PartnersGridProps) {
  return (
    <SectionWrapper className={cn("py-12 md:py-16", className)}>
      <h2 className="font-kaisei text-3xl md:text-5xl font-bold text-center mb-12 md:mb-14 text-foreground">
        Our Trusted Partners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            aria-label={`Partner logo slot ${index + 1}`}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-border/40 bg-white shadow-sm min-h-36 md:min-h-44 lg:min-h-48",
              "transition-shadow hover:shadow-lg",
            )}
          >
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : null}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
