// Table row component for the Explore page asset list
import { useNavigate } from "react-router-dom";
import PriceSparkline from "./PriceSparkline";
import Button from "../common/Button";
import { formatPrice, formatMarketCap } from "../../data/cryptoData";

// Coin color dot / initial avatar
function CoinAvatar({ name, color, symbol }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
      style={{ backgroundColor: color }}
    >
      {symbol.slice(0, 3)}
    </div>
  );
}

export default function CryptoRow({ asset, rank }) {
  const navigate = useNavigate();
  const isPositive = asset.change24h >= 0;

  return (
    <tr
      className="border-b border-cb-border hover:bg-cb-surface cursor-pointer transition-colors"
      onClick={() => navigate(`/asset/${asset.id}`)}
    >
      {/* Rank */}
      <td className="py-4 pl-4 pr-2 text-cb-muted text-sm w-10 hidden sm:table-cell">
        {rank}
      </td>

      {/* Name */}
      <td className="py-4 px-3">
        <div className="flex items-center gap-3">
          <CoinAvatar name={asset.name} color={asset.color} symbol={asset.symbol} />
          <div>
            <p className="font-semibold text-cb-dark text-sm">{asset.name}</p>
            <p className="text-cb-muted text-xs">{asset.symbol}</p>
          </div>
        </div>
      </td>

      {/* Price */}
      <td className="py-4 px-3 text-right">
        <span className="font-semibold text-cb-dark text-sm">
          {formatPrice(asset.price)}
        </span>
      </td>

      {/* 24h change */}
      <td className="py-4 px-3 text-right hidden md:table-cell">
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-cb-green" : "text-cb-red"
          }`}
        >
          {isPositive ? "+" : ""}
          {asset.change24h.toFixed(2)}%
        </span>
      </td>

      {/* Market cap */}
      <td className="py-4 px-3 text-right hidden lg:table-cell">
        <span className="text-sm text-cb-gray">
          {formatMarketCap(asset.marketCap)}
        </span>
      </td>

      {/* 7-day sparkline */}
      <td className="py-4 px-3 hidden lg:table-cell">
        <PriceSparkline data={asset.sparkline} isPositive={asset.change7d >= 0} />
      </td>

      {/* Buy button */}
      <td
        className="py-4 pl-3 pr-4"
        onClick={(e) => {
          e.stopPropagation(); // don't trigger row nav
          navigate(`/asset/${asset.id}`);
        }}
      >
        <Button variant="secondary" size="sm">
          Buy
        </Button>
      </td>
    </tr>
  );
}
