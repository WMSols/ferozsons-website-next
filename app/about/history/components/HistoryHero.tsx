import HeroFullScreen from "@/components/sections/HeroFullScreen";

const HERO_BG = "/images/about-history/history-hero-bg.png";

export default function HistoryHero() {
  return (
    <HeroFullScreen
      backgroundImage={HERO_BG}
      overlayClassName="bg-black/40"
      className="flex items-center"
    >
      <div className="container px-6 md:px-8">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.1] font-bold text-white max-w-5xl">
          Generations of Care, <br className="hidden md:block" />
          Built on Trust
        </h1>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 z-10 flex flex-col items-end font-sans font-black text-white text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.85] tracking-tight">
        <span>People</span>
        <span>Trust</span>
        <span>Us</span>
      </div>
    </HeroFullScreen>
  );
}
