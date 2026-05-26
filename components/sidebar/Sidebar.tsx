"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  BellRing,
  ChevronRight,
  GraduationCap,
  LogOut,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  Icon: React.ElementType;
  badge?: number;
}

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { id: "courses", label: "My Courses", Icon: BookOpen, badge: 4 },
  { id: "analytics", label: "Analytics", Icon: BarChart2 },
  { id: "notifications", label: "Notifications", Icon: BellRing, badge: 3 },
  { id: "settings", label: "Settings", Icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeId, setActiveId] = useState("dashboard");

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative flex h-screen flex-col border-r border-bg-border bg-bg-surface"
      style={{ flexShrink: 0 }}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 overflow-hidden border-b border-bg-border px-4">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent-blue/20 text-accent-blue">
          <GraduationCap size={16} />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap font-semibold tracking-tight text-white"
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1 overflow-hidden p-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className="group relative flex h-10 w-full items-center gap-3 overflow-hidden rounded-lg px-2.5 text-left transition-colors"
          >
            {/* Active background */}
            {activeId === item.id && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-lg bg-accent-blue/10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <item.Icon
              size={18}
              className={`relative z-10 flex-shrink-0 transition-colors ${
                activeId === item.id
                  ? "text-accent-blue"
                  : "text-zinc-500 group-hover:text-zinc-300"
              }`}
            />

            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.15 }}
                  className={`relative z-10 flex flex-1 items-center justify-between whitespace-nowrap text-sm font-medium ${
                    activeId === item.id ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-md bg-accent-blue/20 px-1.5 py-0.5 text-xs text-accent-blue">
                      {item.badge}
                    </span>
                  )}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-bg-border p-3">
        <div className="flex items-center gap-3 overflow-hidden rounded-lg p-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-blue text-xs font-bold text-white">
            S
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="min-w-0 flex-1"
              >
                <p className="truncate text-sm font-medium text-white">Sphinx</p>
                <p className="truncate text-xs text-zinc-500">BTech AIML '27</p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!collapsed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-shrink-0 text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                <LogOut size={14} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-[72px] z-10 flex h-6 w-6 items-center justify-center rounded-full border border-bg-border bg-bg-elevated text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <motion.div animate={{ rotate: collapsed ? 0 : 180 }} transition={{ duration: 0.2 }}>
          <ChevronRight size={12} />
        </motion.div>
      </button>
    </motion.aside>
  );
}
