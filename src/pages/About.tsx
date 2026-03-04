import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const AboutPage = () => {
  usePageMeta({
    title: "About",
    description: "Learn about Craig Allen, a Digital Infrastructure & Experience Consultant helping nonprofits build better technology systems.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-section-cool">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">About</p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Building Tech That Serves the Mission
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Craig Allen is a Digital Infrastructure & Experience Consultant who partners
              with nonprofits to create technology systems that are as purposeful as the work they support.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl text-foreground mb-6">The Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                After 14 years leading web development, content strategy, and user experience at an educational nonprofit, I now help mission-driven organizations strengthen their digital foundations. I work with nonprofits to improve websites, streamline workflows, optimize user experience, and integrate the tools that support fundraising, communication, and growth.
              </p>
              <p>
                My approach blends strategic oversight with hands-on execution, ensuring nonprofits get sustainable, efficient, and user-friendly digital systems.
              </p>
              <p>
                Founder of Open Waves Design, I offer audits, workflow optimization, and ongoing advisory services tailored to the unique needs of mission-driven organizations.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg aspect-[4/5] overflow-hidden">
            <img 
              src="/images/craig-allen-sitting.webp" 
              alt="Craig Allen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy / Differentiators */}
      <section className="bg-section-warm">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl text-foreground mb-10 text-center">What Sets Craig Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mission-First Thinking",
                description: "Every recommendation starts with your mission. Technology should serve your purpose, not the other way around.",
              },
              {
                title: "Hands-On Partnership",
                description: "I'm not a consultant who hands off a report and disappears. I work alongside your team to implement lasting change.",
              },
              {
                title: "Nonprofit-Native",
                description: "I understand the unique constraints, budgets, and stakeholder dynamics that nonprofits navigate every day.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-8 border">
                <h3 className="text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24 text-center">
        <h2 className="text-3xl text-foreground mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          I'd love to learn about your organization and explore how we can strengthen your digital foundation.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default AboutPage;
