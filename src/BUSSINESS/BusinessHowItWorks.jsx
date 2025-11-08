import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function BusinessHowItWorks({ content }) {
  return (
    <section className="py-5" id="how">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="badge rounded-pill text-bg-dark border border-secondary-subtle text-uppercase">
              {content.how_badge}
            </span>
            <h2 className="display-6 fw-semibold mt-3 mb-3">{content.how_heading}</h2>
            <p className="text-white-50 lead">{content.how_subheading}</p>
          </div>
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
              {content.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="p-4 rounded-4 border border-secondary-subtle d-flex gap-3 align-items-start"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="bg-success bg-opacity-25 rounded-circle p-2 mt-1">
                    <CheckCircle2 className="text-success" />
                  </div>
                  <div>
                    <div className="text-white-50 small text-uppercase">{index + 1}.</div>
                    <h5 className="text-white mb-1">{step.title}</h5>
                    <p className="text-white-50 mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
