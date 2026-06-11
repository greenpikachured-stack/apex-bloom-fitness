import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const TrialPass = () => {
  return (
    <Reveal variant="home">
      <section className="bg-card-gradient py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="stagger-item inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-primary" size={18} />
              <span className="text-primary uppercase tracking-widest text-sm">Limited Offer</span>
            </div>
            <h2 className="stagger-item mb-3 font-serif text-4xl font-bold sm:mb-4 sm:text-5xl">
              Free Trial <span className="text-gradient">Pass</span>
            </h2>
            <h3 className="stagger-item mb-5 font-serif text-xl leading-tight text-muted-foreground sm:mb-6 sm:text-2xl">
              Experience the Transformation
            </h3>
            <p className="stagger-item mx-auto mb-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
              Curious about what ApexFit has to offer? Apply for a free trial pass and experience our supportive community, expert-led classes, and personalized coaching.
            </p>
            <div className="stagger-item">
              <Button
                variant="hero"
                size="xl"
                className="h-12 w-full px-5 text-sm tracking-[0.14em] sm:h-14 sm:w-auto sm:px-10 sm:text-base sm:tracking-widest"
                asChild
              >
                <Link to="/free-trial">
                  Apply For A Free Trial Now!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};
