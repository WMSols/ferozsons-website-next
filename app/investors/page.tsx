import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { pressReleases } from "@/data/articles";
import { financialHighlights } from "@/data/investors";
import FinancialHighlight from "./components/FinancialHighlight";
import ReportItem from "./components/ReportItem";

export const metadata = {
  title: "Investors",
  description:
    "Financial information and governance for shareholders and the investment community.",
};

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title="Investors"
        subtitle="Financial information and governance for shareholders and the investment community."
        breadcrumbs={[{ label: "Investors" }]}
      />

      <SectionWrapper containerClassName="max-w-4xl">
        <h2 className="text-2xl font-bold mb-8">Financial Highlights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {financialHighlights.map((stat) => (
            <FinancialHighlight
              key={stat.label}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Reports & Filings</h2>
        <div className="space-y-4 mb-16">
          {pressReleases.map((report) => (
            <ReportItem
              key={report.title}
              title={report.title}
              date={report.date}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Corporate Governance</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ferozsons Laboratories is committed to the highest standards of
          corporate governance. Our Board of Directors provides strategic
          oversight and ensures accountability to shareholders and stakeholders.
          For more details, visit our{" "}
          <Link
            href="/board-of-directors"
            className="text-primary hover:underline"
          >
            Board of Directors
          </Link>{" "}
          page.
        </p>
      </SectionWrapper>
    </>
  );
}
