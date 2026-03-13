import PageHero from "@/components/layout/PageHero";
import { csrInitiatives } from "@/data/partnerships";

export const metadata = {
  title: "Corporate Social Responsibility",
  description: "Making a positive impact on communities across Pakistan.",
};

export default function CSRPage() {
  return (
    <>
      <PageHero title="Corporate Social Responsibility" subtitle="Making a positive impact on communities across Pakistan." breadcrumbs={[{ label: "CSR" }]} />

      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-12">
            At Ferozsons Laboratories, we believe in giving back to the communities that have supported us for nearly seven decades. Our CSR initiatives focus on education, healthcare access, and community development, reflecting our commitment to building a healthier, more equitable society.
          </p>

          <div className="grid gap-8">
            {csrInitiatives.map((initiative) => (
              <div key={initiative.title} className="bg-secondary rounded-lg p-8">
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
