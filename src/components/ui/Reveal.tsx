import { ReactNode, useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "default" | "home";
  asChild?: boolean;
}

export const Reveal = ({
  children,
  className,
  delayMs = 0,
  variant = "default",
  asChild = false,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const Comp = asChild ? Slot : "div";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: variant === "home" ? 0.1 : 0.01,
        rootMargin: variant === "home" ? "-50px" : "0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Comp
      ref={ref}
      className={cn("reveal", variant === "home" && "reveal-home", className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Comp>
  );
};
