import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { CheckIcon } from "@heroicons/react/24/solid";

const solutions = [
  {
    icon: "🏛️", name: "Prime Brokerage", tag: "Most popular",
    desc: "Full-service prime brokerage with secure custody, OTC trading, margin financing, and staking — all in one platform.",
    features: ["Institutional-grade custody", "24/7 OTC desk", "Margin & financing", "Staking rewards"],
  },
  {
    icon: "🔒", name: "Custody", tag: null,
    desc: "Cold storage custody for digital assets with $320B+ assets secured. SOC 2 Type 2 certified.",
    features: ["Cold storage", "Insurance coverage", "SOC 2 certified", "Multi-signature security"],
  },
  {
    icon: "📊", name: "Exchange Access", tag: null,
    desc: "Direct API access to Coinbase Exchange with deep liquidity and competitive fees.",
    features: ["REST & WebSocket API", "FIX API", "Deep liquidity", "Low latency execution"],
  },
  {
    icon: "🌍", name: "International Exchange", tag: "New",
    desc: "Trade perpetual futures and spot markets on our international platform with leverage.",
    features: ["Perpetual futures", "Leverage trading", "Global access", "Advanced order types"],
  },
];

const clients = ["Asset Managers", "Hedge Funds", "Family Offices", "Corporates", "Pension Funds", "Sovereign Wealth Funds"];

const stats = [
  { value: "$320B+",  label: "Assets secured" },
  { value: "13,000+", label: "Institutional clients" },
  { value: "100+",    label: "Countries served" },
  { value: "24/7",    label: "OTC trading desk" },
];

export default function Institutional() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-cb-dark to-[#0D1B3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold mb-6">
              🏦 Coinbase Institutional
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The trusted crypto partner for institutions
            </h1>
            <p className="text-blue-200 text-lg mb-10">
              Coinbase Institutional provides secure custody, advanced trading, and comprehensive crypto infrastructure for the world's largest financial institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="white" size="lg" onClick={() => navigate("/signup")}>
                Contact sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate("/products")}
              >
                Explore solutions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-extrabold text-cb-dark">{value}</p>
                <p className="text-cb-gray text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who we serve */}
      <div className="bg-cb-surface py-12 border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-cb-muted mb-5 text-center">
            Trusted by the world's leading institutions
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {clients.map((c) => (
              <span key={c} className="px-4 py-2 bg-white border border-cb-border rounded-full text-sm font-medium text-cb-dark">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">
            End-to-end institutional solutions
          </h2>
          <p className="text-cb-gray max-w-xl mx-auto">
            From secure custody to advanced trading — everything you need in one integrated platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div key={s.name} className="border border-cb-border rounded-2xl p-7 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-cb-blue-light rounded-2xl flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                {s.tag && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cb-blue text-white">
                    {s.tag}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-cb-dark text-xl mb-2">{s.name}</h3>
              <p className="text-cb-gray text-sm mb-5 leading-relaxed">{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-cb-dark">
                    <CheckIcon className="w-4 h-4 text-cb-green shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Security section */}
      <div className="bg-cb-surface border-t border-cb-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">🔐</div>
          <h2 className="text-2xl font-bold text-cb-dark mb-4">Security you can rely on</h2>
          <p className="text-cb-gray mb-8 max-w-xl mx-auto">
            We store 98% of digital assets offline in geographically distributed cold storage.
            SOC 2 Type 2 certified, with comprehensive insurance coverage.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {["SOC 2 Type 2", "ISO 27001", "NIST Framework", "Cold Storage", "Multi-sig", "Insurance Coverage"].map((badge) => (
              <span key={badge} className="px-3 py-1.5 bg-white border border-cb-border rounded-full text-xs font-semibold text-cb-dark">
                ✓ {badge}
              </span>
            ))}
          </div>
          <Button variant="primary" size="lg" onClick={() => navigate("/signup")}>
            Talk to our team
          </Button>
        </div>
      </div>
    </div>
  );
}
