import { useState, useMemo } from "react";
import { MagnifyingGlassIcon, ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import CryptoRow from "../components/crypto/CryptoRow";
import { cryptoAssets } from "../data/cryptoData";

// Filter tab options
const TABS = ["All assets", "Gainers", "Losers"];

export default function Explore() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All assets");
  const [sortKey, setSortKey] = useState("rank");
  const [sortAsc, setSortAsc] = useState(true);

  // Filter + sort logic
  const filteredAssets = useMemo(() => {
    let assets = [...cryptoAssets];

    // Tab filter
    if (activeTab === "Gainers") assets = assets.filter((a) => a.change24h >= 0);
    if (activeTab === "Losers")  assets = assets.filter((a) => a.change24h < 0);

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      assets = assets.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.symbol.toLowerCase().includes(q)
      );
    }

    // Sort
    assets.sort((a, b) => {
      let aVal = a[sortKey];
      let bVal = b[sortKey];
      if (typeof aVal === "string") aVal = aVal.toLowerCase();
      if (typeof bVal === "string") bVal = bVal.toLowerCase();
      if (aVal < bVal) return sortAsc ? -1 : 1;
      if (aVal > bVal) return sortAsc ? 1 : -1;
      return 0;
    });

    return assets;
  }, [search, activeTab, sortKey, sortAsc]);

  function handleSort(key) {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false); // default desc for numeric cols
    }
  }

  function SortIcon({ col }) {
    if (sortKey !== col)
      return <ChevronUpIcon className="inline ml-1 w-3 h-3 text-cb-muted opacity-40" />;
    return sortAsc
      ? <ChevronUpIcon className="inline ml-1 w-3 h-3 text-cb-blue" />
      : <ChevronDownIcon className="inline ml-1 w-3 h-3 text-cb-blue" />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── Page header ─────────────────────────────── */}
      <div className="bg-cb-surface border-b border-cb-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-cb-dark mb-1">Explore assets</h1>
          <p className="text-cb-gray">
            Track prices, market cap, and performance of top cryptocurrencies.
          </p>

          {/* Search bar */}
          <div className="mt-6 relative max-w-md">
            <MagnifyingGlassIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cb-muted w-4 h-4" />
            <input
              type="text"
              placeholder="Search assets"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-cb-border rounded-xl text-sm
                         focus:outline-none focus:ring-2 focus:ring-cb-blue focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ── Filter tabs ──────────────────────────── */}
        <div className="flex gap-1 mb-6 border-b border-cb-border">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px
                ${
                  activeTab === tab
                    ? "border-cb-blue text-cb-blue"
                    : "border-transparent text-cb-gray hover:text-cb-dark"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Asset table ──────────────────────────── */}
        <div className="overflow-x-auto rounded-2xl border border-cb-border">
          <table className="w-full">
            <thead>
              <tr className="bg-cb-surface text-left">
                <th className="py-3 pl-4 pr-2 text-xs font-semibold text-cb-gray uppercase tracking-wider w-10 hidden sm:table-cell">
                  #
                </th>
                <th
                  className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider cursor-pointer hover:text-cb-dark"
                  onClick={() => handleSort("name")}
                >
                  Asset <SortIcon col="name" />
                </th>
                <th
                  className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider text-right cursor-pointer hover:text-cb-dark"
                  onClick={() => handleSort("price")}
                >
                  Price <SortIcon col="price" />
                </th>
                <th
                  className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider text-right hidden md:table-cell cursor-pointer hover:text-cb-dark"
                  onClick={() => handleSort("change24h")}
                >
                  24h <SortIcon col="change24h" />
                </th>
                <th
                  className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider text-right hidden lg:table-cell cursor-pointer hover:text-cb-dark"
                  onClick={() => handleSort("marketCap")}
                >
                  Market cap <SortIcon col="marketCap" />
                </th>
                <th className="py-3 px-3 text-xs font-semibold text-cb-gray uppercase tracking-wider hidden lg:table-cell">
                  7d chart
                </th>
                <th className="py-3 pl-3 pr-4 text-xs font-semibold text-cb-gray uppercase tracking-wider">
                  {/* Buy col */}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.length > 0 ? (
                filteredAssets.map((asset, i) => (
                  <CryptoRow key={asset.id} asset={asset} rank={i + 1} />
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-cb-muted">
                    No assets found matching &quot;{search}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-cb-muted mt-4 text-center">
          Prices shown are for educational purposes only. Not financial advice.
        </p>
      </div>
    </div>
  );
}
