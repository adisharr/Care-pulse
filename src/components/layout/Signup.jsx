import { useState } from "react";
import "./Login.css";
import "./Signup.css";

const ROLES = [
  { value: "Physician",          label: "Physician",           desc: "Full patient access · Lab results · Care gap management" },
  { value: "Nurse Practitioner", label: "Nurse Practitioner",  desc: "Assigned patients · Task management · Outreach" },
  { value: "Care Manager",       label: "Care Manager / Admin", desc: "Staff workload · Clinic-wide view · Reports" },
];

function getInitials(name) {
  return name.trim().split(" ").filter(Boolean).map(n => n[0].toUpperCase()).slice(0, 2).join("");
}

export default function Signup({ onSignup, onBackToLogin }) {
  const [form, setForm] = useState({ name: "", email: "", role: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name     = "Full name is required";
    if (!form.email.includes("@")) e.email    = "Enter a valid email";
    if (!form.role)                e.role     = "Please select your role";
    if (form.password.length < 6)  e.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => {
      onSignup({
        name:     form.name.trim(),
        role:     form.role,
        email:    form.email,
        avatar:   getInitials(form.name),
        color:    "#2563EB",
      });
    }, 1400);
  };

  return (
    <div className="login">
      {/* Left panel — same as login */}
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
              <div className="login__clinic-name">Riverside Family Health</div>
            </div>
          </div>

          <div className="login__hero">
            <h1 className="login__headline">
              Join your<br/>
              care team.<br/>
              <em>Get started.</em>
            </h1>
            <p className="login__subtext">
              Create your account to access role-based clinical intelligence — patient risk, care gaps, and team workload, all in one place.
            </p>
          </div>

          <div className="login__stats">
            <div className="login__stat">
              <div className="login__stat-val">3</div>
              <div className="login__stat-label">Care Roles</div>
            </div>
            <div className="login__stat-divider" />
            <div className="login__stat">
              <div className="login__stat-val">142</div>
              <div className="login__stat-label">Active Patients</div>
            </div>
            <div className="login__stat-divider" />
            <div className="login__stat">
              <div className="login__stat-val">EHR</div>
              <div className="login__stat-label">Connected</div>
            </div>
          </div>

          <div className="login__left-footer">Powered by Ursamin Clinical Intelligence</div>
        </div>
      </div>

      {/* Right panel — signup form */}
      <div className="login__right">
        <div className="login__form-wrap">
          <div className="login__form-header">
            <h2 className="login__form-title">Create your account</h2>
            <p className="login__form-sub">Takes less than a minute</p>
          </div>

          <div className="su__fields">

            {/* Name */}
            <div className="su__field">
              <label className="login__label">Full Name</label>
              <input
                className={`login__input ${errors.name ? "login__input--error" : ""}`}
                placeholder="Dr. Jane Smith"
                value={form.name}
                onChange={e => set("name", e.target.value)}
              />
              {errors.name && <div className="su__error">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="su__field">
              <label className="login__label">Work Email</label>
              <input
                className={`login__input ${errors.email ? "login__input--error" : ""}`}
                type="email"
                placeholder="you@clinic.health"
                value={form.email}
                onChange={e => set("email", e.target.value)}
              />
              {errors.email && <div className="su__error">{errors.email}</div>}
            </div>

            {/* Role */}
            <div className="su__field">
              <label className="login__label">Your Role</label>
              <div className="su__roles">
                {ROLES.map(r => (
                  <button
                    key={r.value}
                    type="button"
                    className={`su__role-btn ${form.role === r.value ? "su__role-btn--active" : ""}`}
                    onClick={() => set("role", r.value)}
                  >
                    <div className="su__role-top">
                      <span className="su__role-label">{r.label}</span>
                      {form.role === r.value && <span className="su__role-check">✓</span>}
                    </div>
                    <div className="su__role-desc">{r.desc}</div>
                  </button>
                ))}
              </div>
              {errors.role && <div className="su__error">{errors.role}</div>}
            </div>

            {/* Password row */}
            <div className="su__field-row">
              <div className="su__field">
                <label className="login__label">Password</label>
                <input
                  className={`login__input ${errors.password ? "login__input--error" : ""}`}
                  type="password"
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={e => set("password", e.target.value)}
                />
                {errors.password && <div className="su__error">{errors.password}</div>}
              </div>
              <div className="su__field">
                <label className="login__label">Confirm Password</label>
                <input
                  className={`login__input ${errors.confirm ? "login__input--error" : ""}`}
                  type="password"
                  placeholder="Repeat password"
                  value={form.confirm}
                  onChange={e => set("confirm", e.target.value)}
                />
                {errors.confirm && <div className="su__error">{errors.confirm}</div>}
              </div>
            </div>

          </div>

          {/* Submit */}
          <button
            className={`login__btn ${loading ? "login__btn--loading" : ""}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <span className="login__spinner" /> : "Create Account →"}
          </button>

          {/* Back to login */}
          <div className="su__footer">
            Already have an account?{" "}
            <button className="su__link" onClick={onBackToLogin}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
