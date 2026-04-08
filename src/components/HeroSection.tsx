import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="diagonal-bg relative overflow-hidden py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground md:text-6xl">
          Discover Powerful AI Tools
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          World's Largest AI Tool Directory, Updated Daily.
        </p>

        <div className="relative mx-auto mt-8 max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search AI tools..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-full border border-border bg-card py-4 pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
