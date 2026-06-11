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
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div 
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/cta-bg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-background/90"></div>
        </div>

        <div className="relative container mx-auto px-5 text-center sm:px-6">
          <h2 className="stagger-item mb-5 font-serif text-4xl font-bold sm:mb-6 sm:text-5xl md:text-6xl">
            Ready to Start Your <span className="text-gradient">Transformation?</span>
          </h2>
          <p className="stagger-item mx-auto mb-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
            Join hundreds of women who have already transformed their lives at ApexFit. Your journey begins with a single step.
          </p>
          <div className="stagger-item">
            <Button
              variant="hero"
              size="xl"
              className="h-12 w-full px-5 text-sm tracking-[0.14em] sm:h-14 sm:w-auto sm:px-10 sm:text-base sm:tracking-widest"
              asChild
            >
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
