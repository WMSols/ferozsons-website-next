import { csrCategories, type CSRCategory } from "@/data/csrData";
import { categoryAccent } from "./categoryAccent";

interface CSRPillarOverviewProps {
  activeCategory: CSRCategory | "all";
  onCategoryChange: (category: CSRCategory | "all") => void;
  countFor: (category: CSRCategory) => number;
}

export default function CSRPillarOverview({
  activeCategory,
  onCategoryChange,
  countFor,
}: CSRPillarOverviewProps) {
  return (
    <section className="pb-14">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {csrCategories.map(({ key, label }) => {
            const accent = categoryAccent[key];
            return (
              <button
                key={key}
                onClick={() =>
                  onCategoryChange(activeCategory === key ? "all" : key)
                }
                className={`rounded-2xl p-5 text-left border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeCategory === key
                    ? `${accent.bg} border-transparent ring-2 ring-offset-2 ring-current ${accent.text}`
                    : "bg-card border-border hover:border-foreground/20"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full mb-3 ${accent.dot}`}
                />
                <p className="font-semibold text-sm text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {countFor(key)} initiative{countFor(key) !== 1 ? "s" : ""}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
