import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SafeImage from "@/components/SafeImage";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
  const otherPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Tools Blog - Reviews, Strategies & Insights"
        description="In-depth reviews, strategies, and insights on the best AI tools and money-making systems in 2026. Stay ahead with ShoNow Blog."
        canonical="https://shonow.online/blog"
      />
      <Navbar />

      <main>
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold text-foreground md:text-5xl">
              ShoNow Blog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              In-depth reviews, strategies, and insights on the best AI tools and money-making systems in 2026.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12" aria-label="Featured article">
          <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-primary">Featured Article</h2>
          <Link to={`/blog/${featuredPost.slug}`} className="group block">
            <article className="grid gap-8 rounded-2xl border border-border bg-card p-2 transition-colors hover:border-primary/40 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl">
                <SafeImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                  fallbackLabel={featuredPost.title}
                />
              </div>
              <div className="flex flex-col justify-center p-4 md:p-6">
                <Badge variant="secondary" className="mb-3 w-fit">{featuredPost.category}</Badge>
                <h3 className="mb-3 font-heading text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">{featuredPost.title}</h3>
                <p className="mb-4 line-clamp-3 text-muted-foreground">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readingTime} min read</span>
                  <span>{featuredPost.date}</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          </Link>
        </section>

        <section className="container mx-auto px-4 pb-16" aria-label="Latest articles">
          <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-widest text-primary">Latest Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
                  <div className="overflow-hidden">
                    <SafeImage
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      fallbackLabel={post.title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <Badge variant="secondary" className="mb-2 w-fit text-xs">{post.category}</Badge>
                    <h3 className="mb-2 line-clamp-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                    <p className="mb-4 flex-1 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
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
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
