import React, { useState } from 'react'
export default function FAQ({ t }) {
    const [open, setOpen] = useState(-1)
    return (
        <section id="faq" className="py-5 py-md-6">
            <div className="container">
                <h3 className="fw-bold mb-3">{t.faq_title}</h3>
                <div className="row g-3">
                    {t.qa.map((item, idx) => (
                        <div className="col-md-6" key={idx}>
                            <div className="rounded-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <button className="w-100 text-start p-4 btn" onClick={() => setOpen(open === idx ? -1 : idx)}>
                                    <div className="fw-semibold">{item.q}</div>
                                </button>
                                <div className={`px-4 pb-4 ${open === idx ? '' : 'd-none'}`}>
                                    <p className="text-white-50 mb-0">{item.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}