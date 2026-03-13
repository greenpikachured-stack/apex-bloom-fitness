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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/ApexLogo.png"
              alt="Apex"
              className="h-14 md:h-16 lg:h-[4.5rem] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm uppercase tracking-[0.22em] transition-all duration-300 ${
                    isActive
                      ? "text-[#E85D93]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] h-px bg-[#E85D93]/80 transition-all duration-300 ${
                      isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="lg"
              className="h-12 px-8 text-sm uppercase tracking-[0.18em] shadow-[0_0_24px_rgba(232,93,147,0.16)]"
              asChild
            >
              <Link to="/free-trial">Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 backdrop-blur-xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm uppercase tracking-[0.2em] transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-[#E85D93]"
                        : "text-white/80 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button variant="hero" size="lg" className="mt-3" asChild>
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