import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-serif text-primary-foreground text-sm font-bold">CA</span>
              </div>
              <span className="font-serif text-lg text-foreground">Craig Allen</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Digital infrastructure and experience consulting for nonprofits.
              Helping mission-driven organizations build technology that works.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "Insights", path: "/insights" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold text-sm mb-4 text-foreground">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </li>
              <li>
                <a href="mailto:hello@openwavesdesign.com" className="hover:text-foreground transition-colors">
                  hello@openwavesdesign.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Craig Allen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
