"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function BentoTile({ children, className = "", index = 0 }: BentoTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.07,
      }}
      whileHover={{ scale: 1.015 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
