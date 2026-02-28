import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { workloadTrend } from "../../data/clinicalData";
import "./StaffWorkload.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="sw__tooltip">
      <div className="sw__tooltip-label">{label}</div>
      {payload.map(p => (
        <div key={p.dataKey} className="sw__tooltip-row">
          <span style={{ color: p.fill }}>{p.name}</span>
          <span>{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export default function StaffWorkload({ staff }) {
  return (
    <div className="sw card animate-in">
      <div className="sw__title">Staff Workload</div>
      <div className="sw__sub">Role-based task distribution & capacity</div>

      {/* Staff cards */}
      <div className="sw__staff-list">
        {staff.map((s, i) => {
          const overloadPct = Math.min((s.tasksOpen / 20) * 100, 100);
          return (
            <div key={s.name} className="sw__staff-card" style={{ animationDelay: `${i*80}ms` }}>
              <div className="sw__staff-top">
                <div className="sw__staff-avatar" style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}>
                  {s.initials}
                </div>
                <div className="sw__staff-info">
                  <div className="sw__staff-name">{s.name}</div>
                  <div className="sw__staff-role">{s.role}</div>
                </div>
                {s.tasksOverdue > 0 && (
                  <div className="sw__overdue-badge">{s.tasksOverdue} overdue</div>
                )}
              </div>

              <div className="sw__staff-stats">
                <div className="sw__stat">
                  <div className="sw__stat-val">{s.patients}</div>
                  <div className="sw__stat-label">Patients</div>
                </div>
                <div className="sw__stat">
                  <div className="sw__stat-val" style={{ color: s.tasksOpen > 12 ? "var(--color-critical)" : "var(--color-warning)" }}>{s.tasksOpen}</div>
                  <div className="sw__stat-label">Open Tasks</div>
                </div>
                <div className="sw__stat">
                  <div className="sw__stat-val">{s.gapsOwned}</div>
                  <div className="sw__stat-label">Care Gaps</div>
                </div>
              </div>

              <div className="sw__load-bar-wrap">
                <div className="sw__load-label">
                  <span>Workload</span>
                  <span>{Math.round(overloadPct)}%</span>
                </div>
                <div className="sw__load-bar">
                  <div className="sw__load-fill" style={{
                    width: `${overloadPct}%`,
                    background: overloadPct > 80 ? "var(--color-critical)" : overloadPct > 60 ? "var(--color-warning)" : s.color
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trend chart */}
      <div className="sw__chart-title">7-Day Task Completion Trend</div>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={workloadTrend} margin={{ top: 4, right: 4, left: -24, bottom: 0 }} barSize={14} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: "var(--text-muted)", fontSize: 11, fontFamily: "DM Sans" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "var(--text-muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(15,22,35,0.04)" }} />
          <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: "11px", fontFamily: "DM Sans", paddingTop: "8px" }} />
          <Bar dataKey="tasks"     name="Assigned" fill="#BFDBFE" radius={[3,3,0,0]} />
          <Bar dataKey="completed" name="Completed" fill="#2563EB" radius={[3,3,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
