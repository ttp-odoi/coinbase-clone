import { useState } from "react";

const tabs = ["Consumer", "Advanced Trade", "Coinbase One"];

const consumerFees = [
  { method: "Coinbase USD wallet",   buy: "1.49%",  sell: "1.49%",  min: "$0.99" },
  { method: "US bank account (ACH)", buy: "1.49%",  sell: "1.49%",  min: "$0.99" },
  { method: "PayPal",                buy: "2.49%",  sell: "N/A",    min: "$0.99" },
  { method: "Debit/Credit card",     buy: "3.99%",  sell: "N/A",    min: "$0.99" },
  { method: "Wire transfer",         buy: "1.49%",  sell: "1.49%",  min: "$10.00" },
  { method: "Crypto conversion",     buy: "≤2.00%", sell: "≤2.00%", min: "Varies" },
];

const advancedFees = [
  { volume: "< $10,000",        maker: "0.40%", taker: "0.60%" },
  { volume: "$10K–$50K",        maker: "0.25%", taker: "0.40%" },
  { volume: "$50K–$100K",       maker: "0.15%", taker: "0.25%" },
  { volume: "$100K–$1M",        maker: "0.10%", taker: "0.20%" },
  { volume: "$1M–$15M",         maker: "0.08%", taker: "0.18%" },
  { volume: "$15M–$75M",        maker: "0.05%", taker: "0.12%" },
  { volume: "$75M–$250M",       maker: "0.02%", taker: "0.08%" },
  { volume: "> $250M",          maker: "0.00%", taker: "0.05%" },
];

export default function Fees() {
  const [activeTab, setActiveTab] = useState("Consumer");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-cb-surface border-b border-cb-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-cb-dark mb-3">
            Transparent pricing
          </h1>
          <p className="text-cb-gray text-lg max-w-xl mx-auto">
            We believe in clear, honest fees. Here's exactly what you'll pay on Coinbase.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs */}
        <div className="flex gap-1 border-b border-cb-border mb-8">
          {tabs.map((tab) => (
            <button type="button" key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors
                ${activeTab === tab ? "border-cb-blue text-cb-blue" : "border-transparent text-cb-gray hover:text-cb-dark"}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Consumer fees */}
        {activeTab === "Consumer" && (
          <div>
            <p className="text-cb-gray text-sm mb-6">
              Fees for simple buy and sell transactions on Coinbase.com and the Coinbase app.
              A flat fee may apply for smaller transactions.
            </p>
            <div className="overflow-hidden border border-cb-border rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cb-surface border-b border-cb-border">
                    <th className="py-3 px-5 text-left text-xs font-semibold text-cb-gray uppercase">Payment method</th>
                    <th className="py-3 px-5 text-right text-xs font-semibold text-cb-gray uppercase">Buy fee</th>
                    <th className="py-3 px-5 text-right text-xs font-semibold text-cb-gray uppercase">Sell fee</th>
                    <th className="py-3 px-5 text-right text-xs font-semibold text-cb-gray uppercase">Min. fee</th>
                  </tr>
                </thead>
                <tbody>
                  {consumerFees.map((row, i) => (
                    <tr key={row.method} className={`${i < consumerFees.length - 1 ? "border-b border-cb-border" : ""}`}>
                      <td className="py-3.5 px-5 text-cb-dark font-medium">{row.method}</td>
                      <td className="py-3.5 px-5 text-right text-cb-dark">{row.buy}</td>
                      <td className="py-3.5 px-5 text-right text-cb-dark">{row.sell}</td>
                      <td className="py-3.5 px-5 text-right text-cb-muted">{row.min}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-cb-muted mt-4">
              Coinbase also charges a spread of up to ±0.5% for crypto conversions. All fees are subject to change.
            </p>
          </div>
        )}

        {/* Advanced Trade fees */}
        {activeTab === "Advanced Trade" && (
          <div>
            <p className="text-cb-gray text-sm mb-6">
              Advanced Trade uses a maker-taker fee model based on your 30-day rolling trading volume.
              Maker orders add liquidity; taker orders remove it.
            </p>
            <div className="overflow-hidden border border-cb-border rounded-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cb-surface border-b border-cb-border">
                    <th className="py-3 px-5 text-left text-xs font-semibold text-cb-gray uppercase">30-day Volume</th>
                    <th className="py-3 px-5 text-right text-xs font-semibold text-cb-gray uppercase text-cb-green">Maker</th>
                    <th className="py-3 px-5 text-right text-xs font-semibold text-cb-gray uppercase">Taker</th>
                  </tr>
                </thead>
                <tbody>
                  {advancedFees.map((row, i) => (
                    <tr key={row.volume} className={`${i < advancedFees.length - 1 ? "border-b border-cb-border" : ""} ${i === 0 ? "bg-cb-blue-light/20" : ""}`}>
                      <td className="py-3.5 px-5 text-cb-dark font-medium">{row.volume}</td>
                      <td className="py-3.5 px-5 text-right text-cb-green font-semibold">{row.maker}</td>
                      <td className="py-3.5 px-5 text-right text-cb-dark">{row.taker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Coinbase One fees */}
        {activeTab === "Coinbase One" && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">⭐</div>
            <h2 className="text-2xl font-bold text-cb-dark mb-3">Zero trading fees</h2>
            <p className="text-cb-gray max-w-md mx-auto mb-6">
              Coinbase One members pay <span className="font-bold text-cb-dark">$0 in trading fees</span> on
              up to $10,000 in monthly trades. After that, standard fees apply.
            </p>
            <div className="inline-block bg-cb-blue-light border border-cb-blue/20 rounded-2xl px-8 py-6 mb-8">
              <p className="text-4xl font-extrabold text-cb-blue">$0</p>
              <p className="text-cb-blue font-semibold">Trading fees (up to $10K/mo)</p>
            </div>
            <div>
              <p className="text-sm text-cb-gray">Membership: <span className="font-semibold text-cb-dark">$29.99/month</span> or <span className="font-semibold text-cb-dark">$299.99/year</span></p>
            </div>
          </div>
        )}

        {/* Deposit/Withdrawal fees */}
        <div className="mt-10 border border-cb-border rounded-2xl p-6">
          <h3 className="font-bold text-cb-dark mb-4">Deposit & withdrawal fees</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "ACH deposit",       fee: "Free" },
              { label: "Wire deposit",      fee: "$10.00" },
              { label: "ACH withdrawal",    fee: "Free" },
              { label: "Wire withdrawal",   fee: "$25.00" },
              { label: "Crypto deposit",    fee: "Free" },
              { label: "Crypto withdrawal", fee: "Network fee" },
            ].map(({ label, fee }) => (
              <div key={label} className="flex justify-between py-2 border-b border-cb-border last:border-0">
                <span className="text-cb-gray">{label}</span>
                <span className={`font-semibold ${fee === "Free" ? "text-cb-green" : "text-cb-dark"}`}>{fee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
