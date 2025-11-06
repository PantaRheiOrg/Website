"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import IPhonePNTA from "./IPhonePNTA";
import { subscribeBar } from "../lib/subscribeBar";
import { Toast } from "./Toast"; // 👈 import the toast component

export default function Hero({ t }) {
  const [email, setEmail] = useState("");
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
      await subscribeBar(email);
      setEmail("");
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
      {/* 🔥 Toast UI */}
      <Toast message={toast.message} type={toast.type} />

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
                onSubmit={handleSubmit}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="btn btn-light text-dark fw-semibold rounded-end"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (t.cta_loading ?? "Sending...") : t.cta_join}
                    <ArrowRight size={18} className="ms-1" />
                  </button>
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
      </div>
    </section>
  );
}
