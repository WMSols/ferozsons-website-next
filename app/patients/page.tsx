import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/layout/CTABanner";

export const metadata = {
  title: "Patient Information",
  description: "Understanding your condition and treatment options.",
};

const conditions = [
  {
    name: "Hepatitis C",
    description: "Hepatitis C is a liver disease caused by the hepatitis C virus (HCV). It can range from a mild illness lasting a few weeks to a serious, lifelong condition. Modern direct-acting antiviral treatments can cure more than 95% of persons with hepatitis C infection.",
    treatments: ["Sovaldi® (sofosbuvir)", "Harvoni® (ledipasvir/sofosbuvir)", "Epclusa® (sofosbuvir/velpatasvir)"],
  },
  {
    name: "Hepatitis B",
    description: "Hepatitis B is a potentially life-threatening liver infection caused by the hepatitis B virus (HBV). It is a major global health problem and can cause chronic infection, putting people at high risk of death from cirrhosis and liver cancer.",
    treatments: ["Entavir® (entecavir)"],
  },
  {
    name: "Cardiovascular Disease",
    description: "Cardiovascular diseases are a group of disorders of the heart and blood vessels. They are the leading cause of death globally. Risk factor management through medication and lifestyle changes can significantly reduce the burden of cardiovascular disease.",
    treatments: ["Lipitor® (atorvastatin)", "Norvasc® (amlodipine)"],
  },
];

export default function PatientsPage() {
  return (
    <>
      <PageHero title="Patient Information" subtitle="Understanding your condition and treatment options." breadcrumbs={[{ label: "Patients" }]} />

      <section className="py-16">
        <div className="container max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-12">
            This section provides general information about conditions treated by Ferozsons products. Always consult your healthcare provider for medical advice specific to your situation.
          </p>

          <div className="space-y-10">
            {conditions.map((cond) => (
              <div key={cond.name} className="bg-secondary rounded-lg p-8">
                <h2 className="text-xl font-bold mb-3">{cond.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{cond.description}</p>
                <p className="text-sm font-semibold mb-2">Available Treatments:</p>
                <ul className="space-y-1">
                  {cond.treatments.map((t) => (
                    <li key={t} className="text-sm text-primary">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="rounded-full px-10">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
