import { cn } from "@/lib/utils";
import type { Topic } from "@/lib/data";
import {
  BookOpen,
  TrendingUp,
  BarChart3,
  Calculator,
  LineChart,
  DollarSign,
  Scale,
  Users,
  Building2,
  Heart,
  ArrowUpDown,
  Percent,
  PieChart,
  Sigma,
  Binary,
  Activity,
  Timer,
  Compass,
  Target,
  GitBranch,
  Layers,
  BarChart2,
  Gauge,
  Ratio,
  ChartArea,
  ChartLine,
  ChartBar,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "explicit-implicit-costs": DollarSign,
  "economic-vs-accounting-profit": Calculator,
  "theories-of-profit": Layers,
  "agency-problem": Users,
  "shareholder-wealth": TrendingUp,
  "nfp-goals": Heart,
  "supply-demand": ArrowUpDown,
  "movement-vs-shift": GitBranch,
  "marginal-analysis": Target,
  "npv-concept": ChartArea,
  "risk-return": Activity,
  "market-equilibrium": Scale,
  "price-elasticity": Percent,
  "revenue-rule": BarChart3,
  "elasticity-factors": Compass,
  "income-elasticity": PieChart,
  "cross-price-elasticity": Ratio,
  "combined-elasticity": Sigma,
  "regression-basics": ChartLine,
  "p-values": Binary,
  "r-squared": Gauge,
  "dummy-variables": Building2,
  "log-log-model": LineChart,
  "time-series": ChartBar,
  "exponential-smoothing": BarChart2,
  "economic-indicators": Compass,
  "forecasting-methods": Timer,
};

const colorClasses = [
  "from-rose-500/10 to-orange-500/10",
  "from-blue-500/10 to-cyan-500/10",
  "from-violet-500/10 to-purple-500/10",
  "from-emerald-500/10 to-teal-500/10",
  "from-amber-500/10 to-yellow-500/10",
  "from-pink-500/10 to-rose-500/10",
  "from-indigo-500/10 to-blue-500/10",
  "from-lime-500/10 to-green-500/10",
];

const iconColorClasses = [
  "text-rose-600",
  "text-blue-600",
  "text-violet-600",
  "text-emerald-600",
  "text-amber-600",
  "text-pink-600",
  "text-indigo-600",
  "text-lime-600",
];

interface TopicCardProps {
  topic: Topic;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function TopicCard({ topic, index, isActive, onClick }: TopicCardProps) {
  const Icon = iconMap[topic.id] || BookOpen;
  const colorIndex = index % colorClasses.length;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-card text-left transition-all hover:shadow-md hover:border-foreground/20",
        isActive && "border-foreground/30 shadow-md"
      )}
    >
      <div
        className={cn(
          "flex h-[140px] items-center justify-center bg-gradient-to-br",
          colorClasses[colorIndex]
        )}
      >
        <Icon
          className={cn(
            "h-10 w-10 transition-transform group-hover:scale-110",
            iconColorClasses[colorIndex]
          )}
          strokeWidth={1.5}
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-muted-foreground">
            {topic.chapter}
          </span>
        </div>
        <h3 className="text-sm font-semibold leading-tight text-foreground">
          {topic.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {topic.description}
        </p>
      </div>
    </button>
  );
}
