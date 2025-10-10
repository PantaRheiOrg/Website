// IPhonePNTAReal.jsx (polished PNTA screen)
import React from "react";
import { motion } from "framer-motion";
import { Users2, MapPin, Wifi, BatteryFull, Signal, Compass, Home, User } from "lucide-react";

/**
 * Realistic iPhone with refined PNTA app UI
 * Props:
 *  - city?: string  (default "Copenhagen")
 *  - width?: number (px, default 340)
 *  - className?: string
 */
export default function IPhonePNTAReal({ city = "Copenhagen", width = 340, className = "" }) {
  const w = width;
  const h = Math.round(w * 2);
  const r = 34;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
      style={{ display: "inline-block" }}
    >
      {/* chassis */}
      <div
        style={{
          width: w,
          height: h,
          borderRadius: r,
          background: "linear-gradient(145deg,#1a1b22 0%,#0f1016 45%,#242430 100%)",
          boxShadow: "0 20px 60px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,255,255,.07)",
          position: "relative",
          padding: 8,
        }}
      >
        {/* glass */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: r - 8,
            background:
              "radial-gradient(120% 120% at 15% 0%, rgba(125,211,252,.16), rgba(0,0,0,0))," +
              "radial-gradient(110% 120% at 100% 10%, rgba(244,114,182,.12), rgba(0,0,0,0)), #0b0c12",
            overflow: "hidden",
            position: "relative",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,.06)",
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: w * 0.4,
              height: 22,
              borderRadius: 12,
              background: "linear-gradient(180deg,rgba(0,0,0,.95),rgba(0,0,0,.75))",
              boxShadow: "0 8px 24px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.05)",
            }}
          />

          {/* STATUS BAR */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 16,
              right: 16,
              height: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "rgba(255,255,255,.65)",
              fontSize: 11,
              letterSpacing: .2,
            }}
          >
            <span>21:41</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Signal size={14} />
              <Wifi size={14} />
              <BatteryFull size={14} />
            </span>
          </div>

          {/* APP */}
          <div style={{ padding: 16, paddingTop: 46 }}>
            {/* header line */}
            <div
              style={{
                fontWeight: 600,
                fontSize: 13,
                color: "rgba(255,255,255,.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <span>Tonight in {city}</span>
              <span
                className="badge"
                style={{
                  background: "rgba(16,185,129,.15)",
                  color: "rgb(16,185,129)",
                  border: "1px solid rgba(16,185,129,.35)",
                }}
              >
                • Live
              </span>
            </div>

            {/* chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
              {["Vesterbro", "Nørrebro", "Waterfront"].map((c, i) => (
                <span
                  key={c}
                  className="badge rounded-pill"
                  style={
                    i === 0
                      ? { background: "#fff", color: "#111", border: "1px solid rgba(0,0,0,.1)" }
                      : {
                        background: "rgba(255,255,255,.04)",
                        color: "rgba(255,255,255,.85)",
                        border: "1px solid rgba(255,255,255,.12)",
                      }
                  }
                >
                  {c}
                </span>
              ))}
            </div>
            <MapImageCard
              title="Hot spots nearby"
              subtitle={`${city} • map preview`}
              src="https://pantarheiorg.github.io/Website/map.jpg"  // ← your image path
            //href="/maps/vesterbro"                      
            />
            {/* FEED CARDS */}
            <Card
              icon={<CircleAvatar />}
              title="Bar is heating up…"
              subtitle={`${city} • craft • 5m`}
              right={<GoButton />}
            />

            <Card
              icon={<CircleAvatar hue={285} />}
              title="Late-night drop"
              subtitle="VIP list • 15m"
              right={<GoButton />}
            />



            {/* home indicator */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 11,
                transform: "translateX(-50%)",
                width: 110,
                height: 4,
                borderRadius: 4,
                background: "rgba(255,255,255,.25)",
              }}
            />
          </div>
        </div>
        {/* Bottom nav */}
        <nav
          className="d-flex justify-content-between align-items-center px-4 py-2 "
          style={{
            position: "absolute",

            left: 9,
            right: 9,
            bottom: 33,
            background: "rgba(255,255,255,.1)",
            border: "1px solid rgba(255,255,255,0)",
            backdropFilter: "blur(8px)",
          }}

        >
          <NavIcon label="Home" active Icon={Home} />
          <NavIcon label="Explore" Icon={Compass} />
          <NavIcon label="Circle" Icon={Users2} />
          <NavIcon label="Profile" Icon={User} />
        </nav>
      </div>
    </motion.div>
  );
}

/* ---------- bits ---------- */

function Card({ icon, title, subtitle, right }) {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{
        padding: 12,
        borderRadius: 14,
        marginBottom: 10,
        backdropFilter: "blur(10px)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
        border: "1px solid rgba(255,255,255,.10)",
        boxShadow: "0 6px 18px rgba(0,0,0,.25)",
      }}
    >
      <div className="d-flex align-items-center" style={{ gap: 12, minWidth: 0 }}>
        {icon}
        <div style={{ minWidth: 0 }}>
          <div
            className="text-truncate"
            style={{ fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,.95)", maxWidth: 180 }}
          >
            {title}
          </div>
          <div
            className="text-truncate"
            style={{ fontSize: 12, color: "rgba(255,255,255,.55)", maxWidth: 200 }}
          >
            {subtitle}
          </div>
        </div>
      </div>
      {right}
    </div>
  );
}

function CircleAvatar({ hue = 165 }) {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: `conic-gradient(from 45deg, hsl(${hue} 85% 60%), #7e22ce, #22d3ee, hsl(${hue} 85% 60%))`,
        boxShadow: "inset 0 0 10px rgba(0,0,0,.25)",
      }}
    />
  );
}

function GoButton() {
  return (
    <button
      className="btn btn-sm"
      style={{
        color: "#e6ebff",
        borderRadius: 999,
        border: "1px solid rgba(230,235,255,.45)",
        background:
          "radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,.08), rgba(255,255,255,.02))",
        width: 44,
        height: 34,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Go
    </button>
  );
}

function NavIcon({ label, Icon, active }) {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ color: active ? "#ffffff" : "rgba(255,255,255,.6)", fontSize: 10 }}
    >
      <Icon size={17} />
      <span className="mt-1">{label}</span>
    </div>
  );
}

function MapImageCard({
  title = "Explore nearby",
  subtitle = "Map snapshot",
  src,
  alt = "Map snapshot",
  height = 160,
  rounded = 14,
  href,
}) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: rounded,
        overflow: "hidden",
        marginBottom: 10,
        border: "1px solid rgba(255,255,255,.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.1))",
        boxShadow: "0 6px 18px rgba(0,0,0,.30)",
        backdropFilter: "blur(10px)",
        cursor: href ? "pointer" : "default",
      }}
      onClick={() => href && (window.location.href = href)}
      role={href ? "link" : undefined}
      aria-label={href ? title : undefined}
    >
      {/* header */}
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ padding: 12 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34, height: 34, borderRadius: 8,
              display: "grid", placeItems: "center",
              background: "conic-gradient(from 45deg, #22d3ee, #7e22ce, #22d3ee)",
              boxShadow: "inset 0 0 10px rgba(0,0,0,.25)",
            }}
          >
            <MapPin size={18} color="white" />
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,.95)" }}>
              {title}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>
              {subtitle}
            </div>
          </div>
        </div>
        <GoButton />
      </div>

      {/* image area */}
      <div style={{ width: "100%", height, position: "relative" }}>
        {src ? (
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              filter: "saturate(1.5) brightness(1) contrast(1.05)", // subtle dark mode polish
            }}
            loading="lazy"
          />
        ) : (
          // graceful placeholder (shimmer)
          <div
            aria-label="Map placeholder"
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.12), rgba(255,255,255,.06))",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.2s linear infinite",
            }}
          />
        )}

        {/* dark gradient to keep text legible + match app aesthetic */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.35) 100%)",
          }}
        />
      </div>

      {/* polish overlay */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute", inset: 0,
          background:
            "radial-gradient(100% 60% at 50% 0%, rgba(11,12,18,.22), rgba(11,12,18,0))",
        }}
      />

      {/* local keyframes for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
