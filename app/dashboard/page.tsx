import { Suspense } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { HeroTile } from "@/components/dashboard/HeroTile";
import { CourseGrid } from "@/components/dashboard/CourseGrid";
import { ActivityTile } from "@/components/charts/ActivityTile";
import { BentoTile } from "@/components/ui/BentoTile";
import { CourseCardSkeleton } from "@/components/ui/Skeleton";
import { Bell, Search } from "lucide-react";

function CoursesLoading() {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </>
  );
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      {/* Top bar */}
      <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-bg-border bg-bg-base/80 px-6 backdrop-blur-md">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
            Dashboard
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-bg-border bg-bg-surface text-zinc-500 hover:text-zinc-300 transition-colors">
            <Search size={14} />
          </button>
          <button className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-bg-border bg-bg-surface text-zinc-500 hover:text-zinc-300 transition-colors">
            <Bell size={14} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent-blue" />
          </button>
        </div>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-20 md:pb-8">
        <div className="p-4 md:p-6">
          {/* Bento grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Hero — spans 2 cols on lg */}
            <HeroTile />

            {/* Course cards — each 1 col */}
            <Suspense fallback={<CoursesLoading />}>
              <CourseGrid />
            </Suspense>

            {/* Activity tile — spans 2 cols on lg */}
            <ActivityTile />

            {/* Quick stats tile */}
            <BentoTile index={6} className="col-span-full sm:col-span-1 lg:col-span-2">
              <section className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-6 shadow-card">
                <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent-violet/10 blur-3xl" />
                <div className="relative z-10">
                  <h2 className="mb-4 text-sm font-semibold text-white">This Week</h2>
                  <div className="space-y-3">
                    {[
                      { label: "React Patterns", val: 3, total: 5, color: "#3B82F6" },
                      { label: "TypeScript", val: 4, total: 8, color: "#8B5CF6" },
                      { label: "AI Systems", val: 2, total: 6, color: "#06B6D4" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-1.5 flex items-center justify-between text-xs">
                          <span className="text-zinc-400">{item.label}</span>
                          <span className="text-zinc-600">{item.val}/{item.total}h</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${(item.val / item.total) * 100}%`,
                              backgroundColor: item.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </BentoTile>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
