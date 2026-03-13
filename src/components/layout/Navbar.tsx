import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[linear-gradient(180deg,rgba(178,182,193,0.92)_0%,rgba(166,171,183,0.90)_55%,rgba(154,160,173,0.92)_100%)] backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between min-h-[88px]">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/ApexLogo.png"
              alt="Apex"
              className="h-14 w-auto object-contain md:h-16 lg:h-[4.4rem]"
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive
                      ? "text-[#C73F78]"
                      : "text-slate-800/90 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-1/2 top-[calc(100%+8px)] h-[1.5px] -translate-x-1/2 bg-[#C73F78] transition-all duration-300 ${
                      isActive ? "w-7 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button
              size="lg"
              className="h-11 rounded-md border border-[#B73569]/35 bg-[#C73F78] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(199,63,120,0.28)] transition-all duration-300 hover:bg-[#B73569] hover:shadow-[0_12px_28px_rgba(183,53,105,0.32)]"
              asChild
            >
              <Link to="/free-trial">Free Trial</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="rounded-2xl border border-black/8 bg-white/70 px-4 py-5 backdrop-blur-xl shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-[#C73F78]"
                        : "text-slate-800/90 hover:text-slate-950"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Button
                  size="lg"
                  className="mt-3 h-11 rounded-md border border-[#B73569]/35 bg-[#C73F78] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(199,63,120,0.28)] transition-all duration-300 hover:bg-[#B73569]"
                  asChild
                >
                  <Link to="/free-trial" onClick={() => setIsOpen(false)}>
                    Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};