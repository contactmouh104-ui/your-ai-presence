import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">POWER AI</span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            World's Largest AI Tool Directory. Discover, compare, and find the best AI tools for your needs.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Power AI Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
