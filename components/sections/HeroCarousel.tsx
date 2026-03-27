"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeroImageZoom } from "@/components/animations/HeroImageZoom";
import { StaggerFadeUp } from "@/components/animations/StaggerFadeUp";
import { ButtonMotion } from "@/components/animations/ButtonMotion";

export interface HeroSlide {
  id: number;
  image: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  ctaText: string;
  ctaLink: string;
  align?: "center" | "left";
  footer?: React.ReactNode;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 6000,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  return (
    <section className="mx-4 mt-4 lg:mx-6 lg:mt-6 relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden rounded-t-lg rounded-b-[2rem] border border-hero-border bg-background px-6 py-20 shadow-sm md:px-12 md:py-24 lg:px-16 lg:py-28">
      {slides.map((slide, index) => {
        const isActive = current === index;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "z-10 opacity-100 pointer-events-auto"
                : "z-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0">
              {isActive && (
                <HeroImageZoom>
                  <img
                    src={slide.image}
                    alt="Ferozsons Laboratories Hero"
                    className="h-full w-full object-cover object-center"
                  />
                </HeroImageZoom>
              )}
              <div
                className="absolute inset-0 bg-gradient-to-b from-hero-overlay/80 via-hero-overlay/60 to-hero-overlay/40 transition-opacity duration-1000"
                aria-hidden
              />
            </div>

            {isActive && (
              <StaggerFadeUp
                className={`container relative z-10 flex w-full flex-col ${
                  slide.align === "left"
                    ? "items-start text-left"
                    : "items-center text-center"
                }`}
              >
                <h1 className="font-serif text-4xl font-bold leading-tight text-hero-heading sm:text-5xl md:text-6xl lg:text-[3.5rem] max-w-4xl">
                  {slide.title}
                </h1>
                <p className="mt-6 max-w-3xl text-xl font-normal leading-relaxed text-hero-body md:text-2xl">
                  {slide.description}
                </p>

                <ButtonMotion>
                  <Button
                    asChild
                    size="lg"
                    className="mt-10 rounded-full bg-hero-cta px-8 py-3 text-base font-semibold text-hero-cta-foreground hover:opacity-90"
                  >
                    <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                  </Button>
                </ButtonMotion>

                {slide.footer && slide.footer}
              </StaggerFadeUp>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              current === index
                ? "w-8 bg-[#89bdf2]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
