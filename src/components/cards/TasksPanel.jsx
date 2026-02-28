import { useState } from "react";
import "./TasksPanel.css";

const PRIORITY_ICON = { critical: "🔴", warning: "🟡", low: "🟢" };

export default function TasksPanel({ tasks }) {
  const [items, setItems] = useState(tasks);

  const toggle = (id) => {
    setItems(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const open = items.filter(t => !t.done);
  const done = items.filter(t => t.done);

  return (
    <div className="tp card animate-in">
      <div className="tp__header">
        <div>
          <div className="tp__title">Tasks Due Today</div>
          <div className="tp__sub">{open.length} open · {done.length} completed</div>
        </div>
        <div className="tp__progress">
          <svg viewBox="0 0 36 36" width="48" height="48">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--border)" strokeWidth="3"/>
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--color-brand)" strokeWidth="3"
              strokeDasharray={`${(done.length/items.length)*100} 100`}
              strokeLinecap="round" transform="rotate(-90 18 18)"/>
          </svg>
          <div className="tp__progress-label">{Math.round((done.length/items.length)*100)}%</div>
        </div>
      </div>

      <div className="tp__list">
        {open.map((t, i) => (
          <div key={t.id} className={`tp__item tp__item--${t.priority}`} style={{ animationDelay: `${i*40}ms` }}>
            <button className="tp__checkbox" onClick={() => toggle(t.id)}>
              <div className="tp__checkbox-inner" />
            </button>
            <div className="tp__item-body">
              <div className="tp__item-title">{PRIORITY_ICON[t.priority]} {t.title}</div>
              <div className="tp__item-meta">
                <span>{t.patient}</span>
                <span className="tp__dot">·</span>
                <span>{t.assignee}</span>
                <span className="tp__dot">·</span>
                <span className={`tp__due ${t.due === "Today" && t.priority === "critical" ? "tp__due--urgent" : ""}`}>{t.due}</span>
              </div>
            </div>
          </div>
        ))}

        {done.length > 0 && (
          <>
            <div className="tp__divider">Completed</div>
            {done.map(t => (
              <div key={t.id} className="tp__item tp__item--done">
                <button className="tp__checkbox tp__checkbox--checked" onClick={() => toggle(t.id)}>
                  <div className="tp__checkbox-check">✓</div>
                </button>
                <div className="tp__item-body tp__item-body--done">
                  <div className="tp__item-title">{t.title}</div>
                  <div className="tp__item-meta"><span>{t.patient}</span></div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
