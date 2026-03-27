import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import TimelineSection from "@/components/sections/TimelineSection";
import { partnerships, timelineEvents } from "@/data/partnerships";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "Partnerships",
  description:
    "Collaborating with global leaders to bring world-class healthcare to Pakistan.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        title="Partnerships"
        subtitle="Collaborating with global leaders to bring world-class healthcare to Pakistan."
        breadcrumbs={[{ label: "Partnerships" }]}
      />

      <SectionWrapper>
        <SectionHeader
          title="Global Alliances"
          subtitle="Ferozsons Laboratories has established strategic partnerships with some of the world's leading pharmaceutical companies. These collaborations enable us to bring innovative, life-saving treatments to patients across Pakistan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnerships.map((p) => (
            <div key={p.name} className="bg-secondary rounded-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-primary">
                    {p.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    Partner since {p.since}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <TimelineSection
        title="Partnership Timeline"
        events={timelineEvents}
        className="bg-secondary py-20"
      />

      <CTABanner />
    </>
  );
}
