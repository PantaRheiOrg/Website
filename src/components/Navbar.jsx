import React from 'react'
import LanguageSwitcher from './LanguageSwitcher'
export default function Navbar({ t, lang, toggle }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'transparent' }}>
      <div className="container py-2">
        <a className="navbar-brand" href="#">PNTA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item"><a className="nav-link" href="/business">{t.business_nav_label}</a></li>
            <li className="nav-item"><a className="nav-link" href="#features">{t.features_heading}</a></li>
            <li className="nav-item"><a className="nav-link" href="#how">{t.how_heading}</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">{t.faq_title}</a></li>
            <li className="nav-item"><LanguageSwitcher lang={lang} toggle={toggle} label={t.lang_label} toLabel={t.toggle_to} /></li>

          </ul>
        </div>
      </div>
    </nav>
  )
}