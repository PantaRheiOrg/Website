import React from "react";

export default function BusinessCTA({ content }) {
  return (
    <section className="py-5" id="cta">
      <div className="container">
        <div className="p-5 rounded-4 border border-secondary-subtle text-center" style={{ background: "rgba(255,255,255,0.02)" }}>
          <h2 className="display-6 fw-semibold mb-3">{content.cta_heading}</h2>
          <p className="text-white-50 lead mb-4">{content.cta_subheading}</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a className="btn btn-light btn-lg rounded-pill px-4" href={`mailto:${content.cta_primary_email}`}>
              {content.cta_primary}
            </a>
            <a className="btn btn-outline-light btn-lg rounded-pill px-4" href={content.cta_secondary_link} target="_blank" rel="noreferrer">
              {content.cta_secondary}
            </a>
          </div>
          <p className="text-white-50 small mt-4 mb-0">{content.cta_disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
