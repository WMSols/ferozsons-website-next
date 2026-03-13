"use client";

import { Children, isValidElement } from "react";
import { motion } from "framer-motion";

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function HeroImageZoom({ children }: { children: React.ReactNode }) {
  const child = Children.only(children);
  if (!isValidElement<ImgProps>(child) || child.type !== "img") {
    return <>{children}</>;
  }
  const props = child.props as ImgProps;
  return (
    <motion.img
      {...props}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
