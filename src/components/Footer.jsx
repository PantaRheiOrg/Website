import React from 'react'
import { Sparkles } from 'lucide-react'
export default function Footer({ t }) {
    return (
        <footer className="py-4 border-top border-secondary-subtle" style={{ background: '#0a0a11' }}>
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
                <div className="d-flex align-items-center gap-2"><Sparkles /> © {new Date().getFullYear()} PNTA</div>
                <div className="d-flex gap-3 text-white-50 small align-items-center">
                    <a className="link-light link-opacity-75-hover" href="#">{t.footer_terms}</a>
                    <a className="link-light link-opacity-75-hover" href="#">{t.footer_privacy}</a>
                    <a className="link-light link-opacity-75-hover" href="#">{t.footer_contact}</a>
                    <span className="mx-2">|</span>
                    <span>{t.footer_soon}</span>
                    <button className="btn btn-sm btn-outline-light rounded-pill">App Store</button>
                    <button className="btn btn-sm btn-outline-light rounded-pill">Google Play</button>
                </div>
            </div>
        </footer>
    )
}