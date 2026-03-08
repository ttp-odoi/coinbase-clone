// Mock portfolio data for the authenticated Dashboard
export const portfolioHoldings = [
  { id: "bitcoin",  symbol: "BTC", name: "Bitcoin",  amount: 0.4821,  avgCost: 68000,  currentPrice: 95420.50, color: "#F7931A" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", amount: 3.152,   avgCost: 2800,   currentPrice: 3285.75,  color: "#627EEA" },
  { id: "solana",   symbol: "SOL", name: "Solana",   amount: 24.5,    avgCost: 160,    currentPrice: 192.40,   color: "#9945FF" },
  { id: "xrp",      symbol: "XRP", name: "XRP",      amount: 1200,    avgCost: 1.80,   currentPrice: 2.41,     color: "#346AA9" },
  { id: "usdc",     symbol: "USDC",name: "USD Coin", amount: 500,     avgCost: 1.00,   currentPrice: 1.00,     color: "#2775CA" },
];

export const recentTransactions = [
  { id: 1, type: "buy",     asset: "BTC",  amount: 0.05,   value: 4771.03,  date: "2026-03-07", status: "completed" },
  { id: 2, type: "sell",    asset: "ETH",  amount: 0.5,    value: 1642.88,  date: "2026-03-05", status: "completed" },
  { id: 3, type: "receive", asset: "SOL",  amount: 5,      value: 962.00,   date: "2026-03-03", status: "completed" },
  { id: 4, type: "buy",     asset: "XRP",  amount: 500,    value: 1205.00,  date: "2026-03-01", status: "completed" },
  { id: 5, type: "send",    asset: "USDC", amount: 200,    value: 200.00,   date: "2026-02-28", status: "completed" },
  { id: 6, type: "buy",     asset: "SOL",  amount: 10,     value: 1924.00,  date: "2026-02-25", status: "completed" },
];

// Compute total portfolio value
export function getTotalValue(holdings) {
  return holdings.reduce((sum, h) => sum + h.amount * h.currentPrice, 0);
}

// Compute total cost basis
export function getTotalCost(holdings) {
  return holdings.reduce((sum, h) => sum + h.amount * h.avgCost, 0);
}
