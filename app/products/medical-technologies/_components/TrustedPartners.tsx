"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Boston Scientific",
    logo: "/medical-technologies/boston-scientific.png",
    website: "https://www.bostonscientific.com/en-US/home.html",
  },
  {
    name: "NIHON KOHDEN",
    logo: "/medical-technologies/nihon-kohden.png",
    website: "https://www.nihonkohden.com/",
  },
  {
    name: "Butterfly",
    logo: "/medical-technologies/butterfly.png",
    website: "https://www.butterflynetwork.com/",
  },
];

export function TrustedPartners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="bg-[#2a2a2a] px-6 pb-16 pt-0 sm:pb-20 md:pb-24 relative">
      <div className="mx-auto max-w-[1100px]" ref={ref}>
        <motion.h2
          className="text-center font-kaisei font-bold tracking-normal text-white
            text-[32px] leading-[36px]
            sm:text-[42px] sm:leading-[46px]
            md:text-[52px] md:leading-[56px]
            lg:text-[64px] lg:leading-[68px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Our Trusted Partners
        </motion.h2>

        <div className="mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${partner.name} website`}
              className="group flex flex-shrink-0 items-center justify-center bg-white shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                w-[200px] h-[200px] rounded-[20px] p-6
                sm:w-[260px] sm:h-[260px] sm:rounded-[26px] sm:p-8
                md:w-[300px] md:h-[300px] md:rounded-[30px] md:p-10
                lg:w-[320px] lg:h-[320px] lg:rounded-[32px] lg:p-10
                transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a64c]"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              whileHover={{ y: -8, scale: 1.03, rotate: -0.6 }}
              whileTap={{ scale: 0.97, rotate: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.12,
              }}
            >
              <motion.div
                className="relative h-full w-full"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
