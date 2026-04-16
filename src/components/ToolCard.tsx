import { useState } from "react";
import { Heart, ExternalLink, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SafeImage from "@/components/SafeImage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ToolModal {
  title: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
}

export interface Tool {
  id: number;
  name: string;
  category: string;
  description: string;
  pricing: "Free" | "Freemium" | "Paid";
  featured: boolean;
  color: string;
  initial: string;
  rating?: number;
  image?: string;
  link?: string;
  modal?: ToolModal;
}

const pricingColors: Record<string, string> = {
  Free: "text-emerald-400 border-emerald-400/30",
  Freemium: "text-primary border-primary/30",
  Paid: "text-amber-400 border-amber-400/30",
};

const StarRating = ({ rating = 0 }: { rating?: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${
            i < fullStars
              ? "fill-accent text-accent"
              : i === fullStars && hasHalf
                ? "fill-accent/50 text-accent"
                : "text-muted-foreground/30"
          }`}
        />
      ))}
      {rating > 0 && (
        <span className="ml-1 text-xs text-muted-foreground">{rating}</span>
      )}
    </div>
  );
};

const ToolCard = ({ tool }: { tool: Tool }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-[var(--card-hover-shadow)]">
      <div
        className="relative flex h-28 items-center justify-center overflow-hidden"
        style={{ background: tool.image ? undefined : tool.color }}
      >
        {tool.image && (
          <SafeImage
            src={tool.image}
            alt={tool.name}
            className="absolute inset-0 h-full w-full object-cover"
            fallbackLabel={tool.name}
          />
        )}
        {tool.featured && (
          <span className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-foreground backdrop-blur-sm">
            <Star className="h-2.5 w-2.5 text-accent" /> Featured
          </span>
        )}
        {!tool.image && (
          <span className="font-heading text-xl font-bold text-foreground">{tool.name}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary font-heading text-xs font-bold text-foreground">
              {tool.initial}
            </div>
            <div>
              <h3 className="font-heading text-xs font-semibold text-foreground">{tool.name}</h3>
              <p className="text-[10px] uppercase text-muted-foreground">{tool.category}</p>
            </div>
          </div>
          <button className="text-muted-foreground transition-colors hover:text-red-400">
            <Heart className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${pricingColors[tool.pricing]}`}>
            {tool.pricing}
          </span>
          <StarRating rating={tool.rating} />
        </div>

        <p className="mt-2 flex-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {tool.description}
        </p>

        {tool.modal ? (
          <Button
            variant="hero"
            size="sm"
            className="mt-3 h-8 w-full gap-1.5 text-xs"
            onClick={() => setOpen(true)}
          >
            <ExternalLink className="h-3 w-3" /> Visit
          </Button>
        ) : (
          <Button variant="hero" size="sm" className="mt-3 h-8 w-full gap-1.5 text-xs" asChild={!!tool.link}>
            {tool.link ? (
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3 w-3" /> Visit
              </a>
            ) : (
              <><ExternalLink className="h-3 w-3" /> Visit</>
            )}
          </Button>
        )}
      </div>

      {tool.modal && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg border-border bg-card sm:max-w-xl">
            {tool.image && (
              <div className="-mx-6 -mt-6 mb-2 h-40 overflow-hidden rounded-t-lg border-b border-border">
                <SafeImage
                  src={tool.image}
                  alt={tool.modal.title}
                  className="h-full w-full object-cover"
                  fallbackLabel={tool.name}
                />
              </div>
            )}
            <DialogHeader className="text-left">
              <div className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                <Sparkles className="h-3 w-3" /> Featured Offer
              </div>
              <DialogTitle className="font-heading text-xl leading-snug text-foreground sm:text-2xl">
                {tool.modal.title}
              </DialogTitle>
              <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
                {tool.modal.description}
              </DialogDescription>
            </DialogHeader>
            <Button
              variant="hero"
              size="lg"
              className="mt-2 h-12 w-full gap-2 text-sm font-semibold"
              asChild
            >
              <a
                href={tool.modal.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <ExternalLink className="h-4 w-4" />
                {tool.modal.ctaLabel}
              </a>
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ToolCard;
