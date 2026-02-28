import "./KpiCards.css";

const COLOR_MAP = {
  critical: { bg: "var(--color-critical-bg)", text: "var(--color-critical)", border: "var(--color-critical-border)" },
  warning:  { bg: "var(--color-warning-bg)",  text: "var(--color-warning)",  border: "var(--color-warning-border)"  },
  info:     { bg: "var(--color-info-bg)",     text: "var(--color-info)",     border: "var(--color-info-border)"     },
  stable:   { bg: "var(--color-stable-bg)",   text: "var(--color-stable)",   border: "var(--color-stable-border)"   },
};

export default function KpiCards({ metrics }) {
  return (
    <div className="kpi-grid">
      {metrics.map((m, i) => {
        const c = COLOR_MAP[m.color] || COLOR_MAP.info;
        return (
          <div
            key={m.id}
            className="kpi-card card"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="kpi-card__top">
              <div className="kpi-card__icon" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                {m.icon}
              </div>
              <div className="kpi-card__delta" style={{ color: c.text }}>
                {m.delta}
              </div>
            </div>
            <div className="kpi-card__value" style={{ color: c.text }}>{m.value}</div>
            <div className="kpi-card__label">{m.label}</div>
            <div className="kpi-card__desc">{m.desc}</div>
            <div className="kpi-card__bar" style={{ background: c.border }}>
              <div className="kpi-card__bar-fill" style={{ background: c.text, width: "100%" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
