import { Heart, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  pricing: "Free" | "Freemium" | "Paid";
  featured: boolean;
  color: string;
  initial: string;
}

const pricingColors: Record<string, string> = {
  Free: "text-emerald-400 border-emerald-400/30",
  Freemium: "text-primary border-primary/30",
  Paid: "text-amber-400 border-amber-400/30",
};

const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-[var(--card-hover-shadow)]">
      {/* Banner */}
      <div
        className="relative flex h-36 items-center justify-center"
        style={{ background: tool.color }}
      >
        {tool.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            <Star className="h-3 w-3 text-accent" /> Featured
          </span>
        )}
        <span className="font-heading text-2xl font-bold text-foreground">{tool.name}</span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary font-heading text-sm font-bold text-foreground">
              {tool.initial}
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-foreground">{tool.name}</h3>
              <p className="text-xs uppercase text-muted-foreground">{tool.category}</p>
            </div>
          </div>
          <button className="text-muted-foreground transition-colors hover:text-red-400">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <span className={`mt-3 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${pricingColors[tool.pricing]}`}>
          {tool.pricing}
        </span>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {tool.description}
        </p>

        <Button variant="hero" size="sm" className="mt-4 w-full gap-2">
          <ExternalLink className="h-3.5 w-3.5" /> Visit
        </Button>
      </div>
    </div>
  );
};

export default ToolCard;
