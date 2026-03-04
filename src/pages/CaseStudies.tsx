import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const caseStudies = [
  {
    id: "case-1",
    client: "[Nonprofit Name]",
    sector: "Education",
    title: "Rebuilding Digital Infrastructure for a Growing Education Nonprofit",
    challenge: "Placeholder for the challenge this organization faced — fragmented systems, poor donor experience, lack of data visibility, etc.",
    actions: "Placeholder for what you did — conducted audit, redesigned donor portal, integrated CRM with email platform, trained staff, etc.",
    outcome: "Placeholder for the results — 40% increase in online donations, 60% reduction in manual data entry, improved staff satisfaction, etc.",
    metrics: [
      { value: "40%", label: "Increase in Donations" },
      { value: "60%", label: "Less Manual Work" },
    ],
  },
  {
    id: "case-2",
    client: "[Nonprofit Name]",
    sector: "Health & Human Services",
    title: "Streamlining Operations for a Regional Health Services Nonprofit",
    challenge: "Placeholder challenge description — disconnected volunteer management, outdated website, no mobile experience.",
    actions: "Placeholder actions — redesigned website, built volunteer portal, created automated onboarding workflow.",
    outcome: "Placeholder outcomes — 3x volunteer sign-ups, 50% faster onboarding, mobile-first experience.",
    metrics: [
      { value: "3x", label: "Volunteer Sign-ups" },
      { value: "50%", label: "Faster Onboarding" },
    ],
  },
  {
    id: "case-3",
    client: "[Nonprofit Name]",
    sector: "Arts & Culture",
    title: "Designing a Unified Digital Experience for an Arts Organization",
    challenge: "Placeholder challenge — inconsistent branding across platforms, low event registration conversion, siloed donor data.",
    actions: "Placeholder actions — brand audit, unified design system, integrated ticketing with CRM.",
    outcome: "Placeholder outcomes — consistent brand, 25% increase in event registrations, unified donor view.",
    metrics: [
      { value: "25%", label: "More Registrations" },
      { value: "100%", label: "Data Unified" },
    ],
  },
];

const CaseStudiesPage = () => {
  usePageMeta({
    title: "Case Studies",
    description: "Explore case studies showcasing how Craig Allen has helped nonprofits improve their digital infrastructure and achieve measurable impact.",
  });
  return (
    <div>
      {/* Hero */}
      <section className="bg-section-cool">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Case Studies</p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Real Results for Real Organizations
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See how nonprofits have transformed their digital infrastructure
              and achieved measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container py-16 md:py-24">
        <div className="space-y-20">
          {caseStudies.map((study) => (
            <article key={study.id} className="border rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-section-warm p-8 md:p-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-secondary text-secondary-foreground text-sm font-medium px-2.5 py-1 rounded-full">
                    {study.sector}
                  </span>
                  <span className="text-muted-foreground text-sm">{study.client}</span>
                </div>
                <h2 className="text-2xl md:text-3xl text-foreground">{study.title}</h2>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                      Actions
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.actions}</p>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
                      Outcome
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.outcome}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-8 pt-6 border-t flex gap-8">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-serif text-primary">{m.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-warm">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl text-foreground mb-4">Your Story Could Be Next</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Let's talk about how we can create measurable impact for your organization.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start the Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
