import React from "react";
import { Quote } from "lucide-react";

export default function BusinessTestimonials({ content }) {
  return (
    <section className="py-5" id="testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge rounded-pill text-bg-dark border border-secondary-subtle text-uppercase">
            {content.testimonials_badge}
          </span>
          <h2 className="display-6 fw-semibold mt-3">{content.testimonials_heading}</h2>
          <p className="text-white-50 lead">{content.testimonials_subheading}</p>
        </div>
        <div className="row g-4">
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.name} className="col-lg-4">
              <div className="h-100 p-4 rounded-4 border border-secondary-subtle position-relative" style={{ background: "rgba(255,255,255,0.02)" }}>
                <Quote className="position-absolute top-0 end-0 m-3 text-warning" />
                <p className="text-white-50 mb-4">“{testimonial.quote}”</p>
                <div>
                  <p className="mb-0 fw-semibold text-white">{testimonial.name}</p>
                  <span className="text-white-50 small">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
