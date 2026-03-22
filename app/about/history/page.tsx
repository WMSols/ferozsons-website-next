import CTABanner from "@/components/layout/CTABanner";
import { timelineData, type TimelineItem } from "@/data/history";
import HistoryHero from "./components/HistoryHero";
import FounderIntro from "./components/FounderIntro";
import TimelineNav from "./components/TimelineNav";
import TimelineEntry from "./components/TimelineEntry";
import SpecialTimelineEntry from "./components/SpecialTimelineEntry";

export const metadata = {
  title: "Our History",
  description:
    "Generations of care, built on trust. Explore the story of Ferozsons Laboratories from 1954 to today.",
};

function isSpecialLayout(
  item: TimelineItem,
): item is TimelineItem & { isSpecialLayout: true } {
  return "isSpecialLayout" in item && item.isSpecialLayout === true;
}

export default function HistoryPage() {
  return (
    <>
      <div className="-mt-[6.6rem]">
        <HistoryHero />
        <FounderIntro />

        <TimelineNav years={timelineData.map((item) => item.year)} />

        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4 space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              if (isSpecialLayout(item)) {
                return (
                  <SpecialTimelineEntry
                    key={item.year}
                    year={item.year}
                    descriptionOne={item.descriptionOne}
                    imageSrcOne={item.imageSrcOne}
                    descriptionTwo={item.descriptionTwo}
                    imageSrcTwo={item.imageSrcTwo}
                  />
                );
              }
              return (
                <TimelineEntry
                  key={item.year}
                  year={item.year}
                  description={item.description}
                  imageSrc={item.imageSrc}
                  isEven={index % 2 === 0}
                />
              );
            })}
          </div>
        </section>

        <CTABanner />
      </div>
    </>
  );
}
