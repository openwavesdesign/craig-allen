import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
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
                [Your story here — how you got into this work, what drives you, your journey
                from early career to founding Open Waves Design.]
              </p>
              <p>
                [What you believe about technology in the nonprofit space — your philosophy,
                your approach, why you care about this specific intersection.]
              </p>
              <p>
                [What makes you different — your unique perspective, methodology, or background
                that sets you apart from other consultants.]
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-lg aspect-[4/5] flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Professional Photo Placeholder</span>
          </div>
        </div>
      </section>

      {/* Philosophy / Differentiators */}
      <section className="bg-section-warm">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl text-foreground mb-10 text-center">What Sets Open Waves Apart</h2>
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
