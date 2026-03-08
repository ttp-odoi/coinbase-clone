// Badge / pill component for categories, statuses, etc.
const variants = {
  default: "bg-gray-100 text-cb-gray",
  blue:    "bg-cb-blue-light text-cb-blue",
  green:   "bg-green-50 text-cb-green",
  red:     "bg-red-50 text-cb-red",
  yellow:  "bg-yellow-50 text-yellow-700",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}
