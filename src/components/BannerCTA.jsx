import React from 'react'
import { Mail } from 'lucide-react'
export default function BannerCTA({ t }) {
    return (
        <section id="waitlist" className="pt-0 py-5 py-md-6">
            <div className="container">
                <div className="rounded-4 p-4 p-md-5" style={{
                    background: 'linear-gradient(135deg, rgba(125,211,252,0.15), rgba(244,114,182,0.18))',
                    border: '1px solid rgba(255,255,255,0.08)'
                }}>
                    <div className="row align-items-center g-3">
                        <div className="col-lg-7">
                            <h3 className="fw-bold mb-1">{t.banner_h}</h3>
                            <p className="text-white-50 mb-0">{t.banner_p}</p>
                        </div>
                        <div className="col-lg-5">
                            <form className="input-group input-group-lg" onSubmit={e => e.preventDefault()}>
                                <span className="input-group-text bg-dark text-white border-secondary"><Mail size={18} /></span>
                                <input type="email" className="form-control bg-dark text-white border-secondary" placeholder={t.email_ph} required />
                                <button className="btn btn-light text-dark fw-semibold" type="submit">{t.cta_join}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}