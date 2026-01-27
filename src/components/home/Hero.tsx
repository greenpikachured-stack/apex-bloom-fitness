import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 animate-fade-up">
            Welcome to Apex Fitness
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Unleash Your
            <span className="text-gradient block">Inner Strength</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            An exclusive, premium fitness studio designed for women who are ready to transform their bodies, minds, and lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/free-trial">
                Start Your Journey
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/programs">
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
