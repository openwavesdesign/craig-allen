import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Users, Settings, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Infrastructure Audit & Strategy",
    tagline: "Know exactly where your tech stands — and where it needs to go.",
    description: "A comprehensive review of your current tools, systems, and workflows to identify gaps, redundancies, and opportunities for optimization.",
    outcomes: [
      "Clear technology roadmap aligned to your strategic plan",
      "Prioritized list of quick wins and long-term improvements",
      "Cost analysis and tool consolidation recommendations",
    ],
  },
  {
    icon: Users,
    title: "Digital Experience Design",
    tagline: "Create experiences your donors, volunteers, and staff actually love.",
    description: "Design and redesign of digital touchpoints — from websites to donor portals to internal dashboards — with accessibility and engagement at the core.",
    outcomes: [
      "Increased engagement and reduced friction",
      "Accessible, mobile-first digital experiences",
      "Brand-aligned interfaces that build trust",
    ],
  },
  {
    icon: Settings,
    title: "Systems & Workflow Optimization",
    tagline: "Stop working harder. Start working smarter.",
    description: "Streamline your operations by connecting, automating, and optimizing the tools your team uses every day — from CRM to email to fundraising platforms.",
    outcomes: [
      "Automated workflows that save hours each week",
      "Connected systems that eliminate data silos",
      "Staff training and documentation for long-term success",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-section-cool">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Consulting Built for Nonprofit Impact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three focused offerings designed to transform your organization's digital
              infrastructure from a pain point into a strategic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="container py-16 md:py-24">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-10 items-start ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div>
                <service.icon className="h-10 w-10 text-accent mb-4" />
                <h2 className="text-2xl md:text-3xl text-foreground mb-2">{service.title}</h2>
                <p className="text-accent font-medium text-sm mb-4">{service.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Inquire About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-section-warm rounded-lg p-8 border">
                <h4 className="font-sans font-semibold text-sm text-foreground mb-4 uppercase tracking-wide">
                  Expected Outcomes
                </h4>
                <ul className="space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary" style={{ background: "var(--hero-gradient)" }}>
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl text-primary-foreground mb-4">Not Sure Where to Start?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Book a free 30-minute discovery call. We'll discuss your challenges and I'll
            share initial recommendations — no strings attached.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Book Your Free Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
