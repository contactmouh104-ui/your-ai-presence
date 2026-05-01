import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────
   JSON-LD Schema Markup (Product + Review)
   Injected into <head> for Google Rich Results
───────────────────────────────────────────── */
const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Cinemation AI All-Inclusive",
      description:
        "The best AI animation tool 2026 for long-form AI video generation. Create up to 30-minute videos with consistent characters and cinematic quality.",
      url: "https://jvz3.com/c/3468163/437175/",
      image:
        "https://raw.githubusercontent.com/contactmouh104-ui/your-ai-presence/main/public/images/Cinemation%20All.webp",
      brand: { "@type": "Brand", name: "Cinemation AI" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "312",
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "37",
        availability: "https://schema.org/InStock",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Jordan M." },
          reviewBody:
            "Cinemation AI is the best long-form AI video generator I've used. Character consistency across 20+ minute videos is unmatched. Runway Gen-3 vs Cinemation? No contest.",
        },
        {
          "@type": "Review",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          author: { "@type": "Person", name: "Priya S." },
          reviewBody:
            "Finally an AI animation tool 2026 that doesn't break the bank. Sora costs a fortune for short clips. Cinemation gives me 30-minute videos at a fraction of the price.",
        },
      ],
    },
  ],
};

/* ─────────────────────────────────────────────
   Comparison Table Data
───────────────────────────────────────────── */
const features = [
  {
    label: "Max Video Length",
    cinemation: "Up to 30 minutes",
    runway: "~4 minutes",
    sora: "~1 minute",
    winner: "cinemation",
  },
  {
    label: "Character Consistency",
    cinemation: "✦ Advanced AI lock-on",
    runway: "Moderate",
    sora: "Limited",
    winner: "cinemation",
  },
  {
    label: "Professional Storytelling",
    cinemation: "Full narrative arcs",
    runway: "Short scenes only",
    sora: "Experimental clips",
    winner: "cinemation",
  },
  {
    label: "Pricing / Budget",
    cinemation: "One-time $37",
    runway: "$144+/year",
    sora: "$200+/month",
    winner: "cinemation",
  },
  {
    label: "Commercial License",
    cinemation: "✔ Included",
    runway: "✔ Included",
    sora: "✘ Restricted",
    winner: "cinemation",
  },
  {
    label: "No Watermark Export",
    cinemation: "✔ Always",
    runway: "Paid tiers only",
    sora: "✘ Not offered",
    winner: "cinemation",
  },
  {
    label: "Voice + Script Sync",
    cinemation: "✔ Built-in",
    runway: "✘ External tools",
    sora: "✘ External tools",
    winner: "cinemation",
  },
  {
    label: "Ease of Use",
    cinemation: "Beginner friendly",
    runway: "Intermediate",
    sora: "Advanced / waitlisted",
    winner: "cinemation",
  },
  {
    label: "Customer Support",
    cinemation: "24/7 Priority",
    runway: "Email only",
    sora: "Community only",
    winner: "cinemation",
  },
];

const reviews = [
  {
    name: "Jordan M.",
    role: "YouTube Creator, USA",
    stars: 5,
    text: 'Runway Gen-3 vs Cinemation? Not even close. I get 30-minute story videos with locked character faces. This is the best AI animation tool 2026 has to offer.',
  },
  {
    name: "Priya S.",
    role: "Indie Filmmaker, UK",
    stars: 5,
    text: "Sora gave me 60-second clips for $200/month. Cinemation gave me a full short film pipeline for $37 one-time. The long-form AI video generator I didn't know I needed.",
  },
  {
    name: "Marco D.",
    role: "Ad Agency, Germany",
    stars: 5,
    text: "Character consistency was the dealbreaker for us. No other tool keeps faces, styles, and motion coherent across a 20-minute piece. Cinemation nails it.",
  },
];

/* ─────────────────────────────────────────────
   Star Rating Component
───────────────────────────────────────────── */
function Stars({ count = 5 }) {
  return (
    <span className="text-amber-400 text-lg tracking-tight" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────── */
export default function ComparisonsPage() {
  const [dark, setDark] = useState(true);

  /* Inject <head> meta tags & schema */
  useEffect(() => {
    // Schema JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(SCHEMA);
    script.id = "comparisons-schema";
    if (!document.getElementById("comparisons-schema")) {
      document.head.appendChild(script);
    }

    // Meta tags
    const metas = [
      { name: "description", content: "Best AI Animation Tool 2026: Runway Gen-3 vs Cinemation vs Sora. In-depth comparison of the top long-form AI video generators. See why Cinemation AI wins on price, length, and character consistency." },
      { name: "keywords", content: "Best AI Animation Tool 2026, Runway Gen-3 vs Cinemation, Long-form AI Video Generator, Cinemation AI review, AI video comparison, Sora alternative" },
      { name: "geo.region", content: "US" },
      { name: "geo.placename", content: "United States" },
      { property: "og:title", content: "Best AI Animation Tool 2026 | Cinemation vs Runway vs Sora" },
      { property: "og:description", content: "The definitive Runway Gen-3 vs Cinemation comparison. Discover the #1 long-form AI video generator trusted by creators worldwide." },
      { property: "og:url", content: "https://shonow.online/comparisons" },
    ];

    const injected = [];
    metas.forEach(({ name, property, content }) => {
      const el = document.createElement("meta");
      if (name) el.setAttribute("name", name);
      if (property) el.setAttribute("property", property);
      el.setAttribute("content", content);
      el.setAttribute("data-page", "comparisons");
      document.head.appendChild(el);
      injected.push(el);
    });

    const titleEl = document.querySelector("title");
    const prevTitle = document.title;
    document.title = "Best AI Animation Tool 2026 | Cinemation vs Runway vs Sora";

    return () => {
      injected.forEach((el) => el.remove());
      document.title = prevTitle;
      document.getElementById("comparisons-schema")?.remove();
    };
  }, []);

  const base = dark
    ? "bg-[#080c12] text-slate-100"
    : "bg-slate-50 text-slate-900";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${base}`}
         style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>

      {/* ── Google Fonts (DM Sans + Playfair Display) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        .font-display { font-family: 'Playfair Display', Georgia, serif; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #f59e0b, #fbbf24, #fde68a, #f59e0b);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.45s ease both; }

        .glow-btn {
          box-shadow: 0 0 0 0 rgba(245,158,11,0);
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .glow-btn:hover {
          box-shadow: 0 0 28px 6px rgba(245,158,11,0.35);
          transform: translateY(-2px);
        }
        .winner-cell {
          background: linear-gradient(90deg, rgba(245,158,11,0.12), rgba(251,191,36,0.06));
          border-left: 3px solid #f59e0b;
        }
        .card-hover {
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          border-radius: inherit;
        }
      `}</style>

      {/* ── THEME TOGGLE ── */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark/light mode"
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border transition-all duration-300 ${
            dark
              ? "bg-slate-800 border-slate-600 hover:border-amber-400"
              : "bg-white border-slate-200 hover:border-amber-400 shadow"
          }`}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background mesh */}
        <div className={`absolute inset-0 ${dark ? "bg-[#080c12]" : "bg-slate-50"}`}>
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
               style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
               style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border border-amber-400/30 bg-amber-400/10 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            2026 In-Depth Comparison
          </div>

          {/* Headline */}
          <h1 className="fade-up-2 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className={dark ? "text-slate-100" : "text-slate-900"}>The Best </span>
            <span className="shimmer-text">AI Animation Tool</span>
            <br />
            <span className={dark ? "text-slate-100" : "text-slate-900"}>is Closer Than You Think</span>
          </h1>

          {/* Sub */}
          <p className={`fade-up-3 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
            The definitive <strong className={dark ? "text-slate-200" : "text-slate-800"}>Runway Gen-3 vs Cinemation</strong> breakdown — plus how it stacks up against Sora.
            If you need a true <strong className={dark ? "text-slate-200" : "text-slate-800"}>long-form AI video generator</strong>, read every row.
          </p>

          {/* CTA cluster */}
          <div className="fade-up-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://jvz3.com/c/3468163/437175/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-base sm:text-lg shadow-lg"
            >
              🎬 Get Cinemation AI — $37 One-Time
            </a>
            <a
              href="#comparison"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base sm:text-lg border transition-colors ${
                dark
                  ? "border-slate-600 text-slate-300 hover:border-amber-400 hover:text-amber-400"
                  : "border-slate-300 text-slate-600 hover:border-amber-500 hover:text-amber-600"
              }`}
            >
              See Full Comparison ↓
            </a>
          </div>

          {/* Social proof bar */}
          <div className={`mt-12 flex flex-wrap justify-center gap-6 text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>
            {[
              ["⭐", "4.9 / 5", "avg. rating"],
              ["🎬", "30 min", "max video length"],
              ["💰", "$37", "one-time only"],
              ["✅", "10,000+", "creators served"],
            ].map(([icon, value, label]) => (
              <div key={label} className="flex items-center gap-1.5">
                <span>{icon}</span>
                <span className={`font-bold ${dark ? "text-slate-200" : "text-slate-800"}`}>{value}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUCT SPOTLIGHT
      ══════════════════════════════════════════ */}
      <section className={`py-16 ${dark ? "bg-[#0d1117]" : "bg-white"}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className={`relative overflow-hidden rounded-3xl p-0.5 noise-bg`}
               style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #6366f1 100%)" }}>
            <div className={`rounded-[22px] p-8 sm:p-12 flex flex-col sm:flex-row gap-8 items-center ${dark ? "bg-[#0d1117]" : "bg-white"}`}>
              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-64">
                <img
                  src="https://raw.githubusercontent.com/contactmouh104-ui/your-ai-presence/main/public/images/Cinemation%20All.webp"
                  alt="Cinemation AI All-Inclusive – Best AI Animation Tool 2026"
                  className="w-full rounded-2xl shadow-2xl object-cover"
                  loading="eager"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4">
                  🏆 Editor's #1 Pick — 2026
                </div>
                <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-2 ${dark ? "text-slate-100" : "text-slate-900"}`}>
                  Cinemation AI<br />
                  <span className="shimmer-text">All-Inclusive</span>
                </h2>
                <Stars count={5} />
                <p className={`mt-4 leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  The only <strong className={dark ? "text-slate-200" : "text-slate-800"}>long-form AI video generator</strong> that maintains
                  character consistency across videos up to <strong className={dark ? "text-slate-200" : "text-slate-800"}>30 full minutes</strong>.
                  Trusted by storytellers, indie filmmakers, and agencies globally — all for a single low price.
                </p>

                {/* Key features */}
                <ul className={`mt-5 space-y-2 text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  {[
                    "Character face & style lock across entire video",
                    "30-minute long-form narrative video generation",
                    "One-time $37 — no monthly subscription trap",
                    "Commercial license included from day one",
                    "Voice sync, script-to-scene, & 4K export",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://jvz3.com/c/3468163/437175/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-400 text-slate-900 font-bold text-base shadow-lg"
                >
                  🎬 Grab Cinemation AI — Limited Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════ */}
      <section id="comparison" className={`py-20 ${dark ? "bg-[#080c12]" : "bg-slate-50"}`}>
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Head-to-Head Breakdown
            </p>
            <h2 className={`font-display text-3xl sm:text-5xl font-bold mb-4 ${dark ? "text-slate-100" : "text-slate-900"}`}>
              Runway Gen-3 vs Cinemation<br className="hidden sm:block" /> vs Sora
            </h2>
            <p className={`max-w-xl mx-auto ${dark ? "text-slate-400" : "text-slate-600"}`}>
              Every major metric compared side-by-side. We highlight the winner in each category — so you can make the informed choice.
            </p>
          </div>

          {/* Table wrapper */}
          <div className={`rounded-2xl overflow-hidden border ${dark ? "border-slate-700/50" : "border-slate-200"} shadow-2xl`}>
            {/* Mobile scroll hint */}
            <p className={`text-center py-2 text-xs sm:hidden ${dark ? "text-slate-600" : "text-slate-400"}`}>← Scroll to see full table →</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                {/* Column headers */}
                <thead>
                  <tr className={dark ? "bg-[#0d1117]" : "bg-slate-100"}>
                    <th className={`px-5 py-4 text-left text-xs font-bold tracking-wider uppercase ${dark ? "text-slate-500" : "text-slate-400"}`}>
                      Feature
                    </th>
                    <th className="px-5 py-4 text-center">
                      <span className="inline-flex flex-col items-center gap-1">
                        <span className="text-base">🏆</span>
                        <span className="text-amber-400 font-bold text-sm">Cinemation AI</span>
                        <span className={`text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}>All-Inclusive</span>
                      </span>
                    </th>
                    <th className="px-5 py-4 text-center">
                      <span className={`font-semibold text-sm ${dark ? "text-slate-400" : "text-slate-600"}`}>Runway Gen-3</span>
                    </th>
                    <t
