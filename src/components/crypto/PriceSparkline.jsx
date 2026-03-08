// SVG sparkline chart used in crypto tables and cards
export default function PriceSparkline({ data = [], isPositive = true, width = 100, height = 40 }) {
  if (!data || data.length < 2) return null;

  const padding = 3;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  // Map data points to SVG coordinates
  const points = data.map((price, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: padding + (1 - (price - min) / range) * (height - padding * 2),
  }));

  // Build SVG path string
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");

  // Area fill path (close back to bottom)
  const areaD =
    pathD +
    ` L ${points[points.length - 1].x.toFixed(1)} ${(height - padding).toFixed(1)}` +
    ` L ${points[0].x.toFixed(1)} ${(height - padding).toFixed(1)} Z`;

  const color = isPositive ? "#05B169" : "#F05252";
  const fillColor = isPositive ? "#05B16915" : "#F0525215";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      {/* Area fill */}
      <path d={areaD} fill={fillColor} />
      {/* Line */}
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
