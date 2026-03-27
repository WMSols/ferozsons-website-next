import StatsSection from "@/components/sections/StatsSection";
import ContentSplitSection from "@/components/sections/ContentSplitSection";
import LegacyBanner from "@/components/sections/LegacyBanner";
import CTABanner from "@/components/layout/CTABanner";
import {
  statsData,
  therapeuticsData,
  introText,
  biotechSection,
  hepatitisSections,
  legacyData,
  bottomCtaData,
} from "@/data/company-overview";
import CompanyHero from "./components/CompanyHero";
import CoreValuesStatement from "./components/CoreValuesStatement";
import BiotechBlock from "./components/BiotechBlock";
import TherapeuticsGrid from "./components/TherapeuticsGrid";

export const metadata = {
  title: "Company Overview",
  description:
    "Advancing healthcare through science. Learn about Ferozsons Laboratories and our commitment to quality and patient-first care.",
};

export default function CompanyOverviewPage() {
  return (
    <>
      <div className="-mt-[6.6rem]">
        <CompanyHero />

        <StatsSection
          title="Advancing Healthcare Through Science"
          stats={statsData}
        />

        <section className="bg-black py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-kaisei text-white text-xl leading-relaxed font-bold">
              {introText}
            </p>
          </div>
        </section>

        <CoreValuesStatement />

        <BiotechBlock
          title={biotechSection.title}
          description={biotechSection.description}
          ctaText={biotechSection.ctaText}
          ctaLink={biotechSection.ctaLink}
        />

        <ContentSplitSection items={hepatitisSections} />

        <TherapeuticsGrid items={therapeuticsData} />

        <LegacyBanner {...legacyData} />

        <CTABanner
          title={bottomCtaData.title}
          description={bottomCtaData.description}
          ctaText={bottomCtaData.ctaText}
          ctaLink={bottomCtaData.ctaLink}
          image={bottomCtaData.image}
        />
      </div>
    </>
  );
}
