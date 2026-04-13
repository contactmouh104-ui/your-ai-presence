import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import ToolCard from "@/components/ToolCard";
import NewsletterCard from "@/components/NewsletterCard";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import tools from "@/data/tools";
import artistTools from "@/data/artistTools";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ArrowUpDown, Palette } from "lucide-react";

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
      <SEOHead
        title="ShoNow - Discover Powerful AI Tools"
        description="World's Largest AI Tool Directory. Discover, compare, and find the best AI tools for your needs. Updated daily with the latest AI innovations."
        canonical="https://shonow.online"
      />
      <Navbar />
      <main>
        <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Featured Artist Tools Section */}
        <section className="container mx-auto px-4 pb-10" aria-label="Featured artist tools">
          <div className="mb-6 flex items-center gap-3">
            <Palette className="h-5 w-5 text-accent" />
            <h2 className="font-heading text-xl font-bold text-foreground">أدوات مميزة للرسامين</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {artistTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16" aria-label="All AI tools">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="hero-outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filter
            </Button>
            <Button variant="hero-outline" size="sm" className="gap-2">
              <ArrowUpDown className="h-3.5 w-3.5" /> Sort
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTools.map((tool, index) => {
              if (index === 3) {
                return (
                  <div key="newsletter-wrapper" className="contents">
                    <ToolCard tool={tool} />
                  </div>
                );
              }
              return <ToolCard key={tool.id} tool={tool} />;
            })}
            <NewsletterCard />
          </div>

          {filteredTools.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No tools found matching your criteria.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
