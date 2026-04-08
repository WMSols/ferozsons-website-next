"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StatementSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const segments = [
    { text: "Our legacy is grounded in ", accent: false },
    { text: "integrity", accent: true },
    {
      text: " and reflected in the high standards we uphold across our work. We deliver ",
      accent: false,
    },
    { text: "quality", accent: true },
    {
      text: " healthcare solutions that improve lives, guided by a ",
      accent: false,
    },
    { text: "patient-first", accent: true },
    {
      text: " approach and a strong sense of responsibility to the communities we serve.",
      accent: false,
    },
  ];

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `radial-gradient(circle, #1a56db 1.5px, transparent 1.5px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <motion.div
        style={{ y }}
        className="max-w-4xl mx-auto px-8 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-[#1a56db]/30" />
          <span className="text-[#1a56db] text-xs tracking-[0.4em] uppercase font-semibold">
            Our Mission
          </span>
          <div className="h-px w-12 bg-[#1a56db]/30" />
        </div>

        <p
          className="text-center leading-relaxed text-gray-800"
          style={{
            fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)",
            fontFamily: "'Georgia', serif",
            lineHeight: 1.7,
          }}
        >
          {segments.map((seg, i) =>
            seg.accent ? (
              <motion.span
                key={i}
                className="relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="relative z-10 text-[#1a56db] font-bold">
                  {seg.text}
                </span>
                <motion.span
                  className="absolute inset-x-0 bottom-0 h-[6px] bg-blue-100 rounded-sm -z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                  style={{ originX: 0 }}
                />
              </motion.span>
            ) : (
              <span key={i} className="text-gray-700">
                {seg.text}
              </span>
            ),
          )}
        </p>
      </motion.div>
    </section>
  );
};

export default StatementSection;
