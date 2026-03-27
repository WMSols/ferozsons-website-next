import SectionWrapper from "@/components/shared/SectionWrapper";

export default function IntroSection() {
  return (
    <SectionWrapper className="py-16 md:py-24">
      <div className="flex flex-col gap-8 md:gap-12 items-start">
        <div className="w-full lg:max-w-[calc((100%-72rem)/2)]">
          <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Partnerships
          </p>
        </div>

        <div className="w-full lg:pl-[max(0px,calc((100%-72rem)/2))]">
          <p className="max-w-6xl font-kaisei text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] leading-snug text-foreground">
            We believe meaningful healthcare progress is achieved through
            trusted partnerships and a shared commitment to patient care.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
