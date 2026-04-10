"use client";

import { FadeInSection } from "./helpers/FadeInSection";

export function FacilityVideoSection() {
  return (
    <section className="py-24" style={{ background: "#f0f4f8" }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00000010 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16">
        <FadeInSection>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-[#4a90d9] mb-4 text-center">
            Inside Our Facility
          </p>
          <h2
            className="font-display text-center mb-12"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#0a1628",
              fontWeight: 700,
            }}
          >
            See Our Facility in Action
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div
            className="relative w-full overflow-hidden rounded-3xl"
            style={{
              paddingTop: "56.25%",
              boxShadow:
                "0 30px 80px rgba(29,78,216,0.18), 0 0 0 1px rgba(74,144,217,0.15)",
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/VmUg9NOkDu8"
              title="Ferozsons Laboratories Facility"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
