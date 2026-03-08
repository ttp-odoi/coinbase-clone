import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PriceSparkline from "../components/crypto/PriceSparkline";
import Button from "../components/common/Button";
import { cryptoAssets, formatPrice, formatMarketCap } from "../data/cryptoData";

// ── Full SVG price chart with time selection ─────────
function PriceChart({ data, isPositive }) {
  if (!data || data.length < 2) return null;

  const width = 800;
  const height = 220;
  const padX = 10;
  const padY = 20;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const pts = data.map((p, i) => ({
    x: padX + (i / (data.length - 1)) * (width - padX * 2),
    y: padY + (1 - (p - min) / range) * (height - padY * 2),
  }));

  const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const areaD =
    pathD +
    ` L ${pts[pts.length - 1].x.toFixed(1)} ${(height - padY).toFixed(1)}` +
    ` L ${pts[0].x.toFixed(1)} ${(height - padY).toFixed(1)} Z`;

  const color = isPositive ? "#05B169" : "#F05252";
  const gradId = `grad-${isPositive ? "g" : "r"}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#${gradId})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Endpoint dot */}
      <circle
        cx={pts[pts.length - 1].x}
        cy={pts[pts.length - 1].y}
        r="4"
        fill={color}
      />
    </svg>
  );
}

// ── Stat row ─────────────────────────────────────────
function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-cb-border last:border-0">
      <span className="text-sm text-cb-gray">{label}</span>
      <span className="text-sm font-semibold text-cb-dark">{value}</span>
    </div>
  );
}

const TIME_FRAMES = ["1H", "1D", "1W", "1M", "1Y", "All"];

// Generate synthetic historical data for a given timeframe
function buildChartData(basePrice, points, volatility) {
  const data = [basePrice];
  for (let i = 1; i < points; i++) {
    const prev = data[i - 1];
    const delta = prev * volatility * (Math.random() - 0.48);
    data.push(Math.max(prev + delta, 0.01));
  }
  return data;
}

export default function AssetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState("1W");
  const [tradeTab, setTradeTab] = useState("buy");
  const [amount, setAmount] = useState("");

  const asset = cryptoAssets.find((a) => a.id === id);

  // Memoise chart data per timeframe so it doesn't flicker on re-render
  const chartData = useMemo(() => {
    if (!asset) return [];
    const configs = {
      "1H":  { points: 60,  vol: 0.002 },
      "1D":  { points: 48,  vol: 0.005 },
      "1W":  { points: 7,   vol: 0.02  },
      "1M":  { points: 30,  vol: 0.025 },
      "1Y":  { points: 52,  vol: 0.05  },
      "All": { points: 100, vol: 0.06  },
    };
    const { points, vol } = configs[timeframe];
    // Seed with sparkline last value; end at current price
    const base = asset.sparkline[0] ?? asset.price * 0.9;
    return buildChartData(base, points, vol).map((v, i, arr) => {
      // Nudge last value to actual price
      if (i === arr.length - 1) return asset.price;
      return v;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asset?.id, timeframe]);

  if (!asset) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-cb-gray">Asset not found.</p>
        <Button variant="primary" onClick={() => navigate("/explore")}>Back to Explore</Button>
      </div>
    );
  }

  const isPositive = asset.change24h >= 0;
  const chartIsPositive = chartData[chartData.length - 1] >= chartData[0];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Back + breadcrumb ───────────────────── */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-cb-gray hover:text-cb-dark mb-6 transition-colors"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left: chart + info ───────────────── */}
          <div className="lg:col-span-2">

            {/* Asset header */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: asset.color }}
              >
                {asset.symbol.slice(0, 3)}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-cb-dark">{asset.name}</h1>
                  <span className="text-cb-muted text-sm font-medium bg-gray-100 px-2 py-0.5 rounded">
                    {asset.symbol}
                  </span>
                  <span className="text-xs text-cb-muted">#{asset.rank}</span>
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-bold text-cb-dark">
                    {formatPrice(asset.price)}
                  </span>
                  <span
                    className={`text-base font-semibold ${
                      isPositive ? "text-cb-green" : "text-cb-red"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {asset.change24h.toFixed(2)}%
                  </span>
                  <span className="text-xs text-cb-muted">24h</span>
                </div>
              </div>
            </div>

            {/* Timeframe selector */}
            <div className="flex gap-1 mb-3">
              {TIME_FRAMES.map((tf) => (
                <button
                  key={tf}
                  type="button"
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors
                    ${
                      timeframe === tf
                        ? "bg-cb-blue text-white"
                        : "text-cb-gray hover:bg-gray-100"
                    }`}
                >
                  {tf}
                </button>
              ))}
            </div>

            {/* Price chart */}
            <div className="bg-cb-surface rounded-2xl p-4 mb-6 overflow-hidden">
              <PriceChart data={chartData} isPositive={chartIsPositive} />
            </div>

            {/* About */}
            <div className="bg-white border border-cb-border rounded-2xl p-6 mb-6">
              <h2 className="font-bold text-cb-dark text-lg mb-3">
                About {asset.name}
              </h2>
              <p className="text-cb-gray text-sm leading-relaxed">{asset.description}</p>
            </div>

            {/* Stats */}
            <div className="bg-white border border-cb-border rounded-2xl p-6">
              <h2 className="font-bold text-cb-dark text-lg mb-2">Market stats</h2>
              <StatRow label="Market cap" value={formatMarketCap(asset.marketCap)} />
              <StatRow
                label="24h trading volume"
                value={formatMarketCap(asset.volume24h)}
              />
              <StatRow
                label="Circulating supply"
                value={`${(asset.circulatingSupply / 1e6).toFixed(2)}M ${asset.symbol}`}
              />
              {asset.maxSupply && (
                <StatRow
                  label="Max supply"
                  value={`${(asset.maxSupply / 1e6).toFixed(2)}M ${asset.symbol}`}
                />
              )}
              <StatRow
                label="7d change"
                value={
                  <span className={asset.change7d >= 0 ? "text-cb-green" : "text-cb-red"}>
                    {asset.change7d >= 0 ? "+" : ""}
                    {asset.change7d.toFixed(2)}%
                  </span>
                }
              />
            </div>
          </div>

          {/* ── Right: trade panel ───────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white border border-cb-border rounded-2xl p-6">

              {/* Buy / Sell tabs */}
              <div className="flex rounded-xl bg-cb-surface p-1 mb-5">
                {["buy", "sell"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setTradeTab(tab)}
                    className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition-all
                      ${
                        tradeTab === tab
                          ? "bg-white text-cb-dark shadow-sm"
                          : "text-cb-gray hover:text-cb-dark"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <p className="text-xs text-cb-muted mb-3 uppercase tracking-wide font-semibold">
                {tradeTab === "buy" ? "Pay with USD" : `Sell ${asset.symbol}`}
              </p>

              {/* Amount input */}
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cb-dark font-semibold">
                  $
                </span>
                <input
                  type="number"
                  min="0"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-3.5 border border-cb-border rounded-xl text-lg
                             font-semibold text-cb-dark focus:outline-none focus:ring-2 focus:ring-cb-blue"
                />
              </div>

              {/* Conversion preview */}
              {amount && Number(amount) > 0 && (
                <div className="bg-cb-surface rounded-xl p-3 mb-4 text-sm">
                  <div className="flex justify-between text-cb-gray mb-1">
                    <span>You&apos;ll receive</span>
                    <span className="font-semibold text-cb-dark">
                      {(Number(amount) / asset.price).toFixed(6)} {asset.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between text-cb-gray">
                    <span>Coinbase fee</span>
                    <span>$0.00</span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => navigate("/signup")}
              >
                {tradeTab === "buy" ? `Buy ${asset.symbol}` : `Sell ${asset.symbol}`}
              </Button>

              <p className="text-xs text-cb-muted text-center mt-3">
                Sign in or create an account to trade.
              </p>

              {/* Quick presets */}
              <div className="flex gap-2 mt-4">
                {["$25", "$100", "$500"].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset.replace("$", ""))}
                    className="flex-1 py-1.5 text-xs font-semibold border border-cb-border
                               rounded-lg text-cb-gray hover:bg-cb-surface hover:text-cb-dark transition-colors"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
