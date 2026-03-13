import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

export const CTA = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId = 0;

    const onScroll = () => {
      const node = bgRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight) * -0.08;
      node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.04)`;
    };

    const onScrollRaf = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScrollRaf, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollRaf);
    };
  }, []);

  return (
    <Reveal variant="home">
      <section className="py-20 relative overflow-hidden">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/cta-bg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-background/90"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="stagger-item text-4xl md:text-6xl font-serif font-bold mb-6">
            Ready to Start Your <span className="text-gradient">Transformation?</span>
          </h2>
          <p className="stagger-item text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of women who have already transformed their lives at Apex Fitness. Your journey begins with a single step.
          </p>
          <div className="stagger-item">
            <Button variant="hero" size="xl" asChild>
              <Link to="/free-trial">
                Get Started Today
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
  );
};
