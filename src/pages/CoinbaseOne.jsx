import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { CheckIcon } from "@heroicons/react/24/solid";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "Get started with the basics.",
    cta: "Get started free",
    variant: "outline",
    features: [
      "Buy, sell, and swap crypto",
      "Standard trading fees",
      "Basic portfolio tracking",
      "Email support",
    ],
    missing: ["Zero-fee trades", "Boosted staking rewards", "Priority 24/7 support", "Advanced tax tools"],
  },
  {
    name: "Coinbase One",
    price: "$29.99",
    period: "/month",
    desc: "The complete crypto experience.",
    cta: "Try free for 30 days",
    variant: "primary",
    highlight: true,
    badge: "Most popular",
    features: [
      "Zero trading fees (up to $10K/mo)",
      "Boosted staking rewards (+25% APY)",
      "Priority 24/7 phone & chat support",
      "Advanced tax center & reports",
      "Exclusive Coinbase One card benefits",
      "Account protection up to $1M",
    ],
    missing: [],
  },
];

function PlanCard({ plan }) {
  const navigate = useNavigate();
  return (
    <div className={`relative flex flex-col rounded-2xl p-7 border-2 transition-shadow
      ${plan.highlight
        ? "border-cb-blue shadow-xl shadow-cb-blue/10 bg-white"
        : "border-cb-border bg-white hover:shadow-md"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cb-blue text-white
                         text-xs font-bold px-4 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <div className="mb-6">
        <h3 className="font-bold text-cb-dark text-xl mb-1">{plan.name}</h3>
        <p className="text-cb-gray text-sm mb-4">{plan.desc}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-cb-dark">{plan.price}</span>
          <span className="text-cb-gray text-sm">{plan.period}</span>
        </div>
      </div>

      <Button
        variant={plan.variant}
        size="lg"
        fullWidth
        onClick={() => navigate("/signup")}
        className="mb-6"
      >
        {plan.cta}
      </Button>

      <ul className="flex flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-cb-dark">
            <CheckIcon className="w-4 h-4 text-cb-green shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
        {plan.missing.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-cb-muted line-through">
            <CheckIcon className="w-4 h-4 text-cb-border shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Yearly pricing saves ~17%
const yearlyPrice = "$299.99";
const monthlyPrice = "$29.99";

export default function CoinbaseOne() {
  const navigate = useNavigate();
  const [billing, setBilling] = useState("monthly");

  // Show correct price on the Coinbase One plan card based on billing toggle
  const pricedPlans = plans.map((p) =>
    p.name === "Coinbase One"
      ? { ...p, price: billing === "yearly" ? yearlyPrice : monthlyPrice,
          period: billing === "yearly" ? "/year" : "/month" }
      : p
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-cb-blue-light to-white border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cb-blue-light
                           text-cb-blue text-xs font-bold mb-5">
            ⭐ Coinbase One
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-cb-dark mb-4 tracking-tight">
            Get more out of every trade
          </h1>
          <p className="text-cb-gray text-lg max-w-xl mx-auto">
            Zero trading fees, boosted rewards, and premium support.
            One membership changes everything.
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors
              ${billing === "monthly" ? "bg-cb-blue text-white" : "text-cb-gray hover:text-cb-dark"}`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2
              ${billing === "yearly" ? "bg-cb-blue text-white" : "text-cb-gray hover:text-cb-dark"}`}
          >
            Yearly
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full
              ${billing === "yearly" ? "bg-white/20 text-white" : "bg-cb-green/10 text-cb-green"}`}>
              Save 17%
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {pricedPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="text-xs text-cb-muted text-center mt-6">
          Cancel anytime. First month free for new members.
        </p>
      </div>

      {/* Benefits detail */}
      <div className="bg-cb-surface border-t border-cb-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cb-dark text-center mb-10">
            Why members love Coinbase One
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💰", title: "Zero trading fees", desc: "Save up to $599/year in fees on up to $10,000 in monthly trades." },
              { icon: "📈", title: "Boosted staking", desc: "Earn 25% more staking rewards on all eligible assets." },
              { icon: "🎧", title: "Priority support", desc: "Skip the queue with 24/7 phone and live chat support." },
              { icon: "🛡️", title: "Account protection", desc: "Up to $1M in account protection coverage for eligible losses." },
            ].map((b) => (
              <div key={b.title} className="text-center p-6 bg-white border border-cb-border rounded-2xl">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-cb-dark mb-2">{b.title}</h3>
                <p className="text-cb-gray text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-cb-dark text-center mb-8">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { q: "Can I cancel anytime?", a: "Yes. You can cancel your Coinbase One membership at any time from your account settings. You'll retain benefits until the end of your billing period." },
            { q: "What counts toward my fee-free trades?", a: "All buy, sell, and convert transactions on Coinbase.com and the mobile app count toward your $10,000 monthly limit." },
            { q: "Are boosted staking rewards guaranteed?", a: "Staking rewards are variable and not guaranteed. The 25% boost applies on top of standard rates, which can fluctuate based on network conditions." },
          ].map(({ q, a }) => (
            <div key={q} className="border border-cb-border rounded-2xl p-5">
              <p className="font-semibold text-cb-dark mb-2">{q}</p>
              <p className="text-cb-gray text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
