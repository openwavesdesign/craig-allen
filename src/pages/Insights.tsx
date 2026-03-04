import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const posts = [
  {
    id: "1",
    title: "5 Signs Your Nonprofit Needs a Digital Infrastructure Audit",
    excerpt: "If your team is spending more time fighting technology than using it, it's time for a closer look at your digital foundation.",
    date: "Coming Soon",
    category: "Strategy",
  },
  {
    id: "2",
    title: "How to Choose the Right CRM for Your Nonprofit",
    excerpt: "Not all CRMs are created equal — and the best one for your organization depends on more than just price.",
    date: "Coming Soon",
    category: "Tools",
  },
  {
    id: "3",
    title: "The True Cost of Disconnected Systems",
    excerpt: "Manual workarounds and data silos are costing your organization more than you think. Here's how to calculate the hidden costs.",
    date: "Coming Soon",
    category: "Operations",
  },
];

const InsightsPage = () => {
  usePageMeta({
    title: "Insights",
    description: "Practical tips, strategies, and perspectives on building better digital infrastructure for mission-driven organizations.",
  });
  return (
    <div>
      {/* Hero */}
      <section className="bg-section-cool">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Insights</p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Ideas & Resources for Nonprofit Leaders
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practical tips, strategies, and perspectives on building better
              digital infrastructure for mission-driven organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-muted h-48 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Featured Image</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-secondary text-secondary-foreground text-sm font-medium px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-lg text-foreground mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-section-warm">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl text-foreground mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Get practical digital strategy tips delivered to your inbox.
            No spam, just insights that matter.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.org"
              className="flex-1 h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
