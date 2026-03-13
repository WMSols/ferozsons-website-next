import { User } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import { boardMembers } from "@/data/partnerships";

export const metadata = {
  title: "Board of Directors",
  description: "Meet the leadership guiding Ferozsons Laboratories.",
};

export default function BoardOfDirectorsPage() {
  return (
    <>
      <PageHero title="Board of Directors" subtitle="Meet the leadership guiding Ferozsons Laboratories." breadcrumbs={[{ label: "Board of Directors" }]} />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-secondary rounded-lg p-6 text-center">
                <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-12 w-12 text-primary/40" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
