import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const helpCategories = [
  { icon: "🏁", title: "Getting started",     desc: "Create your account, verify ID, and make your first purchase.",       articles: 24 },
  { icon: "💱", title: "Trading & orders",    desc: "Buy, sell, convert, and manage orders on Coinbase.",                  articles: 31 },
  { icon: "💸", title: "Payments & funding",  desc: "Add payment methods, deposit, and withdraw funds.",                   articles: 18 },
  { icon: "🔒", title: "Security",            desc: "2-step verification, device management, and account protection.",     articles: 15 },
  { icon: "👛", title: "Coinbase Wallet",     desc: "Self-custody wallet setup, DApps, NFTs, and more.",                  articles: 22 },
  { icon: "📈", title: "Advanced Trade",      desc: "Order types, charting tools, fees, and API access.",                  articles: 19 },
  { icon: "🎁", title: "Staking & rewards",   desc: "How to stake, reward rates, and eligibility.",                       articles: 12 },
  { icon: "🧾", title: "Taxes",               desc: "Tax forms, reports, and understanding your obligations.",             articles: 9  },
  { icon: "💳", title: "Coinbase Card",       desc: "Card setup, rewards, spending limits, and troubleshooting.",         articles: 16 },
  { icon: "⭐", title: "Coinbase One",        desc: "Membership benefits, billing, and cancellation.",                    articles: 8  },
  { icon: "🏢", title: "Business accounts",  desc: "Setting up and managing a Coinbase business account.",               articles: 11 },
  { icon: "📞", title: "Contact support",    desc: "Reach our support team via chat, phone, or email.",                  articles: 6  },
];

const popularArticles = [
  "How do I create a Coinbase account?",
  "How do I verify my identity?",
  "How do I add a payment method?",
  "Why is my account restricted?",
  "How do I enable 2-step verification?",
  "How do I withdraw funds to my bank?",
  "What are Coinbase's fees?",
  "How do I recover my account?",
];

export default function Help() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero search */}
      <div className="bg-gradient-to-br from-cb-dark to-[#0D1B3E] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">How can we help you?</h1>
          <p className="text-blue-200 mb-8">Search our help center or browse by category.</p>
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-cb-gray w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-cb-dark text-sm
                         focus:outline-none focus:ring-2 focus:ring-cb-blue"
            />
          </div>
          {/* Popular searches */}
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {["Account verification", "Payment methods", "2FA setup", "Withdraw funds"].map((t) => (
              <button type="button" key={t}
                onClick={() => setQuery(t)}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Categories */}
        <h2 className="text-xl font-bold text-cb-dark mb-6">Browse by topic</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {helpCategories.map((cat) => (
            <button
              type="button"
              key={cat.title}
              className="flex items-start gap-4 p-5 bg-white border border-cb-border rounded-2xl
                         hover:shadow-sm hover:border-cb-blue/30 transition-all text-left group"
            >
              <div className="text-2xl shrink-0">{cat.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-cb-dark group-hover:text-cb-blue transition-colors">
                    {cat.title}
                  </p>
                  <ChevronRightIcon className="w-4 h-4 text-cb-muted shrink-0" />
                </div>
                <p className="text-cb-gray text-xs mt-1 leading-relaxed">{cat.desc}</p>
                <p className="text-cb-muted text-xs mt-2">{cat.articles} articles</p>
              </div>
            </button>
          ))}
        </div>

        {/* Popular articles */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-cb-dark mb-4">Popular articles</h2>
            <div className="bg-white border border-cb-border rounded-2xl overflow-hidden">
              {popularArticles.map((article, i) => (
                <button
                  type="button"
                  key={article}
                  className={`w-full flex items-center justify-between px-5 py-4 hover:bg-cb-surface transition-colors text-left
                    ${i < popularArticles.length - 1 ? "border-b border-cb-border" : ""}`}
                >
                  <span className="text-sm text-cb-dark">{article}</span>
                  <ChevronRightIcon className="w-4 h-4 text-cb-muted shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact support */}
          <div>
            <h2 className="text-xl font-bold text-cb-dark mb-4">Still need help?</h2>
            <div className="flex flex-col gap-4">
              {[
                { icon: "💬", title: "Live chat",    desc: "Chat with a support agent in real time.", badge: "Fastest",  variant: "primary" },
                { icon: "📞", title: "Phone support", desc: "Call us at 1-888-908-7930.",              badge: "24/7",     variant: "outline" },
                { icon: "📧", title: "Email us",      desc: "Get a response within 24 hours.",         badge: null,       variant: "outline" },
              ].map((opt) => (
                <div key={opt.title} className="flex items-center gap-4 p-5 bg-white border border-cb-border rounded-2xl hover:shadow-sm transition-shadow">
                  <div className="text-3xl">{opt.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-cb-dark">{opt.title}</p>
                      {opt.badge && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cb-green/10 text-cb-green">
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-cb-gray text-sm">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
