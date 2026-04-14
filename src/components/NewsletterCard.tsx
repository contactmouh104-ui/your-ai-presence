import { Button } from "@/components/ui/button";

const NewsletterCard = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-8 text-center">
      <img src="/logo.webp" alt="ShoNow" className="mb-4 h-12 w-auto" loading="lazy" />
      <h3 className="font-heading text-lg font-bold text-foreground">
        JOIN 30,000+ AI ENTHUSIASTS
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Newest & Greatest AI Tools delivered directly to your inbox, weekly.
      </p>
      <p className="mt-1 text-xs text-muted-foreground">It's free. unsubscribe anytime.</p>
      <input
        type="email"
        placeholder="Email Address"
        className="mt-4 w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
      />
      <Button variant="hero" className="mt-3 w-full">
        Subscribe
      </Button>
    </div>
  );
};

export default NewsletterCard;