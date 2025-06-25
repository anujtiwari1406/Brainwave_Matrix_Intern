import { JSX, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Flow from "./components/Flow";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import BackToTop from "./components/BackToTop";

export default function LandingPage(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.getElementById("backToTop");
      if (backToTop) {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
      }

      document
        .querySelectorAll<HTMLElement>(".feature-card, .step-card")
        .forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }
        });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-blue-100 to-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Flow />
      <TechStack />
      <CTA />
      <BackToTop />
    </div>
  );
}
