import { useState, useEffect } from "react";

const NavHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 h-[60px] flex items-center justify-between backdrop-blur-xl border-b border-border transition-all ${
        scrolled ? "bg-background/95" : "bg-background/92"
      }`}
    >
      <div className="font-head text-lg tracking-[4px] text-primary">
        CYCLOSYS{" "}
        <span className="text-foreground/25 ml-2.5 text-[11px] font-mono tracking-[2px]">
          EXECUTIVE SUMMARY
        </span>
      </div>
      <nav className="hidden md:flex">
        {[
          { href: "#vision", label: "Vision" },
          { href: "#performance", label: "Performance" },
          { href: "#risk", label: "Risk Analysis" },
          { href: "#cta", label: "Contact" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sub no-underline text-[11px] tracking-[2px] uppercase ml-8 hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default NavHeader;
