import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Users, Settings } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Digital Infrastructure",
    description: "Audit, optimize, and align your technology stack so your systems work together — not against each other.",
  },
  {
    icon: Users,
    title: "User Experience Design",
    description: "Create donor, volunteer, and staff-facing digital experiences that are intuitive, accessible, and on-brand.",
  },
  {
    icon: Settings,
    title: "Systems & Workflow Optimization",
    description: "Streamline operations with smarter integrations, automations, and data workflows tailored to your mission.",
  },
];

const stats = [
  { value: "50+", label: "Nonprofits Served" },
  { value: "12+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container py-20 md:py-32 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-primary-foreground/70 font-medium text-sm tracking-wide uppercase mb-4">
              Open Waves Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Digital Infrastructure for Nonprofits That Actually Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Craig Allen helps mission-driven organizations build technology foundations
              that amplify impact — not create headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Book a Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-1/4 top-10 w-40 h-40 rounded-full bg-primary-foreground/5 blur-2xl" />
      </section>

      {/* Stats */}
      <section className="border-b bg-card">
        <div className="container py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-serif text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-section-warm">
        <div className="container py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-foreground mb-4">How I Help Nonprofits Thrive</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Three core offerings designed to transform your organization's digital backbone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-lg p-8 border hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-cool">
        <div className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Ready to Build a Stronger Digital Foundation?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's start with a free infrastructure audit to uncover what's working,
            what's not, and where to go next.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Schedule Your Free Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
