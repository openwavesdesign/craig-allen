import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import { AnimatedElement } from "@/components/AnimatedElement";

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
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" placeholder="Your organization" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@organization.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">How can I help?</Label>
                <Textarea id="message" placeholder="Tell me about your project or challenge..." rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
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
