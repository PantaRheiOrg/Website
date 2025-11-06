import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useI18n } from "./hooks/useI18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Venues from "./components/Venues";
import BannerCTA from "./components/BannerCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import AdminPage from "./components/AdminPage";

function MainSite() {
  const { lang, setLang, toggle, t } = useI18n();

  return (
    <div className="app-shell text-white">
      <Navbar t={t} lang={lang} toggle={toggle} />
      <Hero t={t} />
      <Features t={t} />
      <HowItWorks t={t} />
      <Venues t={t} />
      <BannerCTA t={t} />
      <FAQ t={t} />
      <Footer t={t} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
