import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">POWER AI</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</a>
          <a href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">My Favorite Tools</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="sm" className="hidden sm:inline-flex">
            <span className="mr-1">+</span> Submit AI Tool
          </Button>
          <Button variant="hero-outline" size="sm" className="hidden sm:inline-flex">
            Feature Your Tool
          </Button>
          <Button variant="hero-outline" size="sm">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
