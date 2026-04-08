import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "3D", "AI Detection", "Art", "Audio Editing", "Avatars", "Business",
  "Chatbot", "Code Assistant", "Copywriting", "Data Analysis", "Design",
  "Developer Tools", "E-Commerce", "Education", "Finance", "Gaming",
  "Healthcare", "Image Editing", "Image Generator", "Marketing", "Music",
  "Productivity", "Research", "Sales", "SEO", "Social Media", "Video Editing",
  "Video Generator", "Writing",
];

interface CategoryBarProps {
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryBar = ({ activeCategory, onCategoryChange }: CategoryBarProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto flex items-center gap-2 px-4 py-4">
      <button onClick={() => scroll("left")} className="shrink-0 rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant="pill"
            size="sm"
            className={activeCategory === cat ? "bg-primary text-primary-foreground" : ""}
            onClick={() => onCategoryChange(activeCategory === cat ? null : cat)}
          >
            {cat}
          </Button>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="shrink-0 rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default CategoryBar;
