import { useParams, Link } from "react-router-dom";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SafeImage from "@/components/SafeImage";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import BlogCTA from "@/components/BlogCTA";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-foreground">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<div key={key++} className="h-4" />);
      } else if (trimmed.startsWith("### ")) {
        elements.push(<h3 key={key++} className="mt-8 mb-3 font-heading text-xl font-bold text-foreground">{trimmed.slice(4)}</h3>);
      } else if (trimmed.startsWith("## ")) {
        elements.push(<h2 key={key++} className="mt-10 mb-4 font-heading text-2xl font-bold text-foreground">{trimmed.slice(3)}</h2>);
      } else if (trimmed.startsWith("- **")) {
        const text = trimmed.slice(2);
        elements.push(
          <li key={key++} className="ml-6 list-disc leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <li key={key++} className="ml-6 list-disc leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: trimmed.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      } else if (trimmed.startsWith("1. ") || trimmed.match(/^\d+\.\s/)) {
        const text = trimmed.replace(/^\d+\.\s/, "");
        elements.push(
          <li key={key++} className="ml-6 list-decimal leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      } else if (trimmed.startsWith("|")) {
        elements.push(<p key={key++} className="rounded bg-secondary/50 px-3 py-1 font-mono text-sm text-muted-foreground">{trimmed}</p>);
      } else {
        elements.push(
          <p key={key++} className="leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        );
      }
    }
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonical={`https://shonow.online/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        article={{
          headline: post.title,
          image: post.image,
          datePublished: post.date,
          author: post.author,
          description: post.metaDescription,
        }}
      />
      <Navbar />
      <ReadingProgressBar />

      <main>
        <header className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto max-w-3xl px-4">
            <Link to="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="mb-4 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readingTime} min read</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto mb-8 max-w-3xl px-4">
          <SafeImage
            src={post.image}
            alt={`${post.title} - ${post.category} article cover`}
            className="mt-8 h-64 w-full rounded-xl border border-border object-cover md:h-96"
            fallbackLabel={post.title}
          />
        </div>

        <article className="container mx-auto max-w-3xl px-4 pb-8">
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>
          <BlogCTA affiliateLink={post.affiliateLink} productName={post.productName} />
        </article>

        <section className="border-t border-border bg-card/50 py-16" aria-label="Related articles">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-foreground">Related Articles</h2>
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="group">
                  <article className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
                    <SafeImage
                      src={rp.image}
                      alt={`${rp.title} - ${rp.category}`}
                      className="h-40 w-full object-cover"
                      fallbackLabel={rp.title}
                    />
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">{rp.category}</Badge>
                      <h3 className="line-clamp-2 font-heading text-base font-bold text-foreground transition-colors group-hover:text-primary">
                        {rp.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        Read more <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
