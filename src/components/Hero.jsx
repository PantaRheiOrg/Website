import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import IPhonePNTA from "./IPhonePNTA";

export default function Hero({ t }) {


  return (
    <section id="hero" className="pt-4 pt-md-5 py-5 py-md-6">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge rounded-pill text-bg-dark border border-success-subtle px-3 py-2">
                {t.badge}
              </span>
              <h1
                className="display-4 fw-bold mt-3"
                style={{ lineHeight: 1.05 }}
              >
                {t.hero_l1}
                <br />
                {t.hero_l2_a}{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#7dd3fc,#f472b6)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t.hero_l2_b}
                </span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg,#f59e0b,#ef4444)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {t.hero_l2_c}
                </span>
              </h1>
              <p className="lead text-white-50 mt-3">{t.hero_sub}</p>
              <form
                className="d-flex align-items-center gap-2 mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div
                  className="input-group input-group-lg"
                  style={{ maxWidth: 520 }}
                >
                  <span className="input-group-text bg-dark text-white border-secondary">
                    <Mail size={18} />
                  </span>
                  <input
                    type="email"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder={t.email_ph}
                    required
                  />
                  <button
                    className="btn btn-light text-dark fw-semibold rounded-end"
                    type="submit"
                  >
                    {t.cta_join} <ArrowRight size={18} className="ms-1" />
                  </button>
                </div>
              </form>
              <div className="d-flex gap-3 mt-3 text-white-50 small">
                {t.bullets.map((b, i) => (
                  <span key={i}>• {b}</span>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 d-flex">
            <div
              className="flex-grow-1 d-flex justify-content-center align-items-center"
              style={{ minHeight: 480, borderRadius: 16, background: "transparent" }}
            >
              <IPhonePNTA width={300} city="Copenhagen" />
            </div>
          </div>

        </div>
        <div className="text-center text-white-50 small mt-5">
          <span className="me-3">Featured soon in</span>
          <span className="mx-3">—</span>
          <span className="mx-3">HYPE NIGHT</span>
          <span className="mx-3">City Sips</span>
          <span className="mx-3">Urban Guide</span>
          <span className="mx-3">Mixology Mag</span>
        </div>
      </div>
    </section>
  );
}
