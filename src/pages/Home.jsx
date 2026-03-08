import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/Button";
import CryptoCard from "../components/crypto/CryptoCard";
import CryptoRow from "../components/crypto/CryptoRow";
import { cryptoAssets, tickerData, formatPrice } from "../data/cryptoData";

// ── Scrolling price ticker ─────────────────────────────
function PriceTicker() {
  const items = [...tickerData, ...tickerData];
  return (
    <div className="w-full overflow-hidden bg-cb-surface border-y border-cb-border py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => {
          const isPos = item.change24h >= 0;
          return (
            <span key={`${item.symbol}-${i}`} className="inline-flex items-center gap-2 px-6 text-sm font-medium text-cb-dark">
              <span className="font-bold">{item.symbol}</span>
              <span>{formatPrice(item.price)}</span>
              <span className={isPos ? "text-cb-green" : "text-cb-red"}>
                {isPos ? "+" : ""}{item.change24h.toFixed(2)}%
              </span>
              <span className="text-cb-border mx-2">|</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── "As featured in" press logos ─────────────────────
function PressSection() {
  const outlets = ["Bloomberg", "Forbes", "The New York Times", "TIME", "The Wall Street Journal", "Reuters"];
  return (
    <div className="border-b border-cb-border py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-cb-muted mb-6">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {outlets.map((name) => (
            <span
              key={name}
              className="text-cb-muted font-bold text-sm md:text-base tracking-tight opacity-50 hover:opacity-80 transition-opacity"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Feature card ───────────────────────────────────────
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white border border-cb-border hover:shadow-sm transition-shadow">
      <div className="w-12 h-12 rounded-2xl bg-cb-blue-light flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-cb-dark text-lg mb-2">{title}</h3>
        <p className="text-cb-gray text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// ── Stat badge ─────────────────────────────────────────
function StatBadge({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-cb-dark">{value}</p>
      <p className="text-cb-gray text-sm mt-1">{label}</p>
    </div>
  );
}

// ── Coinbase One promo banner ─────────────────────────
function CoinbaseOneBanner() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-[#1652F0] to-[#6E3FF3] rounded-3xl overflow-hidden relative">
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white opacity-5 blur-2xl" />
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
        <div className="text-white text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <span className="text-yellow-300 text-xl">⭐</span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Coinbase One
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            Trade smarter, earn more
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-md">
            Zero trading fees, boosted staking rewards, and priority 24/7 support.
            First month free.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 shrink-0">
          <Button variant="white" size="lg" onClick={() => navigate("/coinbase-one")}>
            Try free for 30 days
          </Button>
          <p className="text-blue-200 text-xs">Cancel anytime. No commitment.</p>
        </div>
      </div>
    </div>
  );
}

// ── Earn section ───────────────────────────────────────
function EarnSection() {
  const navigate = useNavigate();
  const earnAssets = [
    { symbol: "ETH", name: "Ethereum", apy: "3.67%", color: "#627EEA" },
    { symbol: "SOL", name: "Solana",   apy: "6.4%",  color: "#9945FF" },
    { symbol: "DOT", name: "Polkadot", apy: "14.23%", color: "#E6007A" },
  ];
  return (
    <section className="py-16 bg-white border-t border-cb-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cb-blue">
              Earn rewards
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mt-2 mb-4">
              Put your crypto to work
            </h2>
            <p className="text-cb-gray leading-relaxed mb-6">
              Earn rewards just by holding eligible assets on Coinbase.
              No lock-ups, no minimum balances, no complexity.
            </p>
            <Button variant="primary" size="lg" onClick={() => navigate("/earn")}>
              Start earning
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            {earnAssets.map((a) => (
              <div key={a.symbol}
                   className="flex items-center justify-between bg-cb-surface border border-cb-border
                              rounded-2xl px-5 py-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs"
                    style={{ backgroundColor: a.color }}
                  >
                    {a.symbol.slice(0, 3)}
                  </div>
                  <div>
                    <p className="font-semibold text-cb-dark text-sm">{a.name}</p>
                    <p className="text-xs text-cb-muted">{a.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-extrabold text-cb-green">{a.apy}</p>
                  <p className="text-xs text-cb-muted">APY</p>
                </div>
              </div>
            ))}
            <Link to="/earn" className="text-cb-blue text-sm font-semibold text-center hover:underline mt-1">
              See all earning assets →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Main Home component ────────────────────────────────
export default function Home() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleGetStarted(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cb-blue-light via-white to-white">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cb-blue opacity-5 blur-3xl" />
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-indigo-400 opacity-5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cb-blue-light text-cb-blue text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cb-blue animate-pulse" />
            Trusted by 100M+ customers globally
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cb-dark leading-tight mb-6 tracking-tight">
            The most trusted{" "}
            <span className="text-cb-blue">cryptocurrency</span>
            <br className="hidden sm:block" /> platform
          </h1>
          <p className="max-w-2xl mx-auto text-cb-gray text-lg md:text-xl leading-relaxed mb-10">
            Buy, sell, and manage your crypto portfolio with confidence. From Bitcoin
            to DeFi, Coinbase has everything you need.
          </p>
          <form onSubmit={handleGetStarted} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-cb-border rounded-full px-5 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent"
            />
            <Button type="submit" variant="primary" size="lg">
              Get started
            </Button>
          </form>
          <p className="text-xs text-cb-muted mt-4">Free to sign up. No credit card required.</p>
        </div>
      </section>

      {/* ── Price ticker ─────────────────────────────── */}
      <PriceTicker />

      {/* ── Press logos ──────────────────────────────── */}
      <PressSection />

      {/* ── Stats bar ────────────────────────────────── */}
      <section className="border-b border-cb-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBadge value="$500B+"  label="Volume traded" />
            <StatBadge value="100M+"  label="Verified users" />
            <StatBadge value="100+"   label="Countries supported" />
            <StatBadge value="240+"   label="Tradable assets" />
          </div>
        </div>
      </section>

      {/* ── Featured asset cards ─────────────────────── */}
      <section className="py-16 bg-cb-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-cb-dark">Top assets</h2>
              <p className="text-cb-gray mt-1">Don&apos;t miss out on the latest movers.</p>
            </div>
            <Link to="/explore" className="text-cb-blue font-semibold text-sm hover:underline hidden sm:block">
              See all assets →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {cryptoAssets.slice(0, 5).map((asset) => (
              <CryptoCard key={asset.id} asset={asset} />
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Button variant="outline" size="md" onClick={() => navigate("/explore")}>
              See all assets
            </Button>
          </div>
        </div>
      </section>

      {/* ── Live prices table (top 5) ─────────────────── */}
      <section className="py-16 border-t border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-cb-dark">Today&apos;s prices</h2>
            <Link to="/explore" className="text-cb-blue font-semibold text-sm hover:underline">
              View all →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-cb-border">
            <table className="w-full">
              <thead>
                <tr className="bg-cb-surface text-left">
                  <th className="py-3 pl-4 pr-2 text-xs font-semibold text-cb-gray uppercase tracking-wider w-10 hidden sm:table-cell">#</th>
                  <th className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider">Asset</th>
                  <th className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider text-right">Price</th>
                  <th className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider text-right hidden md:table-cell">24h</th>
                  <th className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider text-right hidden lg:table-cell">Market cap</th>
                  <th className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider hidden lg:table-cell">7d chart</th>
                  <th className="py-3 pl-3 pr-4" />
                </tr>
              </thead>
              <tbody>
                {cryptoAssets.slice(0, 5).map((asset, i) => (
                  <CryptoRow key={asset.id} asset={asset} rank={i + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Coinbase One banner ───────────────────────── */}
      <section className="py-6 bg-white border-t border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoinbaseOneBanner />
        </div>
      </section>

      {/* ── Earn rewards ─────────────────────────────── */}
      <EarnSection />

      {/* ── Why Coinbase ──────────────────────────────── */}
      <section className="py-16 bg-cb-surface border-t border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cb-dark">Why millions choose Coinbase</h2>
            <p className="text-cb-gray mt-2 max-w-lg mx-auto">
              A secure, simple, and powerful platform for every level of crypto investor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon="🔒" title="Secure storage"
              description="We store the vast majority of digital assets in secure offline storage. Your funds are protected by insurance and industry-leading security." />
            <FeatureCard icon="⚡" title="Easy & instant"
              description="Buy and sell crypto instantly with a credit card, bank account, or Apple Pay. Our streamlined onboarding gets you trading in minutes." />
            <FeatureCard icon="📈" title="Advanced trading"
              description="Access advanced charts, portfolio analytics, and recurring buys to grow your portfolio strategically." />
          </div>
        </div>
      </section>

      {/* ── App download promo ───────────────────────── */}
      <section className="py-6 border-t border-cb-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cb-dark to-[#0D1B3E] rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-8 w-64 h-64 rounded-full border-2 border-white" />
              <div className="absolute -bottom-8 right-24 w-48 h-48 rounded-full border border-white" />
            </div>
            <div className="relative max-w-3xl mx-auto px-8 py-14 text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Trade anywhere, anytime</h2>
              <p className="text-blue-200 text-base md:text-lg mb-8">
                Download the Coinbase app and start building your crypto portfolio today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="flex items-center gap-3 bg-white text-cb-dark px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.16 1.26-2.14 3.76.03 2.99 2.62 3.99 2.65 4-.03.07-.41 1.4-1.36 2.77M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </button>
                <button className="flex items-center gap-3 bg-white text-cb-dark px-5 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M3.18 23.76a2 2 0 001.86-.21l10.93-6.18-2.78-2.78-10.01 9.17zM20.7 9.6L17.32 7.7 14.27 10.76l3.05 3.05 3.38-1.9a2 2 0 000-2.3zM1.03.53A2 2 0 000 2.29v19.42a2 2 0 001.03 1.76l.1.06L12.38 12 1.13.47l-.1.06zM14.27 13.24L3.04 24.47l.14.07a2 2 0 001.86-.22l11.06-6.25-1.83-4.83z"/>
                  </svg>
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Learn CTA ────────────────────────────────── */}
      <section className="py-16 border-t border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-4">New to crypto?</h2>
          <p className="text-cb-gray max-w-lg mx-auto mb-8">
            Learn how crypto works and how to get started with our free guides, articles, and videos.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate("/learn")}>
            Start learning
          </Button>
        </div>
      </section>
    </div>
  );
}
