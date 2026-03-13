import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import { partnerships, timelineEvents } from "@/data/partnerships";

export const metadata = {
  title: "Partnerships",
  description: "Collaborating with global leaders to bring world-class healthcare to Pakistan.",
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero title="Partnerships" subtitle="Collaborating with global leaders to bring world-class healthcare to Pakistan." breadcrumbs={[{ label: "Partnerships" }]} />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Global Alliances</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ferozsons Laboratories has established strategic partnerships with some of the world&apos;s leading pharmaceutical companies. These collaborations enable us to bring innovative, life-saving treatments to patients across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {partnerships.map((p) => (
              <div key={p.name} className="bg-secondary rounded-lg p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-primary">{p.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">Partner since {p.since}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-12">Partnership Timeline</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />
            {timelineEvents.map((event, i) => (
              <div key={event.year} className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-bold text-primary">{event.year}</span>
                  <h3 className="font-bold text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
