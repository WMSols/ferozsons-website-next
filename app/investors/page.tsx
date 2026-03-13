import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import { pressReleases } from "@/data/articles";

export const metadata = {
  title: "Investors",
  description: "Financial information and governance for shareholders and the investment community.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero title="Investors" subtitle="Financial information and governance for shareholders and the investment community." breadcrumbs={[{ label: "Investors" }]} />

      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Financial Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Revenue", value: "PKR 12.3B" },
              { label: "Net Profit", value: "PKR 1.8B" },
              { label: "EPS", value: "PKR 23.45" },
              { label: "Market Cap", value: "PKR 18.5B" },
            ].map((stat) => (
              <div key={stat.label} className="bg-secondary rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Reports & Filings</h2>
          <div className="space-y-4 mb-16">
            {pressReleases.map((report) => (
              <div key={report.title} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div>
                  <h3 className="font-medium">{report.title}</h3>
                  <p className="text-xs text-muted-foreground">{new Date(report.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full shrink-0">
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Corporate Governance</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ferozsons Laboratories is committed to the highest standards of corporate governance. Our Board of Directors provides strategic oversight and ensures accountability to shareholders and stakeholders. For more details, visit our <Link href="/board-of-directors" className="text-primary hover:underline">Board of Directors</Link> page.
          </p>
        </div>
      </section>
    </>
  );
}
