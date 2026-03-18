import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function DecorativeGrid() {
  const tiles = [
    "bg-[#B23A9A]",
    "bg-[#E9E9EE]",
    "bg-[#2E6FB0]",
    "bg-[#E9E9EE]",
    "bg-[#E9E9EE]",
    "bg-[#B23A9A]",
    "bg-[#E9E9EE]",
    "bg-[#2E6FB0]",
  ];

  return (
    <div className="relative">
      {/* Inject custom animation styles */}
      <style>{`
        @keyframes floatDown {
          0% { transform: translateY(-15px); }
          100% { transform: translateY(15px); }
        }
        @keyframes floatUp {
          0% { transform: translateY(15px); }
          100% { transform: translateY(-15px); }
        }
        .animate-float-down {
          animation: floatDown 4s ease-in-out infinite alternate;
        }
        .animate-float-up {
          animation: floatUp 4s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {tiles.map((c, i) => {
          // In a 2-column grid, even indices are col 1, odd indices are col 2
          const isFirstColumn = i % 2 === 0; 
          
          return (
            <div
              key={i}
              className={`h-[78px] w-[78px] rounded-2xl ${c} sm:h-[92px] sm:w-[92px] lg:h-[100px] lg:w-[100px] ${
                isFirstColumn ? "animate-float-down" : "animate-float-up"
              }`}
              aria-hidden
            />
          );
        })}
      </div>
    </div>
  );
}

export default function TreatmentOptions() {
  return (
    <section className="relative bg-white">
      {/* Wave divider */}
      <div className="absolute left-0 top-0 w-full -translate-y-full overflow-hidden" aria-hidden>
        <svg
          className="block h-10 w-full text-white md:h-14"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C240,72 480,72 720,32 C960,-8 1200,-8 1440,32 L1440,80 L0,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container pb-16 pt-14 md:pb-20 md:pt-16">
        <h2 className="max-w-3xl text-[28px] leading-tight text-blue-950 sm:text-[34px]">
          Explore our available weight-management{" "}
          <span className="font-serif bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            treatment options
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    
    {/* Card 1 */}
    {/* 1. Added flex, flex-col, and h-full here */}
    <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-gradient-to-b from-[#2C6CB0] via-[#6A57B6] to-[#B23A9A] p-7 text-white shadow-sm">
      <div className="relative z-10">
        <h3 className="text-[16px] font-semibold">Sematide (GLP-1)</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-white/80">
          A modern weight management option with clinically supported dosing and
          patient-focused care.
        </p>
      </div>

      {/* 2. Changed mt-6 to mt-auto here */}
      <div className="relative mt-auto aspect-[4/3] w-full pt-6">
        <Image
          src="/weight-management/sematide.png"
          alt="Sematide"
          fill
          className="object-contain"
        />
      </div>

      <div className="mt-6">
        <Link
          href="/products"
          className="inline-flex h-10 w-full items-center justify-center rounded-full bg-white/20 px-5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/25"
        >
          View Full Range
        </Link>
      </div>
    </article>

    {/* Card 2 */}
    {/* 1. Added flex, flex-col, and h-full here */}
    <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-[#F2E9F2] p-7 text-blue-950 shadow-sm">
      <div className="relative z-10">
        <h3 className="text-[16px] font-semibold">Zeptide (GLP-1 + GIP)</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-blue-950/70">
          Dual-pathway support designed to align with evolving weight management
          approaches.
        </p>
      </div>

      {/* 2. Changed mt-6 to mt-auto here */}
      <div className="relative mt-auto aspect-[4/3] w-full pt-6">
        <Image
          src="/weight-management/zeptide.png"
          alt="Zeptide"
          fill
          className="object-contain"
        />
      </div>

      <div className="mt-6">
        <Link
          href="/products"
          className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#7B3FB0] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#6A37A0]"
        >
          View Full Range
        </Link>
      </div>
    </article>
    
  </div>

  <div className="flex justify-center lg:justify-end">
    <DecorativeGrid />
  </div>
</div>
        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-blue-950/20 bg-white px-5 py-2.5 text-sm font-semibold text-blue-950 shadow-sm transition-colors hover:bg-blue-950/[0.03]"
          >
            <ArrowLeft className="h-4 w-4" />
            Return To Product List
          </Link>
        </div>
      </div>
    </section>
  );
}
