import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Disclaimer - Affiliate & Earnings Disclosure"
        description="Read ShoNow's disclaimer including affiliate disclosure, earnings disclaimer, and product review policies. Transparency is our priority."
        canonical="https://shonow.online/disclaimer"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl prose prose-invert">
          <h1 className="font-heading text-4xl font-bold text-foreground">Disclaimer</h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">Last updated: April 12, 2026</p>

          <div className="mt-8 space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground">Affiliate Disclosure</h2>
              <p className="mt-2 leading-relaxed">
                ShoNow is a participant in various affiliate programs. This means that when you click on certain links on our website and make a purchase, we may earn a commission at no additional cost to you. These affiliate partnerships help us maintain and improve the quality of content we provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">No Financial Advice</h2>
              <p className="mt-2 leading-relaxed">
                The content on this website is for informational and educational purposes only. It should not be considered as financial, investment, or professional advice. Always do your own research and consult with qualified professionals before making any financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Earnings Disclaimer</h2>
              <p className="mt-2 leading-relaxed">
                Any earnings or income statements made on this website are estimates only. There is no guarantee that you will make any money using the techniques, tools, or ideas presented here. Your results will vary and depend on many factors including but not limited to your background, experience, and work ethic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Product Reviews</h2>
              <p className="mt-2 leading-relaxed">
                The product reviews and recommendations on this site are based on our own research and experience. While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or timeliness of any information presented. Product features, pricing, and availability are subject to change.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Third-Party Links</h2>
              <p className="mt-2 leading-relaxed">
                Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of these sites and assume no responsibility for them. Visiting third-party websites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Contact</h2>
              <p className="mt-2 leading-relaxed">
                If you have any questions about this disclaimer, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
