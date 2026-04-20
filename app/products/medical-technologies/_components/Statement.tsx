"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedText({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="font-bold text-white"
    >
      {children}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      className="relative rounded-t-[36px] bg-[#2a2a2a] px-6 pb-6 z-20
    pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] xl:pt-[140px]"
      style={{ marginTop: "-100vh" }} // pulls it up so it starts right at the bottom of the viewport
    >
      <div className="mx-auto text-center max-w-[560px] sm:max-w-[680px] md:max-w-[800px] lg:max-w-[960px]">
        <motion.p
          ref={ref}
          className="font-kaisei font-bold tracking-normal text-[#777777]
            text-[22px] leading-[34px]
            sm:text-[28px] sm:leading-[42px]
            md:text-[34px] md:leading-[50px]
            lg:text-[42px] lg:leading-[60px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          From <AnimatedText>global innovators</AnimatedText> to{" "}
          <AnimatedText>hospitals</AnimatedText> across Pakistan, we partner
          with leading <AnimatedText>medical technology</AnimatedText> companies
          to bring advanced solutions that help healthcare professionals deliver{" "}
          <AnimatedText>better care</AnimatedText>.
        </motion.p>

        <motion.div
          className="mx-auto mt-10 flex h-10 w-2 flex-col items-center justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="h-[5px] w-[5px] rounded-full bg-[#555555]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#555555]" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#555555]" />
        </motion.div>
      </div>
    </section>
  );
}
