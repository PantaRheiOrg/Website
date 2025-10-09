import React from 'react'
const Card = ({ name, area }) => (
    <div className="col-12 col-sm-6 col-lg-3">
        <div className="rounded-4 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ height: 150, background: 'linear-gradient(135deg, #6d28d9 0%, #0ea5e9 50%, #ef4444 100%)' }} />
            <div className="d-flex align-items-center justify-content-between p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div>
                    <div className="fw-semibold small">{name}</div>
                    <div className="text-white-50 small">{area}</div>
                </div>
                <button className="btn btn-sm btn-outline-light rounded-pill">Follow</button>
            </div>
        </div>
    </div>
)
export default function Venues({ t }) {
    const items = [
        ['Neon Fox', 'Vesterbro'], ['Tonic & Tide', 'Nørrebro'], ['Velvet Room', 'City Center'], ['Dockside 12', 'Waterfront']
    ]
    return (
        <section id="venues" className="py-5 py-md-6">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h3 className="fw-bold m-0">{t.venues_heading}</h3>
                    <a className="link-light link-opacity-75-hover" href="#">{t.see_more}</a>
                </div>
                <div className="row g-3">{items.map(([n, a], i) => <Card key={i} name={n} area={a} />)}</div>
            </div>
        </section>
    )
}