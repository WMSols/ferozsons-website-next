import Image from "next/image";

const partners = [
  {
    name: "Boston Scientific",
    logo: "/medical-technologies/boston-scientific.png",
  },
  { name: "NIHON KOHDEN", logo: "/medical-technologies/nihon-kohden.png" },
  { name: "Butterfly", logo: "/medical-technologies/butterfly.png" },
];

export function TrustedPartners() {
  return (
    <section className="bg-[#2a2a2a] px-6 pb-16 pt-6 sm:pb-20 md:pb-24">
      <div className="mx-auto max-w-[1100px]">
        <h2
          className="text-center font-kaisei font-bold tracking-normal text-white
          text-[32px] leading-[36px]
          sm:text-[42px] sm:leading-[46px]
          md:text-[52px] md:leading-[56px]
          lg:text-[64px] lg:leading-[68px]"
        >
          Our Trusted Partners
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-shrink-0 items-center justify-center bg-white shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                w-[200px] h-[200px] rounded-[20px] p-6
                sm:w-[260px] sm:h-[260px] sm:rounded-[26px] sm:p-8
                md:w-[300px] md:h-[300px] md:rounded-[30px] md:p-10
                lg:w-[320px] lg:h-[320px] lg:rounded-[32px] lg:p-10"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
