import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";

const departments = ["All", "Engineering", "Product", "Design", "Operations", "Legal", "Finance", "Marketing"];

const jobs = [
  { id: 1, title: "Senior Software Engineer, Backend",    dept: "Engineering", location: "Remote - USA",    type: "Full-time" },
  { id: 2, title: "Staff Engineer, Mobile (iOS)",         dept: "Engineering", location: "San Francisco",  type: "Full-time" },
  { id: 3, title: "Product Manager, Consumer",           dept: "Product",     location: "Remote - USA",   type: "Full-time" },
  { id: 4, title: "Senior Product Designer",             dept: "Design",      location: "Remote - Global",type: "Full-time" },
  { id: 5, title: "Crypto Policy Counsel",               dept: "Legal",       location: "Washington D.C.",type: "Full-time" },
  { id: 6, title: "Machine Learning Engineer",           dept: "Engineering", location: "Remote - USA",   type: "Full-time" },
  { id: 7, title: "Head of Content Marketing",           dept: "Marketing",   location: "Remote - USA",   type: "Full-time" },
  { id: 8, title: "Treasury Manager, Crypto",            dept: "Finance",     location: "New York",       type: "Full-time" },
  { id: 9, title: "Compliance Operations Analyst",       dept: "Operations",  location: "Remote - Global",type: "Full-time" },
  { id: 10,title: "Engineering Manager, Infrastructure", dept: "Engineering", location: "Remote - USA",   type: "Full-time" },
  { id: 11,title: "UX Researcher",                      dept: "Design",      location: "Remote - USA",   type: "Full-time" },
  { id: 12,title: "Senior Data Scientist",              dept: "Engineering", location: "Remote - USA",   type: "Full-time" },
];

const perks = [
  { icon: "🌎", title: "Remote-first",          desc: "Work from anywhere in the world." },
  { icon: "💰", title: "Competitive pay",        desc: "Top-of-market salary + equity + bonus." },
  { icon: "🏥", title: "Full health benefits",  desc: "Medical, dental, and vision — 100% covered." },
  { icon: "📚", title: "Learning budget",        desc: "$2,000/year for conferences, courses, and books." },
  { icon: "🍼", title: "Parental leave",         desc: "16 weeks paid leave for all parents." },
  { icon: "₿",  title: "Crypto benefits",       desc: "Monthly crypto reward and employee trading perks." },
];

export default function Careers() {
  const navigate = useNavigate();
  const [activeDept, setActiveDept] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = jobs.filter((j) => {
    const matchDept = activeDept === "All" || j.dept === activeDept;
    const matchSearch = !search || j.title.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-cb-blue-light to-white border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cb-dark mb-5">
            Join the crypto revolution
          </h1>
          <p className="text-cb-gray text-lg max-w-xl mx-auto mb-8">
            We're a remote-first company of 3,000+ people working to increase economic freedom in the world. Come build with us.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {["Remote-first", "Competitive equity", "Great mission", "Top talent"].map((t) => (
              <span key={t} className="px-4 py-1.5 bg-white border border-cb-border rounded-full font-medium text-cb-dark">
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="bg-cb-surface border-b border-cb-border py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-cb-dark text-center mb-8">Why work at Coinbase?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {perks.map((p) => (
              <div key={p.title} className="bg-white border border-cb-border rounded-2xl p-4 text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="font-semibold text-cb-dark text-sm mb-1">{p.title}</p>
                <p className="text-cb-muted text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-cb-dark">Open roles ({filtered.length})</h2>
          <input
            type="text"
            placeholder="Search roles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-cb-border rounded-xl px-4 py-2.5 text-sm w-full md:w-64
                       focus:outline-none focus:ring-2 focus:ring-cb-blue"
          />
        </div>

        {/* Department filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {departments.map((d) => (
            <button type="button" key={d} onClick={() => setActiveDept(d)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                ${activeDept === d ? "bg-cb-blue text-white" : "bg-cb-surface text-cb-gray hover:text-cb-dark border border-cb-border"}`}>
              {d}
            </button>
          ))}
        </div>

        {/* Jobs table */}
        <div className="border border-cb-border rounded-2xl overflow-hidden">
          {filtered.length > 0 ? (
            filtered.map((job, i) => (
              <div
                key={job.id}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4
                  hover:bg-cb-surface transition-colors cursor-pointer
                  ${i < filtered.length - 1 ? "border-b border-cb-border" : ""}`}
                onClick={() => navigate("/signup")}
              >
                <div>
                  <p className="font-semibold text-cb-dark mb-1">{job.title}</p>
                  <div className="flex flex-wrap gap-2 items-center text-xs text-cb-gray">
                    <Badge variant="blue">{job.dept}</Badge>
                    <span>📍 {job.location}</span>
                    <span>⏱ {job.type}</span>
                  </div>
                </div>
                <Button variant="secondary" size="sm" onClick={(e) => { e.stopPropagation(); navigate("/signup"); }}>
                  Apply
                </Button>
              </div>
            ))
          ) : (
            <div className="py-16 text-center text-cb-muted">No roles match your search.</div>
          )}
        </div>
      </div>
    </div>
  );
}
