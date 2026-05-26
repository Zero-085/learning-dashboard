"use client";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-bg-elevated ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-5 shadow-card">
      <div className="flex items-start gap-4">
        <Skeleton className="h-10 w-10 flex-shrink-0 rounded-xl" />
        <div className="flex-1 space-y-2.5">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-8" />
        </div>
        <Skeleton className="h-1.5 w-full rounded-full" />
      </div>
    </article>
  );
}

export function HeroTileSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-8 shadow-card">
      <div className="space-y-4">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-5 w-48" />
        <div className="mt-6 flex gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-28 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ActivityTileSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-6 shadow-card">
      <Skeleton className="mb-4 h-5 w-32" />
      <Skeleton className="h-24 w-full rounded-xl" />
    </div>
  );
}
