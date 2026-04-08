"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import type { TherapeuticArea } from "./types";

const THERAPEUTIC_AREAS: TherapeuticArea[] = [
  {
    id: "oncology",
    title: "Oncology",
    desc: "Advanced cancer therapies delivering targeted, evidence-based treatment solutions.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <circle
          cx="40"
          cy="40"
          r="14"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="22"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="40"
          cy="58"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="22"
          cy="40"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="58"
          cy="40"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="27.5"
          cy="27.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="52.5"
          cy="52.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="52.5"
          cy="27.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="27.5"
          cy="52.5"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="40"
          y1="26"
          x2="40"
          y2="34"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="46"
          x2="40"
          y2="54"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="26"
          y1="40"
          x2="34"
          y2="40"
          stroke="white"
          strokeWidth="1.5"
        />
        <line
          x1="46"
          y1="40"
          x2="54"
          y2="40"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "antiviral",
    title: "Antiviral",
    desc: "Pioneering antiviral treatments, including breakthrough hepatitis C therapies.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <circle
          cx="40"
          cy="40"
          r="16"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="6"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="40"
          y1="20"
          x2="40"
          y2="28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="52"
          x2="40"
          y2="60"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="20"
          y1="40"
          x2="28"
          y2="40"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="52"
          y1="40"
          x2="60"
          y2="40"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="40"
          cy="18"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="40"
          cy="62"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="18"
          cy="40"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="62"
          cy="40"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="55"
          cy="55"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="55"
          cy="25"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="25"
          cy="55"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    desc: "Comprehensive digestive health solutions spanning prevention to advanced care.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M30 20 C20 20 18 30 22 36 C26 42 26 46 24 50 C22 54 24 60 30 62 C36 64 40 60 40 56"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M40 56 C40 52 44 50 46 46 C48 42 46 36 42 32 C38 28 38 22 44 20 C50 18 56 22 56 28 C56 36 50 38 48 44"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="30"
          cy="19"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="44"
          cy="19"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "hepatology",
    title: "Hepatology",
    desc: "Liver disease management with international-standard therapeutics and education.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M18 35 C18 25 26 18 36 18 C46 18 58 22 60 34 C62 44 56 56 46 58 C38 60 28 56 24 50 C20 44 18 42 18 35Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M36 18 C36 24 32 30 30 36"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M46 20 C44 26 46 32 44 38"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 38 C26 36 32 38 38 38 C44 38 50 36 58 38"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M22 46 C28 44 36 46 44 44 C50 42 54 46 58 48"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "cardiology",
    title: "Cardiology",
    desc: "Heart health solutions built on decades of trusted clinical excellence.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <path
          d="M40 62 C40 62 16 48 16 32 C16 24 22 18 30 18 C35 18 39 21 40 24 C41 21 45 18 50 18 C58 18 64 24 64 32 C64 48 40 62 40 62Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M24 38 L30 32 L36 42 L42 28 L48 38 L54 34"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "endocrinology",
    title: "Endocrinology & Diabetes",
    desc: "Expanding diabetes care and endocrine health programs across Pakistan.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <circle
          cx="40"
          cy="28"
          r="10"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M34 38 L28 58 L40 52 L52 58 L46 38"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M36 26 L38 28 L44 22"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle
          cx="28"
          cy="50"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="52"
          cy="50"
          r="3"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "mother-child",
    title: "Mother & Child Health",
    desc: "Dedicated care pathways for maternal wellness and pediatric development.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <circle
          cx="40"
          cy="20"
          r="8"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M26 38 C26 32 32 28 40 28 C48 28 54 32 54 38 L54 52 C54 56 50 60 46 60 L34 60 C30 60 26 56 26 52Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="33"
          cy="42"
          r="4"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M33 46 L33 58"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M29 50 L37 50"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "biopharma",
    title: "Biopharmaceuticals",
    desc: "Pakistan's first cGMP biotech manufacturing facility via BF Biosciences.",
    svg: (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16"
      >
        <rect
          x="28"
          y="16"
          width="10"
          height="20"
          rx="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="42"
          y="24"
          width="10"
          height="20"
          rx="5"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M33 36 C33 44 38 50 40 54 C42 50 47 44 47 44"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M28 54 C30 56 34 60 40 60 C46 60 50 56 52 54"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="33" cy="26" r="2" fill="white" opacity="0.6" />
        <circle cx="47" cy="34" r="2" fill="white" opacity="0.6" />
      </svg>
    ),
  },
];

const TherapeuticAreasSection: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#1a56db]/30" />
            <span className="text-[#1a56db] text-xs tracking-[0.45em] uppercase font-semibold">
              What We Treat
            </span>
            <div className="h-px w-12 bg-[#1a56db]/30" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0d2d6b] mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            A broad range of
            <br />
            <span className="text-[#1a56db]">pharmaceutical solutions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Through continuous development and strategic partnerships, we offer
            medicines across several therapeutic areas to support modern
            healthcare.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {THERAPEUTIC_AREAS.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(area.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: "linear-gradient(145deg, #1a4db8 0%, #0d2d6b 100%)",
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="p-7 relative z-10">
                <div
                  className="mb-5 flex items-center justify-center w-20 h-20 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  {area.svg}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                  {area.title}
                </h3>
                <AnimatePresence>
                  {hovered === area.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-blue-200/80 text-sm leading-relaxed"
                    >
                      {area.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-0.75 bg-blue-300 rounded-full"
                initial={{ width: "25%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35 }}
              />

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(96,165,250,0.15), transparent 65%)",
                }}
              />

              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity">
                <div className="w-5 h-5 border-t-2 border-r-2 border-blue-300 rounded-tr-md" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapeuticAreasSection;
