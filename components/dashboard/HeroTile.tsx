import { Flame, Clock, Trophy, TrendingUp } from "lucide-react";
import { BentoTile } from "@/components/ui/BentoTile";

interface StatBadgeProps {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}

function StatBadge({ icon: Icon, label, value, color }: StatBadgeProps) {
  return (
    <div
      className="flex flex-col gap-1.5 rounded-xl border p-3"
      style={{
        borderColor: `${color}30`,
        backgroundColor: `${color}0A`,
      }}
    >
      <Icon size={14} style={{ color }} />
      <p className="text-lg font-bold leading-none text-white">{value}</p>
      <p className="text-xs text-zinc-500">{label}</p>
    </div>
  );
}

export function HeroTile() {
  const now = new Date();
  const hour = now.getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <BentoTile index={0} className="col-span-full lg:col-span-2">
      <article className="relative overflow-hidden rounded-2xl border border-bg-border bg-bg-surface p-6 shadow-card md:p-8">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 left-1/3 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl" />

        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">
          <div className="mb-1 flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent-emerald">
              <span className="flex h-1.5 w-1.5 animate-ping rounded-full bg-accent-emerald opacity-75" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              {greeting}
            </span>
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-cyan bg-clip-text text-transparent">
              Sphinx
            </span>
          </h1>

          <p className="mt-1.5 text-sm text-zinc-500">
            You&apos;re on a roll — keep building your expertise.
          </p>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatBadge
              icon={Flame}
              label="Day Streak"
              value="14"
              color="#F59E0B"
            />
            <StatBadge
              icon={Clock}
              label="Hours This Week"
              value="11.4"
              color="#3B82F6"
            />
            <StatBadge
              icon={Trophy}
              label="XP Earned"
              value="3,240"
              color="#8B5CF6"
            />
            <StatBadge
              icon={TrendingUp}
              label="Courses Active"
              value="4"
              color="#10B981"
            />
          </div>
        </div>
      </article>
    </BentoTile>
  );
}
