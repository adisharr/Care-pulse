import { useState } from "react";
import "./styles/global.css";
import "./App.css";
import Login from "./components/layout/Login";
import Signup from "./components/layout/Signup";
import Header from "./components/layout/Header";
import KpiCards from "./components/cards/KpiCards";
import PatientTable from "./components/tables/PatientTable";
import AlertsFeed from "./components/cards/AlertsFeed";
import CareGaps from "./components/cards/CareGaps";
import StaffWorkload from "./components/cards/StaffWorkload";
import TasksPanel from "./components/cards/TasksPanel";
import {
  CLINIC_NAME, kpiMetrics,
  patients, alerts, careGaps, gapsByType, staffWorkload, tasks,
} from "./data/clinicalData";

export default function App() {
  const [user, setUser]           = useState(null);
  const [screen, setScreen]       = useState("login"); // "login" | "signup"
  const [activeTab, setActiveTab] = useState("Overview");

  // ── Screens before dashboard ──
  if (!user) {
    if (screen === "signup") {
      return (
        <Signup
          onSignup={(newUser) => { setUser(newUser); setScreen("login"); }}
          onBackToLogin={() => setScreen("login")}
        />
      );
    }
    return (
      <Login
        onLogin={setUser}
        onGoToSignup={() => setScreen("signup")}
      />
    );
  }

  // ── Dashboard ──
  return (
    <div className="app">
      <Header
        clinic={CLINIC_NAME}
        user={{ name: user.name, role: user.role, avatar: user.avatar }}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        alertCount={alerts.filter(a => a.priority === "critical").length}
        onLogout={() => { setUser(null); setScreen("login"); setActiveTab("Overview"); }}
      />

      <main className="app__main">
        <KpiCards metrics={kpiMetrics} />

        {activeTab === "Overview" && (
          <div className="app__overview">
            <div className="app__col app__col--wide">
              <AlertsFeed alerts={alerts.slice(0, 4)} />
              <CareGaps gaps={careGaps.slice(0, 5)} gapsByType={gapsByType} />
            </div>
            <div className="app__col app__col--narrow">
              <TasksPanel tasks={tasks} />
              <StaffWorkload staff={staffWorkload} />
            </div>
          </div>
        )}

        {activeTab === "Patients" && <PatientTable patients={patients} />}

        {activeTab === "Care Gaps" && (
          <div className="app__single">
            <CareGaps gaps={careGaps} gapsByType={gapsByType} />
          </div>
        )}

        {activeTab === "Alerts" && (
          <div className="app__single">
            <AlertsFeed alerts={alerts} />
          </div>
        )}

        {activeTab === "Workload" && (
          <div className="app__overview">
            <div className="app__col app__col--wide">
              <StaffWorkload staff={staffWorkload} />
            </div>
            <div className="app__col app__col--narrow">
              <TasksPanel tasks={tasks} />
            </div>
          </div>
        )}
      </main>

      <footer className="app__footer">
        <span>CarePulse · Clinical Intelligence · {CLINIC_NAME}</span>
        <span>
          Signed in as {user.name} ·{" "}
          <button className="app__logout" onClick={() => { setUser(null); setScreen("login"); setActiveTab("Overview"); }}>
            Sign out
          </button>
        </span>
      </footer>
    </div>
  );
}
