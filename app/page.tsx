import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import CTABanner from "@/components/layout/CTABanner";
import { articles } from "@/data/articles";
import { timelineEvents } from "@/data/partnerships";
import { HeroImageZoom } from "@/components/animations/HeroImageZoom";
import { StaggerFadeUp } from "@/components/animations/StaggerFadeUp";
import { ButtonMotion } from "@/components/animations/ButtonMotion";
import { StaggerGrid } from "@/components/animations/StaggerGrid";
import { TimelineItemSlide } from "@/components/animations/TimelineItemSlide";
import { QuoteReveal } from "@/components/animations/QuoteReveal";
import { StaggerFadeUpInView } from "@/components/animations/StaggerFadeUpInView";

export const metadata = {
  title: "Feroz Sons",
  description:
    "Pakistan's leading pharmaceutical company, committed to quality healthcare since 1956.",
};

export default function HomePage() {
  const latestArticles = articles.filter((a) => a.type === "news").slice(0, 3);

  return (
    <>
      {/* Hero Banner - rounded card with border and shadow */}
      <section className="mx-4 mt-4 lg:mx-6 lg:mt-6 border border-hero-border rounded-t-lg rounded-b-[2rem] overflow-hidden shadow-sm bg-background">
        <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="absolute inset-0">
            <HeroImageZoom>
              <img
                src="/hero.jpg"
                alt="Ferozsons Laboratories"
                className="w-full h-full object-cover object-center"
              />
            </HeroImageZoom>
            <div
              className="absolute inset-0 bg-gradient-to-b from-hero-overlay/80 via-hero-overlay/60 to-hero-overlay/40"
              aria-hidden
            />
          </div>
          <StaggerFadeUp className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="font-serif text-4xl font-bold leading-tight text-hero-heading sm:text-5xl md:text-6xl lg:text-[3.5rem] max-w-4xl">
              Putting Patients First
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-normal leading-relaxed text-hero-body md:text-2xl">
              A patient-centric pharmaceutical company committed to advancing
              care by addressing critical unmet medical needs in Pakistan and
              internationally.
            </p>
            <ButtonMotion>
              <Button
                asChild
                size="lg"
                className="mt-10 rounded-full bg-hero-cta px-8 py-3 text-base font-semibold text-hero-cta-foreground hover:opacity-90"
              >
                <Link href="/about">Learn more</Link>
              </Button>
            </ButtonMotion>
            <p className="mt-20 max-w-2xl text-lg font-normal text-hero-heading md:text-xl">
              Reach New Peaks With{" "}
              <span className="font-semibold text-[#89bdf2]">Ferozsons</span>
            </p>
          </StaggerFadeUp>
        </div>
      </section>

      {/* Mission section */}
      <section className="mx-4 mt-8 lg:mx-6 lg:mt-12 border border-border rounded-[2rem] overflow-hidden shadow-sm bg-background">
        {/* The relative wrapper that acts as the boundary for the absolute background */}
        <div className="relative flex flex-col items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-32">
          {/* 1. BACKGROUND LAYER (Absolute) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* The blue cellular pattern. 
              Note: Update the url('/your-image.png') to match whatever you named the exported Figma background asset.
            */}
            <div
              className="absolute inset-0 bg-no-repeat bg-right bg-cover md:bg-contain opacity-40 md:opacity-100"
              style={{ backgroundImage: "url('/mission-bg.png')" }}
              aria-hidden
            />
            {/* A gradient mask. This ensures the left side of the card stays solid 
              so the text remains perfectly readable, while the right side fades to show the image. 
            */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"
              aria-hidden
            />
          </div>

          {/* 2. CONTENT LAYER (Relative z-10) */}
          <StaggerFadeUpInView className="container relative z-10 flex flex-col items-center text-center">
            {/* Section Header */}
            <h2 className="mb-6 md:mb-8 text-sm md:text-base font-semibold text-foreground tracking-wide">
              Our Mission
            </h2>

            {/* Main Headline - Max-width widened significantly, font size increased, font weight bolded */}
            <h3 className="mb-8 md:mb-10 max-w-[1000px] text-2xl font-bold leading-relaxed text-foreground sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-snug">
              We are a leading healthcare company driven by a commitment to
              patients, quality, and progress. Through innovation, global
              collaborations, and responsible growth, we strive to improve
              health outcomes, address unmet medical needs, and strengthen
              healthcare systems in the markets we serve.
            </h3>

            {/* Sub-paragraph */}
            <p className="mb-10 md:mb-12 max-w-4xl text-base font-normal leading-relaxed text-muted-foreground md:text-lg">
              Our Medical Technologies division operates through alliances with
              five globally renowned partners, delivering advanced medical
              devices across key specialties.
            </p>

            {/* Primary Button */}
            <ButtonMotion>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-mission-cta px-8 py-6 text-base font-semibold text-mission-cta-foreground hover:opacity-90 transition-opacity"
              >
                <Link href="/about">Missions, Strategy & Values</Link>
              </Button>
            </ButtonMotion>

            {/* Text Link */}
            <Link
              href="/investors"
              className="mt-6 md:mt-8 text-sm md:text-base font-bold text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Why invest in Ferozsons?
            </Link>
          </StaggerFadeUpInView>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <ButtonMotion>
              <Button variant="outline" asChild className="rounded-full">
                <Link href="/newsroom">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ButtonMotion>
          </div>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Card
                key={article.id}
                className="flex h-full flex-col overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 shrink-0 bg-muted" />
                <CardContent className="flex flex-1 flex-col pt-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {article.category}
                  </p>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href="/newsroom"
                    className="mt-auto inline-flex items-center text-sm text-primary font-medium pt-4 hover:underline"
                  >
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Products section */}
      <section className="w-full py-16 md:py-24 bg-product-bg">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-start text-left">
          <h2 className="text-sm font-bold font-sans text-foreground mb-4 md:mb-6">
            Products
          </h2>
          <h3 className="font-serif text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-foreground max-w-[800px]">
            Across a portfolio of over 140 products, every medicine reflects our
            commitment to quality and patient care, supported by over 1,000
            professionals.
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12 w-full max-w-4xl">
            <div className="flex items-center gap-2 flex-1 w-full md:w-auto border-b border-foreground/30 min-w-0">
              <input
                type="search"
                placeholder="Searching for a product?"
                className="flex-1 min-w-0 py-2 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Search for a product"
              />
              <button
                type="button"
                className="shrink-0 w-10 h-10 rounded-full border border-foreground/50 flex items-center justify-center text-foreground hover:bg-foreground/5 transition-colors"
                aria-label="Search"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <ButtonMotion>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-2 border-foreground/40 bg-transparent text-primary hover:bg-foreground/5 shrink-0"
              >
                <Link href="/products">Explore Our Complete Portfolio</Link>
              </Button>
            </ButtonMotion>
          </div>
        </div>
      </section>

      {/* Partnerships Timeline */}
      <section className="bg-secondary py-20">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our Journey
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />
            {timelineEvents.map((event, i) => (
              <TimelineItemSlide
                key={event.year}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                fromLeft={i % 2 === 0}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-bold text-primary">
                    {event.year}
                  </span>
                  <h3 className="font-bold text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </TimelineItemSlide>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy & Social Responsibility - full-width, same layering as Hero */}
      <section className="w-full">
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="absolute inset-0">
            <img
              src="/legacy-bg.png"
              alt=""
              className="w-full h-full object-cover object-center"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"
              aria-hidden
            />
          </div>
          <div className="container relative z-10 flex flex-col items-start text-left mx-auto">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white font-serif text-xl italic text-white">
                f
              </div>
              <div className="flex flex-col font-sans text-[10px] font-bold uppercase leading-tight tracking-wider text-white">
                <span>People</span>
                <span>Trust</span>
                <span>Us</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-4xl">
              Our legacy is built on{" "}
              <span className="text-hero-accent">integrity,</span>{" "}
              <span className="text-hero-accent">quality,</span> and{" "}
              <span className="text-hero-accent">patient-first</span> care.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg font-normal leading-relaxed text-white">
              Ferozsons Laboratories Limited invests in medical and public
              education to advance disease awareness, prevention, and equitable
              access to healthcare for underserved communities.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-10 h-auto w-full min-w-0 sm:w-auto rounded-full bg-primary px-6 py-4 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary-foreground hover:opacity-90"
            >
              <Link
                href="/about"
                className="flex flex-col items-center justify-center gap-y-2 min-w-0 sm:flex-row sm:gap-x-2 sm:justify-start"
              >
                <span className="whitespace-normal text-center sm:text-left">
                  View Our Social Responsibility Initiatives
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-20">
        <div className="container text-center max-w-3xl mx-auto">
          <QuoteReveal className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
            &quot;Our commitment to patients goes beyond medicine — it&apos;s a
            promise to contribute to a healthier, more empowered Pakistan.&quot;
          </QuoteReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
