import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { cryptoAssets } from "../data/cryptoData";

// Mock APY rates per asset
const apyRates = {
  ethereum: 3.67,
  solana: 6.4,
  cardano: 3.1,
  polkadot: 14.23,
  chainlink: 4.5,
  cosmos: 18.5,
};

const stakingAssets = cryptoAssets
  .filter((a) => apyRates[a.id])
  .map((a) => ({ ...a, apy: apyRates[a.id] }));

function EarnCard({ asset }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-cb-border rounded-2xl p-5 flex items-center justify-between
                    hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
          style={{ backgroundColor: asset.color }}
        >
          {asset.symbol.slice(0, 3)}
        </div>
        <div>
          <p className="font-semibold text-cb-dark text-sm">{asset.name}</p>
          <p className="text-cb-muted text-xs">{asset.symbol}</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl font-bold text-cb-green">{asset.apy}%</p>
        <p className="text-xs text-cb-muted">APY</p>
      </div>

      <Button variant="secondary" size="sm" onClick={() => navigate("/signup")}>
        Earn now
      </Button>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="w-9 h-9 rounded-full bg-cb-blue text-white font-bold text-sm
                      flex items-center justify-center shrink-0 mt-0.5">
        {step}
      </div>
      <div>
        <h3 className="font-semibold text-cb-dark mb-1">{title}</h3>
        <p className="text-cb-gray text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function Earn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#001F6B] via-cb-dark to-[#0D1B3E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10
                           text-white text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cb-green animate-pulse" />
            Live rewards
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Put your crypto to work
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
            Earn rewards just by holding eligible assets on Coinbase.
            No lock-ups, no minimum balances, no crypto expertise needed.
          </p>
          <Button variant="white" size="xl" onClick={() => navigate("/signup")}>
            Start earning today
          </Button>
        </div>
      </div>

      {/* Earning assets */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-2">
            Eligible assets
          </h2>
          <p className="text-cb-gray">
            Rates update daily. APY is variable and not guaranteed.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {stakingAssets.map((asset) => (
            <EarnCard key={asset.id} asset={asset} />
          ))}
        </div>

        <p className="text-xs text-cb-muted text-center mt-6">
          Staking rewards are not available in all regions. Rates are approximate and subject to change.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-cb-surface border-t border-cb-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-bold text-cb-dark mb-8 text-center">
            How it works
          </h2>
          <div className="flex flex-col gap-8 max-w-lg mx-auto">
            <StepCard
              step="1"
              title="Create a free account"
              desc="Sign up for Coinbase in minutes. Verify your identity to unlock all features."
            />
            <StepCard
              step="2"
              title="Buy or deposit eligible crypto"
              desc="Purchase crypto directly or transfer from another wallet. No minimum required."
            />
            <StepCard
              step="3"
              title="Earn rewards automatically"
              desc="Rewards accrue daily and are added to your account balance. Watch your crypto grow."
            />
          </div>

          <div className="text-center mt-10">
            <Button variant="primary" size="lg" onClick={() => navigate("/signup")}>
              Create free account
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {[
          { value: "$10B+", label: "Assets staked on Coinbase" },
          { value: "Up to 18.5%", label: "Maximum APY available" },
          { value: "100M+", label: "Customers already earning" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl font-extrabold text-cb-dark">{value}</p>
            <p className="text-cb-gray mt-1 text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
