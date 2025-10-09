import React from 'react'
import { Mail, Smartphone, BadgePercent } from 'lucide-react'
export default function HowItWorks({ t }) {
    const steps = [
        { t: t.step1_t, d: t.step1_d, Icon: Mail },
        { t: t.step2_t, d: t.step2_d, Icon: Smartphone },
        { t: t.step3_t, d: t.step3_d, Icon: BadgePercent }
    ]
    return (
        <section id="how" className="py-5 py-md-6">
            <div className="container">
                <h2 className="fw-bold mb-3">{t.how_heading}</h2>
                <div className="row g-3">
                    {steps.map((s, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="d-flex align-items-center gap-2 mb-2"><span className="badge rounded-pill bg-light text-dark">{i + 1}</span><s.Icon size={18} /></div>
                                <h6 className="fw-semibold mb-1">{s.t}</h6>
                                <p className="text-white-50 small mb-0">{s.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}