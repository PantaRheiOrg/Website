import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'
import { useI18n } from './hooks/useI18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Venues from './components/Venues'
import BannerCTA from './components/BannerCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
export default function App() {
  const { lang, setLang, toggle, t } = useI18n()
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
  )
}