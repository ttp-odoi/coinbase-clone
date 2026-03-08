import { Link } from "react-router-dom";

const footerSections = [
  {
    heading: "Products",
    links: [
      { label: "Buy & Sell Crypto",  to: "/explore" },
      { label: "Coinbase Wallet",    to: "/wallet" },
      { label: "Coinbase One",       to: "/coinbase-one" },
      { label: "Advanced Trade",     to: "/advanced-trade" },
      { label: "Earn Rewards",       to: "/earn" },
      { label: "Coinbase Card",      to: "/card" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "What is crypto?",   to: "/learn" },
      { label: "What is Bitcoin?",  to: "/learn" },
      { label: "What is Ethereum?", to: "/learn" },
      { label: "What is DeFi?",     to: "/learn" },
      { label: "What is staking?",  to: "/learn" },
      { label: "Crypto basics",     to: "/learn" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",          to: "/about" },
      { label: "Careers",        to: "/careers" },
      { label: "Blog",           to: "/blog" },
      { label: "Institutional",  to: "/institutional" },
      { label: "Security",       to: "/security" },
      { label: "Legal",          to: "/legal" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help center",    to: "/help" },
      { label: "Fees",           to: "/fees" },
      { label: "Taxes",          to: "/taxes" },
      { label: "Create account", to: "/signup" },
      { label: "Advanced Trade", to: "/advanced-trade" },
      { label: "Dashboard",      to: "/dashboard" },
    ],
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-cb-blue flex items-center justify-center shrink-0">
        <div className="w-4 h-4 rounded-full bg-white" />
      </div>
      <span className="font-bold text-cb-dark text-lg">Coinbase</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-cb-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-cb-gray leading-relaxed max-w-xs">
              The most trusted cryptocurrency platform. Buy, sell, and store Bitcoin,
              Ethereum, and more.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {/* X/Twitter */}
              <a href="#" aria-label="X / Twitter"
                 className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-cb-gray hover:bg-gray-200 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.258 5.635 5.906-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn"
                 className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-cb-gray hover:bg-gray-200 transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube"
                 className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-cb-gray hover:bg-gray-200 transition-colors">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-semibold text-cb-dark text-sm mb-4">{section.heading}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-cb-gray hover:text-cb-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cb-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cb-muted">
            © {new Date().getFullYear()} Coinbase Clone (Educational Project). Not affiliated with Coinbase, Inc.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Privacy Policy",   to: "/legal" },
              { label: "Terms of Service", to: "/legal" },
              { label: "Cookie Policy",    to: "/legal" },
              { label: "Fees",             to: "/fees" },
              { label: "Security",         to: "/security" },
            ].map(({ label, to }) => (
              <Link key={label} to={to}
                 className="text-xs text-cb-muted hover:text-cb-gray transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
