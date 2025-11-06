"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Building2 } from "lucide-react";

import IPhonePNTA from "./IPhonePNTA";
import { subscribeBar } from "../lib/subscribeBar";
import { Toast } from "./Toast";

export default function Hero({ t }) {
  const [email, setEmail] = useState("");
  const [barName, setBarName] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type = "info", duration = 2500) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), duration);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await subscribeBar(email, barName || null);
      setEmail("");
      setBarName("");
      showToast("🎉 Success! You’ve been added to our list.", "success");
    } catch (err) {
      console.error(err);
      if (err.code === "EMAIL_EXISTS") {
        showToast("⚠️ This email is already subscribed.", "error");
      } else {
        showToast("❌ Something went wrong. Please try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="hero" className="pt-4 pt-md-5 py-5 py-md-6">
      <Toast message={toast.message} type={toast.type} />

      <div className="container">
        <div className="row align-items-center g-5 pb-5">
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

              {/* NEW WAITLIST CARD */}
              <form className="mt-4" onSubmit={handleSubmit}>
                <div
                  className="rounded-4 border border-secondary-subtle shadow-sm p-3 p-md-4"
                  style={{
                    maxWidth: 640,
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-white fw-semibold">
                      Join the waitlist for your bar
                    </span>
                    <span className="text-white-50 small d-none d-md-inline">
                      No spam. Just early access.
                    </span>
                  </div>

                  <div className="row g-3">
                    {/* Venue name */}
                    <div className="col-12 col-md-5">
                      <label className="form-label text-white-50 small mb-1">
                        Venue
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark text-white border-secondary">
                          <Building2 size={16} />
                        </span>
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-secondary"
                          placeholder="Enter your bar's name"
                          value={barName}
                          onChange={(e) => setBarName(e.target.value)}
                          style={{
                            fontSize: "0.95rem",
                            paddingTop: "0.75rem",
                            paddingBottom: "0.75rem",
                            color: "white",
                            caretColor: "white",
                          }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-12 col-md-7">
                      <label className="form-label text-white-50 small mb-1">
                        Contact email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark text-white border-secondary">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          className="form-control bg-dark text-white border-secondary"
                          placeholder="you@barname.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{
                            fontSize: "0.95rem",
                            paddingTop: "0.75rem",
                            paddingBottom: "0.75rem",
                            color: "white",
                            caretColor: "white",
                          }}
                        />
                      </div>
                    </div>
                  </div>



                  <button
                    className="btn btn-light text-dark fw-semibold w-100 mt-3 py-2"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (t.cta_loading ?? "Sending...") : t.cta_join}
                    <ArrowRight size={18} className="ms-1" />
                  </button>

                  <p className="text-white-50 small mb-0 mt-2 d-md-none">
                    No spam. Just early access.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>

          <div className="col-lg-6 d-flex">
            <div
              className="flex-grow-1 d-flex justify-content-center align-items-center"
              style={{
                minHeight: 480,
                borderRadius: 16,
                background: "transparent",
              }}
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
