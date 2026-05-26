"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getIcon } from "@/lib/icons";
import {
  COURSE_GRADIENTS,
  COURSE_ACCENT_COLORS,
  COURSE_BORDER_GLOWS,
} from "@/lib/utils";
import type { Course } from "@/types";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const Icon = getIcon(course.icon_name);
  const gradientClass = COURSE_GRADIENTS[index % 4];
  const accentColor = COURSE_ACCENT_COLORS[index % 4];
  const glowClass = COURSE_BORDER_GLOWS[index % 4];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2 + index * 0.08,
      }}
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-5 shadow-card transition-[border-color,box-shadow] duration-300 ${glowClass}`}
    >
      {/* Gradient background */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradientClass}`} />

      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-30" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              backgroundColor: `${accentColor}18`,
              border: `1px solid ${accentColor}30`,
            }}
          >
            <Icon size={18} style={{ color: accentColor }} />
          </div>
          <span
            className="rounded-md px-2 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: `${accentColor}18`,
              color: accentColor,
            }}
          >
            {course.progress}%
          </span>
        </div>

        <h3 className="mt-3.5 text-sm font-semibold leading-tight text-white">
          {course.title}
        </h3>

        <p className="mt-1 text-xs text-zinc-500">
          {course.progress < 30
            ? "Just started"
            : course.progress < 70
            ? "In progress"
            : "Almost there"}
        </p>

        <div className="mt-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-zinc-600">
            <span>Progress</span>
            <span style={{ color: accentColor }}>{course.progress}%</span>
          </div>
          <ProgressBar value={course.progress} color={accentColor} />
        </div>
      </div>
    </motion.article>
  );
}
