import { MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import { openPositions } from "@/data/partnerships";

export const metadata = {
  title: "Careers",
  description: "Join our team and help shape the future of healthcare in Pakistan.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" subtitle="Join our team and help shape the future of healthcare in Pakistan." breadcrumbs={[{ label: "Careers" }]} />

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Impact", desc: "Your work directly improves the health and lives of millions of Pakistanis." },
                { title: "Growth", desc: "We invest in our people with continuous learning and development opportunities." },
                { title: "Culture", desc: "A collaborative, inclusive environment where innovation is encouraged." },
              ].map((v) => (
                <div key={v.title} className="bg-secondary rounded-lg p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((pos) => (
              <div key={pos.title} className="bg-secondary rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">{pos.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {pos.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {pos.location}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pos.type}</span>
                  </div>
                </div>
                <Button className="rounded-full shrink-0">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
