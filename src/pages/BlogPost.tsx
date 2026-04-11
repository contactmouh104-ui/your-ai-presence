import { useParams, Link } from "react-router-dom";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import BlogCTA from "@/components/BlogCTA";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<div key={key++} className="h-4" />);
      } else if (trimmed.startsWith("### ")) {
        elements.push(<h3 key={key++} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>);
      } else if (trimmed.startsWith("## ")) {
        elements.push(<h2 key={key++} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>);
      } else if (trimmed.startsWith("- **")) {
        const text = trimmed.slice(2);
        elements.push(
          <li key={key++} className="ml-6 text-muted-foreground leading-relaxed list-disc" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <li key={key++} className="ml-6 text-muted-foreground leading-relaxed list-disc" dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      } else if (trimmed.startsWith("1. ") || trimmed.match(/^\d+\.\s/)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        elements.push(
          <li key={key++} className="ml-6 text-muted-foreground leading-relaxed list-decimal" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      } else if (trimmed.startsWith("|")) {
        // Simple table handling - skip for now, render as text
        elements.push(<p key={key++} className="text-muted-foreground text-sm font-mono bg-secondary/50 px-3 py-1 rounded">{trimmed}</p>);
      } else {
        elements.push(
          <p key={key++} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      }
    }
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ReadingProgressBar />

      {/* Article Header */}
      <header className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readingTime} min read</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-3xl -mt-0 mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl mt-8 border border-border"
          loading="lazy"
        />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-3xl pb-8">
        <div className="prose-custom">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <BlogCTA affiliateLink={post.affiliateLink} productName={post.productName} />
      </article>

      {/* Related Posts */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map(rp => (
              <Link key={rp.id} to={`/blog/${rp.slug}`} className="group">
                <article className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors">
                  <img src={rp.image} alt={rp.title} className="h-40 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">{rp.category}</Badge>
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-primary text-sm font-medium">
                      Read more <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
