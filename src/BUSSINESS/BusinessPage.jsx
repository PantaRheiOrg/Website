import React from "react";
import BusinessNavbar from "./BusinessNavbar";
import BusinessHero from "./BusinessHero";
import BusinessHighlights from "./BusinessHighlights";
import BusinessHowItWorks from "./BusinessHowItWorks";
import BusinessTestimonials from "./BusinessTestimonials";
import BusinessCTA from "./BusinessCTA";
import Footer from "../components/Footer";
import { useI18n } from "../hooks/useI18n";

export default function BusinessPage() {
  const { lang, toggle, t } = useI18n();
  const businessContent = t.business;

  return (
    <div className="app-shell text-white min-vh-100 d-flex flex-column">
      <BusinessNavbar t={t} lang={lang} toggle={toggle} />
      <main className="flex-grow-1">
        <BusinessHero content={businessContent} />
        <BusinessHighlights content={businessContent} />
        <BusinessHowItWorks content={businessContent} />
        <BusinessTestimonials content={businessContent} />
        <BusinessCTA content={businessContent} />
      </main>
      <Footer t={t} />
    </div>
  );
}
