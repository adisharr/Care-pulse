import "./AlertsFeed.css";

const TYPE_ICONS = {
  "Lab Result": "🧪", "Lab Trend": "📉", "Engagement": "📞",
  "Care Gap": "📋", "Screening": "📝", "Follow-up": "🔄",
};

export default function AlertsFeed({ alerts }) {
  return (
    <div className="af card animate-in">
      <div className="af__header">
        <div>
          <div className="af__title">Critical Alerts</div>
          <div className="af__sub">Requires immediate attention</div>
        </div>
        <div className="af__live">
          <span className="af__live-dot" />
          <span>Live</span>
        </div>
      </div>

      <div className="af__list">
        {alerts.map((a, i) => (
          <div key={a.id} className={`af__item af__item--${a.priority}`} style={{ animationDelay: `${i * 50}ms` }}>
            <div className="af__item-icon">{TYPE_ICONS[a.type] || "⚠️"}</div>
            <div className="af__item-body">
              <div className="af__item-top">
                <span className="af__patient">{a.patient}</span>
                <span className="af__age">Age {a.age}</span>
                <span className={`badge ${a.priority === "critical" ? "badge-critical" : "badge-warning"}`}>
                  {a.type}
                </span>
              </div>
              <div className="af__alert-text">{a.alert}</div>
              <div className="af__item-bottom">
                <span className="af__time">{a.time}</span>
              </div>
            </div>
            <button className="af__action-btn">{a.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
