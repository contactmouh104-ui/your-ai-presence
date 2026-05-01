import { useState, useEffect } from "react";
import { Menu, X, Search, Plus, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/blog", label: "Blog", icon: "📝" },
  { to: "/comparisons", label: "Comparisons", icon: "⚖️" },
  { to: "/contact", label: "Contact Us", icon: "✉️" },
  { to: "/disclaimer", label: "Disclaimer", icon: "📋" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // تأثير التمرير لتغيير خلفية الـ navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* شريط الإحصائيات العلوي */}
      <div className="hidden sm:flex items-center justify-center gap-6 bg-yellow-500/5 border-b border-yellow-500/10 py-1.5 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
          500+ AI Tool Listed
        </span>
        <span>🔥 Updated Daily</span>
        <span>⭐ Expert Reviews</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 shadow-[0_1px_40px_rgba(234,179,8,0.08)]"
            : "bg-black/80"
        } backdrop-blur-xl border-b border-yellow-500/10`}
      >
        <nav aria-label="Main navigation">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
            
            {/* اللوجو */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/logo.webp"
                alt="ShoNow Logo"
                className="h-10 w-auto"
                loading="eager"
              />
              {/* بادج AI */}
              <span className="hidden sm:inline-flex text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-yellow-500/15 text-yellow-500 border border-yellow-500/30 tracking-wider uppercase">
                AI
              </span>
            </Link>

            {/* روابط الديسكتوب */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? "text-yellow-500"
                      : "text-zinc-400 hover:text-white hover:bg-white/
