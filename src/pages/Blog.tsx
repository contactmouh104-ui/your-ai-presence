import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter(p => p.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            POWER AI Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            In-depth reviews, strategies, and insights on the best AI tools and money-making systems in 2026.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Featured Article</h2>
        <Link to={`/blog/${featuredPost.slug}`} className="group block">
          <div className="grid md:grid-cols-2 gap-8 rounded-2xl border border-border bg-card p-2 hover:border-primary/40 transition-colors">
            <div className="overflow-hidden rounded-xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-4 md:p-6">
              <Badge variant="secondary" className="w-fit mb-3">{featuredPost.category}</Badge>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readingTime} min read</span>
                <span>{featuredPost.date}</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-6">Latest Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <article className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">{post.category}</Badge>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readingTime} min</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
