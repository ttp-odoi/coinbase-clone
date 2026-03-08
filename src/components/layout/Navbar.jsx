import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../common/Button";

function CoinbaseLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="w-8 h-8 rounded-full bg-cb-blue flex items-center justify-center shrink-0">
        <div className="w-[14px] h-[14px] rounded-full bg-white" />
      </div>
      <span className="text-[17px] font-bold tracking-tight text-cb-dark leading-none">
        Coinbase
      </span>
    </div>
  );
}

// Products mega-dropdown data
const individualProducts = [
  { label: "Buy & Sell Crypto",   desc: "The easiest way to trade",         to: "/explore",       icon: "💱" },
  { label: "Coinbase Wallet",     desc: "Self-custody crypto wallet",        to: "/wallet",        icon: "👛" },
  { label: "Coinbase One",        desc: "Zero fees + boosted rewards",       to: "/coinbase-one",  icon: "⭐" },
  { label: "Advanced Trade",      desc: "Pro-grade charts & orders",         to: "/products",      icon: "📈" },
  { label: "Earn",                desc: "Put your crypto to work",           to: "/earn",          icon: "🎁" },
  { label: "Coinbase Card",       desc: "Spend & earn crypto rewards",       to: "/card",          icon: "💳" },
];

const businessProducts = [
  { label: "Institutional",       desc: "Custody, trading & staking",        to: "/products",      icon: "🏦" },
  { label: "Prime",               desc: "Prime brokerage platform",          to: "/products",      icon: "🔷" },
  { label: "Commerce",            desc: "Accept crypto payments",            to: "/products",      icon: "🛒" },
  { label: "Developer Platform",  desc: "APIs & infrastructure",             to: "/products",      icon: "⚙️" },
];

function ProductsDropdown({ onClose }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] bg-white
                    border border-cb-border rounded-2xl shadow-2xl z-50 p-6
                    grid grid-cols-2 gap-6">
      {/* Individuals */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-cb-muted mb-3">
          For individuals
        </p>
        <ul className="flex flex-col gap-0.5">
          {individualProducts.map((p) => (
            <li key={p.label}>
              <Link
                to={p.to}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-cb-surface transition-colors group"
              >
                <span className="text-lg w-7 text-center">{p.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-cb-dark group-hover:text-cb-blue transition-colors">
                    {p.label}
                  </p>
                  <p className="text-xs text-cb-muted">{p.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Businesses */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-cb-muted mb-3">
          For businesses
        </p>
        <ul className="flex flex-col gap-0.5">
          {businessProducts.map((p) => (
            <li key={p.label}>
              <Link
                to={p.to}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-cb-surface transition-colors group"
              >
                <span className="text-lg w-7 text-center">{p.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-cb-dark group-hover:text-cb-blue transition-colors">
                    {p.label}
                  </p>
                  <p className="text-xs text-cb-muted">{p.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-4 pt-4 border-t border-cb-border">
          <Link
            to="/products"
            onClick={onClose}
            className="text-xs font-semibold text-cb-blue hover:underline"
          >
            See all products →
          </Link>
        </div>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { label: "Prices",   to: "/explore" },
  { label: "Learn",    to: "/learn"   },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [productsOpen, setProductsOpen]   = useState(false);
  const dropdownRef                       = useRef(null);
  const navigate                          = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cb-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link to="/" onClick={() => { setMobileOpen(false); setProductsOpen(false); }}>
            <CoinbaseLogo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {/* Products mega-dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-[14px] font-medium
                            transition-colors ${productsOpen
                              ? "text-cb-blue bg-cb-blue-light"
                              : "text-cb-gray hover:text-cb-dark hover:bg-gray-50"
                            }`}
              >
                Products
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {productsOpen && (
                <ProductsDropdown onClose={() => setProductsOpen(false)} />
              )}
            </div>

            {/* Static links */}
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setProductsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-[14px] font-medium transition-colors
                   ${isActive
                     ? "text-cb-blue bg-cb-blue-light"
                     : "text-cb-gray hover:text-cb-dark hover:bg-gray-50"
                   }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="md" onClick={() => navigate("/signin")}>
              Sign in
            </Button>
            <Button variant="primary" size="md" onClick={() => navigate("/signup")}>
              Get started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-cb-gray hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-cb-border bg-white px-4 py-4 flex flex-col gap-1">
          <Link
            to="/products"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2.5 rounded-xl text-sm font-medium text-cb-gray hover:text-cb-dark hover:bg-gray-50"
          >
            Products
          </Link>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                 ${isActive
                   ? "text-cb-blue bg-cb-blue-light"
                   : "text-cb-gray hover:text-cb-dark hover:bg-gray-50"
                 }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <hr className="border-cb-border my-2" />
          <Button
            variant="outline" size="md" fullWidth
            onClick={() => { navigate("/signin"); setMobileOpen(false); }}
          >
            Sign in
          </Button>
          <Button
            variant="primary" size="md" fullWidth
            onClick={() => { navigate("/signup"); setMobileOpen(false); }}
          >
            Get started
          </Button>
        </div>
      )}
    </nav>
  );
}
