import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const TrialPass = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-primary" size={18} />
            <span className="text-primary uppercase tracking-widest text-sm">Limited Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Free Trial <span className="text-gradient">Pass</span>
          </h2>
          <h3 className="text-2xl font-serif text-muted-foreground mb-6">
            Experience the Transformation
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Curious about what Apex Fitness has to offer? Apply for a free trial pass and experience our supportive community, expert-led classes, and personalized coaching.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/free-trial">
              Apply For A Free Trial Now!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
