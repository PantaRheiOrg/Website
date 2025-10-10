import React from 'react'
import { MapPin, Users2, Calendar, Star } from 'lucide-react'
const Card = ({ icon: Icon, title, desc }) => (
    <div className="col-md-6 col-lg-3">
        <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.06)' }}>
                <Icon size={20} />
            </div>
            <h6 className="fw-semibold mb-1">{title}</h6>
            <p className="text-white-50 mb-0 small">{desc}</p>
        </div>
    </div>
)
export default function Features({ t }) {
    return (
        <section id="features" className="py-5 py-md-6">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                        <h2 className="fw-bold">{t.features_heading}</h2>
                        <p className="text-white-50 m-0">{t.features_sub}</p>
                    </div>
                    <a href="#waitlist" className="btn btn-outline-light rounded-pill d-none d-md-inline-flex">Get early access</a>
                </div>
                <div className="row g-3">
                    <Card icon={MapPin} title={t.f1_t} desc={t.f1_d} />
                    <Card icon={Users2} title={t.f2_t} desc={t.f2_d} />
                    <Card icon={Calendar} title={t.f3_t} desc={t.f3_d} />
                    <Card icon={Star} title={t.f4_t} desc={t.f4_d} />
                </div>
            </div>
        </section>
    )
}