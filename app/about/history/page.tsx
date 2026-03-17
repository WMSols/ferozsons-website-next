import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { timelineData, type TimelineItem } from "@/data/history";

export const metadata = {
  title: "Our History",
  description:
    "Generations of care, built on trust. Explore the story of Ferozsons Laboratories from 1954 to today.",
};

const FOUNDER_IMAGE = "/images/about-history/maulana-feroz.png";
const HERO_BG = "/images/about-history/history-hero-bg.png";
const CTA_IMAGE = "/care-beyond.jpg";

function isSpecialLayout(
  item: TimelineItem,
): item is TimelineItem & { isSpecialLayout: true } {
  return "isSpecialLayout" in item && item.isSpecialLayout === true;
}

export default function HistoryPage() {
  return (
    <>
      <div className="-mt-[6.6rem]">
        {/* Hero */}
        <section className="relative w-full min-h-[100vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_BG}
              alt="Ferozsons Historical Background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Subtle dark overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />
          </div>

          {/* Main Headline */}
          <div className="container relative z-10 w-full px-6 md:px-8">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.1] font-bold text-white max-w-5xl">
              Generations of Care, <br className="hidden md:block" />
              Built on Trust
            </h1>
          </div>

          {/* Bottom Right Typographic Lockup */}
          <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 z-10 flex flex-col items-end font-sans font-black text-white text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.85] tracking-tight">
            <span>People</span>
            <span>Trust</span>
            <span>Us</span>
          </div>
        </section>
        {/* Founder intro */}
        <section className="bg-[#111] py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
            <div className="relative w-64 h-64 rounded-full overflow-hidden grayscale mb-8 shrink-0">
              <Image
                src={FOUNDER_IMAGE}
                alt="Maulvi Ferozuddin Khan"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="font-serif text-white text-lg md:text-xl leading-relaxed">
              Founded in 1894 by Maulvi Ferozuddin Khan, the Ferozsons business
              group began with the establishment of its publishing house, guided
              from the outset by a commitment to advancing education and
              healthcare for underserved communities across the subcontinent.
              Built on decades of responsible healthcare leadership,
              &ldquo;People Trust Us&rdquo; as we continue advancing patient
              care.
            </p>
          </div>
        </section>

        {/* Sticky timeline nav (below site header) */}
        <div className="sticky top-16 z-10 bg-gray-50/95 backdrop-blur-sm py-3">
          <div className="flex flex-wrap items-center justify-center gap-2 px-4 mx-auto max-w-4xl">
            <div className="bg-gray-100 rounded-full px-6 py-2 flex flex-wrap items-center justify-center gap-2">
              {timelineData.map((item, i) => (
                <span key={item.year} className="contents">
                  {i > 0 && (
                    <span
                      className="w-px h-4 bg-gray-400 shrink-0"
                      aria-hidden
                    />
                  )}
                  <span className="font-sans text-sm font-medium text-gray-700">
                    {item.year}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4 space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              if (isSpecialLayout(item)) {
                return (
                  <div
                    key={item.year}
                    className="bg-black text-white rounded-3xl mx-4 md:mx-auto max-w-6xl p-8 md:p-12 my-12"
                  >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-700 text-center mb-8">
                      {item.year}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="font-sans text-white/95 leading-relaxed mb-6">
                          {item.descriptionOne}
                        </p>
                        <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-800 shadow-lg">
                          <Image
                            src={item.imageSrcOne}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-sans text-white/95 leading-relaxed mb-6">
                          {item.descriptionTwo}
                        </p>
                        <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-800 shadow-lg">
                          <Image
                            src={item.imageSrcTwo}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
                >
                  <div className="flex-1 w-full">
                    <h2 className="font-serif text-5xl md:text-6xl font-bold text-blue-700 mb-4">
                      {item.year}
                    </h2>
                    <p className="font-sans text-gray-800 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full relative aspect-video md:aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden bg-gray-200 shadow-md shrink-0">
                    <Image
                      src={item.imageSrc}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA banner */}
        <section className="px-4 py-8">
          <div className="bg-blue-50 rounded-3xl mx-auto max-w-6xl p-8 md:p-12 mt-16 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                  Care That Goes Beyond Medicine.
                </h2>
                <p className="font-sans text-gray-800 leading-relaxed mb-6">
                  At Ferozsons, we believe healthcare is more than just
                  prescriptions. It&apos;s about compassion, innovation, and a
                  deep commitment to improving lives across Pakistan.
                </p>
                <Link
                  href="/about"
                  className="inline-block rounded-full px-6 py-2 bg-blue-600 text-white font-sans font-medium hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                  <Image
                    src={CTA_IMAGE}
                    alt="Care that goes beyond medicine"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
