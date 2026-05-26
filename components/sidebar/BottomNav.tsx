"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart2, BellRing, Settings } from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Home", Icon: LayoutDashboard },
  { id: "courses", label: "Courses", Icon: BookOpen },
  { id: "analytics", label: "Stats", Icon: BarChart2 },
  { id: "notifications", label: "Alerts", Icon: BellRing },
  { id: "settings", label: "Settings", Icon: Settings },
];

export function BottomNav() {
  const [activeId, setActiveId] = useState("dashboard");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-bg-border bg-bg-surface/95 backdrop-blur-xl md:hidden">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className="relative flex flex-col items-center gap-1"
        >
          {activeId === item.id && (
            <motion.div
              layoutId="bottom-nav-active"
              className="absolute -top-px left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent-blue"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <item.Icon
            size={20}
            className={activeId === item.id ? "text-accent-blue" : "text-zinc-500"}
          />
          <span className={`text-[10px] ${activeId === item.id ? "text-accent-blue" : "text-zinc-600"}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
