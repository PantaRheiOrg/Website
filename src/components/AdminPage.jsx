"use client";

import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import {
    LogOut,
    RefreshCw,
    Shield,
    MapPin,
    Mail,
    Clock,
} from "lucide-react";

export default function AdminPage() {
    const [user, setUser] = useState(null);
    const [venues, setVenues] = useState([]);
    const [loadingVenues, setLoadingVenues] = useState(false);
    const [authLoading, setAuthLoading] = useState(true);
    const [error, setError] = useState("");

    // login form state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // watch auth state
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setAuthLoading(false);
        });
        return () => unsub();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email.trim(), password);
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error(err);
            setError("Invalid credentials. Please try again.");
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setVenues([]);
    };

    const fetchVenues = async () => {
        setLoadingVenues(true);
        setError("");
        try {
            const q = query(
                collection(db, "barSignups"),
                orderBy("createdAt", "desc")
            );
            const snapshot = await getDocs(q);
            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setVenues(list);
        } catch (err) {
            console.error(err);
            setError("Failed to load venues. Check Firestore rules & auth.");
        } finally {
            setLoadingVenues(false);
        }
    };

    // Simple helper for last signup label (purely UI)
    let lastSignupLabel = "—";
    if (venues.length > 0 && venues[0].createdAt?.toDate) {
        lastSignupLabel = venues[0].createdAt.toDate().toLocaleString();
    }

    if (authLoading) {
        return (
            <div
                className="min-vh-100 d-flex justify-content-center align-items-center text-white"
                style={{
                    background:
                        "radial-gradient(circle at top, #1f2937 0, #020617 55%, #000 100%)",
                }}
            >
                <div className="text-center">
                    <div className="spinner-border text-light mb-3" role="status" />
                    <div className="text-white-50 small">Loading admin…</div>
                </div>
            </div>
        );
    }

    // If not logged in → login screen
    if (!user) {
        return (
            <div
                className="min-vh-100 d-flex justify-content-center align-items-center text-white px-3"
                style={{
                    background:
                        "radial-gradient(circle at top, #1f2937 0, #020617 55%, #000 100%)",
                }}
            >
                <div className="w-100" style={{ maxWidth: 420 }}>
                    <div className="mb-4 text-center">
                        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-black bg-opacity-50 border border-success border-opacity-50">
                            <Shield size={16} />
                            <span className="small text-white-50">PNTA Admin Access</span>
                        </div>
                        <h1 className="h3 fw-semibold mt-3 mb-1">Sign in to dashboard</h1>
                        <p className="text-white-50 small mb-0">
                            Restricted area for internal use. Use your admin credentials.
                        </p>
                    </div>

                    <div
                        className="p-4 rounded-4 border border-secondary-subtle shadow"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.85))",
                            backdropFilter: "blur(18px)",
                        }}
                    >
                        <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                            <div>
                                <label className="form-label text-white-50 small mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control bg-dark text-white border-secondary"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@pnta.app"
                                    required
                                />
                            </div>

                            <div>
                                <label className="form-label text-white-50 small mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control bg-dark text-white border-secondary"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            {error && (
                                <div className="text-danger small mt-1">{error}</div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-light fw-semibold mt-2 w-100"
                            >
                                Sign in
                            </button>
                        </form>

                        <p className="text-white-50 small mt-3 mb-0 text-center">
                            Dashboard shows all venues that joined the PNTA waitlist.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Logged in → dashboard
    return (
        <div
            className="min-vh-100 text-white"
            style={{
                background:
                    "radial-gradient(circle at top, #1f2937 0, #020617 55%, #000 100%)",
            }}
        >
            {/* Top nav */}
            <nav className="border-bottom border-secondary-subtle py-3 px-3 px-md-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle"
                        style={{
                            width: 32,
                            height: 32,
                            background:
                                "linear-gradient(135deg, rgba(34,197,94,0.9), rgba(59,130,246,0.9))",
                        }}
                    >
                        <span className="fw-bold" style={{ fontSize: 16 }}>
                            P
                        </span>
                    </div>
                    <div>
                        <div className="small fw-semibold">PNTA Admin</div>
                        <div className="small text-white-50">Venue waitlist dashboard</div>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                    <span className="text-white-50 small d-none d-md-inline">
                        {user.email}
                    </span>
                    <button
                        className="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
                        onClick={handleLogout}
                    >
                        <LogOut size={14} />
                        <span>Log out</span>
                    </button>
                </div>
            </nav>

            {/* Main content */}
            <main className="container py-4 py-md-5">
                {/* Header + stats */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-4">
                    <div>
                        <h2 className="h3 fw-semibold mb-1">Signed-up venues</h2>
                        <p className="text-white-50 small mb-0">
                            View all bars and venues that joined the PNTA waitlist.
                        </p>
                    </div>

                    <div className="d-flex flex-wrap gap-2">
                        <button
                            className="btn btn-outline-light btn-sm d-flex align-items-center gap-1"
                            onClick={fetchVenues}
                            disabled={loadingVenues}
                        >
                            <RefreshCw size={14} />
                            <span>{loadingVenues ? "Refreshing…" : "Refresh list"}</span>
                        </button>
                    </div>
                </div>

                {/* KPI cards */}
                <div className="row g-3 mb-4">
                    <div className="col-12 col-md-4">
                        <div
                            className="p-3 rounded-4 border border-secondary-subtle h-100"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.85))",
                            }}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className="text-white-50 small">Total venues</span>
                                <MapPin size={16} className="text-success" />
                            </div>
                            <div className="h3 mb-0">{venues.length}</div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div
                            className="p-3 rounded-4 border border-secondary-subtle h-100"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.85))",
                            }}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className="text-white-50 small">Last signup</span>
                                <Clock size={16} className="text-info" />
                            </div>
                            <div className="small text-white">
                                {lastSignupLabel}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div
                            className="p-3 rounded-4 border border-secondary-subtle h-100"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.85))",
                            }}
                        >
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className="text-white-50 small">Data source</span>
                                <Mail size={16} className="text-warning" />
                            </div>
                            <div className="small text-white-50">
                                Pulled from <code>barSignups</code> collection in Firestore.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Errors */}
                {error && (
                    <div className="alert alert-danger py-2 small">{error}</div>
                )}

                {/* Empty / loading states */}
                {loadingVenues && venues.length === 0 && (
                    <div className="text-white-50">Loading venues…</div>
                )}

                {!loadingVenues && venues.length === 0 && (
                    <div className="text-white-50">
                        No venues yet. Once bars sign up through the landing page, they’ll
                        appear here.
                    </div>
                )}

                {/* Table */}
                {venues.length > 0 && (
                    <div
                        className="mt-3 rounded-4 border border-secondary-subtle overflow-hidden"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))",
                        }}
                    >
                        <div className="table-responsive">
                            <table className="table table-dark table-hover table-sm align-middle mb-0">
                                <thead>
                                    <tr className="text-white-50 small">
                                        <th scope="col">Venue</th>
                                        <th scope="col">Email</th>
                                        <th scope="col" style={{ width: "25%" }}>
                                            Signed up
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {venues.map((v) => {
                                        let created = "";
                                        if (v.createdAt?.toDate) {
                                            created = v.createdAt.toDate().toLocaleString();
                                        }
                                        return (
                                            <tr key={v.id}>
                                                <td>
                                                    <div className="fw-semibold">
                                                        {v.barName || "—"}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex flex-column">
                                                        <span>{v.email}</span>
                                                    </div>
                                                </td>
                                                <td className="text-white-50 small">
                                                    {created || "—"}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
