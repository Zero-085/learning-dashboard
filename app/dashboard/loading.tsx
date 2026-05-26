import { HeroTileSkeleton, CourseCardSkeleton, ActivityTileSkeleton } from "@/components/ui/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex h-screen overflow-hidden bg-bg-base">
      {/* Sidebar skeleton */}
      <div className="hidden h-screen w-60 flex-shrink-0 border-r border-bg-border bg-bg-surface md:block" />

      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Header skeleton */}
        <div className="flex h-16 flex-shrink-0 items-center border-b border-bg-border bg-bg-base px-6">
          <div className="h-4 w-24 animate-pulse rounded bg-bg-elevated" />
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-full lg:col-span-2">
              <HeroTileSkeleton />
            </div>
            {[1, 2, 3, 4].map((i) => (
              <CourseCardSkeleton key={i} />
            ))}
            <div className="col-span-full lg:col-span-2">
              <ActivityTileSkeleton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
