import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const individualsProducts = [
  {
    icon: "💱",
    name: "Buy & Sell Crypto",
    desc: "The easiest place to buy, sell, and manage your crypto portfolio.",
    link: "/explore",
    cta: "Start trading",
    badge: null,
  },
  {
    icon: "👛",
    name: "Coinbase Wallet",
    desc: "The best self-custody crypto wallet. Hold, send, and receive any crypto or NFT.",
    link: "/wallet",
    cta: "Get Wallet",
    badge: "Self-custody",
  },
  {
    icon: "⭐",
    name: "Coinbase One",
    desc: "Zero trading fees, boosted staking rewards, and priority support — one subscription.",
    link: "/coinbase-one",
    cta: "Join Coinbase One",
    badge: "Members only",
  },
  {
    icon: "📈",
    name: "Advanced Trade",
    desc: "Professional-grade charts, real-time order books, and advanced order types.",
    link: "/advanced-trade",
    cta: "Trade now",
    badge: "Pro",
  },
  {
    icon: "🎁",
    name: "Earn",
    desc: "Put your crypto to work. Earn rewards on eligible assets just by holding them.",
    link: "/earn",
    cta: "Start earning",
    badge: null,
  },
  {
    icon: "💳",
    name: "Coinbase Card",
    desc: "Spend crypto anywhere Visa is accepted and earn up to 4% back in crypto rewards.",
    link: "/card",
    cta: "Get the card",
    badge: "Visa",
  },
];

const businessProducts = [
  {
    icon: "🏦",
    name: "Institutional",
    desc: "Secure custody, staking, and trading solutions for institutional investors.",
    link: "/",
    cta: "Learn more",
    badge: null,
  },
  {
    icon: "🔷",
    name: "Prime",
    desc: "The prime brokerage platform — unified trading, financing, and custody.",
    link: "/",
    cta: "Contact us",
    badge: null,
  },
  {
    icon: "🛒",
    name: "Commerce",
    desc: "Accept crypto payments from anyone, anywhere in the world, with no chargebacks.",
    link: "/",
    cta: "Get started",
    badge: null,
  },
  {
    icon: "⚙️",
    name: "Developer Platform",
    desc: "APIs, SDKs, and infrastructure to build the next generation of crypto apps.",
    link: "/",
    cta: "View docs",
    badge: null,
  },
];

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-cb-border rounded-2xl p-6 flex flex-col gap-4
                    hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 bg-cb-blue-light rounded-2xl flex items-center justify-center text-2xl">
          {product.icon}
        </div>
        {product.badge && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cb-blue-light text-cb-blue">
            {product.badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-bold text-cb-dark text-lg mb-1">{product.name}</h3>
        <p className="text-cb-gray text-sm leading-relaxed">{product.desc}</p>
      </div>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate(product.link)}
        className="mt-auto w-fit"
      >
        {product.cta} →
      </Button>
    </div>
  );
}

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-cb-blue-light to-white border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cb-dark mb-4 tracking-tight">
            One platform. Every product.
          </h1>
          <p className="text-cb-gray text-lg max-w-xl mx-auto">
            Everything you need to buy, earn, spend, and build with crypto —
            all in one trusted place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* For individuals */}
        <div className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cb-blue">
              For individuals
            </span>
            <h2 className="text-2xl font-bold text-cb-dark mt-1">
              Build your crypto portfolio
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {individualsProducts.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>

        {/* For businesses */}
        <div>
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cb-blue">
              For businesses
            </span>
            <h2 className="text-2xl font-bold text-cb-dark mt-1">
              Power your business with crypto
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessProducts.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
