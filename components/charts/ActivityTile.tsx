"use client";

import { motion } from "framer-motion";
import { BentoTile } from "@/components/ui/BentoTile";
import { Activity } from "lucide-react";

const LEVEL_COLORS: Record<number, string> = {
  0: "bg-white/[0.03] border-white/5",
  1: "bg-accent-blue/20 border-accent-blue/20",
  2: "bg-accent-blue/40 border-accent-blue/30",
  3: "bg-accent-blue/60 border-accent-blue/40",
  4: "bg-accent-blue border-accent-blue/60",
};

// Deterministic activity data to prevent hydration mismatch
const activityData = Array.from({ length: 112 }, (_, i) => {
  const count = (i * 17 + 23) % 100;

  let level = 0;

  if (count > 80) level = 4;
  else if (count > 60) level = 3;
  else if (count > 40) level = 2;
  else if (count > 20) level = 1;

  return {
    date: `Day-${i}`,
    count,
    level,
  };
});

export function ActivityTile() {
  const weeks: (typeof activityData)[] = [];

  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  const totalContributions = activityData.reduce((acc, d) => acc + d.count, 0);

  return (
    <BentoTile index={5} className="col-span-full lg:col-span-2">
      <section className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-6 shadow-card">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-blue/5 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                <Activity size={14} />
              </div>

              <h2 className="text-sm font-semibold text-white">
                Learning Activity
              </h2>
            </div>

            <span className="text-xs text-zinc-500">
              {totalContributions} sessions — last 16 weeks
            </span>
          </div>

          {/* Contribution Grid */}
          <div className="flex gap-1 overflow-x-auto">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((day, di) => (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: wi * 0.02 + di * 0.01,
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                    title={`${day.count} learning sessions`}
                    className={`h-2.5 w-2.5 cursor-pointer rounded-sm border transition-transform hover:scale-125 ${LEVEL_COLORS[day.level]}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-xs text-zinc-600">Less</span>

            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`h-2.5 w-2.5 rounded-sm border ${LEVEL_COLORS[level]}`}
              />
            ))}

            <span className="text-xs text-zinc-600">More</span>
          </div>
        </div>
      </section>
    </BentoTile>
  );
}
