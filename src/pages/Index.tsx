import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import ToolCard from "@/components/ToolCard";
import NewsletterCard from "@/components/NewsletterCard";
import Footer from "@/components/Footer";
import tools from "@/data/tools";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        !searchQuery ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <div className="container mx-auto px-4 pb-16">
        {/* Filter / Sort bar */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="hero-outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
          </Button>
          <Button variant="hero-outline" size="sm" className="gap-2">
            <ArrowUpDown className="h-3.5 w-3.5" /> Sort
          </Button>
        </div>

        {/* Tools grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTools.map((tool, index) => {
            // Insert newsletter card after 3rd tool
            if (index === 3) {
              return (
                <div key="newsletter-wrapper" className="contents">
                  <ToolCard tool={tool} />
                  {/* Uncomment below if you want newsletter in grid */}
                </div>
              );
            }
            return <ToolCard key={tool.id} tool={tool} />;
          })}
          {/* Newsletter as last card in grid */}
          <NewsletterCard />
        </div>

        {filteredTools.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">No tools found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
