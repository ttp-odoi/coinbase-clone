// Mock cryptocurrency data — prices approximate early 2026
export const cryptoAssets = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    color: "#F7931A",
    price: 95420.5,
    change24h: 2.34,
    change7d: 5.12,
    marketCap: 1884000000000,
    volume24h: 38500000000,
    circulatingSupply: 19700000,
    maxSupply: 21000000,
    rank: 1,
    sparkline: [88000, 90500, 89000, 92000, 91500, 94000, 95420],
    description:
      "Bitcoin is the world's first successful decentralized cryptocurrency and payment system, launched in 2009 by a mysterious creator known only as Satoshi Nakamoto. The bitcoin protocol specifies that the supply of bitcoin will be capped at 21 million BTC.",
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    color: "#627EEA",
    price: 3285.75,
    change24h: 1.87,
    change7d: 3.45,
    marketCap: 395000000000,
    volume24h: 18200000000,
    circulatingSupply: 120200000,
    maxSupply: null,
    rank: 2,
    sparkline: [3050, 3120, 3080, 3200, 3180, 3250, 3285],
    description:
      "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.",
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    color: "#9945FF",
    price: 192.4,
    change24h: -1.23,
    change7d: -2.8,
    marketCap: 88900000000,
    volume24h: 4800000000,
    circulatingSupply: 462000000,
    maxSupply: null,
    rank: 3,
    sparkline: [205, 200, 198, 195, 193, 194, 192],
    description:
      "Solana is a high-performance blockchain supporting builders around the world creating crypto apps that scale. It processes thousands of transactions per second with low fees.",
  },
  {
    id: "xrp",
    symbol: "XRP",
    name: "XRP",
    color: "#346AA9",
    price: 2.41,
    change24h: 0.95,
    change7d: 4.2,
    marketCap: 138000000000,
    volume24h: 8900000000,
    circulatingSupply: 57200000000,
    maxSupply: 100000000000,
    rank: 4,
    sparkline: [2.20, 2.25, 2.30, 2.28, 2.35, 2.39, 2.41],
    description:
      "XRP is the native cryptocurrency of the XRP Ledger, developed by Ripple. It is designed to be a fast, scalable digital asset that can be used for global payments.",
  },
  {
    id: "usdc",
    symbol: "USDC",
    name: "USD Coin",
    color: "#2775CA",
    price: 1.0,
    change24h: 0.01,
    change7d: 0.0,
    marketCap: 43700000000,
    volume24h: 7200000000,
    circulatingSupply: 43700000000,
    maxSupply: null,
    rank: 5,
    sparkline: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
    description:
      "USD Coin (USDC) is a stablecoin pegged to the US dollar at a 1:1 ratio. It is issued by Circle and Coinbase and runs on multiple blockchains.",
  },
  {
    id: "cardano",
    symbol: "ADA",
    name: "Cardano",
    color: "#0D1E2D",
    price: 0.892,
    change24h: -0.54,
    change7d: 1.1,
    marketCap: 31500000000,
    volume24h: 920000000,
    circulatingSupply: 35300000000,
    maxSupply: 45000000000,
    rank: 6,
    sparkline: [0.91, 0.90, 0.88, 0.89, 0.895, 0.88, 0.892],
    description:
      "Cardano is a proof-of-stake blockchain platform that aims to enable changemakers, innovators and visionaries to bring about positive global change.",
  },
  {
    id: "avalanche",
    symbol: "AVAX",
    name: "Avalanche",
    color: "#E84142",
    price: 38.72,
    change24h: 3.15,
    change7d: 7.9,
    marketCap: 16100000000,
    volume24h: 780000000,
    circulatingSupply: 415000000,
    maxSupply: 720000000,
    rank: 7,
    sparkline: [34, 35, 36, 35.5, 37, 38, 38.72],
    description:
      "Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks.",
  },
  {
    id: "dogecoin",
    symbol: "DOGE",
    name: "Dogecoin",
    color: "#C2A633",
    price: 0.3812,
    change24h: -2.1,
    change7d: -3.5,
    marketCap: 55500000000,
    volume24h: 3100000000,
    circulatingSupply: 146000000000,
    maxSupply: null,
    rank: 8,
    sparkline: [0.41, 0.40, 0.39, 0.395, 0.385, 0.384, 0.381],
    description:
      "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer. It started as a meme but has grown into one of the most recognized cryptocurrencies.",
  },
  {
    id: "polkadot",
    symbol: "DOT",
    name: "Polkadot",
    color: "#E6007A",
    price: 7.82,
    change24h: 1.45,
    change7d: 2.8,
    marketCap: 11200000000,
    volume24h: 430000000,
    circulatingSupply: 1430000000,
    maxSupply: null,
    rank: 9,
    sparkline: [7.4, 7.5, 7.6, 7.55, 7.7, 7.75, 7.82],
    description:
      "Polkadot is an open-source sharding multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens.",
  },
  {
    id: "chainlink",
    symbol: "LINK",
    name: "Chainlink",
    color: "#2A5ADA",
    price: 18.94,
    change24h: 4.22,
    change7d: 8.5,
    marketCap: 11400000000,
    volume24h: 920000000,
    circulatingSupply: 600000000,
    maxSupply: 1000000000,
    rank: 10,
    sparkline: [16.5, 17, 17.5, 17.2, 18, 18.5, 18.94],
    description:
      "Chainlink is a decentralized oracle network that provides real-world data to smart contracts on the blockchain.",
  },
  {
    id: "litecoin",
    symbol: "LTC",
    name: "Litecoin",
    color: "#BFBBBB",
    price: 97.35,
    change24h: -0.78,
    change7d: -1.2,
    marketCap: 7200000000,
    volume24h: 610000000,
    circulatingSupply: 74000000,
    maxSupply: 84000000,
    rank: 11,
    sparkline: [100, 99, 98, 97.5, 98, 97.8, 97.35],
    description:
      "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world.",
  },
  {
    id: "uniswap",
    symbol: "UNI",
    name: "Uniswap",
    color: "#FF007A",
    price: 12.15,
    change24h: 5.33,
    change7d: 11.2,
    marketCap: 9200000000,
    volume24h: 380000000,
    circulatingSupply: 756000000,
    maxSupply: 1000000000,
    rank: 12,
    sparkline: [10.5, 11, 10.8, 11.2, 11.5, 11.9, 12.15],
    description:
      "Uniswap is a leading decentralized crypto trading protocol, known for its role in facilitating automated trading of decentralized finance tokens.",
  },
];

// Ticker data for the home page marquee
export const tickerData = cryptoAssets.slice(0, 8).map((a) => ({
  symbol: a.symbol,
  name: a.name,
  price: a.price,
  change24h: a.change24h,
}));

// Helper: format large numbers
export function formatMarketCap(num) {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
}

export function formatPrice(price) {
  if (price >= 1000) return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
}
