"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { BottomNav } from "@/components/sidebar/BottomNav";
import type { ReactNode } from "react";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-base">
      {/* Sidebar — hidden on mobile */}
      <div className="hidden md:flex">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      </div>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {children}
      </main>

      {/* Bottom nav — mobile only */}
      <BottomNav />
    </div>
  );
}
