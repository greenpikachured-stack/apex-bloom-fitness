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
      <section className="relative flex min-h-[calc(100dvh-5rem)] items-center justify-center overflow-hidden md:min-h-screen">
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
        <div className="relative container mx-auto px-5 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="stagger-item mb-4 text-xs uppercase tracking-[0.22em] text-primary sm:text-sm sm:tracking-[0.3em]">
              Welcome to ApexFit
            </p>
            <h1 className="stagger-item mb-5 overflow-visible pb-1 font-serif text-4xl font-bold leading-[1.05] sm:mb-6 sm:pb-2 sm:text-6xl md:text-7xl md:leading-[1.15]">
              Unleash Your
              <span className="text-gradient block overflow-visible pb-1 leading-[1.02] sm:leading-[1.1]">
                Inner Strength
              </span>
            </h1>
            <p className="stagger-item mb-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg md:text-xl">
              An exclusive, premium fitness studio designed for women who are ready to transform their bodies, minds, and lives.
            </p>
            <div className="stagger-item flex flex-col gap-3.5 sm:flex-row sm:gap-4">
              <Button
                variant="hero"
                size="xl"
                className="h-12 w-full px-5 text-sm tracking-[0.14em] sm:h-14 sm:w-auto sm:px-10 sm:text-base sm:tracking-widest"
                asChild
              >
                <Link to="/free-trial">
                  Start Your Journey
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="h-12 w-full px-5 text-sm tracking-[0.14em] sm:h-14 sm:w-auto sm:px-10 sm:text-base sm:tracking-widest"
                asChild
              >
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
