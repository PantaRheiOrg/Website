import React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function BusinessNavbar({ t, lang, toggle }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: "transparent" }}>
      <div className="container py-2">
        <a className="navbar-brand" href="/">{t.brand}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#business-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="business-nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#solutions">
                {t.business.highlights_heading}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how">
                {t.business.how_heading}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                {t.business.testimonials_heading}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">
                {t.business.cta_primary}
              </a>
            </li>
            <li className="nav-item">
              <LanguageSwitcher
                lang={lang}
                toggle={toggle}
                label={t.lang_label}
                toLabel={t.toggle_to}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
