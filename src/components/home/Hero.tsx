import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

export const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId = 0;

    const onScroll = () => {
      const node = bgRef.current;
      if (!node) return;
      const offset = window.scrollY * 0.18;
      node.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`;
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <p className="stagger-item text-primary uppercase tracking-[0.3em] text-sm mb-4">
              Welcome to Apex Fitness
            </p>
            <h1 className="stagger-item text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.15] pb-2 overflow-visible">
              Unleash Your
              <span className="text-gradient block leading-[1.1] pb-1 overflow-visible">
                Inner Strength
              </span>
            </h1>
            <p className="stagger-item text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              An exclusive, premium fitness studio designed for women who are ready to transform their bodies, minds, and lives.
            </p>
            <div className="stagger-item flex flex-col sm:flex-row gap-4">
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
      </section>
    </Reveal>
  );
};
