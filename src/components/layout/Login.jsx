import { useState } from "react";
import "./Login.css";
import "./Signup.css";

const DEMO_ROLES = [
  {
    role: "Physician",
    name: "Dr. Nora Tim",
    email: "n.tim@rivera.health",
    password: "••••••••••",
    avatar: "SC",
    color: "#2563EB",
    desc: "Full patient access · Care gap management · Lab results",
  },
  {
    role: "Nurse Practitioner",
    name: "NP Smith",
    email: "m.smith@rivera.health",
    password: "••••••••••",
    avatar: "NT",
    color: "#059669",
    desc: "Assigned patients · Task management · Outreach",
  },
  {
    role: "Care Manager",
    name: "Admin — Dr.Sarah Collins ",
    email: "r.sarah@rivera.health",
    password: "••••••••••",
    avatar: "RP",
    color: "#7C3AED",
    desc: "Staff workload · Clinic-wide view · Reports",
  },
];

export default function Login({ onLogin, onGoToSignup }) {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const selectRole = (role) => {
    setSelected(role);
    setEmail(role.email);
    setPassword(role.password);
  };

  const handleLogin = () => {
    if (!selected) return;
    setLoading(true);
    setTimeout(() => {
      onLogin(selected);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="login">
      {/* Left panel */}
      <div className="login__left">
        <div className="login__left-content">
          <div className="login__logo">
            <div className="login__logo-icon">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="#3B82F6"/>
              </svg>
            </div>
            <div>
              <div className="login__brand">Care<span>Pulse</span></div>
              <div className="login__clinic-name">Rivera Family Health</div>
            </div>
          </div>

          <div className="login__hero">
            <h1 className="login__headline">
              Know what's due.<br/>
              For whom.<br/>
              <em>Right now.</em>
            </h1>
            <p className="login__subtext">
              Role-based clinical intelligence that surfaces care gaps, patient risk, and team workload — so your care team can focus on patients, not paperwork.
            </p>
          </div>

          <div className="login__stats">
            <div className="login__stat">
              <div className="login__stat-val">142</div>
              <div className="login__stat-label">Active Patients</div>
            </div>
            <div className="login__stat-divider" />
            <div className="login__stat">
              <div className="login__stat-val">34</div>
              <div className="login__stat-label">Open Care Gaps</div>
            </div>
            <div className="login__stat-divider" />
            <div className="login__stat">
              <div className="login__stat-val">7</div>
              <div className="login__stat-label">Critical Alerts</div>
            </div>
          </div>

          <div className="login__left-footer">
            Powered by Ursamin Clinical Intelligence
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="login__right">
        <div className="login__form-wrap">
          <div className="login__form-header">
            <h2 className="login__form-title">Sign in to CarePulse</h2>
            <p className="login__form-sub">Select your role to get started</p>
          </div>

          {/* Role selector */}
          <div className="login__roles">
            <div className="login__roles-label">Quick access — select your role</div>
            {DEMO_ROLES.map((r) => (
              <button
                key={r.role}
                className={`login__role-card ${selected?.role === r.role ? "login__role-card--active" : ""}`}
                onClick={() => selectRole(r)}
                style={{ "--role-color": r.color }}
              >
                <div className="login__role-avatar" style={{ background: `${r.color}20`, color: r.color, border: `1px solid ${r.color}30` }}>
                  {r.avatar}
                </div>
                <div className="login__role-info">
                  <div className="login__role-name">{r.name}</div>
                  <div className="login__role-badge" style={{ color: r.color }}>{r.role}</div>
                  <div className="login__role-desc">{r.desc}</div>
                </div>
                {selected?.role === r.role && (
                  <div className="login__role-check" style={{ color: r.color }}>✓</div>
                )}
              </button>
            ))}
          </div>

          <div className="login__divider"><span>or sign in manually</span></div>

          {/* Form fields */}
          <div className="login__fields">
            <div className="login__field">
              <label className="login__label">Email</label>
              <input
                className="login__input"
                type="email"
                placeholder="your@clinic.health"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="login__field">
              <label className="login__label">Password</label>
              <input
                className="login__input"
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            className={`login__btn ${!selected ? "login__btn--disabled" : ""} ${loading ? "login__btn--loading" : ""}`}
            onClick={handleLogin}
            disabled={!selected || loading}
          >
            {loading ? (
              <span className="login__spinner" />
            ) : (
              <>Sign In as {selected?.role || "…"} →</>
            )}
          </button>

          <div className="su__footer" style={{marginTop:"var(--space-3)"}}>New to CarePulse?{" "}<button className="su__link" onClick={onGoToSignup}>Create an account</button></div>
          <div className="login__hint">
            💡 This is a demo — click any role above to auto-fill and sign in
          </div>
        </div>
      </div>
    </div>
  );
}
