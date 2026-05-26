import {
  Code2,
  Brain,
  Layers,
  Zap,
  BookOpen,
  Database,
  Globe,
  Terminal,
  Cpu,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Layers,
  Zap,
  BookOpen,
  Database,
  Globe,
  Terminal,
  Cpu,
  FlaskConical,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? BookOpen;
}
