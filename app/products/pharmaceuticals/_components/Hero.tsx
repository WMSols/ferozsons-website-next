const topTiles = [
  "bg-pharma-accent-orange",
  "bg-pharma-light-blue",
  "bg-pharma-accent-orange",
  "bg-pharma-light-blue",
  "bg-pharma-accent-orange",
];

const bottomTiles = [
  "bg-pharma-light-lavender",
  "bg-pharma-accent-orange",
  "bg-pharma-light-lavender",
  "bg-pharma-accent-orange",
  "bg-pharma-light-lavender",
];

export default function Hero() {
  return (
    <section className="bg-pharma-page-bg">
      <style>{`
        @keyframes floatBack {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-10px); }
        }
        @keyframes floatForward {
          0% { transform: translateX(-10px); }
          100% { transform: translateX(0px); }
        }
        .animate-float-back {
          animation: floatBack 4s ease-in-out infinite alternate;
        }
        .animate-float-forward {
          animation: floatForward 4s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="container pb-12 pt-10 md:pb-16 md:pt-14 lg:pb-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-[38px] font-extrabold leading-[1.05] tracking-[-0.02em] text-pharma-text-primary md:text-[48px]">
            Pharmaceuticals
          </h1>
          <p className="mt-4 max-w-105 text-[16px] leading-relaxed text-pharma-text-secondary">
            Advancing healthcare through innovative medicines across multiple
            therapeutic areas.
          </p>
        </div>
        <div className="mt-10 space-y-1 md:mt-12 md:space-y-1.5">
          <div className="grid grid-cols-5 gap-1 md:gap-1.5 animate-float-back">
            {topTiles.map((tile, index) => (
              <div
                key={`top-${index}`}
                className={`aspect-[1.45/1] rounded-lg ${tile}`}
                aria-hidden
              />
            ))}
          </div>

          <div className="translate-x-3 md:translate-x-5">
            <div className="grid grid-cols-5 gap-1 md:gap-1.5 animate-float-forward">
              {bottomTiles.map((tile, index) => (
                <div
                  key={`bottom-${index}`}
                  className={`aspect-[1.45/1] rounded-lg ${tile}`}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
