import React from "react";
import { Clock, MessageSquare, TrendingUp, Sparkles } from "lucide-react";

const icons = {
  revenue: TrendingUp,
  insights: Clock,
  communication: MessageSquare,
};

export default function BusinessHighlights({ content }) {
  return (
    <section className="py-5" id="solutions">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark border border-secondary-subtle text-uppercase">
            {content.highlights_badge}
          </span>
          <h2 className="display-6 fw-semibold mt-3">{content.highlights_heading}</h2>
          <p className="text-white-50 lead">{content.highlights_subheading}</p>
        </div>
        <div className="row g-4">
          {content.highlights.map((item) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <div key={item.title} className="col-lg-4">
                <div className="h-100 p-4 rounded-4 border border-secondary-subtle" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="bg-dark bg-opacity-50 rounded-circle d-inline-flex p-3 mb-3">
                    <Icon className="text-info" />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-white-50 mb-0">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
