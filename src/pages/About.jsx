import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const values = [
  { icon: "🌍", title: "Act like an owner", desc: "We take pride in our work and act in the long-term best interests of Coinbase, our customers, and the broader crypto economy." },
  { icon: "🤝", title: "Top notch", desc: "We seek out and work with the best people. We embrace diversity of thought and background." },
  { icon: "🎯", title: "Clear communication", desc: "We communicate directly, candidly, and respectfully. We don't sugarcoat feedback." },
  { icon: "🚀", title: "Positive energy", desc: "We bring positive energy and enthusiasm to everything we do, even when it's hard." },
  { icon: "🔄", title: "Continuous learning", desc: "We are curious and constantly improving. We embrace change and learn from mistakes." },
  { icon: "✅", title: "Efficient", desc: "We accomplish more with less. We don't let perfect be the enemy of good." },
];

const milestones = [
  { year: "2012", event: "Coinbase is founded by Brian Armstrong and Fred Ehrsam in San Francisco." },
  { year: "2013", event: "First to launch a compliant Bitcoin exchange in the United States." },
  { year: "2014", event: "Reached 1 million users and launched merchant payment processing." },
  { year: "2017", event: "Launched GDAX (now Coinbase Advanced Trade) for professional traders." },
  { year: "2018", event: "Launched Coinbase Commerce, enabling merchants to accept crypto." },
  { year: "2020", event: "Surpassed $1B in annual revenue and launched Coinbase Card." },
  { year: "2021", event: "Went public on Nasdaq (COIN) — first major crypto company IPO." },
  { year: "2023", event: "Launched Base, an Ethereum L2 blockchain built for the next billion users." },
  { year: "2024", event: "Expanded to 100+ countries and surpassed $400B in quarterly trading volume." },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-cb-blue-light to-white border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cb-dark mb-5 tracking-tight">
            Creating an open financial system<br className="hidden md:block" /> for the world
          </h1>
          <p className="text-cb-gray text-lg max-w-2xl mx-auto mb-8">
            Coinbase's mission is to increase economic freedom in the world. We believe
            that by making crypto accessible and trusted, we can help more people participate
            in the global economy.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={() => navigate("/careers")}>
              Join our team
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate("/blog")}>
              Read our blog
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-cb-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "2012", label: "Founded" },
            { value: "100M+", label: "Verified users" },
            { value: "100+", label: "Countries" },
            { value: "$500B+", label: "Volume traded" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-extrabold text-cb-dark">{value}</p>
              <p className="text-cb-gray text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cb-blue">Our mission</span>
          <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mt-2 mb-4">
            Economic freedom through crypto
          </h2>
          <p className="text-cb-gray leading-relaxed mb-4">
            We believe a more open financial system, built on crypto, can help create more economic freedom for people around the world. By giving anyone access to financial services — regardless of location, wealth, or status — crypto has the potential to unlock economic opportunity for billions of people.
          </p>
          <p className="text-cb-gray leading-relaxed">
            Every product we build, every policy we advocate for, and every person we hire is in service of our mission: to increase economic freedom in the world.
          </p>
        </div>
        <div className="bg-cb-blue-light rounded-3xl p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-cb-blue mx-auto mb-4 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white" />
          </div>
          <p className="text-xl font-bold text-cb-dark italic mb-2">
            "Our mission is to increase economic freedom in the world."
          </p>
          <p className="text-cb-blue font-semibold">Brian Armstrong, CEO & Co-founder</p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-cb-surface border-t border-cb-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-cb-dark mb-3">Our values</h2>
            <p className="text-cb-gray max-w-xl mx-auto">
              These principles guide every decision we make — from product to hiring to culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-cb-border rounded-2xl p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-cb-dark mb-2">{v.title}</h3>
                <p className="text-cb-gray text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-cb-dark text-center mb-10">Our story</h2>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-cb-border" />
          <div className="flex flex-col gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="w-14 text-right shrink-0">
                  <span className="text-sm font-bold text-cb-blue">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-cb-blue border-2 border-white" />
                  <p className="text-sm text-cb-dark leading-relaxed pl-2">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-cb-blue text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Join us in our mission</h2>
        <p className="text-blue-200 mb-8 max-w-md mx-auto">
          We're a diverse team of 3,000+ people working to make crypto accessible to everyone.
        </p>
        <Button variant="white" size="lg" onClick={() => navigate("/careers")}>
          View open roles
        </Button>
      </div>
    </div>
  );
}
