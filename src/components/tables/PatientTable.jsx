import { useState } from "react";
import "./PatientTable.css";

const RISK_CONFIG = {
  high:   { label: "High Risk",   cls: "risk-high"   },
  medium: { label: "Med Risk",    cls: "risk-medium"  },
  low:    { label: "Low Risk",    cls: "risk-low"     },
};
const STATUS_CONFIG = {
  critical: { cls: "badge-critical", label: "Critical" },
  warning:  { cls: "badge-warning",  label: "Warning"  },
  stable:   { cls: "badge-stable",   label: "Stable"   },
};

export default function PatientTable({ patients }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = patients.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.condition.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.risk === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="pt card animate-in">
      <div className="pt__header">
        <div>
          <div className="pt__title">Patient List</div>
          <div className="pt__sub">{filtered.length} of {patients.length} patients shown</div>
        </div>
        <div className="pt__controls">
          <input
            className="pt__search"
            placeholder="Search patients..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="pt__filters">
            {["all","high","medium","low"].map(f => (
              <button key={f} className={`pt__filter-btn ${filter === f ? "pt__filter-btn--active" : ""}`} onClick={() => setFilter(f)}>
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt__table-wrap">
        <table className="pt__table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Condition</th>
              <th>Risk</th>
              <th>Status</th>
              <th>Care Gaps</th>
              <th>Last Seen</th>
              <th>Assigned To</th>
              <th>Next Due</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={p.id} style={{ animationDelay: `${i * 40}ms` }} className="pt__row">
                <td>
                  <div className="pt__patient">
                    <div className="pt__patient-avatar">{p.name.split(" ").map(n=>n[0]).join("")}</div>
                    <div>
                      <div className="pt__patient-name">{p.name}</div>
                      <div className="pt__patient-id">{p.id} · Age {p.age}</div>
                    </div>
                  </div>
                </td>
                <td><span className="pt__condition">{p.condition}</span></td>
                <td><span className={`risk-pill ${RISK_CONFIG[p.risk].cls}`}>● {RISK_CONFIG[p.risk].label}</span></td>
                <td><span className={`badge ${STATUS_CONFIG[p.status].cls}`}>{STATUS_CONFIG[p.status].label}</span></td>
                <td>
                  <div className="pt__gaps">
                    <span className={`pt__gap-count ${p.gaps > 2 ? "pt__gap-count--high" : p.gaps > 0 ? "pt__gap-count--med" : "pt__gap-count--none"}`}>
                      {p.gaps}
                    </span>
                    <div className="pt__gap-bar">
                      {Array.from({length: 5}).map((_, i) => (
                        <div key={i} className={`pt__gap-pip ${i < p.gaps ? "pt__gap-pip--filled" : ""} ${p.gaps > 3 ? "pt__gap-pip--critical" : p.gaps > 1 ? "pt__gap-pip--warn" : ""}`} />
                      ))}
                    </div>
                  </div>
                </td>
                <td><span className="pt__last-seen">{p.lastSeen}</span></td>
                <td><span className="pt__assignee">{p.assignedTo}</span></td>
                <td><span className={`pt__next-due ${p.status === "critical" ? "pt__next-due--urgent" : ""}`}>{p.nextDue}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
