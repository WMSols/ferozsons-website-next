import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart,
  Brain,
  CircleDot,
  Wind,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Company Overview",
  description:
    "Advancing healthcare through science. Learn about Ferozsons Laboratories and our commitment to quality and patient-first care.",
};

const HERO_BG = "/legacy-bg.png";
const CTA_IMAGE = "/care-beyond.jpg";
const PLACEHOLDER_IMAGE = "/mission-bg.png";

const statsData = [
  { number: "1500+", label: "EMPLOYEES" },
  { number: "30+", label: "COUNTRIES WE EXPORT TO" },
  { number: "70", label: "YEARS OF TRUSTED SERVICE" },
];

const therapeuticsData = [
  { label: "Cardiology", image: "/images/company-overview/cardiology.png" },
  { label: "Oncology", image: "/images/company-overview/oncology.png" },
  { label: "Hepatology", image: "/images/company-overview/hepatology.png" },
  { label: "Pulmonology", image: "/images/company-overview/pulmonology.png" },
];

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center px-4 py-1 mx-2 border border-blue-200 rounded-full bg-white text-blue-500 shadow-sm align-middle font-kaisei text-2xl md:text-4xl">
    {children}
  </span>
);

export default function CompanyOverviewPage() {
  return (
    <>
      <div className="-mt-[6.6rem]">
        {/* 1. Hero */}
        <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_BG}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 z-[1]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full pt-16">
            {/* Center Logo Lockup */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-16 md:mb-24">
              {/* Circular 'f' Icon */}
              <div className="w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 md:border-[3px] border-white flex items-center justify-center shrink-0">
                <span className="text-white font-kaisei italic text-3xl md:text-6xl lg:text-7xl pt-1 pr-1">
                  f
                </span>
              </div>

              {/* Company Name Text */}
              <div className="flex flex-col text-left">
                <h1 className="text-white font-kaisei text-4xl md:text-6xl lg:text-[5.5rem] font-normal leading-none mb-1 md:mb-2 tracking-wide">
                  FEROZSONS
                </h1>
                <h2 className="text-white font-kaisei text-lg md:text-2xl lg:text-[2.1rem] font-light leading-none tracking-widest">
                  LABORATORIES LIMITED
                </h2>
              </div>
            </div>

            {/* Company Overview Subtitle */}
            <p className="font-kaisei text-[#5AB2F7] text-2xl md:text-4xl lg:text-5xl font-bold mb-16 md:mb-24">
              Company Overview
            </p>

            {/* Scroll Down Chevron */}
            <ChevronDown
              className="w-10 h-10 md:w-12 md:h-12 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-hidden
            />
          </div>
        </section>
        {/* 2. Stats */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-kaisei text-3xl md:text-4xl font-bold text-gray-900">
              Advancing Healthcare Through Science
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {statsData.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-4 ${i < 2 ? "md:border-r md:border-gray-200" : ""}`}
                >
                  <p className="font-kaisei text-6xl md:text-6xl font-bold text-blue-600">
                    {stat.number}
                  </p>
                  <p className="font-kaisei text-sm text-gray-500 uppercase mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Dark intro */}
        <section className="bg-black py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-kaisei text-white text-xl leading-relaxed font-bold">
              Established in 1954, Ferozsons Laboratories Limited is a public
              limited company that was listed on the Pakistan Stock Exchange
              (formerly the Karachi Stock Exchange) in 1960. Over the past 70
              years, the company has grown to become one of Pakistan’s
              fastest-growing pharmaceutical companies, building a strong
              reputation for delivering high-quality healthcare solutions and
              developing leadership brands across key therapeutic areas,
              including gastroenterology, hepatology, cardiology, and oncology.
              Ferozsons continues to expand its presence in endocrinology and in
              mother and child health, with a growing focus on diabetes care.
            </p>
          </div>
        </section>

        {/* 4. Core values (inline badges) */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="font-kaisei text-3xl md:text-5xl text-gray-900 leading-normal font-bold">
              Our legacy is grounded in <Badge>Integrity</Badge> and reflected
              in the high standards we uphold across our work. We deliver{" "}
              <Badge>Quality</Badge> healthcare solutions that improve lives,
              guided by a <Badge>Patient-First</Badge> approach and a strong
              sense of responsibility to the communities we serve.
            </p>
          </div>
        </section>

        {/* 5. Biotech blue block */}
        <section className="px-4 my-12">
          <div className="bg-blue-600 rounded-[2rem] max-w-6xl mx-auto p-10 md:p-16">
            <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-white mb-4">
              Pioneering Biotech Manufacturing and Expanding Pakistan&apos;s
              Pharmaceutical Capabilities
            </h2>
            <p className="font-kaisei text-white/95 text-sm md:text-base leading-relaxed max-w-3xl">
              Through strategic partnerships and sustained investment in
              research and manufacturing, we are expanding Pakistan&apos;s
              capacity to produce advanced biopharmaceuticals and deliver
              world-class treatments to patients at home and abroad.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 rounded-full border border-white text-white font-kaisei px-6 py-2 font-medium hover:bg-white/10 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </section>

        {/* 6. Hepatitis split (black) */}
        <section className="bg-black text-white py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1">
                <h2 className="font-kaisei text-2xl md:text-3xl font-bold mb-4">
                  A Breakthrough in Hepatitis Treatment Access
                </h2>
                <p className="font-kaisei text-white/90 text-sm leading-relaxed mb-6">
                  Our partnership with Gilead Sciences has enabled thousands of
                  patients to access breakthrough hepatitis C treatments, with
                  Pakistan among the first countries to implement the access
                  program.
                </p>
                <Link
                  href="/products"
                  className="inline-block rounded-full bg-blue-600 text-white font-kaisei px-6 py-2 font-medium hover:bg-blue-700 transition-colors"
                >
                  Explore products
                </Link>
              </div>
              <div className="flex-1 w-full relative aspect-[3/4] max-w-md rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src={"/images/company-overview/black-right.jpg"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="flex-1">
                <p className="font-kaisei text-white/90 text-sm leading-relaxed mb-6">
                  We continue to strengthen our portfolio and manufacturing
                  capabilities to meet evolving patient needs and support
                  healthcare systems with reliable, high-quality medicines.
                </p>
                <Link
                  href="/about"
                  className="inline-block rounded-full border border-blue-500 text-blue-500 font-kaisei px-6 py-2 font-medium hover:bg-blue-500/10 transition-colors"
                >
                  Our story
                </Link>
              </div>
              <div className="flex-1 w-full relative aspect-video max-w-md rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src={"/images/company-overview/black-left.png"}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Therapeutics cards */}
        <section className="bg-gradient-to-b from-white to-blue-50/30 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              A broad range of pharmaceutical solutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {therapeuticsData.map(({ label, image }) => (
                <div
                  key={label}
                  className="bg-[#3b6a9e] rounded-3xl aspect-square flex flex-col p-6 md:p-8"
                >
                  <h3 className="font-kaisei text-white text-2xl md:text-3xl font-bold text-left w-full">
                    {label}
                  </h3>

                  <div className="flex-1 w-full flex items-center justify-center mt-2">
                    <div className="relative w-[85%] h-[85%] md:w-[90%] md:h-[90%]">
                      <Image
                        src={image}
                        alt={`${label} illustration`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-md px-4 py-2">
                <button
                  type="button"
                  className="p-1 text-gray-600 hover:text-gray-900"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span
                  className="w-2 h-2 rounded-full bg-blue-600"
                  aria-hidden
                />
                <button
                  type="button"
                  className="p-1 text-gray-600 hover:text-gray-900"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white font-kaisei text-xl italic text-white">
                  f
                </div>
                <div className="flex flex-col font-kaisei text-[10px] font-bold uppercase leading-tight tracking-wider text-white">
                  <span>People</span>
                  <span>Trust</span>
                  <span>Us</span>
                </div>
              </div>
              <h2 className="font-kaisei text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-4xl">
                Our legacy is built on{" "}
                <span className="text-hero-accent">integrity,</span>{" "}
                <span className="text-hero-accent">quality,</span> and{" "}
                <span className="text-hero-accent">patient-first</span> care.
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg font-normal leading-relaxed text-white">
                Ferozsons Laboratories Limited invests in medical and public
                education to advance disease awareness, prevention, and
                equitable access to healthcare for underserved communities.
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

        {/* 9. Bottom CTA */}
        <section className="px-4 py-8">
          <div className="bg-blue-50 rounded-3xl max-w-6xl mx-auto p-8 md:p-12 mt-16 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="font-kaisei text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                  Care That Goes Beyond Medicine.
                </h2>
                <p className="font-kaisei text-gray-800 leading-relaxed mb-6">
                  At Ferozsons, we believe healthcare is more than just
                  prescriptions. It&apos;s about compassion, innovation, and a
                  deep commitment to improving lives across Pakistan.
                </p>
                <Link
                  href="/about"
                  className="inline-block rounded-full px-6 py-2 bg-blue-600 text-white font-kaisei font-medium hover:bg-blue-700 transition-colors"
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
