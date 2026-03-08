import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { CheckIcon } from "@heroicons/react/24/solid";

const perks = [
  { reward: "Up to 4%", asset: "back in XLM", desc: "On every purchase, everywhere Visa is accepted." },
  { reward: "1%", asset: "back in BTC", desc: "Or choose to earn back in ETH or any supported asset." },
  { reward: "Up to 4%", asset: "APY on USD balance", desc: "Earn interest on your card's USD balance." },
];

const cardFeatures = [
  "No annual fee",
  "No foreign transaction fees",
  "Instant crypto conversion at point of sale",
  "Real-time transaction alerts",
  "Virtual card for online purchases",
  "Lock / unlock card instantly",
  "24/7 customer support",
  "Works with Apple Pay & Google Pay",
];

export default function Card() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-cb-dark to-[#1a237e] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full
                        bg-cb-blue opacity-10 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20
                        grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold mb-6">
              💳 Coinbase Card
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Spend crypto.<br />Earn crypto.
            </h1>
            <p className="text-blue-200 text-lg mb-8">
              The Coinbase Visa Debit Card lets you spend your crypto balance anywhere
              Visa is accepted — and earn crypto rewards on every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="white" size="lg" onClick={() => navigate("/signup")}>
                Get the card
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
                onClick={() => navigate("/signup")}
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Card visual */}
          <div className="flex justify-center">
            <div className="w-72 h-44 bg-gradient-to-br from-cb-blue to-[#6E3FF3] rounded-2xl shadow-2xl
                            flex flex-col justify-between p-6 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white opacity-5" />
              <div className="flex justify-between items-start">
                <div className="w-9 h-7 rounded bg-yellow-400/90" /> {/* chip */}
                <span className="text-white font-bold text-lg tracking-widest">VISA</span>
              </div>
              <div>
                <p className="text-white/60 text-xs tracking-widest mb-1">•••• •••• •••• 4242</p>
                <div className="flex justify-between items-end">
                  <p className="text-white font-semibold text-sm">Coinbase Card</p>
                  <div className="w-8 h-8 rounded-full bg-cb-blue flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">
            Earn crypto on every purchase
          </h2>
          <p className="text-cb-gray max-w-xl mx-auto">
            Choose the rewards that work for you. Change your reward asset anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((p) => (
            <div key={p.reward + p.asset}
                 className="text-center p-8 bg-cb-blue-light border border-cb-blue/20 rounded-2xl">
              <p className="text-4xl font-extrabold text-cb-blue mb-1">{p.reward}</p>
              <p className="font-semibold text-cb-dark mb-3">{p.asset}</p>
              <p className="text-cb-gray text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature list */}
      <div className="bg-cb-surface border-t border-b border-cb-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cb-dark text-center mb-10">
            Everything included. No hidden fees.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-cb-border">
                <CheckIcon className="w-5 h-5 text-cb-green shrink-0" />
                <span className="text-sm font-medium text-cb-dark">{f}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="primary" size="xl" onClick={() => navigate("/signup")}>
              Apply now — it&apos;s free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
