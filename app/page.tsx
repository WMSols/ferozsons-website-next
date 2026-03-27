"use client";

import { articles } from "@/data/articles";
import { timelineEvents } from "@/data/partnerships";
import {
  heroSlides,
  missionData,
  productSearchData,
  legacyData,
  quoteText,
} from "@/data/homepage";
import CTABanner from "@/components/layout/CTABanner";
import HeroCarousel from "@/components/sections/HeroCarousel";
import MissionSection from "@/components/sections/MissionSection";
import ArticlesGrid from "@/components/sections/ArticlesGrid";
import ProductSearchSection from "@/components/sections/ProductSearchSection";
import TimelineSection from "@/components/sections/TimelineSection";
import LegacyBanner from "@/components/sections/LegacyBanner";
import QuoteSection from "@/components/sections/QuoteSection";
import TherapeuticsGrid from "../components/sections/TherapeuticsGrid";
import { therapeuticsData } from "@/data/company-overview";

export default function HomePage() {
  const latestArticles = articles.filter((a) => a.type === "news").slice(0, 3);

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <TherapeuticsGrid items={therapeuticsData} />
      <MissionSection {...missionData} />
      <ArticlesGrid
        articles={latestArticles}
        title="Latest Articles"
        viewAllLink="/newsroom"
        viewAllText="View All"
      />
      <ProductSearchSection {...productSearchData} />
      <TimelineSection
        title="Our Journey"
        events={timelineEvents}
        animated
        className="bg-secondary py-20"
      />
      <LegacyBanner {...legacyData} />
      <QuoteSection quote={quoteText} />
      <CTABanner />
    </>
  );
}
