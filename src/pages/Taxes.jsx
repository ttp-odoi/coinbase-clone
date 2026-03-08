import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const faqs = [
  { q: "Is cryptocurrency taxable?", a: "Yes. In most countries, including the US, crypto is treated as property. This means selling, trading, or using crypto to buy goods/services is a taxable event." },
  { q: "What is a taxable event?", a: "Taxable events include: selling crypto for USD, trading one crypto for another, using crypto to purchase goods or services, and receiving crypto as income or mining rewards." },
  { q: "What is NOT a taxable event?", a: "Buying crypto with USD, holding crypto, transferring crypto between your own wallets, and gifting crypto (up to annual exclusion limits) are generally not taxable." },
  { q: "What tax forms does Coinbase provide?", a: "Coinbase provides Form 1099-MISC for customers who earned $600+ from staking or referrals, and a Gains/Losses report for all disposals." },
  { q: "How do I calculate my gains?", a: "Your gain or loss is the difference between your cost basis (what you paid) and the fair market value at the time of disposal. Coinbase tracks this automatically." },
  { q: "What is cost basis?", a: "Cost basis is the original purchase price of your crypto, plus any fees paid. Coinbase uses HIFO (Highest-In, First-Out) by default to minimize gains." },
];

export default function Taxes() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-cb-blue-light to-white border-b border-cb-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-4xl block mb-4">🧾</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-cb-dark mb-4">
            Crypto taxes made simple
          </h1>
          <p className="text-cb-gray text-lg max-w-xl mx-auto">
            Coinbase automatically tracks your gains and losses, generates tax reports,
            and integrates with leading tax software.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Tax tools */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {[
            { icon: "📊", title: "Gains & losses report", desc: "Download a complete CSV of every taxable transaction, pre-calculated with cost basis." },
            { icon: "📄", title: "Tax forms",             desc: "Access your 1099-MISC and other required tax forms directly from your account." },
            { icon: "🔗", title: "Tax software sync",     desc: "Connect directly with TurboTax, TaxAct, CoinTracker, and Koinly for one-click import." },
          ].map((t) => (
            <div key={t.title} className="p-6 border border-cb-border rounded-2xl text-center hover:shadow-sm transition-shadow">
              <div className="text-4xl mb-3">{t.icon}</div>
              <h3 className="font-bold text-cb-dark mb-2">{t.title}</h3>
              <p className="text-cb-gray text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-cb-surface rounded-2xl p-8 mb-14">
          <h2 className="text-xl font-bold text-cb-dark mb-6">How crypto taxes work</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-cb-dark mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cb-red text-white text-xs flex items-center justify-center font-bold">!</span>
                Taxable events
              </h3>
              <ul className="flex flex-col gap-2">
                {["Selling crypto for USD or other fiat", "Trading one crypto for another", "Using crypto to buy goods/services", "Receiving crypto as income or rewards"].map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-cb-dark">
                    <span className="text-cb-red mt-0.5">✕</span> {e}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-cb-dark mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cb-green text-white text-xs flex items-center justify-center font-bold">✓</span>
                Not taxable
              </h3>
              <ul className="flex flex-col gap-2">
                {["Buying crypto with USD", "Holding crypto in your wallet", "Transferring between your own wallets", "Gifting crypto (within annual limits)"].map((e) => (
                  <li key={e} className="flex items-start gap-2 text-sm text-cb-dark">
                    <span className="text-cb-green mt-0.5">✓</span> {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <h2 className="text-xl font-bold text-cb-dark mb-6">Frequently asked questions</h2>
        <div className="flex flex-col gap-4 mb-10">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-cb-border rounded-2xl p-5">
              <p className="font-semibold text-cb-dark mb-2">{q}</p>
              <p className="text-cb-gray text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="text-center p-8 bg-cb-blue-light rounded-2xl border border-cb-blue/20">
          <h3 className="font-bold text-cb-dark mb-2">Ready to file your crypto taxes?</h3>
          <p className="text-cb-gray text-sm mb-5">Sign in to access your tax reports and transaction history.</p>
          <Button variant="primary" size="lg" onClick={() => navigate("/signin")}>
            Sign in to view reports
          </Button>
        </div>
      </div>
    </div>
  );
}
