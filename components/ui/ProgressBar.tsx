"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  color?: string;
  className?: string;
}

export function ProgressBar({ value, color = "#3B82F6", className = "" }: ProgressBarProps) {
  return (
    <div className={`relative h-1.5 w-full overflow-hidden rounded-full bg-white/5 ${className}`}>
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: "0%" }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
      />
      {/* shimmer on the bar */}
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
          width: `${value}%`,
        }}
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}
