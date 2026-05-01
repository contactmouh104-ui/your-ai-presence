import React, { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';

// ── Lazy Pages ──────────────────────────────────────────────
const Index           = lazy(() => import('./pages/Index'));
const BlogPage        = lazy(() => import('./pages/BlogPage'));
const ComparisonsPage = lazy(() => import('./pages/ComparisonsPage'));
const ContactPage     = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicy   = lazy(() => import('./pages/PrivacyPolicy'));
const DisclaimerPage  = lazy(() => import('./pages/DisclaimerPage'));
const SubmitToolPage  = lazy(() => import('./pages/SubmitToolPage'));
const NotFoundPage    = lazy(() => import('./pages/NotFoundPage'));

// ── Loading Spinner ──────────────────────────────────────────
const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 rounded-full border-2 border-yellow-500/20" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-yellow-500 animate-spin" />
    </div>
    <p className="text-zinc-600 text-sm">Loading...</p>
  </div>
);

// ── Error Boundary ───────────────────────────────────────────
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
          <span className="text-4xl">⚠️</span>
          <h2 className="text-white text-xl font-bold">Something went wrong</h2>
          <p className="text-zinc-500 text-sm max-w-sm">
            An unexpected error occurred. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-5 py-2 rounded-lg bg-yellow-500 text-black text-sm font-bold hover:bg-yellow-400 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Scroll To Top on Route Change ───────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// ── Progress Bar on Navigation ───────────────────────────────
const RouteProgressBar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const bar = document.getElementById('route-progress');
    if (!bar) return;
    bar.style.width = '0%';
    bar.style.opacity = '1';
    const t1 = setTimeout(() => (bar.style.width = '80%'), 50);
    const t2 = setTimeout(() => {
      bar.style.width = '100%';
      setTimeout(() => (bar.style.opacity = '0'), 300);
    }, 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  return null;
};

// ── App ──────────────────────────────────────────────────────
function App() {
  return (
    <Router>
      {/* شريط تقدم التنقل */}
      <div
        id="route-progress"
        className="fixed top-0 left-0 z-[100] h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-300 ease-out opacity-0 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
        style={{ width: '0%' }}
      />

      <RouteProgressBar />
      <ScrollToTop />

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"               element={<Index />} />
              <Route path="/blog"           element={<BlogPage />} />
              <Route path="/comparisons"    element={<ComparisonsPage />} />
              <Route path="/contact"        element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer"     element={<DisclaimerPage />} />
              <Route path="/submit"         element={<SubmitToolPage />} />
              {/* 404 */}
              <Route path="*"              element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
