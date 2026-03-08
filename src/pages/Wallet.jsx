import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const features = [
  {
    icon: "🔑",
    title: "Your keys, your crypto",
    desc: "With self-custody, only you hold your private keys. Coinbase never has access to your funds.",
  },
  {
    icon: "🌐",
    title: "Explore Web3",
    desc: "Connect to thousands of decentralized apps, DeFi protocols, and NFT marketplaces directly from your wallet.",
  },
  {
    icon: "🔄",
    title: "Swap & bridge",
    desc: "Swap tokens across 10+ networks at the best rates. Bridge assets between Ethereum, Base, Polygon, and more.",
  },
  {
    icon: "🛡️",
    title: "Multi-layer security",
    desc: "Biometric authentication, encrypted cloud backup, and Social Recovery to protect against loss.",
  },
  {
    icon: "🖼️",
    title: "NFT gallery",
    desc: "View, collect, and showcase your NFTs from all supported chains in a beautiful gallery.",
  },
  {
    icon: "⚡",
    title: "Built on Base",
    desc: "Native support for Base — Coinbase's fast, low-cost Ethereum Layer 2 blockchain.",
  },
];

export default function Wallet() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1652F0] to-[#6E3FF3] text-white overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15
                             text-white text-xs font-semibold mb-6">
              Self-custody wallet
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              The best self-custody crypto wallet
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Store, send, receive, and explore the decentralized web.
              Available as a browser extension and mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="white" size="lg" onClick={() => navigate("/signup")}>
                Get Coinbase Wallet
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => navigate("/learn")}
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Mock phone UI */}
          <div className="flex justify-center">
            <div className="w-56 h-[440px] bg-white/10 backdrop-blur rounded-[2.5rem] border border-white/20
                            flex flex-col items-center justify-center gap-4 p-6 shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-cb-blue" />
              </div>
              <p className="text-white font-bold text-lg">Coinbase Wallet</p>
              <div className="w-full bg-white/10 rounded-xl p-3">
                <p className="text-white/60 text-xs mb-1">Total balance</p>
                <p className="text-white text-2xl font-bold">$12,450.82</p>
              </div>
              <div className="flex gap-3 w-full">
                {["Send", "Receive", "Buy"].map((a) => (
                  <div key={a} className="flex-1 bg-white/10 rounded-xl p-2 text-center">
                    <p className="text-white text-xs font-medium">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">
            Everything you need in one wallet
          </h2>
          <p className="text-cb-gray max-w-xl mx-auto">
            Coinbase Wallet supports thousands of tokens across all major blockchains.
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

      {/* CTA */}
      <div className="bg-cb-surface border-t border-cb-border py-16 text-center">
        <h2 className="text-2xl font-bold text-cb-dark mb-4">
          Ready to take control of your crypto?
        </h2>
        <p className="text-cb-gray mb-8 max-w-md mx-auto">
          Join millions of people who trust Coinbase Wallet to manage their digital assets.
        </p>
        <Button variant="primary" size="xl" onClick={() => navigate("/signup")}>
          Download Wallet
        </Button>
      </div>
    </div>
  );
}
