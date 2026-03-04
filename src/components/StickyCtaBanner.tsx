import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StickyCtaBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary text-primary-foreground py-3 px-4 md:hidden">
      <div className="container flex items-center justify-between">
        <p className="text-sm font-medium">Ready to strengthen your digital foundation?</p>
        <Button asChild variant="hero" size="sm">
          <Link to="/contact">Let's Talk</Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyCtaBanner;
