// Mock authenticated dashboard — shown after "sign in"
import { useNavigate } from "react-router-dom";
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  ArrowUpTrayIcon, ArrowDownTrayIcon, ArrowsRightLeftIcon, PlusIcon,
} from "@heroicons/react/24/outline";
import Button from "../components/common/Button";
import PriceSparkline from "../components/crypto/PriceSparkline";
import { portfolioHoldings, recentTransactions, getTotalValue, getTotalCost } from "../data/portfolioData";
import { cryptoAssets, formatPrice } from "../data/cryptoData";

const totalValue = getTotalValue(portfolioHoldings);
const totalCost  = getTotalCost(portfolioHoldings);
const totalPnL   = totalValue - totalCost;
const totalPct   = ((totalPnL / totalCost) * 100).toFixed(2);
const isUp       = totalPnL >= 0;

// Quick-action button
function QuickAction({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-cb-border
                 hover:bg-cb-surface transition-colors group"
    >
      <div className="w-10 h-10 rounded-full bg-cb-blue-light text-cb-blue flex items-center justify-center
                      group-hover:bg-cb-blue group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="text-xs font-semibold text-cb-dark">{label}</span>
    </button>
  );
}

// Individual holding row
function HoldingRow({ holding }) {
  const navigate  = useNavigate();
  const value     = holding.amount * holding.currentPrice;
  const pnl       = value - holding.amount * holding.avgCost;
  const pnlPct    = ((pnl / (holding.amount * holding.avgCost)) * 100).toFixed(2);
  const isPos     = pnl >= 0;
  const assetData = cryptoAssets.find((a) => a.id === holding.id);

  return (
    <tr
      className="border-b border-cb-border hover:bg-cb-surface cursor-pointer transition-colors"
      onClick={() => navigate(`/asset/${holding.id}`)}
    >
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
            style={{ backgroundColor: holding.color }}
          >
            {holding.symbol.slice(0, 3)}
          </div>
          <div>
            <p className="font-semibold text-cb-dark text-sm">{holding.name}</p>
            <p className="text-xs text-cb-muted">{holding.amount} {holding.symbol}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 text-right hidden md:table-cell">
        {assetData && (
          <PriceSparkline data={assetData.sparkline} isPositive={assetData.change24h >= 0} width={80} height={32} />
        )}
      </td>
      <td className="py-4 px-4 text-right">
        <p className="font-semibold text-cb-dark text-sm">${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p className={`text-xs font-medium ${isPos ? "text-cb-green" : "text-cb-red"}`}>
          {isPos ? "+" : ""}${Math.abs(pnl).toFixed(2)} ({isPos ? "+" : ""}{pnlPct}%)
        </p>
      </td>
      <td className="py-4 px-4 text-right hidden lg:table-cell">
        <p className="text-sm text-cb-dark">{formatPrice(holding.currentPrice)}</p>
      </td>
    </tr>
  );
}

// Transaction row
function TxRow({ tx }) {
  const typeConfig = {
    buy:     { label: "Bought",   color: "text-cb-green", bg: "bg-green-50"  },
    sell:    { label: "Sold",     color: "text-cb-red",   bg: "bg-red-50"    },
    receive: { label: "Received", color: "text-cb-blue",  bg: "bg-cb-blue-light" },
    send:    { label: "Sent",     color: "text-cb-gray",  bg: "bg-gray-100"  },
  };
  const cfg = typeConfig[tx.type];
  return (
    <div className="flex items-center justify-between py-3 border-b border-cb-border last:border-0">
      <div className="flex items-center gap-3">
        <span className={`w-8 h-8 rounded-full ${cfg.bg} ${cfg.color} flex items-center justify-center text-xs font-bold`}>
          {tx.asset.slice(0, 1)}
        </span>
        <div>
          <p className="text-sm font-semibold text-cb-dark">{cfg.label} {tx.asset}</p>
          <p className="text-xs text-cb-muted">{tx.date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-cb-dark">
          {tx.type === "sell" || tx.type === "send" ? "-" : "+"}
          {tx.amount} {tx.asset}
        </p>
        <p className="text-xs text-cb-muted">${tx.value.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cb-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Portfolio value hero ──────────────────── */}
        <div className="bg-white border border-cb-border rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm text-cb-gray mb-1">Your portfolio</p>
              <p className="text-4xl font-extrabold text-cb-dark">
                ${totalValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className={`flex items-center gap-1 text-sm font-semibold
                  ${isUp ? "text-cb-green" : "text-cb-red"}`}>
                  {isUp
                    ? <ArrowUpIcon className="w-3.5 h-3.5" />
                    : <ArrowDownIcon className="w-3.5 h-3.5" />}
                  ${Math.abs(totalPnL).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  ({isUp ? "+" : ""}{totalPct}%)
                </span>
                <span className="text-xs text-cb-muted">all time</span>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-4 gap-3">
              <QuickAction icon={<PlusIcon className="w-5 h-5" />}              label="Buy"     onClick={() => navigate("/explore")} />
              <QuickAction icon={<ArrowUpTrayIcon className="w-5 h-5" />}       label="Send"    onClick={() => navigate("/signup")} />
              <QuickAction icon={<ArrowDownTrayIcon className="w-5 h-5" />}     label="Receive" onClick={() => navigate("/signup")} />
              <QuickAction icon={<ArrowsRightLeftIcon className="w-5 h-5" />}   label="Convert" onClick={() => navigate("/signup")} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Holdings ─────────────────────────────── */}
          <div className="lg:col-span-2 bg-white border border-cb-border rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-5 pb-3 border-b border-cb-border">
              <h2 className="font-bold text-cb-dark">Your assets</h2>
              <button
                type="button"
                onClick={() => navigate("/explore")}
                className="text-xs text-cb-blue font-semibold hover:underline flex items-center gap-1"
              >
                Add asset <ArrowRightIcon className="w-3 h-3" />
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-cb-surface">
                  <th className="py-2 px-4 text-left text-xs font-semibold text-cb-gray uppercase tracking-wider">Asset</th>
                  <th className="py-2 px-4 text-right text-xs font-semibold text-cb-gray uppercase tracking-wider hidden md:table-cell">7d</th>
                  <th className="py-2 px-4 text-right text-xs font-semibold text-cb-gray uppercase tracking-wider">Value / P&L</th>
                  <th className="py-2 px-4 text-right text-xs font-semibold text-cb-gray uppercase tracking-wider hidden lg:table-cell">Price</th>
                </tr>
              </thead>
              <tbody>
                {portfolioHoldings.map((h) => <HoldingRow key={h.id} holding={h} />)}
              </tbody>
            </table>
          </div>

          {/* ── Right column ─────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Rewards summary */}
            <div className="bg-gradient-to-br from-cb-blue to-[#6E3FF3] rounded-2xl p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-1">Staking rewards</p>
              <p className="text-3xl font-extrabold mb-1">$48.32</p>
              <p className="text-blue-200 text-sm">earned this month</p>
              <button
                type="button"
                onClick={() => navigate("/earn")}
                className="mt-4 text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full transition-colors"
              >
                View earnings →
              </button>
            </div>

            {/* Recent transactions */}
            <div className="bg-white border border-cb-border rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 pt-5 pb-3 border-b border-cb-border">
                <h2 className="font-bold text-cb-dark">Recent activity</h2>
                <button type="button" className="text-xs text-cb-blue font-semibold hover:underline">
                  View all
                </button>
              </div>
              <div className="px-4">
                {recentTransactions.slice(0, 5).map((tx) => <TxRow key={tx.id} tx={tx} />)}
              </div>
            </div>

            {/* Coinbase One upsell */}
            <div className="bg-cb-blue-light border border-cb-blue/20 rounded-2xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-cb-blue mb-2">⭐ Coinbase One</p>
              <p className="font-bold text-cb-dark mb-1">Trade with zero fees</p>
              <p className="text-cb-gray text-sm mb-4">
                Save on every trade with Coinbase One. First month free.
              </p>
              <Button variant="primary" size="sm" onClick={() => navigate("/coinbase-one")}>
                Try free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
