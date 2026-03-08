import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const features = [
  { icon: "🧊", title: "Cold storage",         desc: "98% of customer funds are stored in offline, encrypted cold storage — inaccessible to online threats." },
  { icon: "🔐", title: "2-step verification",  desc: "Every login requires a second factor: authenticator app, SMS, or hardware security key." },
  { icon: "🛡️", title: "AES-256 encryption",   desc: "All sensitive data is encrypted at rest and in transit using bank-grade AES-256 encryption." },
  { icon: "🔍", title: "Biometric login",       desc: "Use Face ID or fingerprint to access your Coinbase account securely on mobile." },
  { icon: "📱", title: "Device management",     desc: "See every device logged into your account. Revoke access instantly if something looks suspicious." },
  { icon: "🔔", title: "Real-time alerts",      desc: "Get instant notifications for every login, transaction, and security event on your account." },
  { icon: "💰", title: "FDIC insurance",        desc: "USD balances held on Coinbase are covered by FDIC insurance up to $250,000." },
  { icon: "🌐", title: "Bug bounty program",    desc: "We pay researchers up to $50,000 for responsibly disclosing security vulnerabilities." },
];

const certifications = [
  { name: "SOC 2 Type 2",   desc: "Audited annually for security, availability, and confidentiality controls." },
  { name: "ISO 27001",      desc: "International standard for information security management systems." },
  { name: "PCI DSS",        desc: "Payment Card Industry Data Security Standard for card data." },
  { name: "NIST Framework", desc: "Aligned with the NIST Cybersecurity Framework." },
];

export default function Security() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#1652F0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            Your security is our top priority
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
            We've built industry-leading security into every layer of Coinbase — from cold storage
            to real-time fraud detection — so you can trade with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            {["98% funds in cold storage", "AES-256 encryption", "FDIC insured USD", "24/7 fraud monitoring"].map((t) => (
              <span key={t} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full font-medium">
                <span className="text-cb-green">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">
            Multiple layers of protection
          </h2>
          <p className="text-cb-gray max-w-xl mx-auto">
            Security isn't a single feature — it's built into everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="p-6 border border-cb-border rounded-2xl hover:shadow-sm transition-shadow">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-cb-dark mb-2">{f.title}</h3>
              <p className="text-cb-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-cb-surface border-t border-cb-border py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cb-dark text-center mb-8">
            Audited and certified
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="bg-white border border-cb-border rounded-2xl p-5 text-center">
                <div className="w-10 h-10 rounded-full bg-cb-blue flex items-center justify-center mx-auto mb-3">
                  <ShieldCheckIcon className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-cb-dark mb-1">{c.name}</p>
                <p className="text-cb-gray text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-cb-dark text-center mb-8">
          How to keep your account secure
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { step: "1", tip: "Enable 2-step verification", detail: "Use an authenticator app (not SMS) for the strongest protection." },
            { step: "2", tip: "Use a strong, unique password", detail: "Use a password manager to generate and store a unique password for Coinbase." },
            { step: "3", tip: "Review active sessions regularly", detail: "Check your device list in Settings and remove any devices you don't recognize." },
            { step: "4", tip: "Never share your credentials", detail: "Coinbase will never ask for your password or 2FA codes. Beware of phishing." },
          ].map(({ step, tip, detail }) => (
            <div key={step} className="flex gap-4 p-5 border border-cb-border rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-cb-blue text-white font-bold text-sm flex items-center justify-center shrink-0">
                {step}
              </div>
              <div>
                <p className="font-semibold text-cb-dark mb-1">{tip}</p>
                <p className="text-cb-gray text-sm">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="primary" size="lg" onClick={() => navigate("/signup")}>
            Secure my account
          </Button>
        </div>
      </div>
    </div>
  );
}
