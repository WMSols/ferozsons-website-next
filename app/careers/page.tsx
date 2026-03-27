import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { openPositions } from "@/data/partnerships";
import { whyWorkWithUs } from "@/data/careers";
import WhyWorkCard from "./components/WhyWorkCard";
import PositionCard from "./components/PositionCard";

export const metadata = {
  title: "Careers",
  description:
    "Join our team and help shape the future of healthcare in Pakistan.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join our team and help shape the future of healthcare in Pakistan."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <SectionWrapper containerClassName="max-w-4xl">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyWorkWithUs.map((v) => (
              <WhyWorkCard key={v.title} title={v.title} desc={v.desc} />
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        <div className="space-y-4">
          {openPositions.map((pos) => (
            <PositionCard
              key={pos.title}
              title={pos.title}
              department={pos.department}
              location={pos.location}
              type={pos.type}
            />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
