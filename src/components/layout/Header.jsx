import { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ clinic, user, activeTab, onTabChange, alertCount, onLogout }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const tabs = ["Overview", "Patients", "Care Gaps", "Alerts", "Workload"];

  return (
    <header className="cp-header">
      <div className="cp-header__left">
        <div className="cp-header__logo">
          <div className="cp-header__logo-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" fill="#3B82F6" opacity="0.9"/>
            </svg>
          </div>
          <div>
            <div className="cp-header__brand">Care<span>Pulse</span></div>
            <div className="cp-header__clinic">{clinic}</div>
          </div>
        </div>
      </div>

      <nav className="cp-header__nav">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`cp-header__nav-item ${activeTab === tab ? "cp-header__nav-item--active" : ""}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
            {tab === "Alerts" && alertCount > 0 && (
              <span className="cp-header__alert-badge">{alertCount}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="cp-header__right">
        <div className="cp-header__time">
          {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          <span className="cp-header__date">
            {time.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
        </div>
        <div className="cp-header__user">
          <div className="cp-header__avatar">{user.avatar}</div>
          <div className="cp-header__user-info">
            <div className="cp-header__user-name">{user.name}</div>
            <div className="cp-header__user-role">{user.role}</div>
          </div>
        </div>
        {onLogout && (
          <button className="cp-header__logout" onClick={onLogout}>Sign out</button>
        )}
      </div>
    </header>
  );
}
