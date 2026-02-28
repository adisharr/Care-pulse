// ─── CarePulse Clinical Mock Data ──────────────────────────────────────────

export const CLINIC_NAME = "Rivera Family Health";
export const CURRENT_USER = { name: "Dr. Nora Tim ", role: "Physician", avatar: "SC" };

// ── KPI Metrics ──────────────────────────────────────────────────────────────
export const kpiMetrics = [
  { id: "critical",   label: "Critical Alerts",   value: "7",   delta: "+2 today",  trend: "up",   color: "critical", icon: "🚨", desc: "Patients requiring immediate attention" },
  { id: "gaps",       label: "Open Care Gaps",    value: "34",  delta: "12 due today",trend:"warn", color: "warning",  icon: "📋", desc: "Unaddressed care quality measures" },
  { id: "tasks",      label: "Tasks Due Today",   value: "18",  delta: "6 overdue",  trend: "warn", color: "warning",  icon: "✅", desc: "Assigned tasks across care team" },
  { id: "patients",   label: "Active Patients",   value: "142", delta: "3 new",      trend: "up",   color: "info",     icon: "👥", desc: "Patients in active care coordination" },
];

// ── Patient List ──────────────────────────────────────────────────────────────
export const patients = [
  { id: "P001", name: "Margaret T.",  age: 72, condition: "CHF, Diabetes T2",    risk: "high",   gaps: 4, lastSeen: "3 days ago", assignedTo: "Dr. Chen",   status: "critical", nextDue: "A1C overdue"         },
  { id: "P002", name: "Robert K.",    age: 65, condition: "COPD, Hypertension",  risk: "high",   gaps: 3, lastSeen: "1 week ago",  assignedTo: "NP Torres",  status: "critical", nextDue: "Spirometry due"      },
  { id: "P003", name: "Linda S.",     age: 58, condition: "Diabetes T2",         risk: "medium", gaps: 2, lastSeen: "2 weeks ago", assignedTo: "Dr. Chen",   status: "warning",  nextDue: "Eye exam overdue"    },
  { id: "P004", name: "James W.",     age: 81, condition: "CKD Stage 3, HTN",    risk: "high",   gaps: 5, lastSeen: "5 days ago",  assignedTo: "Dr. Patel",  status: "critical", nextDue: "Creatinine due"      },
  { id: "P005", name: "Dorothy M.",   age: 67, condition: "Breast Cancer, HTN",  risk: "medium", gaps: 1, lastSeen: "Today",       assignedTo: "NP Torres",  status: "stable",   nextDue: "Follow-up in 2 wks"  },
  { id: "P006", name: "Charles B.",   age: 74, condition: "A-Fib, Diabetes T2",  risk: "high",   gaps: 3, lastSeen: "2 days ago",  assignedTo: "Dr. Chen",   status: "warning",  nextDue: "INR check due"       },
  { id: "P007", name: "Patricia L.",  age: 55, condition: "Hypertension",        risk: "low",    gaps: 0, lastSeen: "Today",       assignedTo: "Dr. Patel",  status: "stable",   nextDue: "Annual in 3 months"  },
  { id: "P008", name: "Michael R.",   age: 63, condition: "COPD, Depression",    risk: "medium", gaps: 2, lastSeen: "1 week ago",  assignedTo: "NP Torres",  status: "warning",  nextDue: "PHQ-9 due"           },
];

// ── Care Gaps ─────────────────────────────────────────────────────────────────
export const careGaps = [
  { id: "G001", patient: "Margaret T.", type: "Lab",        measure: "HbA1c",            dueDate: "Overdue 14d", priority: "critical", assignee: "Dr. Chen",  status: "open"       },
  { id: "G002", patient: "James W.",    type: "Lab",        measure: "Serum Creatinine", dueDate: "Overdue 7d",  priority: "critical", assignee: "Dr. Patel", status: "open"       },
  { id: "G003", patient: "Robert K.",   type: "Procedure",  measure: "Spirometry",       dueDate: "Overdue 3d",  priority: "critical", assignee: "NP Torres", status: "open"       },
  { id: "G004", patient: "Charles B.",  type: "Lab",        measure: "INR / PT",         dueDate: "Due today",   priority: "warning",  assignee: "Dr. Chen",  status: "in-progress"},
  { id: "G005", patient: "Linda S.",    type: "Referral",   measure: "Ophthalmology",    dueDate: "Overdue 30d", priority: "critical", assignee: "NP Torres", status: "open"       },
  { id: "G006", patient: "Michael R.",  type: "Screening",  measure: "PHQ-9 Depression", dueDate: "Due today",   priority: "warning",  assignee: "NP Torres", status: "open"       },
  { id: "G007", patient: "Margaret T.", type: "Preventive", measure: "Flu Vaccine",      dueDate: "Due this wk", priority: "warning",  assignee: "Dr. Chen",  status: "open"       },
  { id: "G008", patient: "James W.",    type: "Referral",   measure: "Nephrology",       dueDate: "Due this wk", priority: "warning",  assignee: "Dr. Patel", status: "open"       },
];

// ── Critical Alerts ───────────────────────────────────────────────────────────
export const alerts = [
  { id: "A001", patient: "Margaret T.", age: 72, alert: "A1C result: 11.2% — critically elevated", type: "Lab Result",   priority: "critical", time: "8 min ago",  action: "Review & Order" },
  { id: "A002", patient: "James W.",    age: 81, alert: "eGFR dropped to 28 — CKD progression",   type: "Lab Trend",    priority: "critical", time: "22 min ago", action: "Nephrology Ref" },
  { id: "A003", patient: "Robert K.",   age: 65, alert: "Missed 3 consecutive check-ins",          type: "Engagement",   priority: "critical", time: "1h ago",     action: "Outreach" },
  { id: "A004", patient: "Charles B.",  age: 74, alert: "INR at 4.1 — above therapeutic range",    type: "Lab Result",   priority: "critical", time: "2h ago",     action: "Adjust Dosage" },
  { id: "A005", patient: "Linda S.",    age: 58, alert: "Eye exam 30 days overdue — diabetes mgmt",type: "Care Gap",     priority: "warning",  time: "Today",      action: "Schedule Ref" },
  { id: "A006", patient: "Michael R.",  age: 63, alert: "PHQ-9 score 18 — moderate-severe depression",type:"Screening",  priority: "warning",  time: "Yesterday",  action: "Mental Health" },
  { id: "A007", patient: "Dorothy M.",  age: 67, alert: "Post-chemo follow-up labs pending",       type: "Follow-up",    priority: "warning",  time: "2 days ago", action: "Order Labs" },
];

// ── Staff Workload ────────────────────────────────────────────────────────────
export const staffWorkload = [
  { name: "Dr. Nora Tim",  role: "Physician",      initials: "SC", patients: 48, tasksOpen: 12, tasksOverdue: 3, gapsOwned: 14, color: "#2563EB" },
  { name: "Dr. Sarah Collins",   role: "Physician",      initials: "RP", patients: 52, tasksOpen: 9,  tasksOverdue: 1, gapsOwned: 11, color: "#7C3AED" },
  { name: "NP Smith",       role: "Nurse Practitioner", initials: "NT", patients: 42, tasksOpen: 15, tasksOverdue: 5, gapsOwned: 9, color: "#059669" },
];

// ── Tasks ─────────────────────────────────────────────────────────────────────
export const tasks = [
  { id: "T001", title: "Order HbA1c retest",        patient: "Margaret T.", assignee: "Dr. Chen",  due: "Today",   priority: "critical", done: false },
  { id: "T002", title: "Call patient re: missed appt",patient:"Robert K.", assignee: "NP Torres", due: "Today",   priority: "critical", done: false },
  { id: "T003", title: "Send nephrology referral",   patient: "James W.",    assignee: "Dr. Patel", due: "Today",   priority: "critical", done: false },
  { id: "T004", title: "Review INR results",         patient: "Charles B.",  assignee: "Dr. Chen",  due: "Today",   priority: "warning",  done: false },
  { id: "T005", title: "Schedule ophthalmology ref", patient: "Linda S.",    assignee: "NP Torres", due: "Tomorrow",priority: "warning",  done: false },
  { id: "T006", title: "Document PHQ-9 results",    patient: "Michael R.",  assignee: "NP Torres", due: "Tomorrow",priority: "warning",  done: false },
  { id: "T007", title: "Annual wellness check",      patient: "Patricia L.", assignee: "Dr. Patel", due: "This week",priority: "low",     done: true  },
];

// ── Gap types for chart ───────────────────────────────────────────────────────
export const gapsByType = [
  { type: "Lab Work",    count: 14, color: "#2563EB" },
  { type: "Referrals",   count: 8,  color: "#7C3AED" },
  { type: "Screenings",  count: 7,  color: "#D97706" },
  { type: "Preventive",  count: 5,  color: "#059669" },
];

// ── Workload trend (7 days) ───────────────────────────────────────────────────
export const workloadTrend = [
  { day: "Mon", tasks: 22, completed: 18 },
  { day: "Tue", tasks: 28, completed: 24 },
  { day: "Wed", tasks: 19, completed: 17 },
  { day: "Thu", tasks: 31, completed: 25 },
  { day: "Fri", tasks: 24, completed: 21 },
  { day: "Sat", tasks: 12, completed: 11 },
  { day: "Sun", tasks: 8,  completed: 8  },
];
