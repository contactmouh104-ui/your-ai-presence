import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://img.sanishtech.com/u/246d5b0f83797ed3687c0a000fe92819.webp" alt="ShoNow Logo" <img src="https://img.sanishtech.com/u/246d5b0f83797ed3687c0a000fe92819.webp" alt="ShoNow Logo" className="h-12 w-auto" /> />
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            World's Largest AI Tool Directory. Discover, compare, and find the best AI tools for your needs.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/disclaimer" className="hover:text-foreground">Disclaimer</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 ShoNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;