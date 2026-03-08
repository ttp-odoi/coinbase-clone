import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { cryptoAssets, formatPrice } from "../data/cryptoData";
import PriceSparkline from "../components/crypto/PriceSparkline";

const features = [
  { icon: "📊", title: "TradingView charts", desc: "Professional-grade candlestick charts with 100+ technical indicators built on TradingView." },
  { icon: "📋", title: "Advanced order types", desc: "Market, limit, stop-limit, and stop-market orders to execute your strategy precisely." },
  { icon: "📖", title: "Live order book", desc: "Real-time depth chart and order book showing all open buy and sell orders." },
  { icon: "⚡", title: "Low fees", desc: "Maker fees starting at 0% and taker fees starting at 0.05% — among the lowest in the industry." },
  { icon: "🔄", title: "Perpetual futures", desc: "Trade BTC, ETH, and more with up to 10x leverage on perpetual contracts." },
  { icon: "🤖", title: "API trading", desc: "Full REST and WebSocket APIs for algorithmic and automated trading strategies." },
];

const feeRows = [
  { tier: "< $10K",   maker: "0.40%", taker: "0.60%" },
  { tier: "$10K–$50K",  maker: "0.25%", taker: "0.40%" },
  { tier: "$50K–$100K", maker: "0.15%", taker: "0.25%" },
  { tier: "$100K–$1M",  maker: "0.10%", taker: "0.20%" },
  { tier: "> $1M",      maker: "0.05%", taker: "0.10%" },
];

// Mini live market overview table
function MarketRow({ asset }) {
  const isPos = asset.change24h >= 0;
  return (
    <div className="flex items-center justify-between py-3 border-b border-cb-border last:border-0 hover:bg-cb-surface cursor-pointer px-2 rounded-xl transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
             style={{ backgroundColor: asset.color }}>
          {asset.symbol.slice(0,3)}
        </div>
        <div>
          <p className="text-sm font-semibold text-cb-dark">{asset.symbol}/USD</p>
          <p className="text-xs text-cb-muted">{asset.name}</p>
        </div>
      </div>
      <PriceSparkline data={asset.sparkline} isPositive={isPos} width={60} height={28} />
      <div className="text-right">
        <p className="text-sm font-semibold text-cb-dark">{formatPrice(asset.price)}</p>
        <p className={`text-xs font-medium ${isPos ? "text-cb-green" : "text-cb-red"}`}>
          {isPos ? "+" : ""}{asset.change24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default function AdvancedTrade() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("spot");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-cb-dark via-[#0D1B3E] to-[#1652F0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold mb-5">
            📈 Advanced Trade
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight">
            Powerful tools. <br className="hidden sm:block" />
            Trusted security.
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
            Professional-grade charts, advanced order types, and real-time order book.
            Everything a serious trader needs on one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="white" size="xl" onClick={() => navigate("/signup")}>
              Start trading
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => navigate("/explore")}
            >
              View markets
            </Button>
          </div>
        </div>
      </div>

      {/* Mock trading UI preview */}
      <div className="bg-cb-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D1117] rounded-2xl border border-gray-800 overflow-hidden">
            {/* Fake toolbar */}
            <div className="flex items-center gap-4 px-4 py-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex gap-3 text-xs text-gray-400 font-mono">
                {["BTC/USD", "ETH/USD", "SOL/USD", "XRP/USD"].map((pair) => (
                  <span key={pair} className={pair === "BTC/USD" ? "text-white" : ""}>{pair}</span>
                ))}
              </div>
            </div>
            {/* Fake chart area */}
            <div className="h-52 flex items-end px-4 pb-4 gap-0.5 overflow-hidden">
              {Array.from({ length: 80 }, (_, i) => {
                const h = 30 + Math.sin(i * 0.15) * 25 + Math.random() * 20;
                const isGreen = Math.random() > 0.45;
                return (
                  <div
                    key={i}
                    style={{ height: `${h}%`, width: "100%" }}
                    className={`rounded-sm ${isGreen ? "bg-cb-green" : "bg-cb-red"} opacity-70`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">
            Everything a pro trader needs
          </h2>
          <p className="text-cb-gray max-w-xl mx-auto">
            Built for advanced traders who demand more than a basic buy/sell interface.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 border border-cb-border rounded-2xl hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 bg-cb-blue-light rounded-2xl flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-cb-dark mb-2">{f.title}</h3>
              <p className="text-cb-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market overview */}
      <div className="bg-cb-surface border-t border-cb-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-cb-dark mb-2">Live markets</h2>
            <p className="text-cb-gray mb-6">240+ spot pairs and perpetual futures available to trade.</p>
            <div className="bg-white border border-cb-border rounded-2xl p-4">
              {/* Tabs */}
              <div className="flex gap-1 mb-4">
                {["spot", "futures"].map((t) => (
                  <button type="button" key={t} onClick={() => setActiveTab(t)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors
                      ${activeTab === t ? "bg-cb-blue text-white" : "text-cb-gray hover:text-cb-dark"}`}>
                    {t}
                  </button>
                ))}
              </div>
              {cryptoAssets.slice(0, 5).map((a) => <MarketRow key={a.id} asset={a} />)}
            </div>
          </div>

          {/* Fee table */}
          <div>
            <h2 className="text-2xl font-bold text-cb-dark mb-2">Fee schedule</h2>
            <p className="text-cb-gray mb-6">Fees decrease as your 30-day trading volume increases.</p>
            <div className="bg-white border border-cb-border rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cb-surface border-b border-cb-border">
                    <th className="py-3 px-4 text-left text-xs font-semibold text-cb-gray uppercase">30d Volume</th>
                    <th className="py-3 px-4 text-right text-xs font-semibold text-cb-gray uppercase">Maker</th>
                    <th className="py-3 px-4 text-right text-xs font-semibold text-cb-gray uppercase">Taker</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, i) => (
                    <tr key={row.tier} className={`border-b border-cb-border last:border-0 ${i === 0 ? "bg-cb-blue-light/30" : ""}`}>
                      <td className="py-3 px-4 text-cb-dark font-medium">{row.tier}</td>
                      <td className="py-3 px-4 text-right text-cb-green font-semibold">{row.maker}</td>
                      <td className="py-3 px-4 text-right text-cb-dark">{row.taker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-4 py-3 bg-cb-surface border-t border-cb-border">
                <p className="text-xs text-cb-muted">Coinbase One members get 0% maker fees on all tiers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center border-t border-cb-border">
        <h2 className="text-2xl font-bold text-cb-dark mb-3">Ready to trade like a pro?</h2>
        <p className="text-cb-gray mb-8 max-w-md mx-auto">
          Access Advanced Trade from your existing Coinbase account — no new account needed.
        </p>
        <Button variant="primary" size="xl" onClick={() => navigate("/signup")}>
          Open Advanced Trade
        </Button>
      </div>
    </div>
  );
}
