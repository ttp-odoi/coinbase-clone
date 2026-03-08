// Card variant of a crypto asset — used on the Home page featured section
import { useNavigate } from "react-router-dom";
import PriceSparkline from "./PriceSparkline";
import { formatPrice } from "../../data/cryptoData";

function CoinAvatar({ color, symbol }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
      style={{ backgroundColor: color }}
    >
      {symbol.slice(0, 3)}
    </div>
  );
}

export default function CryptoCard({ asset }) {
  const navigate = useNavigate();
  const isPositive = asset.change24h >= 0;

  return (
    <div
      onClick={() => navigate(`/asset/${asset.id}`)}
      className="bg-white border border-cb-border rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5
                 transition-all duration-200 cursor-pointer flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CoinAvatar color={asset.color} symbol={asset.symbol} />
          <div>
            <p className="font-semibold text-cb-dark text-sm leading-tight">{asset.name}</p>
            <p className="text-cb-muted text-xs">{asset.symbol}</p>
          </div>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            isPositive
              ? "bg-green-50 text-cb-green"
              : "bg-red-50 text-cb-red"
          }`}
        >
          {isPositive ? "+" : ""}
          {asset.change24h.toFixed(2)}%
        </span>
      </div>

      {/* Sparkline */}
      <div className="flex justify-center">
        <PriceSparkline data={asset.sparkline} isPositive={isPositive} width={120} height={45} />
      </div>

      {/* Price */}
      <p className="font-bold text-cb-dark text-lg">
        {formatPrice(asset.price)}
      </p>
    </div>
  );
}
