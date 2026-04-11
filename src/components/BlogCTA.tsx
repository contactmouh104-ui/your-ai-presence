import { ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCTAProps {
  affiliateLink: string;
  productName: string;
}

const BlogCTA = ({ affiliateLink, productName }: BlogCTAProps) => {
  return (
    <div className="my-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-primary/5 p-8 text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <ShieldCheck className="h-5 w-5 text-primary" />
        <span className="text-sm font-semibold text-primary tracking-wide uppercase">Verified Offer</span>
      </div>

      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
        Ready to Get Started with {productName}?
      </h3>
      <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
        Join thousands of smart entrepreneurs already using {productName} to grow their business. Limited-time pricing available.
      </p>

      <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
        <Button
          size="lg"
          className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] transition-all duration-300"
        >
          Get Instant Access Now <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </a>

      <p className="mt-4 text-xs text-muted-foreground">
        🔒 Secure checkout • 30-day money-back guarantee • Instant access
      </p>
    </div>
  );
};

export default BlogCTA;
