import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    headline: string;
    image: string;
    datePublished: string;
    author: string;
    description: string;
  };
}

const SITE_URL = "https://shonow.online";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/zIAJFP6IfiT9cv6LtYbr81Jpxdn2/social-images/social-1775759376839-ShoNow.webp";

const SEOHead = ({ title, description, canonical, ogImage, ogType = "website", article }: SEOHeadProps) => {
  const fullTitle = title.includes("ShoNow") ? title : `${title} | ShoNow`;
  const canonicalUrl = canonical || SITE_URL;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ShoNow" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ShoNow" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD WebSite Schema (non-article pages) */}
      {!article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "ShoNow",
            url: SITE_URL,
            description: "World's Largest AI Tool Directory. Discover, compare, and find the best AI tools for your needs.",
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE_URL}/?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      )}

      {/* JSON-LD Article Schema */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.headline,
            image: article.image,
            datePublished: article.datePublished,
            dateModified: article.datePublished,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "ShoNow",
              logo: {
                "@type": "ImageObject",
                url: "https://img.sanishtech.com/u/246d5b0f83797ed3687c0a000fe92819.webp",
              },
            },
            description: article.description,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
