import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FreeTrial from "./pages/FreeTrial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const getScrollKey = (path: string) => `apex-scroll:${path}`;

const ScrollPositionPersistence = () => {
  const location = useLocation();
  const path = `${location.pathname}${location.search}${location.hash}`;
  const didInitialRestore = useRef(false);
  const didInitialNavigation = useRef(false);

  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(getScrollKey(path), String(window.scrollY));
    };

    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);
    window.addEventListener("pagehide", saveScroll);

    return () => {
      saveScroll();
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("pagehide", saveScroll);
    };
  }, [path]);

  useEffect(() => {
    if (didInitialRestore.current) return;
    didInitialRestore.current = true;

    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry?.type === "reload" || performance.navigation?.type === 1;
    if (!isReload) return;

    const saved = sessionStorage.getItem(getScrollKey(path));
    const y = saved ? Number(saved) : NaN;
    if (!Number.isFinite(y)) return;

    let attempts = 0;
    const maxAttempts = 12;
    const tryRestore = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const target = Math.min(y, maxScroll);
      window.scrollTo({ top: target, left: 0, behavior: "auto" });

      attempts += 1;
      if (Math.abs(window.scrollY - target) < 2 || attempts >= maxAttempts) return;
      window.setTimeout(tryRestore, 50);
    };

    tryRestore();
  }, [path]);

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  useEffect(() => {
    if (!didInitialNavigation.current) {
      didInitialNavigation.current = true;
      return;
    }

    // For in-app route changes, always start from top of the new page.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<"fade-in" | "fade-out">("fade-in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fade-out");
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`route-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fade-out") {
          setTransitionStage("fade-in");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollPositionPersistence />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
