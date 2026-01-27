import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/cta-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
          Ready to Start Your <span className="text-gradient">Transformation?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of women who have already transformed their lives at Apex Fitness. Your journey begins with a single step.
        </p>
        <Button variant="hero" size="xl" asChild>
          <Link to="/free-trial">
            Get Started Today
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
};
