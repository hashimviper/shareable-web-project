import { useEffect } from "react";
import NavHeader from "@/components/NavHeader";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import PerformanceSection from "@/components/PerformanceSection";
import RiskSection from "@/components/RiskSection";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";

const Divider = () => (
  <div className="h-px bg-gradient-to-r from-primary to-transparent mx-6 md:mx-12 opacity-20" />
);

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <NavHeader />
      <HeroSection />
      <Divider />
      <VisionSection />
      <Divider />
      <PerformanceSection />
      <Divider />
      <RiskSection />
      <Divider />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
