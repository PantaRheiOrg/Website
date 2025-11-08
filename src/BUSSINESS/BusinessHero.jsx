import React from "react";
import { Building2, Users, Sparkles } from "lucide-react";

export default function BusinessHero({ content }) {
  return (
    <section className="py-5" id="hero">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge rounded-pill text-bg-dark border border-secondary-subtle text-uppercase mb-3">
              {content.hero_badge}
            </span>
            <h1 className="display-4 fw-bold mb-3">{content.hero_title}</h1>
            <p className="lead text-white-50 mb-4">{content.hero_subtitle}</p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-light btn-lg rounded-pill px-4" href="#cta">
                {content.hero_cta_primary}
              </a>
              <a className="btn btn-outline-light btn-lg rounded-pill px-4" href="#solutions">
                {content.hero_cta_secondary}
              </a>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-5 text-white-50">
              {content.stats.map((item) => (
                <div key={item.label} className="d-flex flex-column">
                  <span className="h3 fw-bold text-white">{item.value}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-4 rounded-4 border border-secondary-subtle h-100" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-primary bg-opacity-25 text-primary rounded-circle p-3">
                  <Building2 />
                </div>
                <div>
                  <h5 className="mb-0 text-white">{content.hero_card_title}</h5>
                  <span className="text-white-50 small">{content.hero_card_subtitle}</span>
                </div>
              </div>
              <div className="border border-secondary-subtle rounded-4 p-3 mb-3 bg-dark bg-opacity-25">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="fw-semibold text-white">{content.hero_card_metric.title}</span>
                    <p className="text-white-50 small mb-0">{content.hero_card_metric.description}</p>
                  </div>
                  <Sparkles className="text-warning" />
                </div>
              </div>
              <div className="rounded-4 border border-secondary-subtle p-3 bg-dark bg-opacity-25">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <Users className="text-info" />
                  <div>
                    <p className="text-white mb-1 fw-semibold">{content.hero_card_customers.title}</p>
                    <p className="text-white-50 small mb-0">{content.hero_card_customers.description}</p>
                  </div>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  {content.hero_card_customers.tags.map((tag) => (
                    <span key={tag} className="badge rounded-pill text-bg-secondary text-uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
