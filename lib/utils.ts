import type { ActivityDay } from "@/types";

export function generateActivityData(weeks: number = 15): ActivityDay[] {
  const days: ActivityDay[] = [];
  const today = new Date();

  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const rand = Math.random();
    let count = 0;
    let level: ActivityDay["level"] = 0;

    if (rand > 0.35) {
      count = Math.floor(Math.random() * 12) + 1;
      if (count <= 2) level = 1;
      else if (count <= 5) level = 2;
      else if (count <= 9) level = 3;
      else level = 4;
    }

    days.push({
      date: date.toISOString().split("T")[0],
      count,
      level,
    });
  }

  return days;
}

export const COURSE_GRADIENTS: Record<number, string> = {
  0: "from-blue-600/20 via-blue-500/10 to-transparent",
  1: "from-violet-600/20 via-violet-500/10 to-transparent",
  2: "from-cyan-600/20 via-cyan-500/10 to-transparent",
  3: "from-emerald-600/20 via-emerald-500/10 to-transparent",
};

export const COURSE_ACCENT_COLORS: Record<number, string> = {
  0: "#3B82F6",
  1: "#8B5CF6",
  2: "#06B6D4",
  3: "#10B981",
};

export const COURSE_BORDER_GLOWS: Record<number, string> = {
  0: "hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  1: "hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
  2: "hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
  3: "hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
};
