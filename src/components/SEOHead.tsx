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
const DEFAULT_OG_IMAGE = "/images/asset-17.webp";

const toAbsoluteUrl = (url?: string) => {
  if (!url) return SITE_URL;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const SEOHead = ({ title, description, canonical, ogImage, ogType = "website", article }: SEOHeadProps) => {
  const fullTitle = title.includes("ShoNow") ? title : `${title} | ShoNow`;
  const canonicalUrl = toAbsoluteUrl(canonical || SITE_URL);
  const image = toAbsoluteUrl(ogImage || DEFAULT_OG_IMAGE);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="ShoNow" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ShoNow" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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

      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.headline,
            image: toAbsoluteUrl(article.image),
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
                url: toAbsoluteUrl("/logo.webp"),
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
