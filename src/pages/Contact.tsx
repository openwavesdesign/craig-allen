import { useForm, ValidationError } from "@formspree/react";
import { Mail, Calendar } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { AnimatedElement } from "@/components/AnimatedElement";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnjbevvv");
  if (state.succeeded) {
    return (
      <div className="space-y-5">
        <div className="bg-secondary/20 border border-accent rounded-lg p-6">
          <p className="text-foreground font-medium mb-2">Thanks for joining!</p>
          <p className="text-sm text-muted-foreground">
            I've received your message and will get back to you as soon as possible.
          </p>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@organization.org"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or challenge..."
          rows={5}
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

const ContactPage = () => {
  usePageMeta({
    title: "Contact",
    description: "Get in touch with Craig Allen to discuss how he can help your nonprofit strengthen its digital infrastructure and achieve greater impact.",
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-section-cool">
        <div className="container py-16 md:py-24">
          <AnimatedElement className="max-w-2xl" animation="fade-up">
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Contact</p>
            <h1 className="text-4xl md:text-5xl text-foreground mb-6">
              Let's Build Something Better Together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're ready to start a project or just want to explore how I can help,
              I'd love to hear from you.
            </p>
          </AnimatedElement>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedElement animation="fade-up">
            <h2 className="text-2xl text-foreground mb-6">Send a Message</h2>
            <ContactForm />
          </AnimatedElement>

          {/* Sidebar */}
          <AnimatedElement animation="scale-in">
            <div className="bg-section-warm rounded-lg p-8 border">
              <Calendar className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl text-foreground mb-2">Book a Call</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Prefer to talk live? Schedule a free 30-minute discovery call to discuss
                your nonprofit's digital needs.
              </p>
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center border">
                <span className="text-muted-foreground text-sm">Calendly Embed Placeholder</span>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border">
              <Mail className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl text-foreground mb-2">Email Directly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reach out anytime at{" "}
                <a href="mailto:hello@craigallen.net" className="text-primary hover:underline">
                  hello@craigallen.net
                </a>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
