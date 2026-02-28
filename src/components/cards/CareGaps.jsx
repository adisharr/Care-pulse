import { useState } from "react";
import "./CareGaps.css";

const PRIORITY_CONFIG = {
  critical: { cls: "badge-critical", label: "Critical" },
  warning:  { cls: "badge-warning",  label: "Warning"  },
};
const STATUS_CONFIG = {
  "open":        { cls: "cg__status--open",        label: "Open"        },
  "in-progress": { cls: "cg__status--in-progress", label: "In Progress" },
  "closed":      { cls: "cg__status--closed",       label: "Closed"      },
};
const TYPE_ICONS = { "Lab": "🧪", "Procedure": "🩺", "Referral": "📨", "Screening": "📝", "Preventive": "💉" };

export default function CareGaps({ gaps, gapsByType }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? gaps : gaps.filter(g => g.priority === filter);

  return (
    <div className="cg card animate-in">
      <div className="cg__header">
        <div>
          <div className="cg__title">Open Care Gaps</div>
          <div className="cg__sub">{gaps.length} total · {gaps.filter(g=>g.priority==="critical").length} critical</div>
        </div>
        <div className="cg__filters">
          {["all","critical","warning"].map(f => (
            <button key={f} className={`cg__filter ${filter===f?"cg__filter--active":""}`} onClick={()=>setFilter(f)}>
              {f.charAt(0).toUpperCase()+f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Gap type summary */}
      <div className="cg__summary">
        {gapsByType.map(g => (
          <div key={g.type} className="cg__summary-item">
            <div className="cg__summary-bar-wrap">
              <div className="cg__summary-bar" style={{ width:`${(g.count/14)*100}%`, background: g.color }} />
            </div>
            <div className="cg__summary-label">{g.type}</div>
            <div className="cg__summary-count" style={{ color: g.color }}>{g.count}</div>
          </div>
        ))}
      </div>

      <div className="cg__list">
        {filtered.map((g, i) => (
          <div key={g.id} className={`cg__item cg__item--${g.priority}`} style={{ animationDelay: `${i*40}ms` }}>
            <div className="cg__type-icon">{TYPE_ICONS[g.type] || "📋"}</div>
            <div className="cg__item-body">
              <div className="cg__item-top">
                <span className="cg__measure">{g.measure}</span>
                <span className={`badge ${PRIORITY_CONFIG[g.priority]?.cls || "badge-info"}`}>
                  {PRIORITY_CONFIG[g.priority]?.label || g.priority}
                </span>
              </div>
              <div className="cg__item-meta">
                <span className="cg__patient">{g.patient}</span>
                <span className="cg__dot">·</span>
                <span className="cg__type">{g.type}</span>
                <span className="cg__dot">·</span>
                <span className="cg__assignee">{g.assignee}</span>
              </div>
            </div>
            <div className="cg__right">
              <div className={`cg__due ${g.dueDate.includes("Overdue") ? "cg__due--overdue" : ""}`}>{g.dueDate}</div>
              <div className={`cg__status ${STATUS_CONFIG[g.status]?.cls}`}>{STATUS_CONFIG[g.status]?.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
